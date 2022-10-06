if (window.location.hash) {
    window.location.hash = '';
}

function openQuiz() {
    window.location.hash = "#quiz/quiz";
}

function openCalculation() {
    window.location.hash = '#calculation/calculation';
}

function openMenu() {
    window.location.hash = "#calculation/menu";
}

function openExercise() {
    window.location.hash = "#calculation/exercise";
}

function onLoad(data) {
    document.body.innerHTML = data;
    const hash = window.location.hash.substring(1);
    let jsPath = '';
    if (hash === 'quiz/quiz') {
        jsPath = 'quiz/quiz.js';
    } else if (hash === 'calculation/calculation') {
        jsPath = 'calculation/calculation.js';
    }
    if (jsPath) {
        const script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', jsPath);
        body.appendChild(script);
    }
}

function onError(err) {
    console.log(err.message);
}

window.onhashchange = function(e) {
    const hash = window.location.hash.substring(1);
    $.ajax(`${hash}.html`, {
        data: "GET",
        dataType: "html",
        success: onLoad,
        error: onError,
    })
}