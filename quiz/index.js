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
        ],
        button: 'a',
    },
    {
        title: 'How much do you want to weigh?',
        type: 'input',
        answers: [{
            answer_title: 'Weight (kg)',
            value: "Enter weight",
        }],
        button: 'a',
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
        ],
        button: 'a',
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
    },

];

let questionNumber = 0;
setQuestion();

function setQuestion() {
    addProgress();
    if (questionNumber === 1) {
        document.querySelector('.test__text').remove();
    }
    console.log('Function exec')
    let questionObject = QUESTIONS[questionNumber];
    if (!questionObject) return;

    const qustionTitle = document.querySelector('.test__title');
    console.log(questionObject)
    console.log(questionNumber)
    qustionTitle.innerText = questionObject.title;
    // let firstRadioListener;
    questionObject.answers.forEach((answerObject, index) => {
        if (questionObject.type === "radio") {

            const answerContainerElem = document.querySelector('.test__answer_radio');
            let answerElem = answerContainerElem.querySelector('.test__answer__item');

            if (index) {
                answerElem = answerElem.cloneNode(true);
                answerContainerElem.appendChild(answerElem);
            } else {

            }

            const input = answerElem.querySelector('input');
            input.setAttribute('id', index);
            const img = answerElem.querySelector('img');
            img.setAttribute('src', answerObject.image);
            const label = answerElem.querySelector('label');
            label.setAttribute('for', index);
            const labelText = answerElem.querySelector('p');
            labelText.innerText = answerObject.answer_title;

            answerElem.addEventListener('click', (e) => {
                console.log(e)
                e.preventDefault();
                // answerContainerElem.querySelector('.test__answer__item').removeEventListener('click', firstRadioListener);
                console.log(e.target)
                localStorage.setItem(questionNumber, e.target.querySelector('p').innerText);
                questionNumber++;
                const answerItems = answerContainerElem.querySelectorAll('.test__answer__item');
                answerItems.forEach((item, index) => {
                    if (index) {
                        item.remove();
                    }
                })
                setQuestion();
            });
            // if (!index) {
            //     firstRadioListener = listener;
            // }
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


function progress() {
    const innerbar = document.querySelector('.innerbar')
    let count = 0;
    count++
    innerbar.style.width = `${count}%`
    if (count == innerbar.dataset.parcent) {
        clearInterval(stop)
    }
}

let stop = setInterval(function() {
    progress()
}, [100])





const results = ['']