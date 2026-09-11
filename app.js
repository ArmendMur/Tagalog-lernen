/**
 * KROATISCH VOKABELTRAINER - APP CORE
 * Speziell für Herkunftssprachler & flüssige Alltagskommunikation
 * Optimiert für iPhone 14 Pro & GitHub Pages
 */

class KroVocabApp {
  constructor() {
    this.storageKey = 'krovocab_user_data_v2';
    this.vocab = [...VOCAB_DATA];
    this.currentCategory = 'all';
    this.currentView = 'swipe';
    
    // User State
    this.state = this.loadState();
    this.checkDailyStreak();

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

    this.initDOM();
    this.bindEvents();
    this.renderCurrentView();
  }

  // --- STATE & LOCAL STORAGE ---
  loadState() {
    const defaultState = {
      xp: 0,
      streak: 1,
      lastActiveDate: new Date().toISOString().split('T')[0],
      srs: {}, // { [id]: { level: 1|2|3, correct: 0, wrong: 0, lastSeen: timestamp } }
      favorites: [],
      customVocab: []
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
        // Logged in next day -> increase streak
        this.state.streak += 1;
      } else if (diffDays > 1) {
        // Streak broken
        this.state.streak = 1;
      }
      this.state.lastActiveDate = today;
    }
    this.saveState();
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
    this.elements = {
      headerStreak: document.getElementById('header-streak-num'),
      headerXp: document.getElementById('header-xp-num'),
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
      
      // Quiz
      quizScore: document.getElementById('quiz-score-val'),
      quizTimerFill: document.getElementById('quiz-timer-fill'),
      quizWord: document.getElementById('quiz-word'),
      quizOptions: document.getElementById('quiz-options-grid'),
      
      // Match
      matchGrid: document.getElementById('match-grid'),
      matchTimerText: document.getElementById('match-timer-val'),
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
      
      // Stats
      levelBadge: document.getElementById('stats-level-badge'),
      levelTitle: document.getElementById('stats-level-title'),
      levelDesc: document.getElementById('stats-level-desc'),
      xpBarFill: document.getElementById('stats-xp-bar-fill'),
      statsStreak: document.getElementById('stats-streak-days'),
      statsTotalWords: document.getElementById('stats-total-words'),
      statsMastered: document.getElementById('stats-mastered-words'),
      srsCountLvl1: document.getElementById('srs-count-lvl1'),
      srsCountLvl2: document.getElementById('srs-count-lvl2'),
      srsCountLvl3: document.getElementById('srs-count-lvl3')
    };

    this.renderCategoryBar();
    this.updateHeaderStats();
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
    this.elements.categoryBar.innerHTML = '';
    
    Object.entries(CATEGORIES).forEach(([key, cat]) => {
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
      this.startQuiz();
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
    if (this.currentCategory === 'all') return all;
    return all.filter(item => item.category === this.currentCategory);
  }

  // --- HEADER & STATS ---
  updateHeaderStats() {
    if (this.elements.headerStreak) {
      this.elements.headerStreak.textContent = this.state.streak;
    }
    if (this.elements.headerXp) {
      this.elements.headerXp.textContent = this.state.xp;
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

    const catName = CATEGORIES[item.category] ? CATEGORIES[item.category].name : 'Allgemein';

    cardEl.innerHTML = `
      <div class="stamp stamp-know">ZNAM ✅</div>
      <div class="stamp stamp-repeat">PONOVI ❌</div>
      
      <div class="card-inner">
        <!-- Vorderseite: Kroatisch -->
        <div class="card-face card-front">
          <div class="card-top-bar">
            <span class="card-cat-tag">${catName}</span>
            <button class="card-audio-btn" title="Kroatisch anhören" id="card-audio-front">🔊</button>
          </div>

          <div class="card-center-content">
            <span class="word-label">Hrvatski</span>
            <div class="vocab-term">${item.hr}</div>
            
            ${item.exampleHr ? `
              <div class="vocab-example-box">
                <div class="example-hr">"${item.exampleHr}"</div>
              </div>
            ` : ''}
          </div>

          <div class="card-footer-tip">
            <span>👆 Tippen zum Umdrehen · Wischen zum Lernen</span>
          </div>
        </div>

        <!-- Rückseite: Deutsch -->
        <div class="card-face card-back">
          <div class="card-top-bar">
            <span class="card-cat-tag">${catName}</span>
            <button class="card-audio-btn" id="card-audio-back">🔊</button>
          </div>

          <div class="card-center-content">
            <span class="word-label" style="color: #60A5FA;">Bedeutung (Deutsch)</span>
            <div class="vocab-term" style="font-size: 24px; color: #F8FAFC;">${item.de}</div>
            
            ${item.exampleDe ? `
              <div class="vocab-example-box" style="border-left-color: var(--accent-green);">
                <div class="example-hr">"${item.exampleHr}"</div>
                <div class="example-de">${item.exampleDe}</div>
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

    // Audio Buttons
    cardEl.querySelector('#card-audio-front').addEventListener('click', (e) => {
      e.stopPropagation();
      this.speakCroatian(item.hr);
    });
    cardEl.querySelector('#card-audio-back').addEventListener('click', (e) => {
      e.stopPropagation();
      this.speakCroatian(item.hr);
    });

    // Touch & Pointer Gesture Binding
    this.bindCardGestures(cardEl);
  }

  flipCurrentCard() {
    if (!this.activeCardEl) return;
    this.activeCardEl.classList.toggle('is-flipped');
    this.playTone('flip');
  }

  bindCardGestures(card) {
    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let currentY = 0;
    let isDragging = false;
    let hasMoved = false;

    const stampKnow = card.querySelector('.stamp-know');
    const stampRepeat = card.querySelector('.stamp-repeat');

    const onStart = (clientX, clientY) => {
      isDragging = true;
      hasMoved = false;
      startX = clientX;
      startY = clientY;
      card.classList.add('dragging');
    };

    const onMove = (clientX, clientY) => {
      if (!isDragging) return;
      currentX = clientX - startX;
      currentY = clientY - startY;

      if (Math.abs(currentX) > 8 || Math.abs(currentY) > 8) {
        hasMoved = true;
      }

      const rotate = currentX * 0.07;
      card.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) rotate(${rotate}deg)`;

      // Stamp opacity based on swipe direction
      if (currentX > 20) {
        const opacity = Math.min(1, (currentX - 20) / 100);
        stampKnow.style.opacity = opacity;
        stampRepeat.style.opacity = 0;
      } else if (currentX < -20) {
        const opacity = Math.min(1, (-currentX - 20) / 100);
        stampRepeat.style.opacity = opacity;
        stampKnow.style.opacity = 0;
      } else {
        stampKnow.style.opacity = 0;
        stampRepeat.style.opacity = 0;
      }
    };

    const onEnd = () => {
      if (!isDragging) return;
      isDragging = false;
      card.classList.remove('dragging');

      if (!hasMoved) {
        // Simple tap -> Flip card!
        this.flipCurrentCard();
        return;
      }

      const threshold = 90;
      if (currentX > threshold) {
        // Swiped Right -> ZNAM!
        this.animateCardExit(card, 1);
        this.handleSwipeChoice(true);
      } else if (currentX < -threshold) {
        // Swiped Left -> PONOVI!
        this.animateCardExit(card, -1);
        this.handleSwipeChoice(false);
      } else {
        // Reset to center
        card.style.transform = '';
        stampKnow.style.opacity = 0;
        stampRepeat.style.opacity = 0;
      }
    };

    // Touch events for iPhone Safari
    card.addEventListener('touchstart', (e) => {
      const touch = e.touches[0];
      onStart(touch.clientX, touch.clientY);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const touch = e.touches[0];
      onMove(touch.clientX, touch.clientY);
    }, { passive: true });

    window.addEventListener('touchend', () => {
      onEnd();
    }, { passive: true });

    // Mouse events for Desktop testing
    card.addEventListener('mousedown', (e) => {
      onStart(e.clientX, e.clientY);
    });

    window.addEventListener('mousemove', (e) => {
      onMove(e.clientX, e.clientY);
    });

    window.addEventListener('mouseup', () => {
      onEnd();
    });
  }

  animateCardExit(card, direction) {
    card.style.transition = 'transform 0.35s ease-out, opacity 0.3s ease-out';
    const xDist = direction > 0 ? 500 : -500;
    card.style.transform = `translate3d(${xDist}px, 0, 0) rotate(${direction * 30}deg)`;
    card.style.opacity = '0';
  }

  handleSwipeChoice(isKnown) {
    if (this.cardQueue.length === 0) return;
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

    this.saveState();

    // Render next card after transition
    setTimeout(() => {
      this.renderCurrentCard();
    }, 200);
  }

  // =========================================================
  // 2. BLITZ-QUIZ ENGINE
  // =========================================================
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
    this.elements.quizWord.textContent = currentItem.hr;

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
      btn.innerHTML = `<span>${opt.de}</span> <span>➜</span>`;
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

    if (isCorrect) {
      if (clickedBtn) clickedBtn.classList.add('correct');
      this.quizScore += 20;
      this.playTone('correct');
      this.addXP(20);
    } else {
      if (clickedBtn) clickedBtn.classList.add('wrong');
      this.playTone('wrong');
      // Highlight correct answer
      allBtns.forEach(b => {
        if (b.textContent.includes(currentItem.de)) {
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

  // =========================================================
  // 3. WORT-MATCH ENGINE (Paare verbinden)
  // =========================================================
  initMatchGame() {
    clearInterval(this.matchTimerInterval);
    this.matchSeconds = 0;
    this.matchedPairsCount = 0;
    this.selectedMatchTile = null;
    this.elements.matchTimerText.textContent = '00:00';

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
    if (el.classList.contains('matched') || el.classList.contains('selected')) return;

    if (!this.selectedMatchTile) {
      // First tile selected
      this.selectedMatchTile = { el, tile };
      el.classList.add('selected');
      this.playTone('flip');
    } else {
      // Second tile selected
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
          setTimeout(() => {
            alert(`Fantastično! 🎉 Alle Paare in ${this.elements.matchTimerText.textContent} gefunden! +150 XP!`);
            this.addXP(150);
            this.initMatchGame();
          }, 500);
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
      const catName = CATEGORIES[item.category] ? CATEGORIES[item.category].name : 'Eigene';

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

// Start app when DOM is ready
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new KroVocabApp();
});
