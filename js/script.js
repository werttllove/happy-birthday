const screens = document.querySelectorAll(".screen");

function showScreen(number) {

    screens.forEach(function(screen) {
        screen.classList.remove("active");
    });

    screens[number].classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
}

/* ===== ГЛАВНЫЙ ЭКРАН ===== */

const startButton = document.querySelector(".start-button");

startButton.addEventListener("click", function() {

    showScreen(1);

});


/* ===== ЭКРАН 1 ===== */

const dateInput = document.getElementById("date-answer");
const checkDateButton = document.getElementById("check-date");
const answerMessage = document.getElementById("answer-message");

checkDateButton.addEventListener("click", function() {

    const answer = dateInput.value.trim();

    if (answer === "10.01.2025") {

        showScreen(2);

    } else {

        answerMessage.textContent =
            "Кажется, где-то ошибка 👀 Попробуй ещё раз ❤️";

    }

});

/* ===== КАРУСЕЛЬ ФОТОГРАФИЙ ===== */

const photos = [
    {
        src: "images/photo3.jpg",
        comment: "Кажется, всё начиналось довольно просто..."
    },

    {
        src: "images/photo4.jpg",
        comment: "Эту ситуацию мы помним оба"
    },

    {
        src: "images/photo5.jpg",
        comment: "Кажется, мы с самого начала умели нормально общаться."
    },

    {
        src: "images/photo2.jpg",
        comment: "Вот примерно с этого всё и началось. Несколько сообщений, которые в итоге привели нас сюда."
    },

    {
        src: "images/photo1.jpg",
        comment: "А это наш певый опыт с ребёнком"
    }
];

let currentPhoto = 0;

const memoryPhoto = document.getElementById("memory-photo");
const photoComment = document.getElementById("photo-comment");
const photoCounter = document.getElementById("photo-counter");

const nextPhoto = document.getElementById("next-photo");
const prevPhoto = document.getElementById("prev-photo");


function updatePhoto() {

    memoryPhoto.src = photos[currentPhoto].src;

    photoComment.textContent =
        photos[currentPhoto].comment;

    photoCounter.textContent =
        `${currentPhoto + 1} / ${photos.length}`;
}


nextPhoto.addEventListener("click", function() {

    currentPhoto++;

    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }

    updatePhoto();

});


prevPhoto.addEventListener("click", function() {

    currentPhoto--;

    if (currentPhoto < 0) {
        currentPhoto = photos.length - 1;
    }

    updatePhoto();

});

/* ===== ВОПРОС ЭКРАНА 2 ===== */

const homeDateAnswer = document.getElementById("home-date-answer");
const checkHomeDate = document.getElementById("check-home-date");
const homeDateMessage = document.getElementById("home-date-message");

checkHomeDate.addEventListener("click", function() {

    const answer = homeDateAnswer.value.trim();

    if (answer === "15.07.2025") {

        showScreen(3);

    } else {

        homeDateMessage.textContent =
            "Кажется, дата немного не та 👀 Попробуй вспомнить ещё раз ❤️";

    }

});

const continueTelegram =
    document.getElementById("continue-telegram");

continueTelegram.addEventListener("click", function() {
    showScreen(4);
});

const filmOptions = document.querySelectorAll(".film-option");
const filmMessage = document.getElementById("film-message");

const dayPhotos = document.getElementById("day-photos");
const secondQuestion = document.getElementById("second-question");

const memoryAnswer = document.getElementById("memory-answer");
const continueDay = document.getElementById("continue-day");

filmOptions.forEach(function(option) {

    option.addEventListener("click", function() {

        const answer = option.dataset.answer;

        if (answer === "correct") {

            filmMessage.textContent =
                "Правильно ❤️ Кажется, ты всё-таки помнишь этот день.";

            dayPhotos.classList.add("visible");
            secondQuestion.classList.add("visible");

            option.style.background = "#ffe1ea";

        } else {

            filmMessage.textContent =
                "Не-а 😄 Попробуй ещё раз.";

        }

    });

});


continueDay.addEventListener("click", function() {

    const answer = memoryAnswer.value.trim();

    if (answer === "") {

        memoryAnswer.focus();

        return;

    }

    showScreen(5);

});

/* ===== ЭКРАН 5 — ДЕНЬ РОЖДЕНИЯ ===== */

const birthdayAnswer =
    document.getElementById("birthday-answer");

const continueBirthday =
    document.getElementById("continue-birthday");


continueBirthday.addEventListener("click", function() {

    const answer = birthdayAnswer.value.trim();

    if (answer === "") {

        birthdayAnswer.focus();

        return;

    }

    showScreen(6);

});

/* ===== ЭКРАН 6 — 31.10.2025 ===== */

const octoberAnswer =
    document.getElementById("october-answer");

const continueOctober =
    document.getElementById("continue-october");


continueOctober.addEventListener("click", function() {

    const answer = octoberAnswer.value.trim();

    if (answer === "") {

        octoberAnswer.focus();

        return;

    }

    showScreen(7);

});

/* ===== ЭКРАН 7 — НОВЫЙ ГОД ===== */

const newyearAnswer =
    document.getElementById("newyear-answer");

const continueNewyear =
    document.getElementById("continue-newyear");


continueNewyear.addEventListener("click", function() {

    const answer = newyearAnswer.value.trim();

    if (answer === "") {

        newyearAnswer.focus();

        return;

    }

    showScreen(8);

});

/* ===== ЭКРАН 8 — ГОД ОТНОШЕНИЙ ===== */

const anniversaryAnswer =
    document.getElementById("anniversary-answer");

const continueAnniversary =
    document.getElementById("continue-anniversary");


continueAnniversary.addEventListener("click", function() {

    const answer = anniversaryAnswer.value.trim();

    if (answer === "") {

        anniversaryAnswer.focus();

        return;

    }

    showScreen(9);

});

// =========================
// ЭКРАН 09 — РАНДОМНЫЕ МОМЕНТЫ
// =========================

const randomPhotos = [
    {
        src: "images/random-1.jpg",
        comment: "Просто один из тех моментов, которые хочется сохранить."
    },
    {
        src: "images/random-2.jpg",
        comment: "Прогулки, разговоры и места, которые становятся особенными благодаря человеку рядом."
    },
    {
        src: "images/random-3.jpg",
        comment: "Зима тоже оставила после себя немало красивых воспоминаний. ❄️"
    },
    {
        src: "images/random-4.jpg",
        comment: "Не все наши моменты были только про нас двоих. Иногда рядом были ещё люди, смех и целые истории."
    },
    {
        src: "images/random-5.jpg",
        comment: "И таких моментов за это время накопилось действительно очень много. ❤️"
    }
];

let currentRandomPhoto = 0;

const randomPhoto = document.getElementById("random-photo");
const randomComment = document.getElementById("random-comment");
const randomCounter = document.getElementById("random-counter");

const randomNext = document.getElementById("random-next");
const randomPrev = document.getElementById("random-prev");

function updateRandomPhoto() {

    randomPhoto.src = randomPhotos[currentRandomPhoto].src;

    randomComment.textContent =
        randomPhotos[currentRandomPhoto].comment;

    randomCounter.textContent =
        `${currentRandomPhoto + 1} / ${randomPhotos.length}`;
}

randomNext.addEventListener("click", function() {

    currentRandomPhoto++;

    if (currentRandomPhoto >= randomPhotos.length) {
        currentRandomPhoto = 0;
    }

    updateRandomPhoto();
});

randomPrev.addEventListener("click", function() {

    currentRandomPhoto--;

    if (currentRandomPhoto < 0) {
        currentRandomPhoto = randomPhotos.length - 1;
    }

    updateRandomPhoto();
});


// Переход на экран 10

const randomContinue =
    document.getElementById("random-continue");

randomContinue.addEventListener("click", function() {

    showScreen(10);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// =========================
// ЭКРАН 10 — ПОСЛЕДНИЙ ЗВОНОК
// =========================

const lastCallContinue =
    document.getElementById("last-call-continue");

lastCallContinue.addEventListener("click", function() {

    showScreen(11);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});