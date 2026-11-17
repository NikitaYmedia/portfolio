/* Language switcher: English (default), Deutsch, Dansk, Українська.
   English text lives in the HTML. Every element whose text matches a key below gets translated.
   To fix or add a translation, edit the row: [English, German, Danish, Ukrainian]. */
(function () {
    var LANGS = ['en', 'de', 'da', 'uk'];
    var LOCALE = { en: 'en-GB', de: 'de-DE', da: 'da-DK', uk: 'uk-UA' };

    var ROWS = [
        // page titles / meta
        ["Nikita Yeltsov — Frontend Developer", "Nikita Yeltsov — Frontend-Entwickler", "Nikita Yeltsov — Frontend-udvikler", "Nikita Yeltsov — Frontend-розробник"],
        ["Portfolio of Nikita Yeltsov, frontend developer.", "Portfolio von Nikita Yeltsov, Frontend-Entwickler.", "Portfolio for Nikita Yeltsov, frontend-udvikler.", "Портфоліо Nikita Yeltsov, frontend-розробника."],
        ["All projects – Nikita Yeltsov", "Alle Projekte – Nikita Yeltsov", "Alle projekter – Nikita Yeltsov", "Усі проєкти – Nikita Yeltsov"],
        ["All projects by Nikita Yeltsov, a frontend developer.", "Alle Projekte von Nikita Yeltsov, Frontend-Entwickler.", "Alle projekter af Nikita Yeltsov, frontend-udvikler.", "Усі проєкти Nikita Yeltsov, frontend-розробника."],

        // header / navigation
        ["Skip to content", "Zum Inhalt springen", "Gå til indhold", "Перейти до вмісту"],
        ["Design Engineer", "Design Engineer", "Design Engineer", "Design-інженер"],
        ["Works", "Projekte", "Projekter", "Роботи"],
        ["Philosophy", "Philosophie", "Filosofi", "Філософія"],
        ["Services", "Leistungen", "Ydelser", "Послуги"],
        ["Reviews", "Bewertungen", "Anmeldelser", "Відгуки"],
        ["Contact", "Kontakt", "Kontakt", "Контакти"],
        ["Initiate Brief", "Brief starten", "Start et brief", "Розпочати бриф"],

        // hero
        ["Denmark", "Dänemark", "Danmark", "Данія"],
        ["Portfolio & Selected Works", "Portfolio & ausgewählte Arbeiten", "Portfolio og udvalgte værker", "Портфоліо та вибрані роботи"],
        ["Disciplined code / intentional design.", "Disziplinierter Code / bewusstes Design.", "Disciplineret kode / bevidst design.", "Дисциплінований код / продуманий дизайн."],
        ["Frontend developer dedicated to building tactile, responsive web spaces where Scandinavian minimalism meets high-performance React & Next.js architecture.",
            "Frontend-Entwickler mit dem Anspruch, taktile, responsive Weberlebnisse zu bauen, in denen skandinavischer Minimalismus auf hochperformante React- & Next.js-Architektur trifft.",
            "Frontend-udvikler, der bygger taktile, responsive weboplevelser, hvor skandinavisk minimalisme møder højtydende React- og Next.js-arkitektur.",
            "Frontend-розробник, що створює тактильні адаптивні веб-простори, де скандинавський мінімалізм поєднується з високопродуктивною архітектурою на React і Next.js."],
        ["Explore Selected Works", "Ausgewählte Arbeiten ansehen", "Se udvalgte værker", "Переглянути роботи"],
        ["Read Architecture Notes", "Architektur-Notizen lesen", "Læs arkitekturnoter", "Читати нотатки про архітектуру"],
        ["Performance", "Performance", "Ydeevne", "Продуктивність"],
        ["Architecture", "Architektur", "Arkitektur", "Архітектура"],
        ["Languages", "Sprachen", "Sprog", "Мови"],
        ["Frontend Engineer & Architect", "Frontend-Entwickler & Architekt", "Frontend-ingeniør og arkitekt", "Frontend-інженер та архітектор"],

        // philosophy
        ["Design Philosophy", "Design-Philosophie", "Designfilosofi", "Філософія дизайну"],
        ["Scandinavian Functionalism", "Skandinavischer Funktionalismus", "Skandinavisk funktionalisme", "Скандинавський функціоналізм"],
        ["“Good design is as little design as possible. Great code is invisible, performant, and enduring.”",
            "„Gutes Design ist so wenig Design wie möglich. Großartiger Code ist unsichtbar, performant und beständig.“",
            "»God design er så lidt design som muligt. Fantastisk kode er usynlig, hurtig og holdbar.«",
            "«Хороший дизайн — це якомога менше дизайну. Чудовий код — невидимий, швидкий і довговічний.»"],
        ["Derived from Dieter Rams and honed through Scandinavian architectural practice, my engineering ethos prioritizes content clarity over decorative clutter. Zero extraneous DOM nodes, zero runtime friction.",
            "Von Dieter Rams abgeleitet und durch skandinavische Architekturpraxis geschärft: Mein Engineering-Ethos stellt Klarheit des Inhalts über dekorativen Ballast. Keine überflüssigen DOM-Knoten, keine Reibung zur Laufzeit.",
            "Hentet fra Dieter Rams og finpudset gennem skandinavisk arkitekturpraksis prioriterer min ingeniørtilgang klarhed i indholdet frem for dekorativt rod. Ingen overflødige DOM-noder, ingen friktion i runtime.",
            "Філософія, що походить від Дітера Рамса й відточена скандинавською архітектурною практикою: я ставлю чіткість змісту вище за декоративний шум. Жодних зайвих DOM-вузлів, жодного тертя під час виконання."],
        ["Fast paint cycles, lean static assets and accessible, semantic markup from the very first commit.",
            "Schnelle Render-Zyklen, schlanke statische Assets und barrierefreies, semantisches Markup ab dem ersten Commit.",
            "Hurtige rendercyklusser, slanke statiske filer og tilgængeligt, semantisk markup fra allerførste commit.",
            "Швидке відмальовування, легкі статичні ресурси та доступна семантична розмітка з першого коміту."],
        ["Engineering", "Engineering", "Ingeniørarbejde", "Інженерія"],
        ["Strict TypeScript", "Striktes TypeScript", "Strikt TypeScript", "Строгий TypeScript"],
        ["Typed components and typed content files. Deterministic, defensive compile-time safety across the interface.",
            "Typisierte Komponenten und typisierte Inhaltsdateien. Deterministische, defensive Sicherheit zur Compile-Zeit in der gesamten Oberfläche.",
            "Typede komponenter og typede indholdsfiler. Deterministisk, defensiv sikkerhed på kompileringstidspunktet i hele brugerfladen.",
            "Типізовані компоненти та типізовані файли контенту. Детермінована, захисна безпека на етапі компіляції в усьому інтерфейсі."],
        ["Localization", "Lokalisierung", "Lokalisering", "Локалізація"],
        ["Multilingual Delivery", "Mehrsprachige Umsetzung", "Flersproget levering", "Багатомовна реалізація"],
        ["Fluid localization for Nordic and global audiences — English, German, Danish and Ukrainian — built in from the first line.",
            "Flüssige Lokalisierung für nordische und globale Zielgruppen – Englisch, Deutsch, Dänisch und Ukrainisch – von der ersten Zeile an eingebaut.",
            "Flydende lokalisering til nordiske og globale målgrupper — engelsk, tysk, dansk og ukrainsk — indbygget fra første linje.",
            "Гнучка локалізація для північних і глобальних аудиторій — англійська, німецька, данська та українська — закладена з першого рядка."],

        // works
        ["Works & Case Studies", "Arbeiten & Fallstudien", "Værker og cases", "Роботи та кейси"],
        ["Selected Architectures", "Ausgewählte Architekturen", "Udvalgte arkitekturer", "Вибрані архітектури"],
        ["A curated selection of production systems and client platforms engineered with high fidelity, structural clarity and responsive precision.",
            "Eine kuratierte Auswahl produktiver Systeme und Kundenplattformen, entwickelt mit hoher Detailtreue, struktureller Klarheit und responsiver Präzision.",
            "Et kurateret udvalg af produktionssystemer og kundeplatforme, udviklet med høj finish, strukturel klarhed og responsiv præcision.",
            "Добірка робочих систем і клієнтських платформ, створених з високою точністю, структурною чіткістю та адаптивною прецизійністю."],
        ["Featured Monograph", "Hervorgehobenes Projekt", "Fremhævet projekt", "Головний проєкт"],
        ["Editorial Experience", "Editorial-Erlebnis", "Redaktionel oplevelse", "Редакційний досвід"],
        ["Production", "Produktiv", "I produktion", "У продакшені"],
        ["Concept Visual Storytelling & Fluid Motion", "Konzept: visuelles Storytelling & fließende Bewegung", "Koncept: visuel historiefortælling og flydende bevægelse", "Концепт: візуальний сторітелінг і плавний рух"],
        ["A concept landing page built to practice visual storytelling. The challenge was making a calm, minimal design feel alive without hurting performance, so I used Framer Motion for subtle animations within a Next.js and TypeScript setup.",
            "Eine Konzept-Landingpage, entstanden, um visuelles Storytelling zu üben. Die Herausforderung war, ein ruhiges, minimalistisches Design lebendig wirken zu lassen, ohne die Performance zu beeinträchtigen – deshalb habe ich Framer Motion für dezente Animationen in einem Next.js- und TypeScript-Setup verwendet.",
            "En koncept-landingpage lavet for at øve visuel historiefortælling. Udfordringen var at give et roligt, minimalistisk design liv uden at gå på kompromis med ydeevnen, så jeg brugte Framer Motion til subtile animationer i et Next.js- og TypeScript-setup.",
            "Концептуальний лендінг, створений для практики візуального сторітелінгу. Завдання полягало в тому, щоб оживити спокійний мінімалістичний дизайн без втрати продуктивності, тому я використав Framer Motion для ненав'язливих анімацій у зв'язці Next.js і TypeScript."],
        ["Live Demonstration", "Live-Demo", "Live-demo", "Живе демо"],
        ["View Source", "Quellcode ansehen", "Se kildekode", "Вихідний код"],
        ["Danish Commerce", "Handel in Dänemark", "Danmark · erhverv", "Данія · бізнес"],
        ["Client Platform · Denmark", "Kundenplattform · Dänemark", "Kundeplatform · Danmark", "Клієнтська платформа · Данія"],
        ["Bilingual", "Zweisprachig", "Tosproget", "Двомовний"],
        ["Bilingual Salon Experience", "Zweisprachiges Salon-Erlebnis", "Tosproget salonoplevelse", "Двомовний досвід салону"],
        ["Responsive bilingual (DA/EN) landing page for a Danish salon, built from a custom design. Reusable React components, a typed content file for translations and prices, a filterable gallery, and the whole visual layer in plain CSS.",
            "Responsive zweisprachige (DA/EN) Landingpage für einen dänischen Salon, nach individuellem Design umgesetzt. Wiederverwendbare React-Komponenten, eine typisierte Inhaltsdatei für Übersetzungen und Preise, eine filterbare Galerie und die gesamte visuelle Ebene in reinem CSS.",
            "Responsiv tosproget (DA/EN) landingpage til en dansk salon, bygget efter et specialdesign. Genbrugelige React-komponenter, en typet indholdsfil til oversættelser og priser, et filtrerbart galleri og hele det visuelle lag i ren CSS.",
            "Адаптивний двомовний (DA/EN) лендінг для салону в Данії, створений за індивідуальним дизайном. Повторно використовувані React-компоненти, типізований файл контенту для перекладів і цін, галерея з фільтрами та весь візуальний шар на чистому CSS."],
        ["Full-Stack Infrastructure", "Full-Stack-Infrastruktur", "Full-stack-infrastruktur", "Full-Stack інфраструктура"],
        ["Security Engine & Full-Stack", "Sicherheits-Engine & Full-Stack", "Sikkerhedsmotor og full-stack", "Система безпеки та Full-Stack"],
        ["Resilient Full-Stack Authentication", "Robuste Full-Stack-Authentifizierung", "Robust full-stack-autentificering", "Надійна full-stack автентифікація"],
        ["A full-stack app where users can register and log in. The main task was handling credentials safely: passwords are hashed with bcrypt, sessions are managed with express-session, and user data is stored in PostgreSQL (Neon).",
            "Eine Full-Stack-App, in der sich Nutzer registrieren und anmelden können. Die Hauptaufgabe war der sichere Umgang mit Zugangsdaten: Passwörter werden mit bcrypt gehasht, Sitzungen über express-session verwaltet und Nutzerdaten in PostgreSQL (Neon) gespeichert.",
            "En full-stack-app, hvor brugere kan oprette en konto og logge ind. Hovedopgaven var at håndtere loginoplysninger sikkert: adgangskoder hashes med bcrypt, sessioner styres med express-session, og brugerdata gemmes i PostgreSQL (Neon).",
            "Full-stack застосунок, де користувачі можуть реєструватися та входити. Головним завданням була безпечна робота з обліковими даними: паролі хешуються за допомогою bcrypt, сесіями керує express-session, а дані користувачів зберігаються в PostgreSQL (Neon)."],
        ["View Repository", "Repository ansehen", "Se repository", "Переглянути репозиторій"],
        ["Complete Architectural Works", "Alle Arbeiten im Überblick", "Alle værker samlet", "Усі роботи разом"],
        ["Production platforms, client sites and learning projects.", "Produktive Plattformen, Kundenwebsites und Lernprojekte.", "Produktionsplatforme, kundesites og læringsprojekter.", "Робочі платформи, клієнтські сайти та навчальні проєкти."],
        ["Explore Full Project Archive", "Gesamtes Projektarchiv ansehen", "Udforsk hele projektarkivet", "Відкрити весь архів проєктів"],

        // technical stack
        ["Technical Foundation", "Technisches Fundament", "Teknisk fundament", "Технічна основа"],
        ["Technical Stack", "Technologie-Stack", "Teknologistak", "Технологічний стек"],
        ["Layer 01", "Ebene 01", "Lag 01", "Рівень 01"],
        ["Layer 02", "Ebene 02", "Lag 02", "Рівень 02"],
        ["Layer 03", "Ebene 03", "Lag 03", "Рівень 03"],
        ["Layer 04", "Ebene 04", "Lag 04", "Рівень 04"],
        ["Core Interface", "Kern-Interface", "Kerne-brugerflade", "Ядро інтерфейсу"],
        ["The indestructible foundation of semantic markup and mathematical CSS logic.", "Das unverwüstliche Fundament aus semantischem Markup und mathematischer CSS-Logik.", "Det uforgængelige fundament af semantisk markup og matematisk CSS-logik.", "Непорушна основа семантичної розмітки та математичної CSS-логіки."],
        ["Master Craftsman", "Meisterhandwerk", "Mesterhåndværk", "Майстерність"],
        ["Framework Ecosystem", "Framework-Ökosystem", "Framework-økosystem", "Екосистема фреймворків"],
        ["Reactive declarative components and modern server-side hydration runtimes.", "Reaktive, deklarative Komponenten und moderne serverseitige Hydration-Laufzeiten.", "Reaktive, deklarative komponenter og moderne server-side hydration-runtimes.", "Реактивні декларативні компоненти та сучасні середовища серверної гідратації."],
        ["Production Proven", "Praxiserprobt", "Gennemprøvet i produktion", "Перевірено на практиці"],
        ["Backend & Persistence", "Backend & Persistenz", "Backend og persistens", "Бекенд і зберігання даних"],
        ["Pragmatic data layers, secure endpoints, and relational persistence.", "Pragmatische Datenschichten, sichere Endpunkte und relationale Persistenz.", "Pragmatiske datalag, sikre endpoints og relationel persistens.", "Прагматичні шари даних, захищені ендпоїнти та реляційне зберігання."],
        ["End-to-End Ready", "Ende-zu-Ende einsatzbereit", "Klar fra ende til anden", "Повний цикл"],
        ["Design & Aesthetics", "Design & Ästhetik", "Design og æstetik", "Дизайн та естетика"],
        ["Museum-grade typography balance, high contrast, and accessible interfaces.", "Typografische Balance auf Museumsniveau, hoher Kontrast und barrierefreie Oberflächen.", "Typografisk balance i museumskvalitet, høj kontrast og tilgængelige brugerflader.", "Музейний баланс типографіки, високий контраст і доступні інтерфейси."],
        ["Responsive design", "Responsives Design", "Responsivt design", "Адаптивний дизайн"],
        ["Accessibility", "Barrierefreiheit", "Tilgængelighed", "Доступність"],
        ["Clean code", "Sauberer Code", "Ren kode", "Чистий код"],
        ["Nordic Standard", "Nordischer Standard", "Nordisk standard", "Північний стандарт"],

        // services
        ["Services & Engagement", "Leistungen & Zusammenarbeit", "Ydelser og samarbejde", "Послуги та співпраця"],
        ["Solutions engineered with Danish restraint", "Lösungen mit dänischer Zurückhaltung entwickelt", "Løsninger udviklet med dansk tilbageholdenhed", "Рішення, створені з данською стриманістю"],
        ["We build websites for people and businesses who need a clear, fast and reliable online presence — from a simple landing page to a full web application. Every project starts with your goals and ends with a responsive, maintainable site that works well on any device.",
            "Wir entwickeln Websites für Menschen und Unternehmen, die einen klaren, schnellen und zuverlässigen Online-Auftritt brauchen – von der einfachen Landingpage bis zur vollständigen Webanwendung. Jedes Projekt beginnt mit Ihren Zielen und endet mit einer responsiven, wartbaren Website, die auf jedem Gerät gut funktioniert.",
            "Vi bygger hjemmesider til mennesker og virksomheder, der har brug for en tydelig, hurtig og pålidelig online tilstedeværelse – fra en enkel landingpage til en komplet webapplikation. Hvert projekt starter med dine mål og ender med en responsiv, vedligeholdelsesvenlig hjemmeside, der fungerer godt på alle enheder.",
            "Ми створюємо сайти для людей і бізнесу, яким потрібна зрозуміла, швидка та надійна присутність в інтернеті — від простого лендінгу до повноцінного вебзастосунку. Кожен проєкт починається з ваших цілей і завершується адаптивним сайтом, який легко підтримувати і який чудово працює на будь-якому пристрої."],
        ["Order a website", "Website anfragen", "Bestil en hjemmeside", "Замовити сайт"],
        ["Engagement 01", "Zusammenarbeit 01", "Samarbejde 01", "Співпраця 01"],
        ["Engagement 02", "Zusammenarbeit 02", "Samarbejde 02", "Співпраця 02"],
        ["Engagement 03", "Zusammenarbeit 03", "Samarbejde 03", "Співпраця 03"],
        ["Landing pages & business sites", "Landingpages & Unternehmenswebsites", "Landingpages og virksomhedshjemmesider", "Лендінги та сайти для бізнесу"],
        ["Clean, responsive sites that explain what you do and make it easy for customers to contact you.", "Klare, responsive Websites, die erklären, was Sie tun, und es Kunden leicht machen, Sie zu kontaktieren.", "Overskuelige, responsive hjemmesider, der forklarer, hvad du laver, og gør det nemt for kunder at kontakte dig.", "Чисті адаптивні сайти, які пояснюють, чим ви займаєтесь, і дозволяють клієнтам легко з вами зв'язатися."],
        ["Web applications", "Webanwendungen", "Webapplikationer", "Вебзастосунки"],
        ["Interactive apps with React, Next.js and TypeScript, connected to databases and APIs.", "Interaktive Anwendungen mit React, Next.js und TypeScript, angebunden an Datenbanken und APIs.", "Interaktive apps med React, Next.js og TypeScript, forbundet til databaser og API'er.", "Інтерактивні застосунки на React, Next.js і TypeScript, підключені до баз даних та API."],
        ["Redesign & improvements", "Redesign & Verbesserungen", "Redesign og forbedringer", "Редизайн та покращення"],
        ["Refreshing an existing site: better design, faster loading and a smoother experience.", "Auffrischung einer bestehenden Website: besseres Design, schnellere Ladezeiten und ein reibungsloseres Erlebnis.", "Opfriskning af en eksisterende hjemmeside: bedre design, hurtigere indlæsning og en mere smidig oplevelse.", "Оновлення наявного сайту: кращий дизайн, швидше завантаження та зручніша робота."],
        ["Timeline: 3–6 Weeks", "Zeitrahmen: 3–6 Wochen", "Tidsramme: 3–6 uger", "Терміни: 3–6 тижнів"],
        ["Timeline: 4–10 Weeks", "Zeitrahmen: 4–10 Wochen", "Tidsramme: 4–10 uger", "Терміни: 4–10 тижнів"],
        ["Timeline: Sprint or Retainer", "Zeitrahmen: Sprint oder Retainer", "Tidsramme: sprint eller retainer", "Терміни: спринт або супровід"],

        // reviews
        ["Client Feedback", "Kundenfeedback", "Kundefeedback", "Відгуки клієнтів"],
        ["Client Endorsements", "Kundenstimmen", "Kundeudtalelser", "Рекомендації клієнтів"],
        ["Client Review", "Kundenbewertung", "Kundeanmeldelse", "Відгук клієнта"],
        ["Direct Review", "Direkte Bewertung", "Direkte anmeldelse", "Прямий відгук"],
        ["Worked with us? Share your experience — it helps others choose.", "Mit uns zusammengearbeitet? Teilen Sie Ihre Erfahrung – das hilft anderen bei der Entscheidung.", "Har du arbejdet med os? Del din oplevelse – det hjælper andre med at vælge.", "Працювали з нами? Поділіться враженнями — це допоможе іншим обрати."],
        ["Leave a review", "Bewertung abgeben", "Skriv en anmeldelse", "Залишити відгук"],
        ["Your name", "Ihr Name", "Dit navn", "Ваше ім'я"],
        ["Rating", "Bewertung", "Vurdering", "Оцінка"],
        ["Your review", "Ihre Bewertung", "Din anmeldelse", "Ваш відгук"],
        ["e.g. Henrik Møller, Studio KBH", "z. B. Henrik Møller, Studio KBH", "f.eks. Henrik Møller, Studio KBH", "напр. Henrik Møller, Studio KBH"],
        ["Describe delivery, communication or craft execution...", "Beschreiben Sie Lieferung, Kommunikation oder handwerkliche Umsetzung ...", "Beskriv levering, kommunikation eller håndværksmæssig udførelse ...", "Опишіть терміни, комунікацію або якість виконання..."],
        ["Submit review", "Bewertung senden", "Send anmeldelse", "Надіслати відгук"],
        ["No reviews yet. Be the first to leave one!", "Noch keine Bewertungen. Seien Sie der Erste!", "Ingen anmeldelser endnu. Vær den første!", "Відгуків поки немає. Будьте першим!"],
        ["Reviews could not be loaded right now.", "Bewertungen konnten gerade nicht geladen werden.", "Anmeldelser kunne ikke indlæses lige nu.", "Наразі не вдалося завантажити відгуки."],
        ["Please enter your name.", "Bitte geben Sie Ihren Namen ein.", "Indtast venligst dit navn.", "Будь ласка, введіть ваше ім'я."],
        ["Please choose a rating.", "Bitte wählen Sie eine Bewertung.", "Vælg venligst en vurdering.", "Будь ласка, оберіть оцінку."],
        ["Please write a few words about your experience.", "Bitte schreiben Sie ein paar Worte zu Ihrer Erfahrung.", "Skriv venligst et par ord om din oplevelse.", "Будь ласка, напишіть кілька слів про свій досвід."],
        ["Could not send the review. Please try again later.", "Die Bewertung konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.", "Anmeldelsen kunne ikke sendes. Prøv igen senere.", "Не вдалося надіслати відгук. Спробуйте пізніше."],
        ["Could not save the review in this browser.", "Die Bewertung konnte in diesem Browser nicht gespeichert werden.", "Anmeldelsen kunne ikke gemmes i denne browser.", "Не вдалося зберегти відгук у цьому браузері."],
        ["Thank you! Your review was sent.", "Vielen Dank! Ihre Bewertung wurde gesendet.", "Tak! Din anmeldelse er sendt.", "Дякуємо! Ваш відгук надіслано."],

        // contact + footer
        ["Let’s construct something meaningful.", "Lassen Sie uns etwas Bedeutsames bauen.", "Lad os bygge noget meningsfuldt.", "Створімо щось змістовне."],
        ["Available for selected freelance contracts, architectural frontend engineering systems, and high-impact digital products. Based in Denmark, operating worldwide.",
            "Verfügbar für ausgewählte Freelance-Aufträge, architektonische Frontend-Systeme und wirkungsvolle digitale Produkte. Sitz in Dänemark, weltweit tätig.",
            "Tilgængelig for udvalgte freelanceopgaver, arkitektoniske frontend-systemer og digitale produkter med stor effekt. Baseret i Danmark, aktiv verden over.",
            "Доступний для вибраних фріланс-контрактів, архітектурних frontend-систем і впливових цифрових продуктів. Працюю з Данії, для клієнтів по всьому світу."],
        ["Start a Conversation", "Gespräch beginnen", "Start en samtale", "Розпочати розмову"],
        ["Download Dossier / CV", "Dossier / Lebenslauf herunterladen", "Download dossier / CV", "Завантажити досьє / резюме"],
        ["Architecture & Code", "Architektur & Code", "Arkitektur og kode", "Архітектура та код"],
        ["Disciplined digital construction. Focused on high-fidelity typography, precision interactions, and architectural systems.",
            "Disziplinierte digitale Konstruktion. Fokus auf hochwertige Typografie, präzise Interaktionen und architektonische Systeme.",
            "Disciplineret digital konstruktion. Fokus på finpudset typografi, præcise interaktioner og arkitektoniske systemer.",
            "Дисциплінована цифрова конструкція. Акцент на витонченій типографіці, точних взаємодіях і архітектурних системах."],
        ["Coordinates & Clocks", "Koordinaten & Uhrzeiten", "Koordinater og ure", "Координати й час"],
        ["Denmark", "Dänemark", "Danmark", "Данія"],
        ["Kyiv", "Kiew", "Kyiv", "Київ"],
        ["Network & Sources", "Netzwerk & Quellen", "Netværk og kilder", "Мережа та джерела"],
        ["All Projects", "Alle Projekte", "Alle projekter", "Усі проєкти"],
        ["Direct Inquiry", "Direkte Anfrage", "Direkte henvendelse", "Прямий запит"],
        ["Scandinavian Structural Minimalist Edition.", "Skandinavische strukturell-minimalistische Edition.", "Skandinavisk strukturel minimalistisk udgave.", "Скандинавська структурно-мінімалістична версія."],
        ["Crafted with pure semantic rigor", "Mit purer semantischer Strenge gebaut", "Bygget med ren semantisk stringens", "Створено з чистою семантичною суворістю"],
        ["All rights reserved.", "Alle Rechte vorbehalten.", "Alle rettigheder forbeholdes.", "Усі права захищено."],

        // projects page
        ["Archive Directory", "Archivverzeichnis", "Arkivfortegnelse", "Каталог архіву"],
        ["A deliberate index of production platforms, architectural systems, and digital client work. Every project reflects rigorous frontend engineering with verified public repositories and production deployments.",
            "Ein bewusst kuratierter Index produktiver Plattformen, architektonischer Systeme und digitaler Kundenarbeiten. Jedes Projekt steht für konsequentes Frontend-Engineering mit verifizierten öffentlichen Repositories und Produktiv-Deployments.",
            "Et bevidst kurateret indeks over produktionsplatforme, arkitektoniske systemer og digitalt kundearbejde. Hvert projekt afspejler stringent frontend-udvikling med verificerede offentlige repositories og produktionsudgivelser.",
            "Свідомо підібраний перелік робочих платформ, архітектурних систем і клієнтських цифрових робіт. Кожен проєкт — це ретельна frontend-розробка з перевіреними публічними репозиторіями та продакшн-деплоями."],
        ["Back to home", "Zurück zur Startseite", "Tilbage til forsiden", "На головну"],
        ["All Works", "Alle Arbeiten", "Alle værker", "Усі роботи"],
        ["Client Platforms", "Kundenplattformen", "Kundeplatforme", "Клієнтські платформи"],
        ["Full-Stack & Systems", "Full-Stack & Systeme", "Full-stack og systemer", "Full-Stack і системи"],
        ["Interactive & Next.js", "Interaktiv & Next.js", "Interaktivt og Next.js", "Інтерактив і Next.js"],
        ["Utilities & Mobile", "Tools & Mobile", "Værktøjer og mobil", "Утиліти та мобільні"],
        ["Receipts, Warranties & Manuals in One Place", "Belege, Garantien & Anleitungen an einem Ort", "Kvitteringer, garantier og manualer ét sted", "Чеки, гарантії та інструкції в одному місці"],
        ["People lose receipts and warranties exactly when they need them. I built a mobile-first PWA that keeps purchases, receipts, warranties and manuals in one place, and the home screen shows the total value of everything you own. Built with React, TypeScript and Supabase.",
            "Menschen verlieren Kassenbons und Garantien genau dann, wenn sie sie brauchen. Ich habe eine Mobile-first-PWA entwickelt, die Käufe, Belege, Garantien und Anleitungen an einem Ort bündelt; der Startbildschirm zeigt den Gesamtwert von allem, was man besitzt. Umgesetzt mit React, TypeScript und Supabase.",
            "Folk mister kvitteringer og garantibeviser lige præcis, når de har brug for dem. Jeg byggede en mobile-first PWA, der samler køb, kvitteringer, garantier og manualer ét sted, og startskærmen viser den samlede værdi af alt, man ejer. Bygget med React, TypeScript og Supabase.",
            "Люди гублять чеки та гарантійні талони саме тоді, коли вони потрібні. Я створив mobile-first PWA, яка зберігає покупки, чеки, гарантії та інструкції в одному місці, а на головному екрані показує загальну вартість усього, чим ви володієте. Створено з React, TypeScript і Supabase."],
        ["Live Application", "Live-Anwendung", "Live-applikation", "Онлайн-застосунок"],
        ["Educational Architecture", "Bildungsarchitektur", "Uddannelsesarkitektur", "Освітня архітектура"],
        ["A learning-focused template that shows how I structure a multi-section Next.js 15 / React 19 site in plain JavaScript (JSX).", "Eine lernorientierte Vorlage, die zeigt, wie ich eine mehrteilige Next.js-15-/React-19-Website in reinem JavaScript (JSX) strukturiere.", "En læringsorienteret skabelon, der viser, hvordan jeg strukturerer et Next.js 15 / React 19-site med flere sektioner i ren JavaScript (JSX).", "Навчальний шаблон, що показує, як я структурую багатосекційний сайт на Next.js 15 / React 19 на чистому JavaScript (JSX)."],
        ["Live Platform", "Live-Plattform", "Live-platform", "Онлайн-платформа"],
        ["Hospitality Experience", "Gastronomie-Erlebnis", "Hospitality-oplevelse", "Досвід у сфері гостинності"],
        ["A landing page for a fictional lounge with a dark neon style. It includes a menu with animated flavor filtering, a reservation form with validation and messenger integration through a Next.js API route, a gallery and a map with opening hours.",
            "Eine Landingpage für eine fiktive Lounge im dunklen Neon-Stil. Sie enthält eine Speisekarte mit animierter Geschmacksfilterung, ein Reservierungsformular mit Validierung und Messenger-Anbindung über eine Next.js-API-Route, eine Galerie und eine Karte mit Öffnungszeiten.",
            "En landingpage til en fiktiv lounge i mørk neonstil. Den indeholder en menu med animeret smagsfiltrering, en reservationsformular med validering og messenger-integration via en Next.js API-route, et galleri og et kort med åbningstider.",
            "Лендінг для вигаданого лаунж-бару в темному неоновому стилі. Містить меню з анімованою фільтрацією смаків, форму бронювання з валідацією та інтеграцією з месенджером через API-маршрут Next.js, галерею та карту з графіком роботи."],
        ["Financial Utility", "Finanz-Tool", "Finansværktøj", "Фінансова утиліта"],
        ["Expense Tracking in Your Pocket", "Ausgabenverfolgung für die Hosentasche", "Udgiftsoverblik i lommen", "Облік витрат у кишені"],
        ["A mobile web app for tracking expenses (transfers, salary, groceries and so on). State is managed with Zustand, data is saved in localStorage, and spending is visualized with Recharts.", "Eine mobile Web-App zur Ausgabenverfolgung (Überweisungen, Gehalt, Lebensmittel usw.). Der State wird mit Zustand verwaltet, die Daten liegen im localStorage und die Ausgaben werden mit Recharts visualisiert.", "En mobil webapp til at holde styr på udgifter (overførsler, løn, dagligvarer osv.). State håndteres med Zustand, data gemmes i localStorage, og forbruget visualiseres med Recharts.", "Мобільний вебзастосунок для обліку витрат (перекази, зарплата, продукти тощо). Станом керує Zustand, дані зберігаються в localStorage, а витрати візуалізуються за допомогою Recharts."],
        ["Commercial Client Production", "Produktion für Geschäftskunden", "Kommerciel kundeproduktion", "Комерційний клієнтський проєкт"],
        ["Active Business", "Aktives Unternehmen", "Aktiv virksomhed", "Діючий бізнес"],
        ["A Real Site for a Real Company", "Eine echte Website für ein echtes Unternehmen", "Et rigtigt site til en rigtig virksomhed", "Справжній сайт для справжньої компанії"],
        ["A real website for a cleaning company, and it is now their main site. I turned the company’s needs into a clear, simple page that works well for their customers.", "Eine echte Website für ein Reinigungsunternehmen, die inzwischen deren Hauptwebsite ist. Ich habe die Anforderungen des Unternehmens in eine klare, einfache Seite übersetzt, die für die Kunden gut funktioniert.", "En rigtig hjemmeside til et rengøringsfirma, og den er nu deres primære side. Jeg omsatte virksomhedens behov til en overskuelig, enkel side, der fungerer godt for kunderne.", "Справжній сайт для клінінгової компанії, який тепер є їхнім основним сайтом. Я перетворив потреби компанії на зрозумілу, просту сторінку, що добре працює для її клієнтів."],
        ["Live Commercial Site", "Live-Firmenwebsite", "Live firmahjemmeside", "Діючий комерційний сайт"],
        ["API Architectures & Integrations", "API-Architekturen & Integrationen", "API-arkitekturer og integrationer", "API-архітектури та інтеграції"],
        ["Dual Modules", "Zwei Module", "To moduler", "Два модулі"],
        ["Two small projects built to learn working with external APIs: fetching data, handling responses and rendering it cleanly in the UI with vanilla JavaScript.", "Zwei kleine Projekte, um den Umgang mit externen APIs zu lernen: Daten abrufen, Antworten verarbeiten und sauber mit reinem JavaScript in der Oberfläche darstellen.", "To små projekter lavet for at lære at arbejde med eksterne API'er: hente data, håndtere svar og vise dem pænt i brugerfladen med vanilla JavaScript.", "Два невеликі проєкти для вивчення роботи із зовнішніми API: отримання даних, обробка відповідей і акуратне відображення в інтерфейсі на чистому JavaScript."],
        ["Cinema Demo", "Cinema-Demo", "Cinema-demo", "Демо Cinema"],
        ["Legetøj Demo", "Legetøj-Demo", "Legetøj-demo", "Демо Legetøj"],
        ["All Repositories", "Alle Repositories", "Alle repositories", "Усі репозиторії"],
        ["Initiate Advisory", "Beratung anfragen", "Start rådgivning", "Розпочати консультацію"],
        ["Need a bespoke architecture?", "Maßgeschneiderte Architektur gesucht?", "Brug for en skræddersyet arkitektur?", "Потрібна індивідуальна архітектура?"],
        ["Open to deliberate technical engagements, design engineering commissions, and architectural frontend advisory for teams with uncompromising standards.",
            "Offen für gezielte technische Zusammenarbeit, Design-Engineering-Aufträge und architektonische Frontend-Beratung für Teams mit höchsten Ansprüchen.",
            "Åben for målrettede tekniske opgaver, design engineering-opgaver og arkitektonisk frontend-rådgivning til teams med uafkortede standarder.",
            "Відкритий до цілеспрямованої технічної співпраці, замовлень із design engineering та архітектурних frontend-консультацій для команд із високими стандартами."],
        ["Explore GitHub", "GitHub ansehen", "Udforsk GitHub", "Відкрити GitHub"],
        ["Coordinates", "Koordinaten", "Koordinater", "Координати"],
        ["Denmark & Kyiv", "Dänemark & Kiew", "Danmark og Kyiv", "Данія і Київ"],
        ["Central European Time", "Mitteleuropäische Zeit", "Centraleuropæisk tid", "Центральноєвропейський час"],
        ["Network", "Netzwerk", "Netværk", "Мережа"],
        ["Inquiry", "Anfrage", "Henvendelse", "Запит"],
        ["Available for deliberate design engineering commissions & architecture advisory.", "Verfügbar für gezielte Design-Engineering-Aufträge & Architekturberatung.", "Tilgængelig for målrettede design engineering-opgaver og arkitekturrådgivning.", "Доступний для цілеспрямованих замовлень із design engineering та архітектурних консультацій."],
        ["Discipline", "Disziplin", "Disciplin", "Дисципліна"],
        ["Architectural Frontends", "Architektonische Frontends", "Arkitektoniske frontends", "Архітектурні фронтенди"],
        ["Design Systems", "Designsysteme", "Designsystemer", "Дизайн-системи"],
        ["Editorial Web Platforms", "Editoriale Web-Plattformen", "Redaktionelle webplatforme", "Редакційні вебплатформи"],
        ["Curated Minimalist Architecture", "Kuratierte minimalistische Architektur", "Kurateret minimalistisk arkitektur", "Відібрана мінімалістична архітектура"]
    ];

    var DICT = {};
    ROWS.forEach(function (r) { DICT[r[0]] = { de: r[1], da: r[2], uk: r[3] }; });

    var NAMES = { en: 'English', de: 'Deutsch', da: 'Dansk', uk: 'Українська' };
    var SKIP = '.reviews, #reviews-summary, #review-error, #review-ok, .lang, .rating-value, [data-clock], [data-copyright]';
    var cur = 'en';
    try { var saved = localStorage.getItem('lang'); if (LANGS.indexOf(saved) > -1) cur = saved; } catch (_) { }

    function norm(s) { return s.replace(/\s+/g, ' ').trim(); }
    function t(en) { var e = DICT[en]; return (cur !== 'en' && e && e[cur]) || en; }

    function reviewsWord(n) {
        if (cur === 'de') return n === 1 ? 'Bewertung' : 'Bewertungen';
        if (cur === 'da') return n === 1 ? 'anmeldelse' : 'anmeldelser';
        if (cur === 'uk') {
            var a = n % 10, b = n % 100;
            if (a === 1 && b !== 11) return 'відгук';
            if (a >= 2 && a <= 4 && (b < 10 || b >= 20)) return 'відгуки';
            return 'відгуків';
        }
        return n === 1 ? 'review' : 'reviews';
    }

    function apply() {
        document.documentElement.lang = cur;
        var all = document.body.querySelectorAll('*');
        for (var i = 0; i < all.length; i++) {
            var el = all[i];
            if (el.tagName === 'SCRIPT' || el.tagName === 'STYLE' || el.closest(SKIP)) continue;
            if (el.hasAttribute('placeholder')) {
                if (el.__ph === undefined) el.__ph = DICT[el.getAttribute('placeholder')] ? el.getAttribute('placeholder') : null;
                if (el.__ph) el.setAttribute('placeholder', t(el.__ph));
            }
            if (el.children.length) continue;
            if (el.__en === undefined) {
                var txt = norm(el.textContent);
                el.__en = DICT[txt] ? txt : null;
            }
            if (el.__en) el.textContent = t(el.__en);
        }
        // <title> and meta description
        if (document.__titleEn === undefined) document.__titleEn = DICT[norm(document.title)] ? norm(document.title) : null;
        if (document.__titleEn) document.title = t(document.__titleEn);
        var meta = document.querySelector('meta[name="description"]');
        if (meta) {
            if (meta.__en === undefined) meta.__en = DICT[meta.content] ? meta.content : null;
            if (meta.__en) meta.content = t(meta.__en);
        }
        document.querySelectorAll('.lang__button').forEach(function (b) {
            b.setAttribute('aria-pressed', b.getAttribute('data-lang') === cur ? 'true' : 'false');
        });
    }

    function setLang(l) {
        if (LANGS.indexOf(l) < 0 || l === cur) return;
        cur = l;
        try { localStorage.setItem('lang', l); } catch (_) { }
        apply();
        document.dispatchEvent(new CustomEvent('langchange'));
    }

    window.I18N = { t: t, lang: function () { return cur; }, locale: function () { return LOCALE[cur]; }, reviewsWord: reviewsWord };

    document.querySelectorAll('.lang__button').forEach(function (b) {
        b.title = NAMES[b.getAttribute('data-lang')] || '';
        b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
    });
    apply();
})();
