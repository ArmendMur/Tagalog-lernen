/**
 * KROATISCH VOKABELTRAINER - APP CORE
 * Speziell für Herkunftssprachler & flüssige Alltagskommunikation
 * Optimiert für iPhone 14 Pro & GitHub Pages
 */

class KroVocabApp {
  constructor() {
    this.storageKey = 'krovocab_user_data_v2';
    this.vocab = (typeof VOCAB_DATA !== 'undefined') ? [...VOCAB_DATA] : ((typeof window !== 'undefined' && window.VOCAB_DATA) ? [...window.VOCAB_DATA] : []);
    this.categories = (typeof CATEGORIES !== 'undefined') ? CATEGORIES : ((typeof window !== 'undefined' && window.CATEGORIES) ? window.CATEGORIES : {});
    this.currentCategory = 'all';
    this.currentView = 'swipe';
    
    // User State
    this.state = this.loadState();

    // Audio Synthesizer (Web Audio API)
    this.initAudioContext();

    // Flashcard State
    this.cardQueue = [];
    this.currentCardIndex = 0;
    this.isCardDragging = false;
    this.dragStartX = 0;
    this.dragStartY = 0;
    this.currentDragX = 0;
    this.currentDragY = 0;

    // Quiz State
    this.quizQueue = [];
    this.quizIndex = 0;
    this.quizScore = 0;
    this.quizTimer = null;
    this.quizTimeLeft = 15;

    // Match State
    this.matchTiles = [];
    this.selectedMatchTile = null;
    this.matchedPairsCount = 0;
    this.matchTimerInterval = null;
    this.matchSeconds = 0;

    // 1. Initialize DOM first
    this.initDOM();

    // 2. Check Daily Streak (safely updates header now)
    this.checkDailyStreak();

    // 3. Bind interactive events
    this.bindEvents();

    // 4. Render initial view
    this.renderCurrentView();
  }

  // --- STATE & LOCAL STORAGE ---
  loadState() {
    const today = new Date().toISOString().split('T')[0];
    const defaultState = {
      xp: 0,
      streak: 1,
      lastActiveDate: today,
      direction: 'hr-de', // 'hr-de' (Kroatisch -> Deutsch) oder 'de-hr' (Deutsch -> Kroatisch)
      dailyGoal: 10,
      dailyCount: 0,
      dailyGoalDate: today,
      dailyBonusAwarded: false,
      srs: {}, // { [id]: { level: 1|2|3, correct: 0, wrong: 0, lastSeen: timestamp } }
      favorites: [],
      customVocab: [],
      bestMatchTime: null
    };

    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...defaultState, ...parsed };
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
    return defaultState;
  }

  saveState() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.state));
    } catch (e) {
      console.warn('LocalStorage save failed:', e);
    }
    this.updateHeaderStats();
  }

  checkDailyStreak() {
    const today = new Date().toISOString().split('T')[0];
    const lastDate = this.state.lastActiveDate;

    if (!lastDate) {
      this.state.streak = 1;
      this.state.lastActiveDate = today;
    } else if (lastDate !== today) {
      const last = new Date(lastDate);
      const curr = new Date(today);
      const diffDays = Math.round((curr - last) / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        // Am nächsten Tag eingeloggt -> Streak erhöhen
        this.state.streak += 1;
      } else if (diffDays > 1) {
        // Streak gerissen
        this.state.streak = 1;
      }
      this.state.lastActiveDate = today;
    }

    // Tagesziel für den neuen Tag zurücksetzen
    if (!this.state.dailyGoalDate || this.state.dailyGoalDate !== today) {
      this.state.dailyCount = 0;
      this.state.dailyGoalDate = today;
      this.state.dailyBonusAwarded = false;
    }

    this.saveState();
  }

  incrementDailyProgress(amount = 1) {
    const today = new Date().toISOString().split('T')[0];
    if (this.state.dailyGoalDate !== today) {
      this.state.dailyCount = 0;
      this.state.dailyGoalDate = today;
      this.state.dailyBonusAwarded = false;
    }

    this.state.dailyCount = Math.min(99, (this.state.dailyCount || 0) + amount);

    // Belohnung bei Erreichen von 10 Wörtern
    if (this.state.dailyCount >= (this.state.dailyGoal || 10) && !this.state.dailyBonusAwarded) {
      this.state.dailyBonusAwarded = true;
      this.addXP(50);
      this.triggerDailyGoalCelebration();
    }

    this.saveState();
  }

  triggerDailyGoalCelebration() {
    this.playTone('xp');
    if (this.elements && this.elements.goalCelebrationOverlay) {
      this.elements.goalCelebrationOverlay.classList.add('active');
    }
  }

  addXP(amount) {
    this.state.xp += amount;
    this.saveState();
    this.playTone('xp');
  }

  // --- SOUND EFFECTS (Web Audio API - Zero latency, works offline) ---
  initAudioContext() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioCtx();
    } catch (e) {
      this.audioCtx = null;
    }
  }

  playTone(type) {
    if (!this.audioCtx) return;
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    const now = this.audioCtx.currentTime;

    if (type === 'know' || type === 'correct') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.12); // G5
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
      osc.start(now);
      osc.stop(now + 0.2);
    } else if (type === 'repeat' || type === 'wrong') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.linearRampToValueAtTime(200, now + 0.15);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
      osc.start(now);
      osc.stop(now + 0.2);
    } else if (type === 'flip') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, now);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === 'xp') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(659.25, now); // E5
      osc.frequency.exponentialRampToValueAtTime(987.77, now + 0.18); // B5
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.22);
      osc.start(now);
      osc.stop(now + 0.22);
    }
  }

  // --- KROATISCHE AUSTRACHE (Web Speech API) ---
  speakCroatian(text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'hr-HR';
    utterance.rate = 0.9; // Etwas natürlicher / langsamer

    // Check available voices for Croatian
    const voices = window.speechSynthesis.getVoices();
    const hrVoice = voices.find(v => v.lang.startsWith('hr') || v.lang.includes('HR'));
    if (hrVoice) {
      utterance.voice = hrVoice;
    }

    window.speechSynthesis.speak(utterance);
  }

  // --- DOM INITIALIZATION ---
  initDOM() {
    this.quizMode = 'blitz'; // 'blitz' oder 'spika'

    this.elements = {
      headerStreak: document.getElementById('header-streak-num'),
      headerXp: document.getElementById('header-xp-num'),
      headerGoalPill: document.getElementById('header-goal-pill'),
      headerGoalNum: document.getElementById('header-goal-num'),
      btnToggleDirection: document.getElementById('btn-toggle-direction'),
      dirFlagFrom: document.getElementById('dir-flag-from'),
      dirFlagTo: document.getElementById('dir-flag-to'),
      categoryBar: document.getElementById('category-filter-bar'),
      
      // Views
      views: {
        swipe: document.getElementById('view-swipe'),
        quiz: document.getElementById('view-quiz'),
        match: document.getElementById('view-match'),
        list: document.getElementById('view-list'),
        stats: document.getElementById('view-stats')
      },
      
      // Tabbar buttons
      tabButtons: document.querySelectorAll('.app-tabbar .tab-item'),
      
      // Swipe Deck
      swipeDeck: document.getElementById('swipe-card-deck'),
      btnRepeat: document.getElementById('btn-swipe-repeat'),
      btnFlip: document.getElementById('btn-swipe-flip'),
      btnKnow: document.getElementById('btn-swipe-know'),
      
      // Quiz & Spika
      btnModeBlitz: document.getElementById('btn-mode-blitz'),
      btnModeSpika: document.getElementById('btn-mode-spika'),
      quizBlitzSection: document.getElementById('quiz-blitz-section'),
      quizSpikaSection: document.getElementById('quiz-spika-section'),
      quizScore: document.getElementById('quiz-score-val'),
      quizTimerFill: document.getElementById('quiz-timer-fill'),
      quizWord: document.getElementById('quiz-word'),
      quizQuestionSub: document.getElementById('quiz-question-sub'),
      quizOptions: document.getElementById('quiz-options-grid'),
      spikaScenarioCat: document.getElementById('spika-scenario-cat'),
      spikaScoreVal: document.getElementById('spika-score-val'),
      spikaScenarioEmoji: document.getElementById('spika-scenario-emoji'),
      spikaScenarioTitle: document.getElementById('spika-scenario-title'),
      spikaScenarioDesc: document.getElementById('spika-scenario-desc'),
      spikaScenarioPrompt: document.getElementById('spika-scenario-prompt'),
      spikaOptionsList: document.getElementById('spika-options-list'),
      spikaFeedbackBox: document.getElementById('spika-feedback-box'),
      spikaFeedbackTitle: document.getElementById('spika-feedback-title'),
      spikaFeedbackText: document.getElementById('spika-feedback-text'),
      btnSpikaAudio: document.getElementById('btn-spika-audio'),
      btnSpikaNext: document.getElementById('btn-spika-next'),
      
      // Match
      matchGrid: document.getElementById('match-grid'),
      matchTimerText: document.getElementById('match-timer-val'),
      matchBestBadge: document.getElementById('match-best-badge'),
      btnRestartMatch: document.getElementById('btn-restart-match'),
      
      // List / Dictionary
      searchInput: document.getElementById('vocab-search-input'),
      vocabList: document.getElementById('vocab-scroll-list'),
      btnAddCustom: document.getElementById('btn-open-add-modal'),
      
      // Modal
      modalOverlay: document.getElementById('add-modal-overlay'),
      modalClose: document.getElementById('btn-modal-close'),
      modalForm: document.getElementById('add-vocab-form'),
      inputHr: document.getElementById('modal-input-hr'),
      inputDe: document.getElementById('modal-input-de'),
      inputExHr: document.getElementById('modal-input-ex-hr'),
      inputExDe: document.getElementById('modal-input-ex-de'),

      // Daily Goal Celebration Modal
      goalCelebrationOverlay: document.getElementById('goal-celebration-overlay'),
      btnCloseGoalCeleb: document.getElementById('btn-close-goal-celeb'),
      
      // Stats
      levelBadge: document.getElementById('stats-level-badge'),
      levelTitle: document.getElementById('stats-level-title'),
      levelDesc: document.getElementById('stats-level-desc'),
      xpBarFill: document.getElementById('stats-xp-bar-fill'),
      statsDailyBadge: document.getElementById('stats-daily-badge'),
      statsDailyBarFill: document.getElementById('stats-daily-bar-fill'),
      statsStreak: document.getElementById('stats-streak-days'),
      statsTotalWords: document.getElementById('stats-total-words'),
      statsMastered: document.getElementById('stats-mastered-words'),
      srsCountLvl1: document.getElementById('srs-count-lvl1'),
      srsCountLvl2: document.getElementById('srs-count-lvl2'),
      srsCountLvl3: document.getElementById('srs-count-lvl3')
    };

    this.renderCategoryBar();
    this.updateHeaderStats();
    this.updateDirectionUI();
  }

  // --- EVENTS BINDING ---
  bindEvents() {
    // Navigation Tabs
    this.elements.tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const viewName = btn.dataset.view;
        this.switchView(viewName);
      });
    });

    // Direction Toggle Button
    if (this.elements.btnToggleDirection) {
      this.elements.btnToggleDirection.addEventListener('click', () => {
        this.toggleDirection();
      });
    }

    // Quiz Modus Switcher (Blitz vs Spika)
    if (this.elements.btnModeBlitz && this.elements.btnModeSpika) {
      this.elements.btnModeBlitz.addEventListener('click', () => this.switchQuizMode('blitz'));
      this.elements.btnModeSpika.addEventListener('click', () => this.switchQuizMode('spika'));
    }

    // Daily Goal Celebration Close
    if (this.elements.btnCloseGoalCeleb) {
      this.elements.btnCloseGoalCeleb.addEventListener('click', () => {
        if (this.elements.goalCelebrationOverlay) {
          this.elements.goalCelebrationOverlay.classList.remove('active');
        }
      });
    }
    if (this.elements.goalCelebrationOverlay) {
      this.elements.goalCelebrationOverlay.addEventListener('click', (e) => {
        if (e.target === this.elements.goalCelebrationOverlay) {
          this.elements.goalCelebrationOverlay.classList.remove('active');
        }
      });
    }

    // Swipe buttons
    this.elements.btnRepeat.addEventListener('click', () => this.handleSwipeChoice(false));
    this.elements.btnKnow.addEventListener('click', () => this.handleSwipeChoice(true));
    this.elements.btnFlip.addEventListener('click', () => this.flipCurrentCard());

    // Search Input
    this.elements.searchInput.addEventListener('input', (e) => {
      this.renderDictionary(e.target.value);
    });

    // Modal Events
    this.elements.btnAddCustom.addEventListener('click', () => {
      this.elements.modalOverlay.classList.add('active');
    });

    this.elements.modalClose.addEventListener('click', () => {
      this.elements.modalOverlay.classList.remove('active');
    });

    this.elements.modalOverlay.addEventListener('click', (e) => {
      if (e.target === this.elements.modalOverlay) {
        this.elements.modalOverlay.classList.remove('active');
      }
    });

    this.elements.modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.addCustomVocabulary();
    });

    // Match restart
    this.elements.btnRestartMatch.addEventListener('click', () => {
      this.initMatchGame();
    });
  }

  // --- RENDER CATEGORY BAR ---
  renderCategoryBar() {
    if (!this.elements || !this.elements.categoryBar) return;
    this.elements.categoryBar.innerHTML = '';
    
    const cats = this.categories || (typeof CATEGORIES !== 'undefined' ? CATEGORIES : {});
    Object.entries(cats).forEach(([key, cat]) => {
      const chip = document.createElement('div');
      chip.className = `cat-chip ${this.currentCategory === key ? 'active' : ''}`;
      chip.innerHTML = `<span>${cat.icon}</span> <span>${cat.name}</span>`;
      chip.addEventListener('click', () => {
        this.currentCategory = key;
        document.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.onCategoryChanged();
      });
      this.elements.categoryBar.appendChild(chip);
    });
  }

  onCategoryChanged() {
    if (this.currentView === 'swipe') {
      this.initSwipeDeck();
    } else if (this.currentView === 'quiz') {
      this.startQuiz();
    } else if (this.currentView === 'match') {
      this.initMatchGame();
    } else if (this.currentView === 'list') {
      this.renderDictionary(this.elements.searchInput.value);
    }
  }

  // --- VIEW SWITCHER ---
  switchView(viewName) {
    this.currentView = viewName;

    // Update Tabs
    this.elements.tabButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === viewName);
    });

    // Update Views
    Object.entries(this.elements.views).forEach(([name, el]) => {
      el.classList.toggle('active-view', name === viewName);
    });

    this.renderCurrentView();
  }

  renderCurrentView() {
    if (this.currentView === 'swipe') {
      this.initSwipeDeck();
    } else if (this.currentView === 'quiz') {
      if (this.quizMode === 'spika') {
        this.startSpikaTrainer();
      } else {
        this.startQuiz();
      }
    } else if (this.currentView === 'match') {
      this.initMatchGame();
    } else if (this.currentView === 'list') {
      this.renderDictionary();
    } else if (this.currentView === 'stats') {
      this.renderStats();
    }
  }

  // Get active vocab pool based on category
  getActiveVocab() {
    const all = [...this.vocab, ...this.state.customVocab];
    if (this.currentCategory === 'fav') {
      return all.filter(item => this.state.favorites.includes(item.id));
    }
    if (this.currentCategory === 'all') return all;
    return all.filter(item => item.category === this.currentCategory);
  }

  // --- HEADER & STATS ---
  updateHeaderStats() {
    if (!this.elements) return;
    if (this.elements.headerStreak) {
      this.elements.headerStreak.textContent = this.state.streak;
    }
    if (this.elements.headerXp) {
      this.elements.headerXp.textContent = this.state.xp;
    }
    const goal = this.state.dailyGoal || 10;
    const count = this.state.dailyCount || 0;
    if (this.elements.headerGoalNum) {
      this.elements.headerGoalNum.textContent = `${count}/${goal}${count >= goal ? ' ✅' : ''}`;
    }
    if (this.elements.headerGoalPill) {
      this.elements.headerGoalPill.classList.toggle('completed', count >= goal);
    }
  }

  toggleDirection() {
    this.state.direction = (this.state.direction === 'hr-de') ? 'de-hr' : 'hr-de';
    this.saveState();
    this.playTone('flip');
    this.updateDirectionUI();

    if (this.currentView === 'swipe') {
      this.renderCurrentCard();
    } else if (this.currentView === 'quiz' && this.quizMode === 'blitz') {
      this.startQuiz();
    }
  }

  updateDirectionUI() {
    if (!this.elements || !this.elements.dirFlagFrom) return;
    const isHrDe = (this.state.direction !== 'de-hr');
    this.elements.dirFlagFrom.textContent = isHrDe ? '🇭🇷' : '🇩🇪';
    this.elements.dirFlagTo.textContent = isHrDe ? '🇩🇪' : '🇭🇷';
    if (this.elements.btnToggleDirection) {
      this.elements.btnToggleDirection.title = isHrDe 
        ? 'Richtung: Kroatisch ➜ Deutsch (Tippen zum Wechseln)' 
        : 'Richtung: Deutsch ➜ Kroatisch (Tippen zum Wechseln)';
    }
  }

  getLevelInfo(xp) {
    if (xp < 100) return { title: 'Početnik (Anfänger)', desc: 'Noch etwas Übung und die Wörter sitzen!', badge: '🌱', next: 100, min: 0 };
    if (xp < 300) return { title: 'Kafić-Gost (Stammkunde)', desc: 'Kaffee bestellen und Rechnungen zahlen klappt im Schlaf!', badge: '☕', next: 300, min: 100 };
    if (xp < 650) return { title: 'Pričalica (Plaudertasche)', desc: 'Du bringst spontane Sprüche und Reaktionen wie im Nu.', badge: '💬', next: 650, min: 300 };
    if (xp < 1200) return { title: 'Spika-Majstor (Slang-Profi)', desc: 'Echte kroatische Umgangssprache geht dir flüssig von den Lippen.', badge: '🔥', next: 1200, min: 650 };
    return { title: 'Kralj/ica Razgovora (Sprach-Legende)', desc: 'Du redest wie die Einheimischen an der Adria!', badge: '👑', next: xp + 500, min: 1200 };
  }

  renderStats() {
    const lvl = this.getLevelInfo(this.state.xp);
    if (this.elements.levelBadge) this.elements.levelBadge.textContent = lvl.badge;
    if (this.elements.levelTitle) this.elements.levelTitle.textContent = lvl.title;
    if (this.elements.levelDesc) this.elements.levelDesc.textContent = lvl.desc;
    if (this.elements.statsStreak) this.elements.statsStreak.textContent = this.state.streak;
    
    // Daily Mission Progress
    const goal = this.state.dailyGoal || 10;
    const count = this.state.dailyCount || 0;
    if (this.elements.statsDailyBadge) {
      this.elements.statsDailyBadge.textContent = `${count} / ${goal} erledigt ${count >= goal ? '✅' : ''}`;
    }
    if (this.elements.statsDailyBarFill) {
      const pct = Math.min(100, Math.round((count / goal) * 100));
      this.elements.statsDailyBarFill.style.width = `${pct}%`;
    }

    // Progress calculation
    const progress = Math.min(100, Math.max(0, ((this.state.xp - lvl.min) / (lvl.next - lvl.min)) * 100));
    if (this.elements.xpBarFill) this.elements.xpBarFill.style.width = `${progress}%`;

    const allVocab = [...this.vocab, ...this.state.customVocab];
    if (this.elements.statsTotalWords) this.elements.statsTotalWords.textContent = allVocab.length;

    // SRS Counts
    let lvl1 = 0, lvl2 = 0, lvl3 = 0;
    Object.values(this.state.srs).forEach(item => {
      if (item.level === 1) lvl1++;
      if (item.level === 2) lvl2++;
      if (item.level >= 3) lvl3++;
    });

    this.elements.srsCountLvl1.textContent = lvl1;
    this.elements.srsCountLvl2.textContent = lvl2;
    this.elements.srsCountLvl3.textContent = lvl3;
    this.elements.statsMastered.textContent = lvl3;
  }

  // =========================================================
  // 1. FLASHCARD SWIPE ENGINE (Tinder-Gesten für iPhone 14 Pro)
  // =========================================================
  initSwipeDeck() {
    const pool = this.getActiveVocab();
    // Shuffle array
    this.cardQueue = [...pool].sort(() => Math.random() - 0.5);
    this.renderCurrentCard();
  }

  renderCurrentCard() {
    this.elements.swipeDeck.innerHTML = '';

    if (this.cardQueue.length === 0) {
      this.elements.swipeDeck.innerHTML = `
        <div class="flashcard" style="display: flex; align-items: center; justify-content: center; text-align: center; padding: 24px;">
          <div style="font-size: 48px; margin-bottom: 12px;">🎉</div>
          <h2 style="font-size: 22px; font-weight: 800; color: #FFFFFF; margin-bottom: 8px;">Klasse gemacht!</h2>
          <p style="color: var(--text-secondary); font-size: 14px; margin-bottom: 20px;">Du hast alle Vokabeln dieser Kategorie durchgearbeitet.</p>
          <button class="modal-btn-submit" onclick="app.initSwipeDeck()" style="width: auto; padding: 12px 24px;">Nochmal mischen</button>
        </div>
      `;
      return;
    }

    const item = this.cardQueue[0];
    const cardEl = document.createElement('div');
    cardEl.className = 'flashcard';
    cardEl.id = 'active-card';

    const catName = (this.categories && this.categories[item.category]) ? this.categories[item.category].name : 'Allgemein';
    const isHrDe = (this.state.direction !== 'de-hr');

    cardEl.innerHTML = `
      <div class="stamp stamp-know">ZNAM ✅</div>
      <div class="stamp stamp-repeat">PONOVI ❌</div>
      
      <div class="card-inner">
        <!-- Vorderseite -->
        <div class="card-face card-front">
          <div class="card-top-bar">
            <span class="card-cat-tag">${catName}</span>
            ${isHrDe ? `<button class="card-audio-btn" title="Kroatisch anhören" id="card-audio-front">🔊</button>` : ''}
          </div>

          <div class="card-center-content">
            <span class="word-label">${isHrDe ? 'Hrvatski' : 'Njemački (Deutsch)'}</span>
            <div class="vocab-term">${isHrDe ? item.hr : item.de}</div>
            
            ${isHrDe && item.exampleHr ? `
              <div class="vocab-example-box">
                <div class="example-hr">"${item.exampleHr}"</div>
              </div>
            ` : ''}
          </div>

          <div class="card-footer-tip">
            <span>👆 Tippen zum Umdrehen · Wischen zum Lernen</span>
          </div>
        </div>

        <!-- Rückseite -->
        <div class="card-face card-back">
          <div class="card-top-bar">
            <span class="card-cat-tag">${catName}</span>
            <button class="card-audio-btn" id="card-audio-back" title="Kroatisch anhören">🔊</button>
          </div>

          <div class="card-center-content">
            <span class="word-label" style="color: #60A5FA;">${isHrDe ? 'Bedeutung (Deutsch)' : 'Hrvatski (Kroatisch)'}</span>
            <div class="vocab-term" style="font-size: 24px; color: #F8FAFC;">${isHrDe ? item.de : item.hr}</div>
            
            ${item.exampleHr ? `
              <div class="vocab-example-box" style="border-left-color: var(--accent-green);">
                <div class="example-hr">"${item.exampleHr}"</div>
                ${item.exampleDe ? `<div class="example-de">${item.exampleDe}</div>` : ''}
              </div>
            ` : ''}
          </div>

          <div class="card-footer-tip">
            <span>👈 Wiederholen · Gekonnt 👉</span>
          </div>
        </div>
      </div>
    `;

    this.elements.swipeDeck.appendChild(cardEl);
    this.activeCardEl = cardEl;

    // Audio Buttons (sprechen immer die kroatische Version)
    const audioFront = cardEl.querySelector('#card-audio-front');
    if (audioFront) {
      audioFront.addEventListener('click', (e) => {
        e.stopPropagation();
        this.speakCroatian(item.hr);
      });
    }

    const audioBack = cardEl.querySelector('#card-audio-back');
    if (audioBack) {
      audioBack.addEventListener('click', (e) => {
        e.stopPropagation();
        this.speakCroatian(item.hr);
      });
    }

    // Touch & Pointer Gesture Binding
    this.bindCardGestures(cardEl);
  }

  flipCurrentCard() {
    if (!this.activeCardEl) return;
    const now = Date.now();
    if (this.lastFlipTime && (now - this.lastFlipTime < 280)) return;
    this.lastFlipTime = now;
    this.activeCardEl.classList.toggle('is-flipped');
    this.playTone('flip');
  }

  bindCardGestures(card) {
    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let currentY = 0;
    let isDragging = false;
    let isSwiping = false;
    let startTime = 0;

    const stampKnow = card.querySelector('.stamp-know');
    const stampRepeat = card.querySelector('.stamp-repeat');

    // Direkter Klick / Tap auf die Karte zum Umdrehen
    card.addEventListener('click', (e) => {
      if (e.target.closest('button') || e.target.closest('.card-audio-btn')) return;
      if (!isSwiping) {
        this.flipCurrentCard();
      }
    });

    const onStart = (clientX, clientY) => {
      isDragging = true;
      isSwiping = false;
      startX = clientX;
      startY = clientY;
      currentX = 0;
      currentY = 0;
      startTime = Date.now();
      card.classList.add('dragging');
    };

    const onMove = (clientX, clientY) => {
      if (!isDragging) return;
      currentX = clientX - startX;
      currentY = clientY - startY;

      // Erst ab 18px Schwellenwert als Swipe werten (Touch-Slop Toleranz für Fingertipp)
      if (Math.hypot(currentX, currentY) > 18) {
        isSwiping = true;
      }

      if (isSwiping) {
        const rotate = currentX * 0.07;
        card.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) rotate(${rotate}deg)`;

        // Stempel Opacity
        if (currentX > 20) {
          const opacity = Math.min(1, (currentX - 20) / 90);
          if (stampKnow) stampKnow.style.opacity = opacity;
          if (stampRepeat) stampRepeat.style.opacity = 0;
        } else if (currentX < -20) {
          const opacity = Math.min(1, (-currentX - 20) / 90);
          if (stampRepeat) stampRepeat.style.opacity = opacity;
          if (stampKnow) stampKnow.style.opacity = 0;
        } else {
          if (stampKnow) stampKnow.style.opacity = 0;
          if (stampRepeat) stampRepeat.style.opacity = 0;
        }
      }
    };

    const onEnd = () => {
      if (!isDragging) return;
      isDragging = false;
      card.classList.remove('dragging');

      const duration = Date.now() - startTime;
      const distance = Math.hypot(currentX, currentY);

      // Wenn kein Swipe oder kurzer schneller Tap: Umdrehen!
      if (!isSwiping || (duration < 280 && distance < 25)) {
        this.flipCurrentCard();
        isSwiping = false;
        return;
      }

      const threshold = 80;
      if (currentX > threshold) {
        // Swiped Right -> ZNAM!
        this.animateCardExit(card, 1);
        this.handleSwipeChoice(true);
      } else if (currentX < -threshold) {
        // Swiped Left -> PONOVI!
        this.animateCardExit(card, -1);
        this.handleSwipeChoice(false);
      } else {
        // Zurück zur Mitte
        card.style.transform = '';
        if (stampKnow) stampKnow.style.opacity = 0;
        if (stampRepeat) stampRepeat.style.opacity = 0;
      }

      setTimeout(() => { isSwiping = false; }, 100);
    };

    // Touch events direkt auf der Karte
    card.addEventListener('touchstart', (e) => {
      if (e.target.closest('button') || e.target.closest('.card-audio-btn')) return;
      const touch = e.touches[0];
      onStart(touch.clientX, touch.clientY);
    }, { passive: true });

    card.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const touch = e.touches[0];
      onMove(touch.clientX, touch.clientY);
    }, { passive: true });

    card.addEventListener('touchend', () => {
      if (!isDragging) return;
      onEnd();
    }, { passive: true });

    card.addEventListener('touchcancel', () => {
      if (!isDragging) return;
      card.style.transform = '';
      isDragging = false;
      isSwiping = false;
    });

    // Mouse events für Desktop-Klicks
    card.addEventListener('mousedown', (e) => {
      if (e.target.closest('button') || e.target.closest('.card-audio-btn')) return;
      onStart(e.clientX, e.clientY);
    });

    const onMouseMove = (e) => {
      if (!isDragging) return;
      onMove(e.clientX, e.clientY);
    };

    const onMouseUp = () => {
      if (!isDragging) return;
      onEnd();
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  }

  animateCardExit(card, direction) {
    card.style.transition = 'transform 0.35s ease-out, opacity 0.3s ease-out';
    const xDist = direction > 0 ? 500 : -500;
    card.style.transform = `translate3d(${xDist}px, 0, 0) rotate(${direction * 30}deg)`;
    card.style.opacity = '0';
  }

  handleSwipeChoice(isKnown) {
    if (this.cardQueue.length === 0) return;

    if (this.activeCardEl) {
      this.animateCardExit(this.activeCardEl, isKnown ? 1 : -1);
    }

    const item = this.cardQueue.shift();

    // SRS Logic
    if (!this.state.srs[item.id]) {
      this.state.srs[item.id] = { level: 1, correct: 0, wrong: 0, lastSeen: Date.now() };
    }
    const srsData = this.state.srs[item.id];
    srsData.lastSeen = Date.now();

    if (isKnown) {
      srsData.correct++;
      srsData.level = Math.min(3, srsData.level + 1);
      this.playTone('know');
      this.addXP(15);
    } else {
      srsData.wrong++;
      srsData.level = 1;
      this.playTone('repeat');
      this.addXP(5);
      // Re-queue card to end of stack for repetition
      this.cardQueue.push(item);
    }

    this.incrementDailyProgress(1);
    this.saveState();

    // Render next card after transition
    setTimeout(() => {
      this.renderCurrentCard();
    }, 200);
  }

  // =========================================================
  // 2. BLITZ-QUIZ & SPIKA-TRAINER ENGINE
  // =========================================================
  switchQuizMode(mode) {
    this.quizMode = mode;
    if (this.elements.btnModeBlitz) this.elements.btnModeBlitz.classList.toggle('active', mode === 'blitz');
    if (this.elements.btnModeSpika) this.elements.btnModeSpika.classList.toggle('active', mode === 'spika');

    if (this.elements.quizBlitzSection) this.elements.quizBlitzSection.style.display = (mode === 'blitz') ? 'block' : 'none';
    if (this.elements.quizSpikaSection) this.elements.quizSpikaSection.style.display = (mode === 'spika') ? 'block' : 'none';

    if (mode === 'blitz') {
      this.startQuiz();
    } else {
      this.startSpikaTrainer();
    }
  }

  startQuiz() {
    clearInterval(this.quizTimer);
    const pool = this.getActiveVocab();
    if (pool.length < 4) {
      this.elements.quizWord.textContent = "Zu wenige Vokabeln für ein Quiz.";
      this.elements.quizOptions.innerHTML = '';
      return;
    }

    this.quizQueue = [...pool].sort(() => Math.random() - 0.5).slice(0, 10);
    this.quizIndex = 0;
    this.quizScore = 0;
    this.elements.quizScore.textContent = `${this.quizScore} Pkt`;
    this.renderQuizQuestion();
  }

  renderQuizQuestion() {
    clearInterval(this.quizTimer);
    if (this.quizIndex >= this.quizQueue.length) {
      this.showQuizSummary();
      return;
    }

    const currentItem = this.quizQueue[this.quizIndex];
    const isHrDe = (this.state.direction !== 'de-hr');

    if (this.elements.quizQuestionSub) {
      this.elements.quizQuestionSub.textContent = isHrDe 
        ? "Was bedeutet auf Deutsch?" 
        : "Kako se kaže na hrvatskom? (Kroatisch)";
    }
    this.elements.quizWord.textContent = isHrDe ? currentItem.hr : currentItem.de;

    // Pick 3 wrong options from all vocab
    const allVocab = [...this.vocab, ...this.state.customVocab];
    const distractors = allVocab
      .filter(v => v.id !== currentItem.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const options = [currentItem, ...distractors].sort(() => Math.random() - 0.5);

    this.elements.quizOptions.innerHTML = '';
    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option-btn';
      const optText = isHrDe ? opt.de : opt.hr;
      btn.innerHTML = `<span>${optText}</span> <span>➜</span>`;
      btn.addEventListener('click', () => this.handleQuizAnswer(btn, opt.id === currentItem.id, currentItem));
      this.elements.quizOptions.appendChild(btn);
    });

    // Start 15s Timer
    this.quizTimeLeft = 15;
    this.elements.quizTimerFill.style.width = '100%';
    const intervalTime = 100;
    const decrement = (intervalTime / (15 * 1000)) * 100;

    this.quizTimer = setInterval(() => {
      const currentWidth = parseFloat(this.elements.quizTimerFill.style.width) || 100;
      const newWidth = currentWidth - decrement;
      if (newWidth <= 0) {
        clearInterval(this.quizTimer);
        this.handleQuizAnswer(null, false, currentItem);
      } else {
        this.elements.quizTimerFill.style.width = `${newWidth}%`;
      }
    }, intervalTime);
  }

  handleQuizAnswer(clickedBtn, isCorrect, currentItem) {
    clearInterval(this.quizTimer);

    // Disable all options
    const allBtns = this.elements.quizOptions.querySelectorAll('.quiz-option-btn');
    allBtns.forEach(b => b.style.pointerEvents = 'none');

    const isHrDe = (this.state.direction !== 'de-hr');
    const targetText = isHrDe ? currentItem.de : currentItem.hr;

    this.incrementDailyProgress(1);

    if (isCorrect) {
      if (clickedBtn) clickedBtn.classList.add('correct');
      this.quizScore += 20;
      this.playTone('correct');
      this.addXP(20);
      if (!isHrDe) {
        this.speakCroatian(currentItem.hr);
      }
    } else {
      if (clickedBtn) clickedBtn.classList.add('wrong');
      this.playTone('wrong');
      // Highlight correct answer
      allBtns.forEach(b => {
        if (b.textContent.includes(targetText)) {
          b.classList.add('correct');
        }
      });
    }

    this.elements.quizScore.textContent = `${this.quizScore} Pkt`;

    setTimeout(() => {
      this.quizIndex++;
      this.renderQuizQuestion();
    }, 1100);
  }

  showQuizSummary() {
    this.elements.quizWord.textContent = `Quiz beendet! 🏆`;
    this.elements.quizOptions.innerHTML = `
      <div style="text-align: center; padding: 20px;">
        <div style="font-size: 36px; margin-bottom: 10px;">🌟</div>
        <div style="font-size: 20px; font-weight: 800; color: #FFFFFF; margin-bottom: 6px;">Du hast ${this.quizScore} Punkte erzielt!</div>
        <p style="color: var(--text-secondary); font-size: 14px; margin-bottom: 20px;">Super Leistung für deinen Wortschatz!</p>
        <button class="modal-btn-submit" onclick="app.startQuiz()">Noch eine Runde</button>
      </div>
    `;
  }

  // --- SPIKA-TRAINER ENGINE (Echte Konversation & Chunks) ---
  startSpikaTrainer() {
    const dialogs = (typeof SPIKA_DIALOGS !== 'undefined') ? SPIKA_DIALOGS : (window.SPIKA_DIALOGS || []);
    if (!dialogs || dialogs.length === 0) return;

    this.spikaQueue = [...dialogs].sort(() => Math.random() - 0.5);
    this.spikaIndex = 0;
    this.spikaScore = 0;
    if (this.elements.spikaScoreVal) this.elements.spikaScoreVal.textContent = `${this.spikaScore} Pkt`;
    this.renderSpikaScenario();
  }

  renderSpikaScenario() {
    if (this.spikaIndex >= this.spikaQueue.length) {
      if (this.elements.spikaScenarioEmoji) this.elements.spikaScenarioEmoji.textContent = "🏆";
      if (this.elements.spikaScenarioTitle) this.elements.spikaScenarioTitle.textContent = "Spika-Trainer gemeistert!";
      if (this.elements.spikaScenarioDesc) this.elements.spikaScenarioDesc.textContent = `Du hast alle 12 Alltagssituationen gemeistert und ${this.spikaScore} Punkte erzielt! Dein Gespür für authentische kroatische Reaktionen ist exzellent.`;
      if (this.elements.spikaScenarioPrompt) this.elements.spikaScenarioPrompt.textContent = "";
      if (this.elements.spikaOptionsList) {
        this.elements.spikaOptionsList.innerHTML = `
          <button class="modal-btn-submit" onclick="app.startSpikaTrainer()" style="margin-top: 10px;">Nochmal von vorne üben</button>
        `;
      }
      if (this.elements.spikaFeedbackBox) this.elements.spikaFeedbackBox.style.display = 'none';
      return;
    }

    const scenario = this.spikaQueue[this.spikaIndex];
    this.spikaActiveScenario = scenario;

    if (this.elements.spikaScenarioCat) this.elements.spikaScenarioCat.textContent = `${scenario.emoji || '💬'} ${scenario.category.toUpperCase()}`;
    if (this.elements.spikaScenarioEmoji) this.elements.spikaScenarioEmoji.textContent = scenario.emoji || '💬';
    if (this.elements.spikaScenarioTitle) this.elements.spikaScenarioTitle.textContent = scenario.title;
    if (this.elements.spikaScenarioDesc) this.elements.spikaScenarioDesc.textContent = scenario.situation;
    if (this.elements.spikaScenarioPrompt) this.elements.spikaScenarioPrompt.textContent = scenario.prompt;

    if (this.elements.spikaFeedbackBox) this.elements.spikaFeedbackBox.style.display = 'none';

    // Shuffle options
    const shuffledOptions = [...scenario.options].sort(() => Math.random() - 0.5);
    this.elements.spikaOptionsList.innerHTML = '';

    shuffledOptions.forEach(opt => {
      const card = document.createElement('div');
      card.className = 'spika-option-card';
      card.textContent = opt.text;
      card.addEventListener('click', () => this.handleSpikaChoice(opt, card, scenario));
      this.elements.spikaOptionsList.appendChild(card);
    });
  }

  handleSpikaChoice(chosenOpt, clickedCard, scenario) {
    const allCards = this.elements.spikaOptionsList.querySelectorAll('.spika-option-card');
    allCards.forEach(c => c.style.pointerEvents = 'none');

    this.incrementDailyProgress(1);

    if (chosenOpt.isCorrect) {
      clickedCard.classList.add('correct');
      this.spikaScore += 25;
      this.playTone('correct');
      this.addXP(25);
    } else {
      clickedCard.classList.add('wrong');
      this.playTone('wrong');
      allCards.forEach(c => {
        const isCorrectCard = scenario.options.find(o => o.isCorrect && o.text === c.textContent);
        if (isCorrectCard) c.classList.add('correct');
      });
    }

    if (this.elements.spikaScoreVal) this.elements.spikaScoreVal.textContent = `${this.spikaScore} Pkt`;

    // Zeige Feedback Box mit Spika-Tipp
    if (this.elements.spikaFeedbackBox) {
      this.elements.spikaFeedbackBox.style.display = 'block';
      this.elements.spikaFeedbackTitle.textContent = chosenOpt.isCorrect ? '✅ Odlično! Spika-Tipp:' : '💡 Spika-Tipp:';
      this.elements.spikaFeedbackText.textContent = chosenOpt.feedback;

      // Audio Button spricht die korrekte kroatische Formulierung
      const correctOpt = scenario.options.find(o => o.isCorrect);
      const cleanSpeech = correctOpt ? correctOpt.text.replace(/[»«"]/g, '').trim() : '';
      if (this.elements.btnSpikaAudio) {
        this.elements.btnSpikaAudio.onclick = () => this.speakCroatian(cleanSpeech);
      }

      if (this.elements.btnSpikaNext) {
        this.elements.btnSpikaNext.onclick = () => {
          this.spikaIndex++;
          this.renderSpikaScenario();
        };
      }
    }
  }

  // =========================================================
  // 3. WORT-MATCH ENGINE (Paare verbinden)
  // =========================================================
  initMatchGame() {
    clearInterval(this.matchTimerInterval);
    this.matchSeconds = 0;
    this.matchedPairsCount = 0;
    this.selectedMatchTile = null;
    this.elements.matchTimerText.textContent = '00:00';

    // Bestzeit Badge aktualisieren
    if (this.elements.matchBestBadge) {
      if (this.state.bestMatchTime) {
        const bm = String(Math.floor(this.state.bestMatchTime / 60)).padStart(2, '0');
        const bs = String(this.state.bestMatchTime % 60).padStart(2, '0');
        this.elements.matchBestBadge.textContent = `🏆 Best: ${bm}:${bs}`;
      } else {
        this.elements.matchBestBadge.textContent = `🏆 Best: --:--`;
      }
    }

    const pool = this.getActiveVocab();
    const pairsCount = 6;
    const selectedVocab = [...pool].sort(() => Math.random() - 0.5).slice(0, pairsCount);

    const tiles = [];
    selectedVocab.forEach(item => {
      tiles.push({ id: item.id, type: 'hr', text: item.hr, matchId: item.id });
      tiles.push({ id: item.id, type: 'de', text: item.de, matchId: item.id });
    });

    // Shuffle tiles
    this.matchTiles = tiles.sort(() => Math.random() - 0.5);
    this.renderMatchGrid();

    // Timer start
    this.matchTimerInterval = setInterval(() => {
      this.matchSeconds++;
      const mins = String(Math.floor(this.matchSeconds / 60)).padStart(2, '0');
      const secs = String(this.matchSeconds % 60).padStart(2, '0');
      this.elements.matchTimerText.textContent = `${mins}:${secs}`;
    }, 1000);
  }

  renderMatchGrid() {
    this.elements.matchGrid.innerHTML = '';
    this.matchTiles.forEach((tile, index) => {
      const el = document.createElement('div');
      el.className = 'match-tile';
      el.textContent = tile.text;
      el.dataset.index = index;
      el.addEventListener('click', () => this.handleMatchTileClick(el, tile));
      this.elements.matchGrid.appendChild(el);
    });
  }

  handleMatchTileClick(el, tile) {
    if (el.classList.contains('matched')) return;

    // 1. Wenn die gleiche Kachel nochmal angetippt wird -> Abwählen! (Deselect)
    if (this.selectedMatchTile && this.selectedMatchTile.el === el) {
      el.classList.remove('selected');
      this.selectedMatchTile = null;
      this.playTone('flip');
      return;
    }

    // 2. Wenn eine andere Kachel der gleichen Sprache angetippt wird -> Auswahl umschalten
    if (this.selectedMatchTile && this.selectedMatchTile.tile.type === tile.type) {
      this.selectedMatchTile.el.classList.remove('selected');
      this.selectedMatchTile = { el, tile };
      el.classList.add('selected');
      this.playTone('flip');
      return;
    }

    if (!this.selectedMatchTile) {
      // Erste Kachel ausgewählt
      this.selectedMatchTile = { el, tile };
      el.classList.add('selected');
      this.playTone('flip');
    } else {
      // Zweite Kachel ausgewählt
      const first = this.selectedMatchTile;
      
      if (first.tile.type !== tile.type && first.tile.matchId === tile.matchId) {
        // Correct Pair!
        first.el.classList.remove('selected');
        first.el.classList.add('matched');
        el.classList.add('matched');
        this.selectedMatchTile = null;
        this.matchedPairsCount++;
        this.playTone('correct');
        this.addXP(25);

        if (tile.type === 'hr') this.speakCroatian(tile.text);
        else this.speakCroatian(first.tile.text);

        if (this.matchedPairsCount === 6) {
          clearInterval(this.matchTimerInterval);
          const timeSpent = this.matchSeconds;
          let isRecord = false;
          if (!this.state.bestMatchTime || timeSpent < this.state.bestMatchTime) {
            this.state.bestMatchTime = timeSpent;
            isRecord = true;
          }
          this.incrementDailyProgress(2);
          this.saveState();
          setTimeout(() => {
            const timeStr = this.elements.matchTimerText.textContent;
            const msg = isRecord 
              ? `🏆 NEUER REKORD! Alle Paare in ${timeStr} gelöst! +150 XP!` 
              : `Fantastično! 🎉 Alle Paare in ${timeStr} gefunden! +150 XP!`;
            alert(msg);
            this.addXP(150);
            this.initMatchGame();
          }, 450);
        }
      } else {
        // Wrong Pair
        el.classList.add('selected');
        this.playTone('wrong');
        setTimeout(() => {
          first.el.classList.remove('selected');
          el.classList.remove('selected');
          this.selectedMatchTile = null;
        }, 500);
      }
    }
  }

  // =========================================================
  // 4. WÖRTERBUCH & SUCHE
  // =========================================================
  renderDictionary(filterQuery = '') {
    const pool = this.getActiveVocab();
    const query = filterQuery.toLowerCase().trim();

    const filtered = pool.filter(item => {
      return item.hr.toLowerCase().includes(query) ||
             item.de.toLowerCase().includes(query) ||
             (item.exampleHr && item.exampleHr.toLowerCase().includes(query));
    });

    this.elements.vocabList.innerHTML = '';

    if (filtered.length === 0) {
      this.elements.vocabList.innerHTML = `
        <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
          Keine Vokabeln gefunden.
        </div>
      `;
      return;
    }

    filtered.forEach(item => {
      const row = document.createElement('div');
      row.className = 'vocab-row-card';
      
      const isFav = this.state.favorites.includes(item.id);
      const catName = (this.categories && this.categories[item.category]) ? this.categories[item.category].name : 'Eigene';

      row.innerHTML = `
        <div class="vocab-row-info">
          <div class="vocab-row-hr">${item.hr}</div>
          <div class="vocab-row-de">${item.de}</div>
          <div class="vocab-row-cat">${catName} ${item.exampleHr ? `· "${item.exampleHr}"` : ''}</div>
        </div>
        <div class="vocab-row-actions">
          <button class="row-action-btn audio-btn" title="Anhören">🔊</button>
          <button class="row-action-btn star ${isFav ? 'active' : ''}" title="Favorit">⭐</button>
        </div>
      `;

      // Audio
      row.querySelector('.audio-btn').addEventListener('click', () => {
        this.speakCroatian(item.hr);
      });

      // Favorite
      const starBtn = row.querySelector('.star');
      starBtn.addEventListener('click', () => {
        if (this.state.favorites.includes(item.id)) {
          this.state.favorites = this.state.favorites.filter(id => id !== item.id);
          starBtn.classList.remove('active');
        } else {
          this.state.favorites.push(item.id);
          starBtn.classList.add('active');
        }
        this.saveState();
      });

      this.elements.vocabList.appendChild(row);
    });
  }

  addCustomVocabulary() {
    const hr = this.elements.inputHr.value.trim();
    const de = this.elements.inputDe.value.trim();
    const exHr = this.elements.inputExHr.value.trim();
    const exDe = this.elements.inputExDe.value.trim();

    if (!hr || !de) return;

    const newItem = {
      id: Date.now(),
      hr,
      de,
      category: 'slang',
      exampleHr: exHr,
      exampleDe: exDe,
      isCustom: true
    };

    this.state.customVocab.push(newItem);
    this.saveState();

    // Reset Form & Close
    this.elements.modalForm.reset();
    this.elements.modalOverlay.classList.remove('active');
    this.addXP(30);

    alert(`Vokabel "${hr}" erfolgreich hinzugefügt! +30 XP!`);
    if (this.currentView === 'list') {
      this.renderDictionary();
    }
  }
}

// Start app when DOM is ready (or immediately if already loaded)
let app;
function initKroVocabApp() {
  if (!app) {
    app = new KroVocabApp();
    if (typeof window !== 'undefined') {
      window.app = app;
    }
  }
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initKroVocabApp);
  } else {
    initKroVocabApp();
  }
}

