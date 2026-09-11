# 🇵🇭 TagalogVocab · Tagalog & Filipino Vokabeltrainer (iPhone 13 & GitHub Pages)

Eine moderne, schnelle und speziell für **Alltagskommunikation, Familie, Reisen & Partnerschaft** entwickelte Web-App zum Lernen und Festigen von praxisnahem Tagalog (Filipino), Pinoy-Slang und typischen Redewendungen.

---

## 🎯 Warum TagalogVocab?
Tagalog lebt von seiner Herzlichkeit, lebendigen Partikeln (*naman, pala, kasi, eh, nga*), Respektsformen (*po/opo, Mano po*) und humorvollem Slang (*Lodi, Petmalu, Chibog, Charot*). 

- **0 % trockene Grammatiktabellen, 100 % echte Kommunikation**
- **Über 140+ handverlesene Vokabeln & Redewendungen** mit authentischen Beispielsätzen
- **Themen**: *Pagkain & Tambay (Essen, Trinken & Ausgehen)*, *Pinoy Slang & Trends*, *Kamustahan & Phrasen*, *Lakwatsa & Treffen*, *Araw-Araw & Palengke (Markt & Alltag)*, *Damdamin & Kilig (Gefühle & Liebe)*, *Wichtige Verben* und *Partikel*
- **12 Echte Pinoy-Dialogsituationen**: Bestellen an der Karinderya, Jeepney-Fahrt, Treffen mit der Verwandtschaft, Verhandeln auf dem Markt uvm.
- **Eigene Vokabeln hinzufügen**: Du hörst ein neues Wort? Trage es direkt in der App ein!

---

## 📱 Features (Optimiert für iPhone 13 & mobilen Safari-Browser)

1. **Karten-Swipe (Tinder-Gesten)**:
   - Tippen dreht die Karte 3D um (zeigt Bedeutung & Beispielsatz).
   - Nach **Rechts wischen (ALAM KO NA ✅)** für gekonnte Vokabeln (+15 XP, Level-Up im Spaced Repetition System).
   - Nach **Links wischen (ULITIN ❌)** zum Wiederholen (+5 XP, Karte wird hinten eingereiht).
2. **Blitz-Quiz & Pinoy-Dialoge**:
   - *Blitz-Quiz*: Rasante Fragen gegen die 15-Sekunden-Uhr mit Sofort-Feedback.
   - *Pinoy-Dialoge*: 12 authentische Alltagsszenarien mit Insidertipps für das richtige Benehmen vor Ort.
3. **Wort-Match**: 6 Tagalog-deutsche Wortpaare auf Zeit antippen und matchen.
4. **Wörterbuch & Suchfunktion**: Schnelle Echtzeit-Suche, Favoriten-Sternchen ⭐ und Audio-Aussprache.
5. **Erfolge & Streak-Tracking**:
   - 🔥 **Tages-Streak**: Belohnt tägliches Dranbleiben.
   - 🏆 **Pinoy-Level**: Vom *Baguhan* über *Batang Quiapo* und *Petmalu Lodi* bis zum *Pinoy at Heart*.
   - 🧠 **SRS-Lernboxen**: Speichert Fortschritte direkt und sicher im `localStorage` deines iPhones.
6. **Audio-Aussprache**: Tagalog-Sprachausgabe (`fil-PH` / `tl-PH`) direkt auf Knopfdruck via Web Speech API.
7. **iPhone 13 & Safari Browser-Optimierung**:
   - `100dvh` dynamische Viewport-Anpassung verhindert Abschneiden durch die schwebende Safari-Leiste.
   - iOS-Safe-Area-Padding (`env(safe-area-inset-bottom)`) oben und unten.
   - Mindestens 44×44pt Touch-Targets für intuitive Daumenbedienung.
   - 16px Schriftgröße in Eingabefeldern verhindert das störende automatische Heranzoomen in Safari.
8. **Offline-Fähig (PWA)**: Dank Service Worker funktioniert die App auch im Flugzeug oder auf Reisen auf den Philippinen ohne Internetverbindung!

---

## 🚀 In 3 Schritten auf GitHub Pages hosten

Die App besteht aus modernem Web-Standard (HTML5, CSS3, ES6 JavaScript) – **kein Build-Schritt, kein Node-Server nötig!**

### Schritt 1: GitHub Repository anlegen
1. Gehe auf [GitHub.com](https://github.com) und erstelle ein neues Repository (z.B. `tagalog-lernen` oder `tagalogvocab`).
2. Wähle **Public** aus.

### Schritt 2: Code hochladen (Git)
Führe in diesem Ordner folgende Befehle im Terminal/PowerShell aus:

```bash
git init
git add .
git commit -m "Init TagalogVocab App"
git branch -M main
git remote add origin https://github.com/DEIN_BENUTZERNAME/tagalog-lernen.git
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
5. Nach ca. 1 Minute ist deine App unter `https://DEIN_BENUTZERNAME.github.io/tagalog-lernen/` live!

---

## 📲 Als Vollbild-App auf dem iPhone 13 installieren

1. Öffne die GitHub-Pages-URL in **Safari** auf dem iPhone 13.
2. Tippe unten in Safari auf das **Teilen-Symbol** (Viereck mit Pfeil nach oben).
3. Scrolle etwas nach unten und wähle **"Zum Home-Bildschirm"** (Add to Home Screen).
4. Tippe oben rechts auf **"Hinzufügen"**.
5. **Fertig!** Du hast jetzt ein eigenes App-Icon auf deinem Home-Screen. Beim Antippen öffnet sich TagalogVocab als vollwertige App ohne störende Browserleisten.
