/* Language switcher: English (default), Deutsch, Dansk, Українська.
   English text lives in the HTML. Every element whose text matches a key below gets translated.
   To fix or add a translation, edit the row: [English, German, Danish, Ukrainian]. */
(function () {
    var LANGS = ['en', 'de', 'da', 'uk'];
    var LOCALE = { en: 'en-GB', de: 'de-DE', da: 'da-DK', uk: 'uk-UA' };

    var ROWS = [
        // navigation / footer
        ["Resume", "Lebenslauf", "CV", "Резюме"],
        ["Portfolio", "Portfolio", "Portfolio", "Портфоліо"],
        ["About us", "Über uns", "Om os", "Про нас"],
        ["Reviews", "Bewertungen", "Anmeldelser", "Відгуки"],
        ["Contacts", "Kontakt", "Kontakt", "Контакти"],
        ["Contact", "Kontakt", "Kontakt", "Контакти"],
        ["Navigation", "Navigation", "Navigation", "Навігація"],
        ["Home", "Startseite", "Hjem", "Головна"],
        ["All projects", "Alle Projekte", "Alle projekter", "Усі проєкти"],
        ["Email", "E-Mail", "E-mail", "Електронна пошта"],
        ["We build fast, responsive and reliable websites.", "Wir entwickeln schnelle, responsive und zuverlässige Websites.", "Vi bygger hurtige, responsive og pålidelige hjemmesider.", "Ми створюємо швидкі, адаптивні та надійні сайти."],
        ["All rights reserved.", "Alle Rechte vorbehalten.", "Alle rettigheder forbeholdes.", "Усі права захищено."],

        // page titles / meta
        ["Nikita Yeltsov — Frontend Developer", "Nikita Yeltsov — Frontend-Entwickler", "Nikita Yeltsov — Frontend-udvikler", "Nikita Yeltsov — Frontend-розробник"],
        ["Portfolio of Nikita Yeltsov, frontend developer.", "Portfolio von Nikita Yeltsov, Frontend-Entwickler.", "Portfolio for Nikita Yeltsov, frontend-udvikler.", "Портфоліо Nikita Yeltsov, frontend-розробника."],
        ["All projects – Nikita Yeltsov", "Alle Projekte – Nikita Yeltsov", "Alle projekter – Nikita Yeltsov", "Усі проєкти – Nikita Yeltsov"],
        ["All projects by Nikita Yeltsov, a frontend developer.", "Alle Projekte von Nikita Yeltsov, Frontend-Entwickler.", "Alle projekter af Nikita Yeltsov, frontend-udvikler.", "Усі проєкти Nikita Yeltsov, frontend-розробника."],

        // hero + resume
        ["Frontend Developer", "Frontend-Entwickler", "Frontend-udvikler", "Frontend-розробник"],
        ["Frontend developer focused on building thoughtful, responsive web experiences.", "Frontend-Entwickler mit Fokus auf durchdachte, responsive Weberlebnisse.", "Frontend-udvikler med fokus på gennemtænkte, responsive weboplevelser.", "Frontend-розробник, що створює продумані адаптивні веб-рішення."],
        ["Professional skills", "Fachliche Kompetenzen", "Faglige kompetencer", "Професійні навички"],
        ["HTML, CSS and JavaScript", "HTML, CSS und JavaScript", "HTML, CSS og JavaScript", "HTML, CSS та JavaScript"],
        ["React, Next.js and TypeScript", "React, Next.js und TypeScript", "React, Next.js og TypeScript", "React, Next.js та TypeScript"],
        ["Responsive design and accessibility", "Responsives Design und Barrierefreiheit", "Responsivt design og tilgængelighed", "Адаптивний дизайн та доступність"],
        ["REST API integration and clean, maintainable code", "REST-API-Integration und sauberer, wartbarer Code", "REST API-integration og ren, vedligeholdelsesvenlig kode", "Інтеграція REST API та чистий код, який легко підтримувати"],
        ["Tools and technologies", "Tools und Technologien", "Værktøjer og teknologier", "Інструменти та технології"],
        ["Git, GitHub, Vercel, Supabase, PostgreSQL, Figma and VS Code.", "Git, GitHub, Vercel, Supabase, PostgreSQL, Figma und VS Code.", "Git, GitHub, Vercel, Supabase, PostgreSQL, Figma og VS Code.", "Git, GitHub, Vercel, Supabase, PostgreSQL, Figma та VS Code."],
        ["Download CV", "Lebenslauf herunterladen", "Download CV", "Завантажити резюме"],

        // projects (home)
        ["My projects", "Meine Projekte", "Mine projekter", "Мої проєкти"],
        ["View all projects", "Alle Projekte ansehen", "Se alle projekter", "Усі проєкти"],
        ["Live preview", "Live-Vorschau", "Live-visning", "Live-перегляд"],
        ["Live", "Live", "Live", "Онлайн"],
        ["A concept landing page built to practice visual storytelling. The challenge was making a calm, minimal design feel alive without hurting performance, so I used Framer Motion for subtle animations within a Next.js and TypeScript setup.",
            "Eine Konzept-Landingpage, entstanden, um visuelles Storytelling zu üben. Die Herausforderung war, ein ruhiges, minimalistisches Design lebendig wirken zu lassen, ohne die Performance zu beeinträchtigen – deshalb habe ich Framer Motion für dezente Animationen in einem Next.js- und TypeScript-Setup verwendet.",
            "En koncept-landingpage lavet for at øve visuel historiefortælling. Udfordringen var at give et roligt, minimalistisk design liv uden at gå på kompromis med ydeevnen, så jeg brugte Framer Motion til subtile animationer i et Next.js- og TypeScript-setup.",
            "Концептуальний лендінг, створений для практики візуального сторітелінгу. Завдання полягало в тому, щоб оживити спокійний мінімалістичний дизайн без втрати продуктивності, тому я використав Framer Motion для ненав'язливих анімацій у зв'язці Next.js і TypeScript."],
        ["A full-stack app where users can register and log in. The main task was handling credentials safely: passwords are hashed with bcrypt, sessions are managed with express-session, and user data is stored in PostgreSQL (Neon).",
            "Eine Full-Stack-App, in der sich Nutzer registrieren und anmelden können. Die Hauptaufgabe war der sichere Umgang mit Zugangsdaten: Passwörter werden mit bcrypt gehasht, Sitzungen über express-session verwaltet und Nutzerdaten in PostgreSQL (Neon) gespeichert.",
            "En full-stack-app, hvor brugere kan oprette en konto og logge ind. Hovedopgaven var at håndtere loginoplysninger sikkert: adgangskoder hashes med bcrypt, sessioner styres med express-session, og brugerdata gemmes i PostgreSQL (Neon).",
            "Full-stack застосунок, де користувачі можуть реєструватися та входити. Головним завданням була безпечна робота з обліковими даними: паролі хешуються за допомогою bcrypt, сесіями керує express-session, а дані користувачів зберігаються в PostgreSQL (Neon)."],
        ["People lose receipts and warranties exactly when they need them. I built a mobile-first PWA that keeps purchases, receipts, warranties and manuals in one place, and the home screen shows the total value of everything you own. Built with React, TypeScript and Supabase.",
            "Menschen verlieren Kassenbons und Garantien genau dann, wenn sie sie brauchen. Ich habe eine Mobile-first-PWA entwickelt, die Käufe, Belege, Garantien und Anleitungen an einem Ort bündelt; der Startbildschirm zeigt den Gesamtwert von allem, was man besitzt. Umgesetzt mit React, TypeScript und Supabase.",
            "Folk mister kvitteringer og garantibeviser lige præcis, når de har brug for dem. Jeg byggede en mobile-first PWA, der samler køb, kvitteringer, garantier og manualer ét sted, og startskærmen viser den samlede værdi af alt, man ejer. Bygget med React, TypeScript og Supabase.",
            "Люди гублять чеки та гарантійні талони саме тоді, коли вони потрібні. Я створив mobile-first PWA, яка зберігає покупки, чеки, гарантії та інструкції в одному місці, а на головному екрані показує загальну вартість усього, чим ви володієте. Створено з React, TypeScript і Supabase."],

        // projects page
        ["A selection of things I have built. Each one has a live demo and source code.", "Eine Auswahl meiner Projekte. Zu jedem gibt es eine Live-Demo und den Quellcode.", "Et udvalg af ting, jeg har bygget. Hver af dem har en live-demo og kildekode.", "Добірка моїх робіт. До кожної є живе демо та вихідний код."],
        ["Back to home", "Zurück zur Startseite", "Tilbage til forsiden", "На головну"],
        ["A learning-focused template that shows how I structure a multi-section Next.js 15 / React 19 site in plain JavaScript (JSX).", "Eine lernorientierte Vorlage, die zeigt, wie ich eine mehrteilige Next.js-15-/React-19-Website in reinem JavaScript (JSX) strukturiere.", "En læringsorienteret skabelon, der viser, hvordan jeg strukturerer et Next.js 15 / React 19-site med flere sektioner i ren JavaScript (JSX).", "Навчальний шаблон, що показує, як я структурую багатосекційний сайт на Next.js 15 / React 19 на чистому JavaScript (JSX)."],
        ["Two small projects built to learn working with external APIs: fetching data, handling responses and rendering it cleanly in the UI with vanilla JavaScript.", "Zwei kleine Projekte, um den Umgang mit externen APIs zu lernen: Daten abrufen, Antworten verarbeiten und sauber mit reinem JavaScript in der Oberfläche darstellen.", "To små projekter lavet for at lære at arbejde med eksterne API'er: hente data, håndtere svar og vise dem pænt i brugerfladen med vanilla JavaScript.", "Два невеликі проєкти для вивчення роботи із зовнішніми API: отримання даних, обробка відповідей і акуратне відображення в інтерфейсі на чистому JavaScript."],
        ["A real website for a cleaning company, and it is now their main site. I turned the company’s needs into a clear, simple page that works well for their customers.", "Eine echte Website für ein Reinigungsunternehmen, die inzwischen deren Hauptwebsite ist. Ich habe die Anforderungen des Unternehmens in eine klare, einfache Seite übersetzt, die für die Kunden gut funktioniert.", "En rigtig hjemmeside til et rengøringsfirma, og den er nu deres primære side. Jeg omsatte virksomhedens behov til en overskuelig, enkel side, der fungerer godt for kunderne.", "Справжній сайт для клінінгової компанії, який тепер є їхнім основним сайтом. Я перетворив потреби компанії на зрозумілу, просту сторінку, що добре працює для її клієнтів."],
        ["A landing page for a fictional lounge with a dark neon style. It includes a menu with animated flavor filtering, a reservation form with validation and messenger integration through a Next.js API route, a gallery and a map with opening hours.", "Eine Landingpage für eine fiktive Lounge im dunklen Neon-Stil. Sie enthält eine Speisekarte mit animierter Geschmacksfilterung, ein Reservierungsformular mit Validierung und Messenger-Anbindung über eine Next.js-API-Route, eine Galerie und eine Karte mit Öffnungszeiten.", "En landingpage til en fiktiv lounge i mørk neonstil. Den indeholder en menu med animeret smagsfiltrering, en reservationsformular med validering og messenger-integration via en Next.js API-route, et galleri og et kort med åbningstider.", "Лендінг для вигаданого лаунж-бару в темному неоновому стилі. Містить меню з анімованою фільтрацією смаків, форму бронювання з валідацією та інтеграцією з месенджером через API-маршрут Next.js, галерею та карту з графіком роботи."],
        ["A mobile web app for tracking expenses (transfers, salary, groceries and so on). State is managed with Zustand, data is saved in localStorage, and spending is visualized with Recharts.", "Eine mobile Web-App zur Ausgabenverfolgung (Überweisungen, Gehalt, Lebensmittel usw.). Der State wird mit Zustand verwaltet, die Daten liegen im localStorage und die Ausgaben werden mit Recharts visualisiert.", "En mobil webapp til at holde styr på udgifter (overførsler, løn, dagligvarer osv.). State håndteres med Zustand, data gemmes i localStorage, og forbruget visualiseres med Recharts.", "Мобільний вебзастосунок для обліку витрат (перекази, зарплата, продукти тощо). Станом керує Zustand, дані зберігаються в localStorage, а витрати візуалізуються за допомогою Recharts."],

        // skills
        ["Skills", "Fähigkeiten", "Kompetencer", "Навички"],
        ["Development", "Entwicklung", "Udvikling", "Розробка"],
        ["Tools", "Tools", "Værktøjer", "Інструменти"],
        ["Practices", "Praktiken", "Metoder", "Практики"],
        ["Responsive design", "Responsives Design", "Responsivt design", "Адаптивний дизайн"],
        ["Accessibility", "Barrierefreiheit", "Tilgængelighed", "Доступність"],
        ["Clean code", "Sauberer Code", "Ren kode", "Чистий код"],

        // about us
        ["We build websites for people and businesses who need a clear, fast and reliable online presence — from a simple landing page to a full web application. Every project starts with your goals and ends with a responsive, maintainable site that works well on any device.",
            "Wir entwickeln Websites für Menschen und Unternehmen, die einen klaren, schnellen und zuverlässigen Online-Auftritt brauchen – von der einfachen Landingpage bis zur vollständigen Webanwendung. Jedes Projekt beginnt mit Ihren Zielen und endet mit einer responsiven, wartbaren Website, die auf jedem Gerät gut funktioniert.",
            "Vi bygger hjemmesider til mennesker og virksomheder, der har brug for en tydelig, hurtig og pålidelig online tilstedeværelse – fra en enkel landingpage til en komplet webapplikation. Hvert projekt starter med dine mål og ender med en responsiv, vedligeholdelsesvenlig hjemmeside, der fungerer godt på alle enheder.",
            "Ми створюємо сайти для людей і бізнесу, яким потрібна зрозуміла, швидка та надійна присутність в інтернеті — від простого лендінгу до повноцінного вебзастосунку. Кожен проєкт починається з ваших цілей і завершується адаптивним сайтом, який легко підтримувати і який чудово працює на будь-якому пристрої."],
        ["Landing pages & business sites", "Landingpages & Unternehmenswebsites", "Landingpages og virksomhedshjemmesider", "Лендінги та сайти для бізнесу"],
        ["Clean, responsive sites that explain what you do and make it easy for customers to contact you.", "Klare, responsive Websites, die erklären, was Sie tun, und es Kunden leicht machen, Sie zu kontaktieren.", "Overskuelige, responsive hjemmesider, der forklarer, hvad du laver, og gør det nemt for kunder at kontakte dig.", "Чисті адаптивні сайти, які пояснюють, чим ви займаєтесь, і дозволяють клієнтам легко з вами зв'язатися."],
        ["Web applications", "Webanwendungen", "Webapplikationer", "Вебзастосунки"],
        ["Interactive apps with React, Next.js and TypeScript, connected to databases and APIs.", "Interaktive Anwendungen mit React, Next.js und TypeScript, angebunden an Datenbanken und APIs.", "Interaktive apps med React, Next.js og TypeScript, forbundet til databaser og API'er.", "Інтерактивні застосунки на React, Next.js і TypeScript, підключені до баз даних та API."],
        ["Redesign & improvements", "Redesign & Verbesserungen", "Redesign og forbedringer", "Редизайн та покращення"],
        ["Refreshing an existing site: better design, faster loading and a smoother experience.", "Auffrischung einer bestehenden Website: besseres Design, schnellere Ladezeiten und ein reibungsloseres Erlebnis.", "Opfriskning af en eksisterende hjemmeside: bedre design, hurtigere indlæsning og en mere smidig oplevelse.", "Оновлення наявного сайту: кращий дизайн, швидше завантаження та зручніша робота."],
        ["Order a website", "Website anfragen", "Bestil en hjemmeside", "Замовити сайт"],

        // reviews
        ["Worked with us? Share your experience — it helps others choose.", "Mit uns zusammengearbeitet? Teilen Sie Ihre Erfahrung – das hilft anderen bei der Entscheidung.", "Har du arbejdet med os? Del din oplevelse – det hjælper andre med at vælge.", "Працювали з нами? Поділіться враженнями — це допоможе іншим обрати."],
        ["Leave a review", "Bewertung abgeben", "Skriv en anmeldelse", "Залишити відгук"],
        ["Your name", "Ihr Name", "Dit navn", "Ваше ім'я"],
        ["Rating", "Bewertung", "Vurdering", "Оцінка"],
        ["Your review", "Ihre Bewertung", "Din anmeldelse", "Ваш відгук"],
        ["Submit review", "Bewertung senden", "Send anmeldelse", "Надіслати відгук"],
        ["No reviews yet. Be the first to leave one!", "Noch keine Bewertungen. Seien Sie der Erste!", "Ingen anmeldelser endnu. Vær den første!", "Відгуків поки немає. Будьте першим!"],
        ["Reviews could not be loaded right now.", "Bewertungen konnten gerade nicht geladen werden.", "Anmeldelser kunne ikke indlæses lige nu.", "Наразі не вдалося завантажити відгуки."],
        ["Please enter your name.", "Bitte geben Sie Ihren Namen ein.", "Indtast venligst dit navn.", "Будь ласка, введіть ваше ім'я."],
        ["Please choose a rating.", "Bitte wählen Sie eine Bewertung.", "Vælg venligst en vurdering.", "Будь ласка, оберіть оцінку."],
        ["Please write a few words about your experience.", "Bitte schreiben Sie ein paar Worte zu Ihrer Erfahrung.", "Skriv venligst et par ord om din oplevelse.", "Будь ласка, напишіть кілька слів про свій досвід."],
        ["Could not send the review. Please try again later.", "Die Bewertung konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.", "Anmeldelsen kunne ikke sendes. Prøv igen senere.", "Не вдалося надіслати відгук. Спробуйте пізніше."],
        ["Could not save the review in this browser.", "Die Bewertung konnte in diesem Browser nicht gespeichert werden.", "Anmeldelsen kunne ikke gemmes i denne browser.", "Не вдалося зберегти відгук у цьому браузері."],
        ["Thank you! Your review was sent.", "Vielen Dank! Ihre Bewertung wurde gesendet.", "Tak! Din anmeldelse er sendt.", "Дякуємо! Ваш відгук надіслано."],

        // contacts
        ["Have a project or a question? Feel free to get in touch.", "Haben Sie ein Projekt oder eine Frage? Melden Sie sich gerne.", "Har du et projekt eller et spørgsmål? Skriv endelig til os.", "Маєте проєкт чи запитання? Звертайтеся."],
        ["Email me", "E-Mail senden", "Send en e-mail", "Написати листом"]
    ];

    var DICT = {};
    ROWS.forEach(function (r) { DICT[r[0]] = { de: r[1], da: r[2], uk: r[3] }; });

    var NAMES = { en: 'English', de: 'Deutsch', da: 'Dansk', uk: 'Українська' };
    var SKIP = '.reviews, #reviews-summary, #review-error, #review-ok, .lang';
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
            if (el.children.length || el.tagName === 'SCRIPT' || el.tagName === 'STYLE' || el.closest(SKIP)) continue;
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
        document.querySelectorAll('.lang button').forEach(function (b) {
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

    document.querySelectorAll('.lang button').forEach(function (b) {
        b.title = NAMES[b.getAttribute('data-lang')] || '';
        b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
    });
    apply();
})();
