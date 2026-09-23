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

// =========================
// SCREEN 11 — GRADUATION
// =========================

const graduationAnswer =
    document.getElementById("graduation-answer");

const continueGraduation =
    document.getElementById("continue-graduation");

continueGraduation.addEventListener("click", function() {

    const answer = graduationAnswer.value.trim();

    if (answer === "") {
        graduationAnswer.focus();
        return;
    }

    showScreen(12);
});

// =========================
// SCREEN 12 — RANDOM PHOTOS
// =========================

const random2Answer =
    document.getElementById("random2-answer");

const random2Continue =
    document.getElementById("random2-continue");

random2Continue.addEventListener("click", function() {

    const answer = random2Answer.value.trim();

    if (answer === "") {
        random2Answer.focus();
        return;
    }

    showScreen(13);
});

// =========================
// SCREEN 13 — MEMORY QUIZ
// =========================

const memoryStep1 =
    document.getElementById("memory-step-1");

const memoryStep2 =
    document.getElementById("memory-step-2");

const memoryStep3 =
    document.getElementById("memory-step-3");

const memoryFinish =
    document.getElementById("memory-finish");


const memoryResult1 =
    document.getElementById("memory-result-1");

const memoryResult2 =
    document.getElementById("memory-result-2");

const memoryResult3 =
    document.getElementById("memory-result-3");


const memoryOptions1 =
    memoryStep1.querySelectorAll(".memory-option");

const memoryOptions2 =
    memoryStep2.querySelectorAll(".memory-option");


const memoryOpenAnswer =
    document.getElementById("memory-open-answer");

const memoryOpenButton =
    document.getElementById("memory-open-button");

const memoryContinue =
    document.getElementById("memory-continue");

const memoryQuizTitle =
    document.getElementById("memory-quiz-title");

const memoryQuizIntro =
    document.getElementById("memory-quiz-intro");


// =========================
// ВОПРОС 1
// =========================

memoryOptions1.forEach(function(option, index) {

    option.addEventListener("click", function() {

        if (index === 1) {

            memoryResult1.textContent =
                "Правильно ❤️ Именно закупка на последний звонок.";

            option.style.background = "#ffe1ea";

            setTimeout(function() {

                memoryStep1.classList.remove("active");
                memoryStep2.classList.add("active");

                window.scrollTo({
                    top: 0,
                    behavior: "instant"
                });

            }, 900);

        } else {

            memoryResult1.textContent =
                "Не-а 😄 Попробуй ещё раз.";
        }

    });

});


// =========================
// ВОПРОС 2
// =========================

memoryOptions2.forEach(function(option, index) {

    option.addEventListener("click", function() {

        if (index === 2) {

            memoryResult2.textContent =
                "Правильно ❤️ На даче собирали клубнику.";

            option.style.background = "#ffe1ea";

            setTimeout(function() {

                memoryStep2.classList.remove("active");
                memoryStep3.classList.add("active");

                window.scrollTo({
                    top: 0,
                    behavior: "instant"
                });

            }, 900);

        } else {

            memoryResult2.textContent =
                "Не-а 😄 Вспомни ещё раз.";

        }

    });

});


// =========================
// ВОПРОС 3
// =========================

memoryOpenButton.addEventListener("click", function() {

    const answer =
        memoryOpenAnswer.value.trim();

    if (answer === "") {

        memoryOpenAnswer.focus();

        return;
    }

    memoryResult3.textContent =
        "Мне интересно, что именно ты вспомнила ❤️";

    memoryOpenButton.style.display = "none";

    setTimeout(function() {

     memoryStep3.classList.remove("active");
memoryFinish.style.display = "block";

memoryQuizTitle.style.display = "none";
memoryQuizIntro.style.display = "none";

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 1000);

});


// =========================
// ПЕРЕХОД НА 14 / 18
// =========================

memoryContinue.addEventListener("click", function() {

    showScreen(14);

});

// =========================
// SCREEN 14 — PHOTO ALBUM
// =========================

const albumContinue =
    document.getElementById("album-continue");

albumContinue.addEventListener("click", function() {

    showScreen(15);

});

// =========================
// SCREEN 15 — WALKS
// =========================

const walksContinue =
    document.getElementById("walks-continue");

walksContinue.addEventListener("click", function() {

    showScreen(16);

});

// =====================================
// SCREEN 16 — OUR EVENINGS
// =====================================

const eveningPhotos = [

    {
        src: "images/evening-1.jpg",
        comment: "Один из тех моментов, которые хочется сохранить просто потому, что нам тогда было хорошо. ❤️"
    },

    {
        src: "images/evening-2.jpg",
        comment: "Красивый вечер, хорошее настроение и человек рядом — иногда больше ничего и не нужно."
    },

    {
        src: "images/evening-3.jpg",
        comment: "Некоторые фотографии вообще не требуют объяснений. Достаточно просто посмотреть на них и всё вспомнить."
    },

    {
        src: "images/evening-4.jpg",
        comment: "Ещё один наш маленький момент, который со временем стал частью большой истории. ❤️"
    },

    {
        src: "images/evening-5.jpg",
        comment: "Даже обычная фотография иногда может вернуть в конкретный вечер и заставить вспомнить всё до мелочей."
    },

    {
        src: "images/evening-7.jpg",
        comment: "И таких моментов за это время накопилось уже действительно много."
    },

    {
        src: "images/evening-6.jpg",
        comment: "И эта фотография будет не последняя за этот сентябрь❤️"
    }

];


let currentEveningPhoto = 0;


const eveningPhoto =
    document.getElementById("evening-photo");

const eveningComment =
    document.getElementById("evening-comment");

const eveningCounter =
    document.getElementById("evening-counter");

const eveningNext =
    document.getElementById("evening-next");

const eveningPrev =
    document.getElementById("evening-prev");


function updateEveningPhoto() {

    eveningPhoto.src =
        eveningPhotos[currentEveningPhoto].src;

    eveningComment.textContent =
        eveningPhotos[currentEveningPhoto].comment;

    eveningCounter.textContent =
        `${currentEveningPhoto + 1} / ${eveningPhotos.length}`;

}


/* ВПЕРЁД */

eveningNext.addEventListener("click", function() {

    currentEveningPhoto++;

    if (
        currentEveningPhoto >=
        eveningPhotos.length
    ) {
        currentEveningPhoto = 0;
    }

    updateEveningPhoto();

});


/* НАЗАД */

eveningPrev.addEventListener("click", function() {

    currentEveningPhoto--;

    if (currentEveningPhoto < 0) {

        currentEveningPhoto =
            eveningPhotos.length - 1;

    }

    updateEveningPhoto();

});


/* ПРОДОЛЖИТЬ */

const continueEvening =
    document.getElementById("continue-evening");


continueEvening.addEventListener("click", function() {

    showScreen(17);

});

// =====================================
// SCREEN 17 — FIRST DANCE
// =====================================

const danceAnswer =
    document.getElementById("dance-answer");

const continueDance =
    document.getElementById("continue-dance");


continueDance.addEventListener("click", function() {

    const answer =
        danceAnswer.value.trim();

    if (answer === "") {

        danceAnswer.focus();

        return;
    }

    showScreen(18);

});

// =====================================
// SCREEN 18 — FINAL
// =====================================

const finalOpen =
    document.getElementById("final-open");

const finalLetter =
    document.getElementById("final-letter");

const finalHearts =
    document.getElementById("final-hearts");


finalOpen.addEventListener("click", function() {

    finalLetter.classList.add("visible");

    finalOpen.style.display = "none";

    createFinalHearts();

    setTimeout(function() {

        finalLetter.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 200);

});


function createFinalHearts() {

    for (let i = 0; i < 18; i++) {

        const heart =
            document.createElement("div");

        heart.classList.add(
            "final-floating-heart"
        );

        heart.textContent = "❤️";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.animationDelay =
            Math.random() * 3 + "s";

        heart.style.fontSize =
            (18 + Math.random() * 25) + "px";

        finalHearts.appendChild(heart);

    }

}