// Kroatische Vokabeldatenbank - Speziell kuratiert für alltagstaugliche Kommunikation & Herkunftssprachler
var VOCAB_DATA = [
  // --- KATEGORIE: KAFIC & AUSGEHEN (Kafić, hrana i piće) ---
  {
    id: 1,
    hr: "Ja častim!",
    de: "Ich gebe aus! / Das geht auf mich!",
    category: "kafic",
    exampleHr: "Spremi novčanik, danas ja častim!",
    exampleDe: "Steck den Geldbeutel weg, heute gebe ich aus!"
  },
  {
    id: 2,
    hr: "Kava s toplim mlijekom",
    de: "Kaffee mit warmer Milch (der Klassiker im Café)",
    category: "kafic",
    exampleHr: "Mogu li dobiti jednu kavu s toplim mlijekom i čašu vode?",
    exampleDe: "Kann ich einen Kaffee mit warmer Milch und ein Glas Wasser bekommen?"
  },
  {
    id: 3,
    hr: "Račun, molim!",
    de: "Die Rechnung, bitte!",
    category: "kafic",
    exampleHr: "Konobar, račun, molim vas kad stignete.",
    exampleDe: "Herr Ober, die Rechnung bitte, wenn Sie Zeit haben."
  },
  {
    id: 4,
    hr: "U redu je / Zadržite ostatak",
    de: "Stimmt so / Behalten Sie das Wechselgeld",
    category: "kafic",
    exampleHr: "Evo izvolite, u redu je, zadržite ostatak.",
    exampleDe: "Hier bitte, stimmt so, behalten Sie den Rest."
  },
  {
    id: 5,
    hr: "Za ponijeti",
    de: "Zum Mitnehmen",
    category: "kafic",
    exampleHr: "Je li to za ovdje ili za ponijeti?",
    exampleDe: "Ist das für hier oder zum Mitnehmen?"
  },
  {
    id: 6,
    hr: "Živjeli! / Uzdravlje!",
    de: "Prost! / Zum Wohl!",
    category: "kafic",
    exampleHr: "Dignimo čaše za naš susret – živjeli!",
    exampleDe: "Lasst uns die Gläser auf unser Treffen heben – Prost!"
  },
  {
    id: 7,
    hr: "Preukusno je",
    de: "Es ist super lecker / köstlich",
    category: "kafic",
    exampleHr: "Ova peka je stvarno preukusna.",
    exampleDe: "Dieses Peka-Gericht ist wirklich super lecker."
  },
  {
    id: 8,
    hr: "Boca mineralne",
    de: "Flasche Mineralwasser (mit Kohlensäure)",
    category: "kafic",
    exampleHr: "Nama donesite jednu bocu hladne mineralne.",
    exampleDe: "Bringen Sie uns eine Flasche kaltes Mineralwasser."
  },
  {
    id: 9,
    hr: "Možemo li sjesti vani?",
    de: "Können wir uns nach draußen setzen?",
    category: "kafic",
    exampleHr: "Lijepo je vrijeme, možemo li sjesti vani na terasu?",
    exampleDe: "Das Wetter ist schön, können wir uns draußen auf die Terrasse setzen?"
  },
  {
    id: 10,
    hr: "Domaće vino",
    de: "Hauswein / hausgemachter Wein",
    category: "kafic",
    exampleHr: "Imate li svoje domaće crno vino?",
    exampleDe: "Haben Sie Ihren eigenen hausgemachten Rotwein?"
  },
  {
    id: 11,
    hr: "Gladan sam kao vuk",
    de: "Ich habe Bärenhunger (wörtl. hungrig wie ein Wolf)",
    category: "kafic",
    exampleHr: "Cijeli dan nisam ništa jeo, gladan sam kao vuk.",
    exampleDe: "Ich habe den ganzen Tag nichts gegessen, ich habe Bärenhunger."
  },
  {
    id: 12,
    hr: "Puna mi je kapa / Pun mi je želudac",
    de: "Ich bin pappsatt (oder übertragen: Ich hab die Nase voll)",
    category: "kafic",
    exampleHr: "Ne mogu više ni zalogaj, pun sam do čepa!",
    exampleDe: "Ich kann keinen Bissen mehr, ich bin pappsatt!"
  },

  // --- KATEGORIE: SLANG & MODERNE UMGANGSSPRACHE (Slang i spika) ---
  {
    id: 13,
    hr: "Brijati",
    de: "quatschen / philosophieren / auf etw. abfahren (Kultwort)",
    category: "slang",
    exampleHr: "O čemu ti uopće briješ, čovječe?",
    exampleDe: "Worüber schwafelst du da eigentlich, Mann?"
  },
  {
    id: 14,
    hr: "Skužiti (skužio / skužila)",
    de: "kapieren / checken / durchblicken",
    category: "slang",
    exampleHr: "Tek sam sad skužio što si mi htio reći.",
    exampleDe: "Ich habe erst jetzt kapiert, was du mir sagen wolltest."
  },
  {
    id: 15,
    hr: "Ekipa",
    de: "Die Clique / Freundeskreis / Leute",
    category: "slang",
    exampleHr: "Večeras se okuplja cijela ekipa kod mene.",
    exampleDe: "Heute Abend versammelt sich die ganze Clique bei mir."
  },
  {
    id: 16,
    hr: "Ful",
    de: "Voll / total / mega (z.B. ful dobro)",
    category: "slang",
    exampleHr: "Film je bio ful dobar, moraš ga pogledati.",
    exampleDe: "Der Film war mega gut, den musst du sehen."
  },
  {
    id: 17,
    hr: "Koma",
    de: "Schrecklich / fix und fertig / Katastrophe",
    category: "slang",
    exampleHr: "Danas sam u komi od posla.",
    exampleDe: "Heute bin ich von der Arbeit fix und fertig."
  },
  {
    id: 18,
    hr: "Fakat",
    de: "Echt / wirklich / tatsächlich",
    category: "slang",
    exampleHr: "Fakat nema smisla da se oko toga živciraš.",
    exampleDe: "Es macht echt keinen Sinn, dass du dich darüber aufregst."
  },
  {
    id: 19,
    hr: "Bez veze",
    de: "Sinnlos / Quatsch / doof / für die Katz",
    category: "slang",
    exampleHr: "Nemoj se ljutiti, to je bila skroz bez veze fora.",
    exampleDe: "Sei nicht böse, das war ein total blöder Witz."
  },
  {
    id: 20,
    hr: "Legenda",
    de: "Ehrenmann / Legende / cooler Typ",
    category: "slang",
    exampleHr: "Luka je prava legenda, uvijek uskoči pomoći.",
    exampleDe: "Luka ist eine echte Legende, er hilft immer sofort."
  },
  {
    id: 21,
    hr: "Baciti đir / baciti oko",
    de: "Eine Runde drehen / ein Auge auf etwas werfen",
    category: "slang",
    exampleHr: "Idemo baciti đir po gradu pa sjesti na kavu.",
    exampleDe: "Lass uns eine Runde durch die Stadt drehen und dann einen Kaffee trinken."
  },
  {
    id: 22,
    hr: "Nema frke",
    de: "Keine Panik / kein Ding / kein Stress",
    category: "slang",
    exampleHr: "Sve ću riješiti, bez brige, nema frke!",
    exampleDe: "Ich regle das alles, keine Sorge, kein Stress!"
  },
  {
    id: 23,
    hr: "Cuga / Idemo na cugu",
    de: "Getränk / Lass uns was trinken gehen",
    category: "slang",
    exampleHr: "Hoćemo poslije posla skoknuti na brzu cugu?",
    exampleDe: "Wollen wir nach der Arbeit kurz auf einen Drink springen?"
  },
  {
    id: 24,
    hr: "Živcirati se",
    de: "sich aufregen / nerven",
    category: "slang",
    exampleHr: "Nemoj se živcirati oko gluposti.",
    exampleDe: "Reg dich nicht über Kleinigkeiten auf."
  },
  {
    id: 25,
    hr: "Top / Prva liga",
    de: "Spitze / erste Sahne / erstklassig",
    category: "slang",
    exampleHr: "Ova ideja ti je prva liga!",
    exampleDe: "Diese Idee von dir ist absolute Spitzenklasse!"
  },
  {
    id: 26,
    hr: "Spika",
    de: "Das Gequatsche / die Art zu reden / Story",
    category: "slang",
    exampleHr: "Sviđa mi se njegova spika, vrlo je opušten.",
    exampleDe: "Mir gefällt seine Art zu reden, er ist sehr entspannt."
  },

  // --- KATEGORIE: SMALLTALK & REAKTIONEN (Spontana komunikacija) ---
  {
    id: 27,
    hr: "Što ima novo? / Što ima?",
    de: "Was gibt's Neues? / Was geht?",
    category: "smalltalk",
    exampleHr: "Ej stari, što ima novoga kod tebe?",
    exampleDe: "Hey mein Lieber, was gibt's Neues bei dir?"
  },
  {
    id: 28,
    hr: "Kako ide?",
    de: "Wie läuft's?",
    category: "smalltalk",
    exampleHr: "Kako ide na novom poslu?",
    exampleDe: "Wie läuft's auf der neuen Arbeit?"
  },
  {
    id: 29,
    hr: "Ma daj! / Nema šanse!",
    de: "Ach komm! / Nicht im Ernst! / Keine Chance!",
    category: "smalltalk",
    exampleHr: "Ma daj, nemoj me zezati, je li to istina?",
    exampleDe: "Ach komm, veräpple mich nicht, ist das wahr?"
  },
  {
    id: 30,
    hr: "Nemam pojma",
    de: "Keine Ahnung / Kein Schimmer",
    category: "smalltalk",
    exampleHr: "Pitao me za put, a ja stvarno nemam pojma.",
    exampleDe: "Er hat mich nach dem Weg gefragt, aber ich habe wirklich keine Ahnung."
  },
  {
    id: 31,
    hr: "Sve štima / Sve je pod kontrolom",
    de: "Alles passt / alles im Griff",
    category: "smalltalk",
    exampleHr: "Ne brini ništa, sve štima!",
    exampleDe: "Mach dir keine Sorgen, alles passt!"
  },
  {
    id: 32,
    hr: "Čujemo se! / Vidimo se uskoro!",
    de: "Wir hören uns! / Bis bald!",
    category: "smalltalk",
    exampleHr: "Hvala ti na svemu, čujemo se za vikend!",
    exampleDe: "Danke dir für alles, wir hören uns am Wochenende!"
  },
  {
    id: 33,
    hr: "Boli me briga / Svejedno mi je",
    de: "Ist mir egal / kümmert mich nicht",
    category: "smalltalk",
    exampleHr: "Što se mene tiče, baš me briga što drugi misle.",
    exampleDe: "Was mich betrifft, ist mir völlig egal, was andere denken."
  },
  {
    id: 34,
    hr: "Iskreno rečeno",
    de: "Ehrlich gesagt",
    category: "smalltalk",
    exampleHr: "Iskreno rečeno, radije bih ostao doma.",
    exampleDe: "Ehrlich gesagt würde ich lieber zuhause bleiben."
  },
  {
    id: 35,
    hr: "Baš mi je drago",
    de: "Das freut mich wirklich sehr",
    category: "smalltalk",
    exampleHr: "Čuo sam da si položio ispit, baš mi je drago!",
    exampleDe: "Ich habe gehört, du hast die Prüfung bestanden, das freut mich riesig!"
  },
  {
    id: 36,
    hr: "Svaka čast!",
    de: "Hut ab! / Respekt! / Bravo!",
    category: "smalltalk",
    exampleHr: "Uspio si to sam popraviti? Svaka čast!",
    exampleDe: "Du hast das alleine repariert? Alle Achtung!"
  },
  {
    id: 37,
    hr: "Nema veze",
    de: "Macht nichts / Halb so wild",
    category: "smalltalk",
    exampleHr: "Zaboravio si ponijeti punjač? Nema veze, imam ja svoj.",
    exampleDe: "Du hast das Ladekabel vergessen? Macht nichts, ich hab meins."
  },
  {
    id: 38,
    hr: "Po mom mišljenju",
    de: "Meiner Meinung nach",
    category: "smalltalk",
    exampleHr: "Po mom mišljenju to je najbolja opcija.",
    exampleDe: "Meiner Meinung nach ist das die beste Option."
  },
  {
    id: 39,
    hr: "Uglavnom...",
    de: "Wie dem auch sei... / Im Großen und Ganzen / Jedenfalls...",
    category: "smalltalk",
    exampleHr: "Bilo je problema, ali uglavnom, sve je dobro prošlo.",
    exampleDe: "Es gab Probleme, aber im Großen und Ganzen ist alles gut gelaufen."
  },
  {
    id: 40,
    hr: "Zvuči super!",
    de: "Klingt super!",
    category: "smalltalk",
    exampleHr: "Izlet na otok u subotu? Zvuči super!",
    exampleDe: "Ausflug auf die Insel am Samstag? Klingt super!"
  },

  // --- KATEGORIE: TREFFEN & VERABREDUNGEN (Dogovori i susreti) ---
  {
    id: 41,
    hr: "Dogovoreno! / Može, dogovor!",
    de: "Abgemacht! / Geht klar!",
    category: "treffen",
    exampleHr: "Vidimo se u osam sati pred kinom? Može, dogovoreno!",
    exampleDe: "Sehen wir uns um 20 Uhr vorm Kino? Geht klar, abgemacht!"
  },
  {
    id: 42,
    hr: "Kad ti odgovara?",
    de: "Wann passt es dir?",
    category: "treffen",
    exampleHr: "Volio bih popričati, kad ti odgovara ovaj tjedan?",
    exampleDe: "Ich würde gerne reden, wann passt es dir diese Woche?"
  },
  {
    id: 43,
    hr: "Gdje se nalazimo?",
    de: "Wo treffen wir uns?",
    category: "treffen",
    exampleHr: "Gdje se točno nalazimo, kod sata na trgu?",
    exampleDe: "Wo treffen wir uns genau, bei der Uhr am Hauptplatz?"
  },
  {
    id: 44,
    hr: "Kasnim desetak minuta",
    de: "Ich verspäte mich um ca. 10 Minuten",
    category: "treffen",
    exampleHr: "Gužva je u prometu, kasnim desetak minuta, oprosti!",
    exampleDe: "Es ist Stau, ich verspäte mich um ca. 10 Minuten, sorry!"
  },
  {
    id: 45,
    hr: "Evo me, stižem!",
    de: "Hier bin ich, ich komme gleich!",
    category: "treffen",
    exampleHr: "Upravo parkiram auto, evo me, stižem!",
    exampleDe: "Ich parke gerade das Auto ein, da bin ich, ich komme!"
  },
  {
    id: 46,
    hr: "Nemam vremena danas",
    de: "Ich habe heute keine Zeit",
    category: "treffen",
    exampleHr: "Rado bih došao, ali stvarno nemam vremena danas.",
    exampleDe: "Ich würde gerne kommen, habe heute aber echt keine Zeit."
  },
  {
    id: 47,
    hr: "Hoćemo li se naći?",
    de: "Wollen wir uns treffen?",
    category: "treffen",
    exampleHr: "Dugo se nismo vidjeli, hoćemo li se naći sutra?",
    exampleDe: "Wir haben uns lange nicht gesehen, wollen wir uns morgen treffen?"
  },
  {
    id: 48,
    hr: "Javi mi se kad stigneš",
    de: "Melde dich bei mir, sobald du ankommst",
    category: "treffen",
    exampleHr: "Sretan put i javi mi se kad stigneš doma.",
    exampleDe: "Gute Fahrt und melde dich, wenn du zuhause ankommst."
  },
  {
    id: 49,
    hr: "Prebaci za sutra",
    de: "Verschiebe es auf morgen",
    category: "treffen",
    exampleHr: "Ako si preumoran, možemo sastanak prebaciti za sutra.",
    exampleDe: "Wenn du zu müde bist, können wir das Treffen auf morgen verschieben."
  },
  {
    id: 50,
    hr: "U gužvi sam",
    de: "Ich bin im Stress / habe viel um die Ohren",
    category: "treffen",
    exampleHr: "Ne mogu sad dugo pričati, u strašnoj sam gužvi.",
    exampleDe: "Ich kann jetzt nicht lange reden, ich habe furchtbar viel um die Ohren."
  },

  // --- KATEGORIE: ALLTAG, UNTERWEGS & PRAKTISCHES (Svakodnevica) ---
  {
    id: 51,
    hr: "Koliko ovo košta? / Koja je cijena?",
    de: "Wie viel kostet das? / Was ist der Preis?",
    category: "alltag",
    exampleHr: "Oprostite, koliko ovo košta po kilogramu?",
    exampleDe: "Entschuldigen Sie, wie viel kostet das pro Kilo?"
  },
  {
    id: 52,
    hr: "Prima li se kartica?",
    de: "Kann man mit Karte zahlen?",
    category: "alltag",
    exampleHr: "Može li se platiti karticom ili samo gotovinom?",
    exampleDe: "Geht Kartenzahlung oder nur Bargeld?"
  },
  {
    id: 53,
    hr: "Gotovina",
    de: "Bargeld",
    category: "alltag",
    exampleHr: "Nemam gotovine kod sebe, moram na bankomat.",
    exampleDe: "Ich habe kein Bargeld dabei, ich muss zum Geldautomaten."
  },
  {
    id: 54,
    hr: "Bankomat",
    de: "Geldautomat",
    category: "alltag",
    exampleHr: "Gdje se nalazi najbliži bankomat?",
    exampleDe: "Wo befindet sich der nächste Geldautomat?"
  },
  {
    id: 55,
    hr: "Vrećica, molim",
    de: "Eine Einkaufstüte, bitte",
    category: "alltag",
    exampleHr: "Trebate li vrećicu na blagajni?",
    exampleDe: "Brauchen Sie eine Tüte an der Kasse?"
  },
  {
    id: 56,
    hr: "Skrenite desno / lijevo",
    de: "Biegen Sie rechts / links ab",
    category: "alltag",
    exampleHr: "Na semaforu skrenite desno pa vozite ravno.",
    exampleDe: "An der Ampel biegen Sie rechts ab und fahren dann geradeaus."
  },
  {
    id: 57,
    hr: "Samo ravno",
    de: "Einfach geradeaus",
    category: "alltag",
    exampleHr: "Idite samo ravno oko dvjesto metara.",
    exampleDe: "Gehen Sie einfach ca. zweihundert Meter geradeaus."
  },
  {
    id: 58,
    hr: "Izgubio sam se / Izgubila sam se",
    de: "Ich habe mich verlaufen / verfahren",
    category: "alltag",
    exampleHr: "Navigacija mi ne radi, skroz sam se izgubio.",
    exampleDe: "Mein Navi funktioniert nicht, ich habe mich total verfahren."
  },
  {
    id: 59,
    hr: "Ljekarna",
    de: "Apotheke",
    category: "alltag",
    exampleHr: "Radi li ljekarna nedjeljom?",
    exampleDe: "Hat die Apotheke sonntags geöffnet?"
  },
  {
    id: 60,
    hr: "Prazna baterija",
    de: "Leerer Akku",
    category: "alltag",
    exampleHr: "Mobitel mi se gasi, prazna mi je baterija.",
    exampleDe: "Mein Handy schaltet sich ab, mein Akku ist leer."
  },
  {
    id: 61,
    hr: "Punjač za mobitel",
    de: "Handyladekabel / Ladegerät",
    category: "alltag",
    exampleHr: "Imaš li slučajno punjač za iPhone kod sebe?",
    exampleDe: "Hast du zufällig ein Ladekabel fürs iPhone dabei?"
  },
  {
    id: 62,
    hr: "Zapelo je / Zapeo sam",
    de: "Es klemmt / Ich stecke fest",
    category: "alltag",
    exampleHr: "Zapeo sam na poslu, nemoj me čekati za ručak.",
    exampleDe: "Ich hänge auf der Arbeit fest, warte nicht mit dem Mittagessen auf mich."
  },

  // --- KATEGORIE: GEFÜHLE, MEINUNGEN & AUSDRÜCKE (Osjećaji i mišljenja) ---
  {
    id: 63,
    hr: "Umirem od smijeha",
    de: "Ich lach mich tot / Ich sterbe vor Lachen",
    category: "gefuehle",
    exampleHr: "Kad se sjetim te situacije, doslovno umirem od smijeha.",
    exampleDe: "Wenn ich an die Situation denke, lach ich mich buchstäblich tot."
  },
  {
    id: 64,
    hr: "Naporan dan",
    de: "Anstrengender Tag",
    category: "gefuehle",
    exampleHr: "Imao sam jako naporan dan, samo želim leći na kauč.",
    exampleDe: "Ich hatte einen sehr anstrengenden Tag, ich will mich nur aufs Sofa legen."
  },
  {
    id: 65,
    hr: "Oduševljen sam / Oduševljena sam",
    de: "Ich bin begeistert",
    category: "gefuehle",
    exampleHr: "Oduševljen sam time kako je sve ispalo.",
    exampleDe: "Ich bin begeistert davon, wie alles geworden ist."
  },
  {
    id: 66,
    hr: "Brinem se / Bez brige",
    de: "Ich mache mir Sorgen / Keine Sorge",
    category: "gefuehle",
    exampleHr: "Bez brige, sve će ispasti baš kako treba.",
    exampleDe: "Keine Sorge, alles wird genau so, wie es sein soll."
  },
  {
    id: 67,
    hr: "Dosadno mi je",
    de: "Mir ist langweilig",
    category: "gefuehle",
    exampleHr: "Vani pada kiša i užasno mi je dosadno.",
    exampleDe: "Draußen regnet es und mir ist schrecklich langweilig."
  },
  {
    id: 68,
    hr: "Slažem se s tobom",
    de: "Ich stimme dir zu",
    category: "gefuehle",
    exampleHr: "U potpunosti se slažem s tvojim prijedlogom.",
    exampleDe: "Ich stimme deinem Vorschlag voll und ganz zu."
  },
  {
    id: 69,
    hr: "Nisam siguran / Nisam sigurna",
    de: "Ich bin mir nicht sicher",
    category: "gefuehle",
    exampleHr: "Nisam siguran hoće li sutra biti lijepo vrijeme.",
    exampleDe: "Ich bin mir nicht sicher, ob morgen schönes Wetter wird."
  },
  {
    id: 70,
    hr: "Pukao mi je film",
    de: "Mir ist der Kragen geplatzt / Mir reicht's",
    category: "gefuehle",
    exampleHr: "Dugo sam trpio, ali u jednom trenutku mi je pukao film.",
    exampleDe: "Ich habe es lange ertragen, aber in einem Moment ist mir der Kragen geplatzt."
  },
  {
    id: 71,
    hr: "Laknulo mi je",
    de: "Mir ist ein Stein vom Herzen gefallen / Mir ist leichter ums Herz",
    category: "gefuehle",
    exampleHr: "Kad sam čuo da je sve u redu, stvarno mi je laknulo.",
    exampleDe: "Als ich hörte, dass alles in Ordnung ist, ist mir echt ein Stein vom Herzen gefallen."
  },
  {
    id: 72,
    hr: "Pretjerivati",
    de: "übertreiben",
    category: "gefuehle",
    exampleHr: "Mislim da malo pretjeruješ, nije situacija tako strašna.",
    exampleDe: "Ich glaube, du übertreibst ein wenig, die Situation ist nicht so schlimm."
  },
  {
    id: 73,
    hr: "Nemoj zamjeriti",
    de: "Nimm es mir nicht übel",
    category: "gefuehle",
    exampleHr: "Moram ranije otići, nemoj zamjeriti.",
    exampleDe: "Ich muss früher gehen, nimm es mir bitte nicht übel."
  },
  {
    id: 74,
    hr: "Ljubomoran / Ljubomorna",
    de: "eifersüchtig / neidisch",
    category: "gefuehle",
    exampleHr: "Bio sam ljubomoran na njegov uspjeh, priznajem.",
    exampleDe: "Ich war neidisch auf seinen Erfolg, ich gebe es zu."
  },

  // --- KATEGORIE: WICHTIGE KONVERSATIONS-VERBEN (Glagoli za tečan razgovor) ---
  {
    id: 75,
    hr: "Javiti se",
    de: "sich melden (telefonisch/Nachricht)",
    category: "verben",
    exampleHr: "Javi mi se čim sletiš u Zagreb.",
    exampleDe: "Melde dich bei mir, sobald du in Zagreb landest."
  },
  {
    id: 76,
    hr: "Svratiti",
    de: "vorbeikommen / kurz reinschauen",
    category: "verben",
    exampleHr: "Svratit ću poslije posla do tebe na pet minuta.",
    exampleDe: "Ich komme nach der Arbeit kurz für fünf Minuten bei dir vorbei."
  },
  {
    id: 77,
    hr: "Sjetiti se",
    de: "sich erinnern / daran denken",
    category: "verben",
    exampleHr: "Ne mogu se sjetiti kako se zove onaj restoran.",
    exampleDe: "Ich kann mich nicht erinnern, wie jenes Restaurant heißt."
  },
  {
    id: 78,
    hr: "Zaboraviti",
    de: "vergessen",
    category: "verben",
    exampleHr: "Skroz sam zaboravio kupiti kruh.",
    exampleDe: "Ich habe total vergessen, Brot zu kaufen."
  },
  {
    id: 79,
    hr: "Preporučiti",
    de: "empfehlen",
    category: "verben",
    exampleHr: "Što bi mi preporučio za ručak u ovom gradu?",
    exampleDe: "Was würdest du mir fürs Mittagessen in dieser Stadt empfehlen?"
  },
  {
    id: 80,
    hr: "Objasniti",
    de: "erklären",
    category: "verben",
    exampleHr: "Možeš li mi ukratko objasniti kako to radi?",
    exampleDe: "Kannst du mir kurz erklären, wie das funktioniert?"
  },
  {
    id: 81,
    hr: "Uspjeti",
    de: "es schaffen / gelingen",
    category: "verben",
    exampleHr: "Jesmo li uspjeli nabaviti karte za utakmicu?",
    exampleDe: "Haben wir es geschafft, Tickets fürs Spiel zu besorgen?"
  },
  {
    id: 82,
    hr: "Odustati",
    de: "aufgeben / einen Rückzieher machen",
    category: "verben",
    exampleHr: "Bilo je teško, ali nismo htjeli odustati.",
    exampleDe: "Es war schwer, aber wir wollten nicht aufgeben."
  },
  {
    id: 83,
    hr: "Družiti se",
    de: "zusammen Zeit verbringen / abhängen",
    category: "verben",
    exampleHr: "Volim se družiti s ljudima koji imaju pozitivan stav.",
    exampleDe: "Ich mag es, mit Leuten abzuhängen, die eine positive Einstellung haben."
  },
  {
    id: 84,
    hr: "Odmarati se",
    de: "sich ausruhen / relaxen",
    category: "verben",
    exampleHr: "Nedjelja je za mene dan kad se samo odmaram.",
    exampleDe: "Sonntag ist für mich der Tag, an dem ich mich nur ausruhe."
  },
  {
    id: 85,
    hr: "Prekinuti",
    de: "unterbrechen / Schluss machen",
    category: "verben",
    exampleHr: "Oprosti što te prekidam, ali zvoni ti telefon.",
    exampleDe: "Entschuldige, dass ich dich unterbreche, aber dein Telefon klingelt."
  },
  {
    id: 86,
    hr: "Snaći se (snašao se / snašla se)",
    de: "zurechtkommen / sich zu helfen wissen",
    category: "verben",
    exampleHr: "Uvijek se nekako snađe u teškim situacijama.",
    exampleDe: "Er weiß sich in schwierigen Situationen immer irgendwie zu helfen."
  },
  {
    id: 87,
    hr: "Riješiti",
    de: "erledigen / lösen / regeln",
    category: "verben",
    exampleHr: "To ću riješiti još danas popodne.",
    exampleDe: "Das erledige ich heute Nachmittag noch."
  },
  {
    id: 88,
    hr: "Dopisivati se",
    de: "miteinander schreiben / texten",
    category: "verben",
    exampleHr: "Cijeli dan se dopisujemo preko WhatsAppa.",
    exampleDe: "Wir schreiben uns den ganzen Tag über WhatsApp."
  },

  // --- KATEGORIE: WEITERE SPONTANE PHRASEN & CHUNKS ---
  {
    id: 89,
    hr: "Kako god želiš",
    de: "Wie auch immer du willst / Wie du magst",
    category: "smalltalk",
    exampleHr: "Možemo autom ili pješice, kako god ti želiš.",
    exampleDe: "Wir können mit dem Auto oder zu Fuß, wie auch immer du magst."
  },
  {
    id: 90,
    hr: "Za svaki slučaj",
    de: "Für alle Fälle / Zur Sicherheit",
    category: "alltag",
    exampleHr: "Uzmi kišobran sa sobom za svaki slučaj.",
    exampleDe: "Nimm den Regenschirm mit für alle Fälle."
  },
  {
    id: 91,
    hr: "Na kraju krajeva",
    de: "Letzten Endes / Schließlich und endlich",
    category: "smalltalk",
    exampleHr: "Na kraju krajeva, najvažnije je da smo svi zdravi.",
    exampleDe: "Letzten Endes ist das Wichtigste, dass wir alle gesund sind."
  },
  {
    id: 92,
    hr: "Uostalom",
    de: "Im Übrigen / Außerdem",
    category: "smalltalk",
    exampleHr: "Uostalom, zašto bismo uopće žurili?",
    exampleDe: "Im Übrigen, warum sollten wir uns überhaupt beeilen?"
  },
  {
    id: 93,
    hr: "Držim ti fige!",
    de: "Ich drücke dir die Daumen!",
    category: "smalltalk",
    exampleHr: "Sretno na razgovoru za posao, držim ti fige!",
    exampleDe: "Viel Glück beim Vorstellungsgespräch, ich drücke dir die Daumen!"
  },
  {
    id: 94,
    hr: "Nema smisla",
    de: "Es hat keinen Sinn / Es bringt nichts",
    category: "smalltalk",
    exampleHr: "Nema smisla čekati ako je vlak već otišao.",
    exampleDe: "Es bringt nichts zu warten, wenn der Zug schon abgefahren ist."
  },
  {
    id: 95,
    hr: "Čim prije",
    de: "So schnell wie möglich / baldmöglichst",
    category: "alltag",
    exampleHr: "Moramo to predati čim prije.",
    exampleDe: "Wir müssen das so schnell wie möglich abgeben."
  },
  {
    id: 96,
    hr: "Ne da mi se",
    de: "Ich habe keine Lust / Ich mag nicht",
    category: "slang",
    exampleHr: "Danas mi se stvarno ne da kuhati večeru.",
    exampleDe: "Heute habe ich wirklich keine Lust, Abendessen zu kochen."
  },
  {
    id: 97,
    hr: "Ispalo je super",
    de: "Es ist super geworden / ausgegangen",
    category: "gefuehle",
    exampleHr: "Bojali smo se problema, ali je na kraju sve ispalo super.",
    exampleDe: "Wir hatten Angst vor Problemen, aber am Ende ist alles super geworden."
  },
  {
    id: 98,
    hr: "Zezati se / Šaliti se",
    de: "Witze machen / Spaß machen / necken",
    category: "slang",
    exampleHr: "Samo se zezam, nemoj sve shvaćati preozbiljno!",
    exampleDe: "Ich mach nur Spaß, nimm nicht alles so bierernst!"
  },
  {
    id: 99,
    hr: "Baciti pogled",
    de: "Einen kurzen Blick werfen",
    category: "verben",
    exampleHr: "Možeš li baciti pogled na ovaj dokument?",
    exampleDe: "Kannst du mal kurz einen Blick auf dieses Dokument werfen?"
  },
  {
    id: 100,
    hr: "Bez pardona",
    de: "Gnadenlos / ohne mit der Wimper zu zucken",
    category: "slang",
    exampleHr: "Rekao mu je istinu u lice, bez pardona.",
    exampleDe: "Er hat ihm die Wahrheit ins Gesicht gesagt, ohne Pardon."
  },
  {
    id: 101,
    hr: "Odmori malo",
    de: "Ruh dich ein bisschen aus / Mach mal Pause",
    category: "alltag",
    exampleHr: "Cijeli dan radiš bez prestanka, odmori malo.",
    exampleDe: "Du arbeitest den ganzen Tag ohne Pause, ruh dich mal aus."
  },
  {
    id: 102,
    hr: "Šteta!",
    de: "Schade!",
    category: "gefuehle",
    exampleHr: "Ne možeš doći na roštilj? Baš velika šteta!",
    exampleDe: "Du kannst nicht zum Grillen kommen? Wirklich sehr schade!"
  },
  {
    id: 103,
    hr: "Pametno razmišljaš",
    de: "Du denkst schlau / Gute Überlegung",
    category: "smalltalk",
    exampleHr: "Bolje da krenemo ranije zbog gužve, pametno razmišljaš.",
    exampleDe: "Besser wir fahren wegen des Staus früher los, gute Überlegung."
  },
  {
    id: 104,
    hr: "U prolazu sam",
    de: "Ich bin gerade auf dem Sprung / auf der Durchreise",
    category: "treffen",
    exampleHr: "U prolazu sam pored tvoje zgrade, jesi li za brzu kavu?",
    exampleDe: "Ich komme gerade an deinem Haus vorbei, Lust auf einen schnellen Kaffee?"
  },
  {
    id: 105,
    hr: "Što se mene tiče",
    de: "Was mich betrifft / Von mir aus",
    category: "smalltalk",
    exampleHr: "Što se mene tiče, možemo krenuti odmah.",
    exampleDe: "Was mich betrifft, können wir sofort losfahren."
  },
  {
    id: 106,
    hr: "Garantirano",
    de: "Garantiert / Zu 100 Prozent",
    category: "smalltalk",
    exampleHr: "Danas će garantirano padati kiša.",
    exampleDe: "Heute wird es garantiert regnen."
  },
  {
    id: 107,
    hr: "Nije mi do toga",
    de: "Mir ist nicht danach / Mir steht nicht der Sinn danach",
    category: "gefuehle",
    exampleHr: "Glava me boli, danas mi stvarno nije do slavlja.",
    exampleDe: "Mein Kopf tut weh, mir steht heute echt nicht der Sinn nach Feiern."
  },
  {
    id: 108,
    hr: "Svako malo",
    de: "Alle Nase lang / ständig / alle paar Augenblicke",
    category: "alltag",
    exampleHr: "Svako malo mi stižu poruke na mobitel.",
    exampleDe: "Alle paar Augenblicke kommen Nachrichten auf meinem Handy an."
  },
  {
    id: 109,
    hr: "Preko glave",
    de: "Bis zum Hals / Überbelegt (z.B. posla preko glave)",
    category: "alltag",
    exampleHr: "Imam obaveza preko glave ovaj tjedan.",
    exampleDe: "Ich habe diese Woche Arbeit und Pflichten bis zum Hals."
  },
  {
    id: 110,
    hr: "Kapa dolje!",
    de: "Hut ab! (Bewunderung)",
    category: "smalltalk",
    exampleHr: "Kako si sve ovo sam organizirao? Kapa dolje!",
    exampleDe: "Wie hast du das alles alleine organisiert? Hut ab!"
  },
  {
    id: 111,
    hr: "Snažan dojam",
    de: "Starker Eindruck",
    category: "gefuehle",
    exampleHr: "Taj grad je ostavio snažan dojam na mene.",
    exampleDe: "Diese Stadt hat einen starken Eindruck bei mir hinterlassen."
  },
  {
    id: 112,
    hr: "Pojma nemam tko je to",
    de: "Ich habe keinen blassen Schimmer, wer das ist",
    category: "smalltalk",
    exampleHr: "Mahnula mi je neka žena, a pojma nemam tko je to.",
    exampleDe: "Eine Frau hat mir gewinkt, und ich habe keinen Schimmer, wer das ist."
  },
  {
    id: 113,
    hr: "Previše komplicirano",
    de: "Viel zu kompliziert",
    category: "alltag",
    exampleHr: "Nemojmo raditi planove, previše je to komplicirano.",
    exampleDe: "Lasst uns keine großen Pläne schmieden, das ist viel zu kompliziert."
  },
  {
    id: 114,
    hr: "Ugodan dan!",
    de: "Einen angenehmen / schönen Tag!",
    category: "smalltalk",
    exampleHr: "Hvala na pomoći i želim vam ugodan dan!",
    exampleDe: "Danke für die Hilfe und ich wünsche Ihnen einen angenehmen Tag!"
  },
  {
    id: 115,
    hr: "Prije ili kasnije",
    de: "Früher oder später",
    category: "smalltalk",
    exampleHr: "Prije ili kasnije istina uvijek izađe na vidjelo.",
    exampleDe: "Früher oder später kommt die Wahrheit immer ans Licht."
  },
  {
    id: 116,
    hr: "Pustit ću te na miru",
    de: "Ich lasse dich in Ruhe",
    category: "smalltalk",
    exampleHr: "Vidim da si umoran, pustit ću te na miru da se naspavaš.",
    exampleDe: "Ich sehe, dass du müde bist, ich lasse dich in Ruhe ausschlafen."
  },
  {
    id: 117,
    hr: "Čista desetka",
    de: "Eine glatte Eins / 10 von 10 / Perfekt",
    category: "slang",
    exampleHr: "Hrana u onom restoranu je bila čista desetka!",
    exampleDe: "Das Essen in jenem Restaurant war eine glatte Eins!"
  },
  {
    id: 118,
    hr: "Usporediti",
    de: "vergleichen",
    category: "verben",
    exampleHr: "Ne možeš usporediti život na moru sa životom u gradu.",
    exampleDe: "Du kannst das Leben am Meer nicht mit dem Leben in der Stadt vergleichen."
  },
  {
    id: 119,
    hr: "Kako stoji stvar?",
    de: "Wie steht die Sache? / Wie ist der Status?",
    category: "smalltalk",
    exampleHr: "Jesi li pričao sa šefom? Kako stoji stvar?",
    exampleDe: "Hast du mit dem Chef gesprochen? Wie steht die Sache?"
  },
  {
    id: 120,
    hr: "Sve u svemu",
    de: "Alles in allem",
    category: "smalltalk",
    exampleHr: "Sve u svemu, bio je to nezaboravan godišnji odmor.",
    exampleDe: "Alles in allem war es ein unvergesslicher Urlaub."
  },

  // --- KATEGORIE: WICHTIGE NOMEN FÜR DIE KOMMUNIKATION (Imenice) ---
  {
    id: 121,
    hr: "Iskustvo",
    de: "Erfahrung",
    category: "rijeci",
    exampleHr: "To je bilo nevjerojatno iskustvo za mene.",
    exampleDe: "Das war eine unglaubliche Erfahrung für mich."
  },
  {
    id: 122,
    hr: "Prilika",
    de: "Gelegenheit / Chance",
    category: "rijeci",
    exampleHr: "Ne smiješ propustiti ovakvu dobru priliku.",
    exampleDe: "Du darfst so eine gute Gelegenheit nicht verpassen."
  },
  {
    id: 123,
    hr: "Odluka",
    de: "Entscheidung",
    category: "rijeci",
    exampleHr: "Bila je to teška, ali ispravna odluka.",
    exampleDe: "Es war eine schwere, aber richtige Entscheidung."
  },
  {
    id: 124,
    hr: "Mišljenje",
    de: "Meinung / Ansicht",
    category: "rijeci",
    exampleHr: "Zanima me tvoje iskreno mišljenje o tome.",
    exampleDe: "Mich interessiert deine ehrliche Meinung dazu."
  },
  {
    id: 125,
    hr: "Savjet",
    de: "Ratschlag / Tipp",
    category: "rijeci",
    exampleHr: "Hvala ti na savjetu, puno mi je pomogao.",
    exampleDe: "Danke dir für den Rat, er hat mir sehr geholfen."
  },
  {
    id: 126,
    hr: "Povjerenje",
    de: "Vertrauen",
    category: "rijeci",
    exampleHr: "Povjerenje se teško stječe, a lako gubi.",
    exampleDe: "Vertrauen gewinnt man schwer und verliert man leicht."
  },
  {
    id: 127,
    hr: "Dogovor",
    de: "Vereinbarung / Abmachung",
    category: "rijeci",
    exampleHr: "Držimo se našeg dogovora od jučer.",
    exampleDe: "Wir halten uns an unsere Abmachung von gestern."
  },
  {
    id: 128,
    hr: "Istina",
    de: "Wahrheit",
    category: "rijeci",
    exampleHr: "Uvijek je bolje odmah reći istinu.",
    exampleDe: "Es ist immer besser, sofort die Wahrheit zu sagen."
  },
  {
    id: 129,
    hr: "Laž",
    de: "Lüge",
    category: "rijeci",
    exampleHr: "To je čista laž, nemoj vjerovati u to.",
    exampleDe: "Das ist eine glatte Lüge, glaub nicht daran."
  },
  {
    id: 130,
    hr: "Ponašanje",
    de: "Verhalten / Benehmen",
    category: "rijeci",
    exampleHr: "Njegovo ponašanje me stvarno iznenadilo.",
    exampleDe: "Sein Verhalten hat mich wirklich überrascht."
  },
  {
    id: 131,
    hr: "Odnos",
    de: "Beziehung / Verhältnis",
    category: "rijeci",
    exampleHr: "Imamo vrlo otvoren i prijateljski odnos.",
    exampleDe: "Wir haben ein sehr offenes und freundschaftliches Verhältnis."
  },
  {
    id: 132,
    hr: "Prednost",
    de: "Vorteil",
    category: "rijeci",
    exampleHr: "Koja je glavna prednost ovog plana?",
    exampleDe: "Was ist der Hauptvorteil dieses Plans?"
  },
  {
    id: 133,
    hr: "Nedostatak",
    de: "Nachteil / Mangel",
    category: "rijeci",
    exampleHr: "Jedini nedostatak je visoka cijena.",
    exampleDe: "Der einzige Nachteil ist der hohe Preis."
  },
  {
    id: 134,
    hr: "Navika",
    de: "Gewohnheit",
    category: "rijeci",
    exampleHr: "Imam naviku ujutro popiti čašu vode.",
    exampleDe: "Ich habe die Gewohnheit, morgens ein Glas Wasser zu trinken."
  },
  {
    id: 135,
    hr: "Obaveza",
    de: "Pflicht / Verpflichtung",
    category: "rijeci",
    exampleHr: "Danas imam previše obaveza na poslu.",
    exampleDe: "Heute habe ich zu viele Verpflichtungen auf der Arbeit."
  },
  {
    id: 136,
    hr: "Raspoloženje",
    de: "Stimmung / Laune",
    category: "rijeci",
    exampleHr: "Danas sam u odličnom raspoloženju.",
    exampleDe: "Heute bin ich in ausgezeichneter Laune."
  },
  {
    id: 137,
    hr: "Strpljenje",
    de: "Geduld",
    category: "rijeci",
    exampleHr: "Za učenje jezika potrebno je puno strpljenja.",
    exampleDe: "Fürs Sprachenlernen braucht man viel Geduld."
  },
  {
    id: 138,
    hr: "Društvo",
    de: "Freundeskreis / Gesellschaft",
    category: "rijeci",
    exampleHr: "Uvijek je ugodno provoditi vrijeme u tvom društvu.",
    exampleDe: "Es ist immer angenehm, Zeit in deiner Gesellschaft zu verbringen."
  },
  {
    id: 139,
    hr: "Cilj",
    de: "Ziel",
    category: "rijeci",
    exampleHr: "Moj cilj je tečno govoriti hrvatski jezik.",
    exampleDe: "Mein Ziel ist es, fließend Kroatisch zu sprechen."
  },
  {
    id: 140,
    hr: "Uspjeh",
    de: "Erfolg",
    category: "rijeci",
    exampleHr: "Čestitam ti na velikom uspjehu!",
    exampleDe: "Ich gratuliere dir zum großen Erfolg!"
  },
  {
    id: 141,
    hr: "Razlog",
    de: "Grund / Ursache",
    category: "rijeci",
    exampleHr: "Koji je pravi razlog tvog kašnjenja?",
    exampleDe: "Was ist der wahre Grund für deine Verspätung?"
  },
  {
    id: 142,
    hr: "Rješenje",
    de: "Lösung",
    category: "rijeci",
    exampleHr: "Zajedno ćemo pronaći najbolje rješenje.",
    exampleDe: "Gemeinsam werden wir die beste Lösung finden."
  },
  {
    id: 143,
    hr: "Razlika",
    de: "Unterschied",
    category: "rijeci",
    exampleHr: "Koja je razlika između ova dva pojma?",
    exampleDe: "Was ist der Unterschied zwischen diesen zwei Begriffen?"
  },
  {
    id: 144,
    hr: "Izgovor",
    de: "Ausrede / Entschuldigung",
    category: "rijeci",
    exampleHr: "Nemoj tražiti izgovore, samo to napravi.",
    exampleDe: "Such keine Ausreden, mach es einfach."
  },
  {
    id: 145,
    hr: "Primjer",
    de: "Beispiel",
    category: "rijeci",
    exampleHr: "Možeš li mi dati jedan konkretan primjer?",
    exampleDe: "Kannst du mir ein konkretes Beispiel geben?"
  },
  {
    id: 146,
    hr: "Vijest",
    de: "Nachricht / Neuigkeit",
    category: "rijeci",
    exampleHr: "Imam jednu odličnu vijest za tebe!",
    exampleDe: "Ich habe eine tolle Neuigkeit für dich!"
  },
  {
    id: 147,
    hr: "Svađa",
    de: "Streit / Auseinandersetzung",
    category: "rijeci",
    exampleHr: "Glupa svađa nam je pokvarila cijeli dan.",
    exampleDe: "Ein dummer Streit hat uns den ganzen Tag verdorben."
  },
  {
    id: 148,
    hr: "Odgovornost",
    de: "Verantwortung",
    category: "rijeci",
    exampleHr: "Spreman sam preuzeti punu odgovornost.",
    exampleDe: "Ich bin bereit, die volle Verantwortung zu übernehmen."
  },
  {
    id: 149,
    hr: "Okolnost",
    de: "Umstand",
    category: "rijeci",
    exampleHr: "U ovim okolnostima moramo biti oprezni.",
    exampleDe: "Unter diesen Umständen müssen wir vorsichtig sein."
  },
  {
    id: 150,
    hr: "Promjena",
    de: "Veränderung / Wechsel",
    category: "rijeci",
    exampleHr: "Ponekad je promjena okoline upravo ono što nam treba.",
    exampleDe: "Manchmal ist ein Tapetenwechsel genau das, was wir brauchen."
  },

  // --- KATEGORIE: WICHTIGE ADJEKTIVE & BESCHREIBUNGEN (Pridjevi) ---
  {
    id: 151,
    hr: "Iskren / Iskrena",
    de: "ehrlich / aufrichtig",
    category: "pridjevi",
    exampleHr: "Cijenim ljude koji su uvijek iskreni.",
    exampleDe: "Ich schätze Menschen, die immer ehrlich sind."
  },
  {
    id: 152,
    hr: "Pouzdan / Pouzdana",
    de: "zuverlässig / verlässlich",
    category: "pridjevi",
    exampleHr: "On je izuzetno pouzdan prijatelj.",
    exampleDe: "Er ist ein äußerst zuverlässiger Freund."
  },
  {
    id: 153,
    hr: "Naporan / Naporna",
    de: "anstrengend",
    category: "pridjevi",
    exampleHr: "Put do Zagreba je bio prilično naporan.",
    exampleDe: "Die Fahrt nach Zagreb war ziemlich anstrengend."
  },
  {
    id: 154,
    hr: "Opušten / Opuštena",
    de: "entspannt / gelassen",
    category: "pridjevi",
    exampleHr: "Volim njegov opušten pristup životu.",
    exampleDe: "Ich mag seine entspannte Herangehensweise ans Leben."
  },
  {
    id: 155,
    hr: "Ljubazan / Ljubazna",
    de: "freundlich / liebenswürdig",
    category: "pridjevi",
    exampleHr: "Prodavačica u pekari je bila jako ljubazna.",
    exampleDe: "Die Verkäuferin in der Bäckerei war sehr freundlich."
  },
  {
    id: 156,
    hr: "Dosadan / Dosadna",
    de: "langweilig",
    category: "pridjevi",
    exampleHr: "Predavanje je bilo toliko dosadno da sam skoro zaspao.",
    exampleDe: "Der Vortrag war so langweilig, dass ich fast eingeschlafen wäre."
  },
  {
    id: 157,
    hr: "Uzbuđen / Uzbuđena",
    de: "aufgeregt / voller Vorfreude",
    category: "pridjevi",
    exampleHr: "Svi smo jako uzbuđeni zbog sutrašnjeg koncerta.",
    exampleDe: "Wir sind alle sehr aufgeregt wegen des morgigen Konzerts."
  },
  {
    id: 158,
    hr: "Razočaran / Razočarana",
    de: "enttäuscht",
    category: "pridjevi",
    exampleHr: "Nemoj biti razočaran ako ne uspije iz prve.",
    exampleDe: "Sei nicht enttäuscht, wenn es nicht beim ersten Mal klappt."
  },
  {
    id: 159,
    hr: "Ponosan / Ponosna",
    de: "stolz",
    category: "pridjevi",
    exampleHr: "Jako sam ponosan na tvoj napredak.",
    exampleDe: "Ich bin sehr stolz auf deinen Fortschritt."
  },
  {
    id: 160,
    hr: "Siguran / Sigurna",
    de: "sicher / gewiss",
    category: "pridjevi",
    exampleHr: "Jesi li potpuno siguran u te podatke?",
    exampleDe: "Bist du dir bei diesen Daten ganz sicher?"
  },
  {
    id: 161,
    hr: "Zahvalan / Zahvalna",
    de: "dankbar",
    category: "pridjevi",
    exampleHr: "Iznimno sam ti zahvalan na pomoći.",
    exampleDe: "Ich bin dir außerordentlich dankbar für die Hilfe."
  },
  {
    id: 162,
    hr: "Odgovoran / Odgovorna",
    de: "verantwortungsvoll",
    category: "pridjevi",
    exampleHr: "Ona je vrlo odgovorna i ozbiljna osoba.",
    exampleDe: "Sie ist eine sehr verantwortungsvolle und ernsthafte Person."
  },
  {
    id: 163,
    hr: "Tvrdoglav / Tvrdoglava",
    de: "stur / dickköpfig",
    category: "pridjevi",
    exampleHr: "Nema smisla raspravljati s njim, previše je tvrdoglav.",
    exampleDe: "Es hat keinen Sinn mit ihm zu diskutieren, er ist zu stur."
  },
  {
    id: 164,
    hr: "Osjetljiv / Osjetljiva",
    de: "empfindlich / sensibel",
    category: "pridjevi",
    exampleHr: "Nemoj se šaliti na taj račun, on je jako osjetljiv.",
    exampleDe: "Mach darüber keine Witze, er ist sehr sensibel."
  },
  {
    id: 165,
    hr: "Jednostavan / Jednostavna",
    de: "einfach / unkompliziert",
    category: "pridjevi",
    exampleHr: "Ovo je zapravo vrlo jednostavno rješenje.",
    exampleDe: "Das ist eigentlich eine sehr einfache Lösung."
  },
  {
    id: 166,
    hr: "Zahtjevan / Zahtjevna",
    de: "anspruchsvoll / fordernd",
    category: "pridjevi",
    exampleHr: "Ovaj projekt je tehnički vrlo zahtjevan.",
    exampleDe: "Dieses Projekt ist technisch sehr anspruchsvoll."
  },
  {
    id: 167,
    hr: "Oprezan / Oprezna",
    de: "vorsichtig",
    category: "pridjevi",
    exampleHr: "Budi oprezan dok voziš po kiši.",
    exampleDe: "Sei vorsichtig, während du im Regen fährst."
  },
  {
    id: 168,
    hr: "Sposoban / Sposobna",
    de: "fähig / kompetent",
    category: "pridjevi",
    exampleHr: "Ona je izuzetno sposobna voditeljica tima.",
    exampleDe: "Sie ist eine äußerst fähige Teamleiterin."
  },
  {
    id: 169,
    hr: "Duhovit / Duhovita",
    de: "witzig / humorvoll",
    category: "pridjevi",
    exampleHr: "Njegove priče su uvijek nevjerojatno duhovite.",
    exampleDe: "Seine Geschichten sind immer unglaublich witzig."
  },
  {
    id: 170,
    hr: "Pristojan / Pristojna",
    de: "höflich / anständig",
    category: "pridjevi",
    exampleHr: "Uvijek se ponašaj pristojno prema starijima.",
    exampleDe: "Verhalte dich immer höflich gegenüber Älteren."
  },
  {
    id: 171,
    hr: "Sumnjiv / Sumnjiva",
    de: "verdächtig / fragwürdig",
    category: "pridjevi",
    exampleHr: "Cijela ta ponuda mi zvuči malo sumnjivo.",
    exampleDe: "Dieses ganze Angebot klingt für mich etwas verdächtig."
  },
  {
    id: 172,
    hr: "Čudan / Čudna",
    de: "seltsam / merkwürdig",
    category: "pridjevi",
    exampleHr: "Danas se dogodila jedna jako čudna stvar.",
    exampleDe: "Heute ist eine sehr seltsame Sache passiert."
  },
  {
    id: 173,
    hr: "Pametan / Pametna",
    de: "klug / schlau",
    category: "pridjevi",
    exampleHr: "To je bila izuzetno pametna odluka.",
    exampleDe: "Das war eine außerordentlich kluge Entscheidung."
  },
  {
    id: 174,
    hr: "Moguć / Moguća",
    de: "möglich / machbar",
    category: "pridjevi",
    exampleHr: "Je li moguć dogovor oko termina?",
    exampleDe: "Ist eine Vereinbarung bezüglich des Termins möglich?"
  },
  {
    id: 175,
    hr: "Nemoguć / Nemoguća",
    de: "unmöglich",
    category: "pridjevi",
    exampleHr: "Završiti to za jedan dan je praktički nemoguće.",
    exampleDe: "Das an einem Tag zu beenden ist praktisch unmöglich."
  },
  {
    id: 176,
    hr: "Točan / Točna",
    de: "pünktlich / exakt / richtig",
    category: "pridjevi",
    exampleHr: "Vlak je bio točan u minutu.",
    exampleDe: "Der Zug war auf die Minute pünktlich."
  },
  {
    id: 177,
    hr: "Pogrešan / Pogrešna",
    de: "falsch / verkehrt",
    category: "pridjevi",
    exampleHr: "Skrenuo si u pogrešnu ulicu.",
    exampleDe: "Du bist in die falsche Straße eingebogen."
  },
  {
    id: 178,
    hr: "Prirodan / Prirodna",
    de: "natürlich / ungekünstelt",
    category: "pridjevi",
    exampleHr: "Njezin osmijeh je skroz prirodan.",
    exampleDe: "Ihr Lächeln ist völlig natürlich."
  },
  {
    id: 179,
    hr: "Napredan / Napredna",
    de: "fortgeschritten",
    category: "pridjevi",
    exampleHr: "Ima već vrlo napredno znanje jezika.",
    exampleDe: "Er hat bereits sehr fortgeschrittene Sprachkenntnisse."
  },
  {
    id: 180,
    hr: "Uobičajen / Uobičajena",
    de: "üblich / gewöhnlich",
    category: "pridjevi",
    exampleHr: "To je sasvim uobičajen postupak u takvim slučajevima.",
    exampleDe: "Das ist ein ganz übliches Vorgehen in solchen Fällen."
  },

  // --- KATEGORIE: WICHTIGE VERBEN FÜR DIE KOMMUNIKATION (Glagoli) ---
  {
    id: 181,
    hr: "Predložiti",
    de: "vorschlagen",
    category: "verben",
    exampleHr: "Mogu li predložiti jedno alternativno rješenje?",
    exampleDe: "Darf ich eine alternative Lösung vorschlagen?"
  },
  {
    id: 182,
    hr: "Prihvatiti",
    de: "annehmen / akzeptieren",
    category: "verben",
    exampleHr: "Rado prihvaćam tvoj poziv na večeru.",
    exampleDe: "Ich nehme deine Einladung zum Abendessen gerne an."
  },
  {
    id: 183,
    hr: "Odbiti",
    de: "ablehnen / absagen",
    category: "verben",
    exampleHr: "Morao sam odbiti ponudu jer nemam vremena.",
    exampleDe: "Ich musste das Angebot ablehnen, weil ich keine Zeit habe."
  },
  {
    id: 184,
    hr: "Primijetiti",
    de: "bemerken / wahrnehmen",
    category: "verben",
    exampleHr: "Jesi li primijetio kako je danas lijep dan?",
    exampleDe: "Hast du bemerkt, wie schön der Tag heute ist?"
  },
  {
    id: 185,
    hr: "Pretpostaviti",
    de: "vermuten / annehmen",
    category: "verben",
    exampleHr: "Pretpostavljam da stiže oko šest sati.",
    exampleDe: "Ich vermute, dass er gegen 18 Uhr ankommt."
  },
  {
    id: 186,
    hr: "Sumnjati",
    de: "zweifeln / misstrauen",
    category: "verben",
    exampleHr: "Nemam razloga sumnjati u njegove riječi.",
    exampleDe: "Ich habe keinen Grund, an seinen Worten zu zweifeln."
  },
  {
    id: 187,
    hr: "Obećati",
    de: "versprechen",
    category: "verben",
    exampleHr: "Obećao si mi da ćeš doći na vrijeme.",
    exampleDe: "Du hast mir versprochen, dass du pünktlich kommst."
  },
  {
    id: 188,
    hr: "Žaliti se",
    de: "sich beschweren / klagen",
    category: "verben",
    exampleHr: "On se stalno žali na vremenske prilike.",
    exampleDe: "Er beschwert sich ständig über das Wetter."
  },
  {
    id: 189,
    hr: "Izbjeći",
    de: "vermeiden / umgehen",
    category: "verben",
    exampleHr: "Želim izbjeći prometnu gužvu u centru.",
    exampleDe: "Ich möchte den Stau im Zentrum vermeiden."
  },
  {
    id: 190,
    hr: "Podržati",
    de: "unterstützen / befürworten",
    category: "verben",
    exampleHr: "Uvijek ću te podržati u tvojim idejama.",
    exampleDe: "Ich werde dich immer bei deinen Ideen unterstützen."
  },
  {
    id: 191,
    hr: "Utjecati",
    de: "beeinflussen",
    category: "verben",
    exampleHr: "Vrijeme često utječe na moje raspoloženje.",
    exampleDe: "Das Wetter beeinflusst oft meine Laune."
  },
  {
    id: 192,
    hr: "Odlučiti",
    de: "entscheiden / beschließen",
    category: "verben",
    exampleHr: "Teško mi je odlučiti što obući danas.",
    exampleDe: "Es fällt mir schwer zu entscheiden, was ich heute anziehe."
  },
  {
    id: 193,
    hr: "Prepoznati",
    de: "wiedererkennen",
    category: "verben",
    exampleHr: "Jedva sam te prepoznao s novom frizurom!",
    exampleDe: "Ich habe dich mit der neuen Frisur kaum wiedererkannt!"
  },
  {
    id: 194,
    hr: "Dopustiti",
    de: "erlauben / gestatten",
    category: "verben",
    exampleHr: "Možeš li mi dopustiti da završim rečenicu?",
    exampleDe: "Kannst du mir erlauben, den Satz zu beenden?"
  },
  {
    id: 195,
    hr: "Zabraniti",
    de: "verbieten",
    category: "verben",
    exampleHr: "Liječnik mu je zabranio teški fizički rad.",
    exampleDe: "Der Arzt hat ihm schwere körperliche Arbeit verboten."
  },
  {
    id: 196,
    hr: "Iznenaditi",
    de: "überraschen",
    category: "verben",
    exampleHr: "Htio bih je iznenaditi lijepim poklonom.",
    exampleDe: "Ich möchte sie mit einem schönen Geschenk überraschen."
  },
  {
    id: 197,
    hr: "Očekivati",
    de: "erwarten",
    category: "verben",
    exampleHr: "Nisam očekivao da će biti toliko ljudi.",
    exampleDe: "Ich habe nicht erwartet, dass so viele Leute da sein würden."
  },
  {
    id: 198,
    hr: "Tražiti",
    de: "suchen / fordern",
    category: "verben",
    exampleHr: "Cijelo jutro tražim ključeve od stana.",
    exampleDe: "Den ganzen Morgen suche ich die Wohnungsschlüssel."
  },
  {
    id: 199,
    hr: "Vjerovati",
    de: "glauben / vertrauen",
    category: "verben",
    exampleHr: "Vjerujem da je pred nama odlična budućnost.",
    exampleDe: "Ich glaube, dass eine tolle Zukunft vor uns liegt."
  },
  {
    id: 200,
    hr: "Promijeniti",
    de: "verändern / wechseln",
    category: "verben",
    exampleHr: "Ponekad treba promijeniti kut gledanja.",
    exampleDe: "Manchmal muss man den Blickwinkel verändern."
  },
  {
    id: 201,
    hr: "Shvatiti",
    de: "begreifen / verstehen",
    category: "verben",
    exampleHr: "Napokon sam shvatio kako ovaj uređaj radi.",
    exampleDe: "Endlich habe ich begriffen, wie dieses Gerät funktioniert."
  },
  {
    id: 202,
    hr: "Dokazati",
    de: "beweisen",
    category: "verben",
    exampleHr: "Djelima se najbolje može dokazati iskrenost.",
    exampleDe: "Mit Taten kann man Aufrichtigkeit am besten beweisen."
  },
  {
    id: 203,
    hr: "Izabrati",
    de: "auswählen / küren",
    category: "verben",
    exampleHr: "Moraš sam izabrati što ti najviše odgovara.",
    exampleDe: "Du musst selbst auswählen, was dir am besten passt."
  },
  {
    id: 204,
    hr: "Ponoviti",
    de: "wiederholen",
    category: "verben",
    exampleHr: "Možete li, molim vas, ponoviti zadnju riječ?",
    exampleDe: "Können Sie bitte das letzte Wort wiederholen?"
  },
  {
    id: 205,
    hr: "Smetati",
    de: "stören",
    category: "verben",
    exampleHr: "Oprosti ako ti smetam, imam samo jedno pitanje.",
    exampleDe: "Entschuldige, falls ich störe, ich habe nur eine Frage."
  },

  // --- KATEGORIE: SIGNAL- & BINDEWÖRTER / ADVERBIEN (Veznici i prilozi) ---
  {
    id: 206,
    hr: "Zapravo",
    de: "eigentlich / in Wirklichkeit",
    category: "veznici",
    exampleHr: "Zapravo uopće nisam bio umoran.",
    exampleDe: "Eigentlich war ich überhaupt nicht müde."
  },
  {
    id: 207,
    hr: "Vjerojatno",
    de: "wahrscheinlich",
    category: "veznici",
    exampleHr: "Vjerojatno ćemo stići prije večere.",
    exampleDe: "Wahrscheinlich kommen wir vor dem Abendessen an."
  },
  {
    id: 208,
    hr: "Doduše",
    de: "zwar / allerdings",
    category: "veznici",
    exampleHr: "Skupo je, doduše kvaliteta je izvrsna.",
    exampleDe: "Es ist teuer, allerdings ist die Qualität hervorragend."
  },
  {
    id: 209,
    hr: "Ipak",
    de: "trotzdem / dennoch",
    category: "veznici",
    exampleHr: "Bila je kiša, ali smo ipak otišli u šetnju.",
    exampleDe: "Es hat geregnet, aber wir sind trotzdem spazieren gegangen."
  },
  {
    id: 210,
    hr: "Napokon",
    de: "endlich / schließlich",
    category: "veznici",
    exampleHr: "Napokon je stigao vikend!",
    exampleDe: "Endlich ist das Wochenende da!"
  },
  {
    id: 211,
    hr: "Očito",
    de: "offensichtlich / augenscheinlich",
    category: "veznici",
    exampleHr: "Očito je došlo do nesporazuma među nama.",
    exampleDe: "Offensichtlich kam es zu einem Missverständnis unter uns."
  },
  {
    id: 212,
    hr: "Iznenada",
    de: "plötzlich / unerwartet",
    category: "veznici",
    exampleHr: "Iznenada je počela padati jaka kiša.",
    exampleDe: "Plötzlich begann es stark zu regnen."
  },
  {
    id: 213,
    hr: "Posebno",
    de: "besonders / speziell",
    category: "veznici",
    exampleHr: "Posebno mi se svidio sladoled od smokve.",
    exampleDe: "Besonders gut hat mir das Feigeneis geschmeckt."
  },
  {
    id: 214,
    hr: "Barem",
    de: "wenigstens / mindestens",
    category: "veznici",
    exampleHr: "Ostani s nama barem još pola sata.",
    exampleDe: "Bleib wenigstens noch eine halbe Stunde bei uns."
  },
  {
    id: 215,
    hr: "Međutim",
    de: "jedoch / hingegen",
    category: "veznici",
    exampleHr: "Planirali smo put, međutim planovi su se promijenili.",
    exampleDe: "Wir planten die Reise, jedoch haben sich die Pläne geändert."
  },
  {
    id: 216,
    hr: "Nažalost",
    de: "leider / bedauerlicherweise",
    category: "veznici",
    exampleHr: "Nažalost ne mogu doći na tvoj rođendan.",
    exampleDe: "Leider kann ich nicht zu deinem Geburtstag kommen."
  },
  {
    id: 217,
    hr: "Srećom",
    de: "glücklicherweise / zum Glück",
    category: "veznici",
    exampleHr: "Srećom, nitko nije ozlijeđen u prometu.",
    exampleDe: "Glücklicherweise wurde niemand im Verkehr verletzt."
  },
  {
    id: 218,
    hr: "Stalno",
    de: "ständig / andauernd",
    category: "veznici",
    exampleHr: "Stalno zaboravljam gdje sam ostavio naočale.",
    exampleDe: "Ich vergesse ständig, wo ich meine Brille gelassen habe."
  },
  {
    id: 219,
    hr: "Rijetko",
    de: "selten",
    category: "veznici",
    exampleHr: "Rijetko viđam rođake koji žive u inozemstvu.",
    exampleDe: "Ich sehe Verwandte, die im Ausland leben, nur selten."
  },
  {
    id: 220,
    hr: "Povremeno",
    de: "gelegentlich / ab und zu",
    category: "veznici",
    exampleHr: "Povremeno odem na trčanje uz more.",
    exampleDe: "Gelegentlich gehe ich am Meer joggen."
  },
  {
    id: 221,
    hr: "Namjerno",
    de: "absichtlich",
    category: "veznici",
    exampleHr: "Nisam to napravio namjerno, bila je slučajnost.",
    exampleDe: "Ich habe das nicht mit Absicht getan, es war Zufall."
  },
  {
    id: 222,
    hr: "Slučajno",
    de: "zufällig / versehentlich",
    category: "veznici",
    exampleHr: "Slučajno smo se sreli na tržnici.",
    exampleDe: "Wir haben uns zufällig auf dem Markt getroffen."
  },
  {
    id: 223,
    hr: "Inače",
    de: "übrigens / ansonsten",
    category: "veznici",
    exampleHr: "Što inače radiš kad imaš slobodnog vremena?",
    exampleDe: "Was machst du sonst so, wenn du Freizeit hast?"
  },
  {
    id: 224,
    hr: "Hitno",
    de: "dringend / eilig",
    category: "veznici",
    exampleHr: "Trebam tvoju pomoć, stvar je prilično hitna.",
    exampleDe: "Ich brauche deine Hilfe, die Sache ist ziemlich dringend."
  },
  {
    id: 225,
    hr: "Svakako",
    de: "auf jeden Fall / sicherlich",
    category: "veznici",
    exampleHr: "Svakako ću ti se javiti čim stignem.",
    exampleDe: "Ich werde mich auf jeden Fall melden, sobald ich da bin."
  },
  {
    id: 226,
    hr: "Nikako",
    de: "auf keinen Fall / keineswegs",
    category: "veznici",
    exampleHr: "Nikako ne smiješ zaboraviti ponijeti putovnicu.",
    exampleDe: "Du darfst auf keinen Fall vergessen, den Reisepass mitzunehmen."
  },
  {
    id: 227,
    hr: "Jedva",
    de: "kaum / mit Mühe",
    category: "veznici",
    exampleHr: "Jedva čekam ljetni odmor u Hrvatskoj!",
    exampleDe: "Ich kann den Sommerurlaub in Kroatien kaum erwarten!"
  },
  {
    id: 228,
    hr: "Potpuno",
    de: "vollständig / ganz und gar",
    category: "veznici",
    exampleHr: "Potpuno te razumijem i slažem se s tobom.",
    exampleDe: "Ich verstehe dich vollkommen und stimme dir zu."
  },
  {
    id: 229,
    hr: "Uglavnom",
    de: "hauptsächlich / größtenteils",
    category: "veznici",
    exampleHr: "Uglavnom kuham doma umjesto da jedem vani.",
    exampleDe: "Hauptsächlich koche ich zuhause, anstatt auswärts zu essen."
  },
  {
    id: 230,
    hr: "Uskoro",
    de: "bald / in Kürze",
    category: "veznici",
    exampleHr: "Vidimo se uskoro na moru!",
    exampleDe: "Wir sehen uns bald am Meer!"
  }
];

// Kategorien-Metadaten für Filter & Badges
var CATEGORIES = {
  all: { name: "Sve (Alle)", icon: "✨" },
  fav: { name: "Favoriten", icon: "⭐" },
  rijeci: { name: "Wichtige Nomen", icon: "🏛️" },
  pridjevi: { name: "Eigenschaften", icon: "🎨" },
  verben: { name: "Wichtige Verben", icon: "⚡" },
  veznici: { name: "Signalwörter & Bindewörter", icon: "🔗" },
  kafic: { name: "Kafić & Ausgehen", icon: "☕" },
  slang: { name: "Slang & Spika", icon: "🔥" },
  smalltalk: { name: "Smalltalk & Phrasen", icon: "💬" },
  treffen: { name: "Treffen & Pläne", icon: "📍" },
  alltag: { name: "Alltag & Unterwegs", icon: "🛒" },
  gefuehle: { name: "Gefühle & Reaktionen", icon: "❤️" }
};

// 12 Authentische Alltagssituationen für den Spika-Trainer (Herkunftssprachler)
var SPIKA_DIALOGS = [
  {
    id: "dlg-1",
    category: "Kafić & Ausgehen",
    emoji: "☕",
    title: "Kaffee bestellen wie ein Local",
    situation: "Der Kellner kommt an deinen Tisch im Café: »Izvolite, što ćete popiti?«",
    prompt: "Wie bestellst du ganz entspannt wie ein Einheimischer?",
    options: [
      {
        text: "»Može jedna bijela kava s toplim mlijekom i čaša vode, molim vas.«",
        isCorrect: true,
        feedback: "Perfekt! Kroaten sagen fast immer »Može...« (wörtlich: »Kann [sein]...«) anstelle von »Ich will / Ja hoću«. Es klingt höflich, entspannt und typisch lokal."
      },
      {
        text: "»Ja želim uzeti kavu sa mlijekom.«",
        isCorrect: false,
        feedback: "Klingt wie eine wörtliche Übersetzung aus dem Deutschen (»Ich will nehmen«). Das sagt man im Kroatischen so nicht."
      },
      {
        text: "»Dajte mi čaj od mente odmah.«",
        isCorrect: false,
        feedback: "Zu forsch und herrisch. »Može... molim vas« ist der goldene Standard."
      }
    ]
  },
  {
    id: "dlg-2",
    category: "Kafić & Ausgehen",
    emoji: "🧾",
    title: "Die Rechnung begleichen",
    situation: "Ihr seid fertig im Lokal und der Kellner geht an eurem Tisch vorbei.",
    prompt: "Wie bittest du ihn natürlich um die Rechnung?",
    options: [
      {
        text: "»Može račun, molim vas? / Da platimo!«",
        isCorrect: true,
        feedback: "Genau richtig! »Može račun« oder »Da platimo!« (»Dass wir zahlen!«) sind die beiden universellen Floskeln beim Bezahlen."
      },
      {
        text: "»Ja bih želio platiti svoj dug ovdje.«",
        isCorrect: false,
        feedback: "Viel zu bürokratisch – »dug« bedeutet buchstäblich Schulden/Kredite bei der Bank!"
      },
      {
        text: "»Koliko novaca vi hoćete od mene?«",
        isCorrect: false,
        feedback: "Viel zu grob und unüblich."
      }
    ]
  },
  {
    id: "dlg-3",
    category: "Treffen & Pläne",
    emoji: "⏰",
    title: "Verspätung beim Treffen",
    situation: "Dein Freund wartet schon 15 Minuten am Treffpunkt und schreibt: »Pa gdje si ti do sad?!«",
    prompt: "Wie antwortest du authentisch, dass du gleich da bist?",
    options: [
      {
        text: "»Evo me, zapeo sam u gužvi, stižem za dvije minute!«",
        isCorrect: true,
        feedback: "Treffer! »Evo me« (»Hier bin ich schon«) und »zapeo u gužvi« (»im Stau/Gewühl festgesteckt«) sind absolute Standard-Chunks."
      },
      {
        text: "»Ja kasnim zato što promet je loš, čekaj me.«",
        isCorrect: false,
        feedback: "Grammatikalisch und klanglich sehr holprig aus dem Deutschen übersetzt."
      },
      {
        text: "»Nisam mogao doći jer sam zaboravio vrijeme.«",
        isCorrect: false,
        feedback: "Klingt distanziert, unglaubwürdig und kalt."
      }
    ]
  },
  {
    id: "dlg-4",
    category: "Smalltalk & Phrasen",
    emoji: "👋",
    title: "Zufälliges Wiedersehen auf der Straße",
    situation: "Du triffst unerwartet einen alten Bekannten in der Fußgängerzone.",
    prompt: "Wie begrüßt du ihn mit echter kroatischer Herzlichkeit?",
    options: [
      {
        text: "»Ooo pa di si ti, šta ima novo? Sto godina te nisam vidio!«",
        isCorrect: true,
        feedback: "Brillant! »Di si ti« (umgangssprachlich für »gdje si«) und »sto godina« (»seit hundert Jahren«) nutzt jeder für ein freudiges Wiedersehen."
      },
      {
        text: "»Dobar dan moj stari prijatelju, kako je tvoj život danas?«",
        isCorrect: false,
        feedback: "Klingt wie aus einem altertümlichen Schulbuch aus dem 19. Jahrhundert!"
      },
      {
        text: "»Hej ti, zašto hodaš ovdje po cesti?«",
        isCorrect: false,
        feedback: "Klingt eher vorwurfsvoll und aggressiv als herzlich."
      }
    ]
  },
  {
    id: "dlg-5",
    category: "Alltag & Unterwegs",
    emoji: "🥐",
    title: "In der Bäckerei (Pekara)",
    situation: "Du stehst an der Bäckerei-Theke und willst einen warmen Fleisch-Burek.",
    prompt: "Wie fragst du die Verkäuferin, ob der Burek frisch ist?",
    options: [
      {
        text: "»Dobar dan! Je li burek friški? Dajte mi jedan s mesom, molim vas.«",
        isCorrect: true,
        feedback: "Top! »Friški« ist das typischste Wort für ofenfrisch/warm. »Jedan s mesom« ist die klare Ansage."
      },
      {
        text: "»Ja bih htio kupiti komad novog toplog bureka s mesom.«",
        isCorrect: false,
        feedback: "Niemand sagt »komad novog bureka«. »Jedan s mesom« reicht völlig."
      },
      {
        text: "»Molim vas jedan burek koji nije star od jučer.«",
        isCorrect: false,
        feedback: "Klingt misstrauisch und unhöflich gegenüber dem Personal."
      }
    ]
  },
  {
    id: "dlg-6",
    category: "Gefühle & Reaktionen",
    emoji: "🛋️",
    title: "Einladung freundlich ablehnen",
    situation: "Ein Kumpel ruft um 21 Uhr an: »Ajde van, ekipa se skupila u gradu!« – Du bist aber total k.o.",
    prompt: "Wie sagst du ehrlich und lässig ab, ohne ihn zu verprellen?",
    options: [
      {
        text: "»Ajme, mrtav umoran sam danas, stvarno mi se ne da. Možemo sutra na kavu?«",
        isCorrect: true,
        feedback: "Sehr gut! »Ne da mi se« ist der #1 Ausdruck für »keinen Bock / keine Energie haben«. Ehrlich, direkt und sympathisch."
      },
      {
        text: "»Moje tijelo nema dovoljno energije za izlazak večeras.«",
        isCorrect: false,
        feedback: "Klingt wie ein Roboter oder Arztbericht!"
      },
      {
        text: "»Ne želim vas gledati jer ste dosadni.«",
        isCorrect: false,
        feedback: "Unnötig beleidigend."
      }
    ]
  },
  {
    id: "dlg-7",
    category: "Treffen & Pläne",
    emoji: "🔥",
    title: "Begeisterte Zusage zu Plänen",
    situation: "Ein Freund schlägt vor: »Idemo večeras bacit đir do rive pa na ćevape?«",
    prompt: "Wie stimmst du begeistert und verbindlich zu?",
    options: [
      {
        text: "»Može, zvuči top! Računaj na mene.«",
        isCorrect: true,
        feedback: "Volltreffer! »Računaj na mene« (»Zähl auf mich«) und »zvuči top« werden ständig verwendet."
      },
      {
        text: "»Ja prihvaćam tvoj prijedlog za šetnju i hranu.«",
        isCorrect: false,
        feedback: "Klingt wie die Annahme eines geschäftlichen Vertragsangebots!"
      },
      {
        text: "»Možda dođem ako nema ništa bolje za raditi.«",
        isCorrect: false,
        feedback: "Klingt extrem unmotiviert und unfreundlich."
      }
    ]
  },
  {
    id: "dlg-8",
    category: "Alltag & Unterwegs",
    emoji: "🍲",
    title: "Familie & Gastfreundschaft",
    situation: "Deine Tante/Oma legt dir zum dritten Mal Fleisch nach: »Ma uzmi još malo, nisi ništa jeo!« – Du platzt gleich.",
    prompt: "Wie lehnst du liebevoll, aber bestimmt ab?",
    options: [
      {
        text: "»Hvala ti puno, tetka, preukusno je, ali stvarno ne mogu više – puknut ću!«",
        isCorrect: true,
        feedback: "Klassiker! »Puknut ću« (»Ich platze gleich!«) ist der humorvolle und herzliche Weg, die Tante/Oma vom Nachschenken abzuhalten."
      },
      {
        text: "»Prestani mi stavljati hranu, to je previše kalorija.«",
        isCorrect: false,
        feedback: "Verletzt die Gefühle der Gastgeberin und klingt kalt."
      },
      {
        text: "»Ova hrana je gotova za mene sada.«",
        isCorrect: false,
        feedback: "Falsches Kroatisch – ergibt keinen Sinn."
      }
    ]
  },
  {
    id: "dlg-9",
    category: "Gefühle & Reaktionen",
    emoji: "🚗",
    title: "Reaktion auf ein Missgeschick",
    situation: "Ein Freund ruft an: »Pukla mi je guma usred autoputa i nemam rezervnu!«",
    prompt: "Wie reagierst du spontan und mitfühlend?",
    options: [
      {
        text: "»Ma daj nemoj me zezat! Jel treba pomoć, di si točno?«",
        isCorrect: true,
        feedback: "Ausgezeichnet! »Ma daj nemoj me zezat!« (»Machst du Witze / Willst du mich verarschen?!«) drückt echtes Mitgefühl aus."
      },
      {
        text: "»To je vrlo nesretan događaj s gumom, popravi to sam.«",
        isCorrect: false,
        feedback: "Emotionslos und herzlos wie ein Behördenschreiben."
      },
      {
        text: "»Nije me briga za tvoje gume na autu.«",
        isCorrect: false,
        feedback: "Unverschämt und rüpelhaft."
      }
    ]
  },
  {
    id: "dlg-10",
    category: "Smalltalk & Phrasen",
    emoji: "☀️",
    title: "Sommerhitze & Strand",
    situation: "Es hat 38 Grad im Schatten im Juli in Kroatien und ihr schwitzt in der Wohnung.",
    prompt: "Wie schlägst du umgangssprachlich vor, sofort ins Meer zu springen?",
    options: [
      {
        text: "»Uf, koja sparina danas, ne da se disat! Idemo se bacit u more.«",
        isCorrect: true,
        feedback: "Authentischer geht's nicht! »Sparina« (schwüle Sommerhitze) und »bacit se u more« (»ins Meer werfen/springen«) ist purer Adria-Lifestyle."
      },
      {
        text: "»Zrak ima visoku temperaturu, predlažem plivanje u vodi.«",
        isCorrect: false,
        feedback: "Klingt wie ein wissenschaftlicher Wetterbericht von Meteorologen."
      },
      {
        text: "»Vruće je, ostat ću unutra pod klimom cijeli dan.«",
        isCorrect: false,
        feedback: "Kein Aufbruch zum Strand."
      }
    ]
  },
  {
    id: "dlg-11",
    category: "Kafić & Ausgehen",
    emoji: "🍽️",
    title: "Im Restaurant nachfragen",
    situation: "Ihr wartet schon seit 40 Minuten auf eure Hauptspeisen und der Kellner schaut kurz herüber.",
    prompt: "Wie fragst du höflich nach dem Stand der Dinge?",
    options: [
      {
        text: "»Oprostite, samo da provjerimo – jeste li možda zaboravili na našu narudžbu?«",
        isCorrect: true,
        feedback: "Perfekt formuliert! »Samo da provjerimo« (»Nur kurz zur Überprüfung«) ist die höflichste und effektivste Art nachzufragen."
      },
      {
        text: "»Gdje je hrana, umiremo od gladi ovdje već sto sati!«",
        isCorrect: false,
        feedback: "Zu forsch und aggressiv für den ersten Hinweis."
      },
      {
        text: "»Zašto vi radite tako sporo danas u kuhinji?«",
        isCorrect: false,
        feedback: "Unangemessen provozierend."
      }
    ]
  },
  {
    id: "dlg-12",
    category: "Slang & Spika",
    emoji: "🌙",
    title: "Verabschiedung in der Runde",
    situation: "Es ist spät, die Kumpels trinken noch ein Bier, aber du musst morgen früh raus.",
    prompt: "Wie verabschiedest du dich lässig und sympathisch von der Gruppe?",
    options: [
      {
        text: "»Ekipa, ja polako moram gibat, rano se ustajem. Čujemo se sutra, ajde bok!«",
        isCorrect: true,
        feedback: "Legendär! »Ekipa« (Truppe/Leute), »moram gibat« (»muss langsam abdüsen/los«) und »ajde bok!« bilden den perfekten Abgang."
      },
      {
        text: "»Ja sada napuštam ovu zgradu jer moram spavati.«",
        isCorrect: false,
        feedback: "Klingt hölzern und fast schon gruselig!"
      },
      {
        text: "»Odlazim zauvijek, laku noć svima.«",
        isCorrect: false,
        feedback: "Viel zu theatralisch!"
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.VOCAB_DATA = VOCAB_DATA;
  window.CATEGORIES = CATEGORIES;
  window.SPIKA_DIALOGS = SPIKA_DIALOGS;
}

