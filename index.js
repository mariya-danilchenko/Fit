const indexPage = document.getElementById("index-page");
//const quizPage = document.getElementById("quiz-page");
//console.log(quizPage);
//const calculatorPage = document.getElementById("calculator-page");
//const menuPage = document.getElementById("menu-page");
//const exercisePage = document.getElementById("exercise-page");


function openQuiz(e) {
    e.preventDefault();
    window.location.hash = "#quiz/quiz";
}
indexPage.addEventListener('click', openQuiz);

function openCalculation(e) {
    e.preventDefault();
    window.location.hash = "#calculation";
}
//quizPage.addEventListener('click', openCalculation);


function openMenu(e) {
    e.preventDefault();
    window.location.hash = "#menu";
}
//calculatorPage.addEventListener('click', openMenu);

function openExercise(e) {
    e.preventDefault();
    window.location.hash = "#exercise";
}


function onLoad(data) {
    document.body.innerHTML = data;
    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', 'quiz/quiz.js');
    body.appendChild(script);
}

function onError(err) {
    console.log(err.message);
}

window.onhashchange = function(e) {
    console.log("onhashchange");
    const hash = window.location.hash.substring(1);
    $.ajax(`${hash}.html`, {
        data: "GET",
        dataType: "html",
        success: onLoad,
        error: onError,
    })
}