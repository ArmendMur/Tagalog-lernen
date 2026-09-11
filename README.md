# 🇭🇷 KroVocab · Kroatisch Vokabeltrainer (iPhone 14 Pro & GitHub Pages)

Eine moderne, schnelle und speziell für **Herkunftssprachler (Muttersprachler)** entwickelte Web-App zum Lernen und Reaktivieren von alltagstauglichem kroatischem Wortschatz, Slang und Konversations-Chunks.

---

## 🎯 Warum KroVocab für Herkunftssprachler?
Wenn Kroatisch deine Muttersprache ist, hast du die Grammatik und das Sprachgefühl bereits im Blut. Was oft fehlt, ist der **aktive Wortschatz**, treffende Ausdrücke im Café, moderne Umgangssprache und das schnelle Abrufen von Alltags-Phrasen beim Sprechen mit Familie, Freunden oder Einheimischen.

- **0 % Grammatiktabellen, 100 % Kommunikation**
- **Über 120+ handverlesene Vokabeln & Redewendungen** mit authentischen Beispielsätzen
- **Themen**: *Kafić & Ausgehen*, *Slang & Spika*, *Smalltalk & Reaktionen*, *Treffen & Pläne*, *Alltag & Unterwegs*, *Gefühle* und *Wichtige Verben*
- **Eigene Vokabeln hinzufügen**: Du hörst ein neues Wort? Trage es direkt in der App ein!

---

## 📱 Features (Optimiert für iPhone 14 Pro)

1. **Karten-Swipe (Tinder-Gesten)**:
   - Tippen dreht die Karte 3D um (zeigt Bedeutung & Beispielsatz).
   - Nach **Rechts wischen (ZNAM ✅)** für gekonnte Vokabeln (+15 XP, Level-Up im Spaced Repetition System).
   - Nach **Links wischen (PONOVI ❌)** zum Wiederholen (+5 XP, Karte wird hinten eingereiht).
2. **Blitz-Quiz**: 10 rasante Fragen gegen die Uhr mit Sofort-Feedback und Punktejagd.
3. **Wort-Match**: 6 kroatisch-deutsche Wortpaare auf Zeit antippen und matchen.
4. **Wörterbuch & Suchfunktion**: Schnelle Echtzeit-Suche, Favoriten-Sternchen ⭐ und Audio-Aussprache.
5. **Erfolge & Streak-Tracking**:
   - 🔥 **Tages-Streak**: Belohnt tägliches Dranbleiben.
   - 🏆 **Level-System**: Vom *Početnik* über *Kafić-Gost* bis zur *Kralj/ica Razgovora*.
   - 🧠 **SRS-Lernboxen**: Speichert Fortschritte direkt und sicher im `localStorage` deines iPhones.
6. **Audio-Aussprache**: Kroatische Sprachausgabe direkt auf Knopfdruck via Web Speech API.
7. **Offline-Fähig (PWA)**: Dank Service Worker funktioniert die App auch im Flugzeug oder am Strand in Kroatien ohne Netz!

---

## 🚀 In 3 Schritten auf GitHub Pages hosten

Die App besteht aus reinem, modernem Web-Standard (HTML5, CSS3, ES6 JavaScript) – **kein Build-Schritt, kein Node-Server nötig!**

### Schritt 1: GitHub Repository anlegen
1. Gehe auf [GitHub.com](https://github.com) und erstelle ein neues Repository (z.B. `kroatisch-lernen`).
2. Wähle **Public** aus.

### Schritt 2: Code hochladen (Git)
Führe in diesem Ordner folgende Befehle im Terminal/PowerShell aus:

```bash
git init
git add .
git commit -m "Init KroVocab App"
git branch -M main
git remote add origin https://github.com/DEIN_BENUTZERNAME/kroatisch-lernen.git
git push -u origin main
```

*(Alternativ kannst du die Dateien auch einfach per Drag & Drop auf GitHub im Webbrowser hochladen).*

### Schritt 3: GitHub Pages aktivieren
1. Öffne dein Repository auf GitHub.
2. Gehe auf **Settings** (oben rechts) ➔ **Pages** (in der linken Seitenleiste).
3. Wähle unter **Build and deployment** / **Branch**:
   - Branch: `main`
   - Ordner: `/ (root)`
4. Klicke auf **Save**.
5. Nach ca. 1 Minute ist deine App unter `https://DEIN_BENUTZERNAME.github.io/kroatisch-lernen/` live!

---

## 📲 Als Vollbild-App auf dem iPhone 14 Pro installieren

1. Öffne die GitHub-Pages-URL in **Safari** auf deinem iPhone 14 Pro.
2. Tippe unten in Safari auf das **Teilen-Symbol** (Viereck mit Pfeil nach oben).
3. Scrolle etwas nach unten und wähle **"Zum Home-Bildschirm"** (Add to Home Screen).
4. Tippe oben rechts auf **"Hinzufügen"**.
5. **Fertig!** Du hast jetzt ein eigenes App-Icon auf deinem Home-Screen. Wenn du es antippst, öffnet sich KroVocab als vollwertige Vollbild-App mit Dynamic-Island-Anpassung und ohne störende Browserleisten.
