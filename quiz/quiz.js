const QUESTIONS = [{
        title: 'What is your gender?',
        type: 'radio',
        answers: [{
                image: '../img/q1/female.png',
                answer_title: 'Female',
            },
            {
                image: '../img/q1/male.png',
                answer_title: 'Male',
            }
        ]
    },
    {
        title: 'What is your main goal?',
        type: 'radio',
        answers: [{
                image: '../img/q1/apple.png',
                answer_title: 'Lose weight',
            },
            {
                image: '../img/q1/meat.png',
                answer_title: 'To gain weight',
            }
        ]
    },
    {
        title: 'Fill in the parameters',
        type: 'input',
        answers: [{
                answer_title: 'Weight (kg)',
                value: "Enter weight",
            },
            {
                answer_title: 'Growth (cm)',
                value: "Enter growth",
            },
            {
                answer_title: 'Years',
                value: "Enter years",
            }
        ]
    },
    {
        title: 'How much do you want to weight?',
        type: 'input',
        answers: [{
            answer_title: 'Weight (kg)',
            value: "Enter weight",
        }]
    },
    {
        title: 'Bad habits',
        type: 'checkbox',
        answers: [{
                image: '../img/q1/not.png',
                answer_title: 'Not',
            },
            {
                image: '../img/q1/junk_food.png',
                answer_title: 'I eat a lot of junk food',
            },
            {
                image: '../img/q1/smoking.png',
                answer_title: 'Smoking',
            },
            {
                image: '../img/q1/alcohol.png',
                answer_title: 'Alcohol',
            },
            {
                image: '../img/q1/sweets.png',
                answer_title: 'I eat a lot of sweets',
            }
        ]
    },
    {
        title: 'How many hours do you sleep?',
        type: 'radio',
        answers: [{
                image: '../img/q1/5_hours.png',
                answer_title: 'Less then 5 hours',
            },
            {
                image: '../img/q1/5-7_hours.png',
                answer_title: '5-7 hours',
            },
            {
                image: '../img/q1/8-9_hours.png',
                answer_title: '8-9 hours',
            },
            {
                image: '../img/q1/9_hours.png',
                answer_title: 'More than 9 hours',
            }
        ]
    }

];

const radioClickCallback = (e) => {
    const answerContainerElem = document.querySelector('.test__answer_radio');
    e.preventDefault();
    localStorage.setItem(questionNumber, e.target.parentNode.querySelector('p').innerText);
    questionNumber++;
    const answerItems = answerContainerElem.querySelectorAll('.test__answer__item');
    answerItems.forEach((item, index) => {
        item.removeEventListener('click', radioClickCallback);
        if (index) {
            item.remove();
        }
    })

    answerContainerElem.hidden = true;

    setQuestion();
};

let questionNumber = 0;

setQuestion();

function setQuestion() {
    if (questionNumber === QUESTIONS.length) {
        document.querySelector('.container-progress').remove();
        document.querySelector('.test__title').innerText = 'Analyzing...';

        const littleText = document.querySelector('.test__text');
        littleText.innerHTML = 'We analyze the data and create a program for you';
        littleText.hidden = false;

        document.querySelector('.bar').hidden = false;
        startAnalyzing();
        return;
    }

    addProgress();
    if (questionNumber === 1) {
        document.querySelector('.test__text').hidden = true;
    }

    let questionObject = QUESTIONS[questionNumber];
    if (!questionObject) return;

    const qustionTitle = document.querySelector('.test__title');
    qustionTitle.innerText = questionObject.title;
    questionObject.answers.forEach((answerObject, index) => {

        if (questionObject.type === "input") {
            const answerContainerElem = document.querySelector('.test__answer_input')
            const answerContainer = answerContainerElem.querySelector('.test__parameters');
            answerContainerElem.hidden = false

            let answerElem = answerContainer.querySelector('.test__answer__item_input');

            if (index) {

                answerElem = answerElem.cloneNode(true);
                answerContainer.appendChild(answerElem);
            }

            const input = answerElem.querySelector('input');
            input.setAttribute('id', 'input' + index);
            input.placeholder = answerObject.value;
            const label = answerElem.querySelector('label');
            label.setAttribute('for', 'input' + index);
            label.innerText = answerObject.answer_title;

            const button = answerContainerElem.querySelector('.test__button');
            const clickCallback = (e) => {
                e.preventDefault();
                const form = document.querySelector('.test__answer_input');

                let results = {};
                let requireValidationError = '';
                [...form.querySelectorAll('.test__answer__item_input')].forEach(input => {
                    const key = input.querySelector('.parameters__name').innerHTML;
                    const value = input.querySelector('.parameters__input').value;
                    if (!value) {
                        requireValidationError = 'All fields are required!';
                    }
                    results[key] = value;
                });
                if (requireValidationError) {
                    alert(requireValidationError);
                    return;
                }
                localStorage.setItem(questionNumber, JSON.stringify(results));
                questionNumber++;


                const answerItems = form.querySelectorAll('.test__answer__item_input');
                answerItems.forEach((item, index) => {
                    if (index) {
                        item.remove();
                    } else {
                        item.querySelector('.parameters__input').value = '';
                    }
                })
                answerContainerElem.hidden = true;
                button.removeEventListener('click', clickCallback);
                setQuestion();
            };

            if (!index) {
                button.addEventListener('click', clickCallback);
            }

        } else if (questionObject.type === "radio") {

            const answerContainerElem = document.querySelector('.test__answer_radio');
            answerContainerElem.hidden = false;

            let answerElem = answerContainerElem.querySelector('.test__answer__item');


            if (index) {
                answerElem = answerElem.cloneNode(true);
                answerContainerElem.appendChild(answerElem);
            }

            const input = answerElem.querySelector('input');
            input.setAttribute('id', 'radio' + index);
            const img = answerElem.querySelector('img');
            img.setAttribute('src', answerObject.image);
            const label = answerElem.querySelector('label');
            label.setAttribute('for', 'radio' + index);
            const labelText = answerElem.querySelector('p');
            labelText.innerText = answerObject.answer_title;

            answerElem.addEventListener('click', radioClickCallback);

        } else if (questionObject.type === "checkbox") {
            const checkBoxContainer = document.querySelector('.checkBox-container');
            checkBoxContainer.hidden = false;

            const answerContainerElem = checkBoxContainer.querySelector('.test__answer_checkbox');
            let answerElem = answerContainerElem.querySelector('.test__answer__item');


            if (index) {
                answerElem = answerElem.cloneNode(true);
                answerContainerElem.appendChild(answerElem);
            }

            const input = answerElem.querySelector('input');
            input.setAttribute('id', 'checkbox' + index);
            const img = answerElem.querySelector('img');
            img.setAttribute('src', answerObject.image);
            const label = answerElem.querySelector('label');
            label.setAttribute('for', 'checkbox' + index);
            const labelText = answerElem.querySelector('p');
            labelText.innerText = answerObject.answer_title;


            const button = checkBoxContainer.querySelector('.test__button');
            const clickCallback = (e) => {
                e.preventDefault();
                const checkBoxesContainer = document.querySelector('.test__answer_checkbox');
                let results = [];
                const allCheckBoxes = [...checkBoxesContainer.querySelectorAll('.checkbox-input')];
                allCheckBoxes.forEach(checkbox => checkbox.checked ? results.push(checkbox.labels[0].innerText) : undefined);
                let validationError = '';
                validationError = results.length === 0 ? 'Please check at least one checkbox!' : validationError;
                validationError = results.includes('Not') && results.length > 1 ? `You can't chose "Not" option with other options` : validationError;
                if (validationError) {
                    alert(validationError);
                    return;
                }
                localStorage.setItem(questionNumber, JSON.stringify(results));
                questionNumber++;

                const answerItems = checkBoxesContainer.querySelectorAll('.test__answer__item');
                answerItems.forEach((item, index) => {
                    if (index) {
                        item.remove();
                    }
                })
                checkBoxContainer.hidden = true;
                button.removeEventListener('click', clickCallback);
                setQuestion();
            };

            if (!index) {
                button.addEventListener('click', clickCallback);
            }
        }
    });
}

function addProgress() {
    const progress = document.getElementById('progress');
    const circles = document.querySelectorAll('.circle');

    if (questionNumber > circles.length) {
        questionNumber = circles.length;
    }
    update()

    function update() {
        circles.forEach((circle, index) => {
            if (index <= questionNumber) {
                circle.classList.add('active');
            } else {
                circle.classList.remove('active');
            }
        })
        const progressPercentage = questionNumber / (circles.length - 1) * 100 + '%';
        progress.style.width = progressPercentage;
    }
}

let count = 0;
let interval;

function progress() {
    const innerbar = document.querySelector('.innerbar')
    count++;
    innerbar.style.width = `${count}%`
    if (count == innerbar.dataset.parcent) {
        openCalculation();
        clearInterval(interval);
    }
}

function startAnalyzing() {
    interval = setInterval(function() {
        progress()
    }, [80])
}