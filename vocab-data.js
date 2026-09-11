// Kroatische Vokabeldatenbank - Speziell kuratiert für alltagstaugliche Kommunikation & Herkunftssprachler
const VOCAB_DATA = [
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
  }
];

// Kategorien-Metadaten für Filter & Badges
const CATEGORIES = {
  all: { name: "Sve (Alle)", icon: "✨" },
  kafic: { name: "Kafić & Ausgehen", icon: "☕" },
  slang: { name: "Slang & Spika", icon: "🔥" },
  smalltalk: { name: "Smalltalk & Chunks", icon: "💬" },
  treffen: { name: "Treffen & Pläne", icon: "📍" },
  alltag: { name: "Alltag & Unterwegs", icon: "🛒" },
  gefuehle: { name: "Gefühle & Reaktionen", icon: "❤️" },
  verben: { name: "Flüssige Verben", icon: "⚡" }
};
