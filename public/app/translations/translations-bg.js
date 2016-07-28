define(['I18n'],
    function(I18n) {
        "use strict";

        I18n.translations = I18n.translations || {};

        I18n.translations.BG = {
            header: {

            },
            footer: {
                copyright: '',
                getLogo: 'Изтегли рекламно лого'
            },
            newsletter: {
                title: "Новини от нас",
                emailPlaceholder: "Твоята е-поща",
                subscribe: "Абонирай се"
            },
            navigation: {
                home: 'Начало',
                member: 'Стани член',
                events: 'Събития',
                announcements: 'Обяви',
                sponsors: 'Спонсори',
                projects: 'Проекти',
                contacts: 'Контакти',
                logo: 'Hackafe Plovdiv',
				wiki: 'Wiki',
                forum: 'Форум'

            },

            homePage: {
                title: '<span>Hackafe</span> PLOV<span>&lt;DIV&gt;</span>',
                subtitle: '<span class="top">co-workers &amp;</span> <span class="bottom">hacker space</span>',
                aboutTitle: '<span class="white">Какво е </span><span class="black">hackafe</span>',
                Hackafe: '<span class="highlight">Hackafe Plovdiv</span>',

                WhoWeAre: '<p>Ние сме млади, предприемчиви, образовани и инициативни. Ние създаваме новите технологии и бъдещето. Ние променяме света.</p>',
                HackafePlace: '<p>Hackafe Plovdiv е <a href="#!/contacts">мястото</a>, на което обменяме и споделяме идеи, получаваме нови знания, правим нови контакти.</p>',
                organize: '<p>Организираме курсове, срещи, лекции и конференции в Пловдив:</p>',

                topics: 'Актуални теми от уеб технологиите, дизайна и програмирането.',
                host: 'Домакин на годишното <a href="http://plovdivconf.com" rel="external">PlovdivConf</a> издание.',
                conference: 'Съорганизатор на конференцията <a href="http://plovdev.com" rel="external">PlovDev</a>.',

                videoPresentacion: '<p>Видеопрезентации от наши членове:</p>',
                videoPrLinks1: '<a href="https://www.youtube.com/watch?v=HVN5gKdjo0o" rel="external">Представяне на Hackafe, Георги Ангелов</a>',
                videoPrLinks2: '<a href="https://www.youtube.com/watch?v=LqeLpRcZZqQ" rel="external">Хакерските пространства в България, OpenFest 2013, Валентин Алексиев</a>',
                videoPrLinks3: '<a href="https://www.youtube.com/watch?v=WmLFKdpVGYg" rel="external">Целите на Хакафе, PlovdivConf, Станислав Куманов</a>',
                aboutUsPic:'<img src="images/about-us-photo.png" alt="About hackafe"/>',
                facebookGroup: '<a href="https://www.facebook.com/HackafePlovdiv" rel="external" title="Facebook">',
                facebookButton: '<img src="images/facebook.jpg" alt="Facebook"/> </a> Следете ни във <br/>Фейсбук &gt; &gt; &gt;</p>'
            },

            contacts: {
                title: 'Контакти',
                map: 'Карта',
                street: 'G Street View',
                contacts: 'Контакти',
                email: 'Е-поща',
                org: 'Сдружение с нестопанска цел "Хакафе"',
                org2: 'Сдружение с нестопанска цел "Хакафе"',
                loc: 'ул. 11-ти Август №1, 4000 Пловдив, България',
                loc2: 'ул. Магура №1, Капана, 4000 Пловдив, България',
                chief: 'Вожд',
                events: 'Събития',
                finance: 'Финанси',
                manager: 'Офис мениджър',
                common: 'Общ',
                announcement: 'Известия',
                system: 'Онлайн системи',
		        bigLabName: 'Големият Лаб',
		        littleLabName: 'Малкият Лаб'
            },

            members: {

                membership: '<span class="block">Как да стана член<span>?</span>',
                about:'<span class="highlight"><a href="#!/contacts">Hackafe</a></span> е отворено общество и всеки може да стане негов член.',
                contacts: '<a href="#!/contacts">Свържете</a> се с нас или елате на <a href="#!/contacts">място.</a>',
                type:"В Hackafe имaме установени 2 типа членство.",
                reg:"Възможност за 24/7 достъп до помещенията на hackafe в самия център на Пловдив.",
                reg1:"Отстъпка за всички платени събития, които се провеждат в рамките на #hackafe.",
                reg2:"Достъп до всички ресурси на лаба.",
                reg3:"Месечен членски внос 10 лв.",
                pro:"Всичко от Reg + гарантирано място / бюро в лаба, на което може да се остави стационарен компютър.",
                pro1:"Достъп до CoW помещение, което може да се ползва като офис.",
                pro2:"Месечен членски внос 75 лв.",
				benefits: "Предимства",
                members: "Всички членове имат равни права в независимо от нивото на членство.",
				registrationForm: "Форма за регистрация.", 
                payment:"Как да платим?",
                bankaccount:"С банков превод до сметката на &quot;Хакафе&quot; в ПроКредит Банк:",
                IBAN: "BG36PRCB9230104564"

            },


            events: {

                eventscourses: "Събития и Курсове",
                events: "Събития",
                courses: "Курсове",
                upcoming: "Предстоящи",
                for_vote: "За Гласуване",
                for_voting_title: "Събития предложени за гласуване",
                date: "Дата",
                fblink: "Линк към събитието",
                from: "От",
                to: "До",
                nextPage: 'Следваща Страница',
                prevPage: 'Предишна Страница'
            },

            sponsors: {
                title_current: "Списък на нашите настоящи спонсори",
				title_previous: "Списък на нашите предишни спонсори",
				partners: "Партньори",
                our_goals_title: "Какви са нашите цели и защо да помогнете",
                our_goals: "<p>За две години, Хакафе създаде повече от 50 лекции и 7 курса в сферата на IT. Както беше и съорганизатор на 6 конференции - PlovdivConf 2013/2014/2015, PlovDev и Plovdiv Game Jam. Преди една година лабът си постави за цел да бъде IT фар в Пловдив насочващ всеки един програмист или ентусиаст. Ние смятаме, че сме успели да постигнем целите които си поставихме преди 1 година. Видео за целите на лаба PlovdivConf 2013/2014/2015:</p><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/sjuQ2NdcpTM?list=PL39ynX_J56q1caN4J5dZvJzuFuNzz51Pr\" frameborder=\"0\" allowfullscreen></iframe><iframe width=\"560\" height=\"315\" src=\"//www.youtube.com/embed/vJ-jl40Hoso\" frameborder=\"0\" allowfullscreen></iframe><iframe width=\"560\" height=\"315\" src=\"//www.youtube.com/embed/WmLFKdpVGYg\" frameborder=\"0\" allowfullscreen></iframe><p>Освен създаването на лекции и курсове, лабът служи също като co-working space за freelance developer-и.Към момента лабът се простира на близо 400 кв. м. разделени в големият лаб на ул. 11-ти август с любезното спонсорство от фирма Програмиста и малкият лаб в капана предоставен от Пловдив2019.<br>За изминалата година над 10 човека са успели да си намерят работа, чрез запознанства с професионалисти и трупане на знания от проведените курсове.<br>IT общността около Hackafe се е доказала като свързващо звено между фирми търсещи начинаещи разработчици и хора които искат да станат такива.<br></p>",
                how_to_title: "Как да станете спонсор и с какво да помогнете",
                how_to_become: "Свържете се с Вожда на Hackafe от страницата с контакти. Можете да дарите нещо от което да имаме полза (има списък на края на страницата) или нещо от което Вие смятате, че ще имаме полза.<br>Примерно: можете да издадете промо кодове за намаление на дадени услуги за членовете на Hackafe.",
                list_of_stuff: '<ul><li>Интернет: оптичен, за да можем да прави live streaming на събития, лекции и workshop-и</li><li>Професионална камера за заснемане: - Примерно CANON LEGRIA HF M52 или CANON LEGRIA HF G10</li><li>Live broadcast устройство - <a href="http://new.livestream.com/broadcaster">livestream broadcaster</a> и лиценз за акаунт към него</li><li>3d printer за изработка на детайли към различни проекти или материали за конструиране на собствен 3d printer</li><li>Шкафове, рафтове, мека мебел и подобни (чакаме дарение, в прогрес)</li><li>Спонсори за работилници изискващи закупуване на определн брой хардуерни материали.</li><li>Телевизор (по-голям от 32 инча) за презентации, реклами и streaming</li><li>Акаунт в <a href="http://tutsplus.com/">http://tutsplus.com/</a> за членовете на Hackafe</li><li>Барбарони за релакс/работен кът</li></ul>'
            },

            announcements: {

                abouthackafe: "За Hackafe",
                announcement: "Обяви",
                free: "Безплатни",
                paid: "Платени",
                description: "Описание",
                contact: "Контакти"
            },

            projects: {
                title: 'Проекти'
            }
        };

    }
);
