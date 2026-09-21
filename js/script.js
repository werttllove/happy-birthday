const screens = document.querySelectorAll(".screen");

function showScreen(number) {

    screens.forEach(function(screen) {
        screen.classList.remove("active");
    });

    screens[number].classList.add("active");
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
        src: "images/photo1.jpg",
        comment: "Кажется, всё начиналось довольно просто..."
    },

    {
        src: "images/photo2.jpg",
        comment: "А потом пошли первые предложения, намёки и разговоры о том, чтобы сидеть вместе..."
    },

    {
        src: "images/photo3.jpg",
        comment: "Ну а без этого никак 😂 Кажется, мы с самого начала умели нормально общаться."
    },

    {
        src: "images/photo4.jpg",
        comment: "Вот примерно с этого всё и началось. Несколько сообщений, которые в итоге привели нас сюда."
    },

    {
        src: "images/photo5.jpg",
        comment: "А ещё мы почти сразу успели завести ребёнка 😂❤️ Не спрашивай, как мы до этого дошли настолько быстро..."
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