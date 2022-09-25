const buttons = document.getElementsByTagName('button');

function show(num) {

    const contents = document.querySelectorAll('.content__day');

    Array.from(contents)
        .forEach(item => item.style.display = 'none');
    contents[num - 1].style.display = "block";

    Array.from(buttons).forEach(item => item.classList.remove('active'));

    buttons[num - 1].classList.add('active');
}

let gender = localStorage.getItem(0);
let goal = localStorage.getItem('1');
let weight = localStorage.getItem('2')['Weight (kg)'];
let growth = localStorage.getItem('2')['Growth (cm)'];
let years = localStorage.getItem('2')['Years'];
let weightLost = localStorage.getItem('3')['Weight (kg)'];
let badHabits = localStorage.getItem('4');
let sleep = localStorage.getItem('5');
let difference = weight - weightLost;
let weightNew = weight - difference;
let BMI = parseInt(weight / ((growth / 100) ** 2));
let BMINew = parseInt(weightNew / ((growth / 100) ** 2));

document.querySelector('.test__answer__item').value = gender;
document.querySelector('.parameters__input').value['Weight (kg)'] = weight;
document.querySelector('.parameters__input').value['Growth (cm)'] = growth;
document.querySelector('.parameters__input').value['Years'] = years;
document.querySelector('.checkbox-input') = badHabits;



const indexBmi = document.querySelector('.index__bmi');
const valueBmi = document.querySelector('.value__bmi');


if ((gender == "female" && (18 < years > 24) && BMI < 19) ||
    (gender == "female" && (25 < years > 34) && BMI < 20) ||
    (gender == "female" && (35 < years > 44) && BMI < 21) ||
    (gender == "female" && (45 < years > 54) && BMI < 22) ||
    (gender == "female" && (55 < years > 64) && BMI < 23) ||
    (gender == "female" && (years < 65) && BMI < 24) ||
    (gender == "male" && (18 < years > 24) && BMI < 20) ||
    (gender == "male" && (25 < years > 34) && BMI < 21) ||
    (gender == "male" && (35 < years > 44) && BMI < 22) ||
    (gender == "male" && (45 < years > 54) && BMI < 23) ||
    (gender == "male" && (55 < years > 64) && BMI < 24) ||
    (gender == "male" && (years < 65) && BMI < 25)) {
    const indexBmi = document.querySelector('.index__bmi');
    const valueBmi = document.querySelector('.value__bmi');
    indexBmi.innerHTML = weight;
    valueBmi.innerText = 'underweight';
    valueBmi.classList.add('.value__bmi-yellow');

} else if ((gender == "female" && (18 < years > 24) && (19 < BMI > 24)) ||
    (gender == "female" && (25 < years > 34) && (20 < BMI > 25)) ||
    (gender == "female" && (35 < years > 44) && (21 < BMI > 26)) ||
    (gender == "female" && (45 < years > 54) && (22 < BMI > 27)) ||
    (gender == "female" && (55 < years > 64) && (23 < BMI > 28)) ||
    (gender == "female" && (years < 65) && (24 < BMI > 29)) ||
    (gender == "male" && (18 < years > 24) && (20 < BMI > 25)) ||
    (gender == "male" && (25 < years > 34) && (21 < BMI > 26)) ||
    (gender == "male" && (35 < years > 44) && (22 < BMI > 27)) ||
    (gender == "male" && (45 < years > 54) && (23 < BMI > 28)) ||
    (gender == "male" && (55 < years > 64) && (24 < BMI > 29)) ||
    (gender == "male" && (years < 65) && (25 < BMI > 30))) {
    const indexBmi = document.querySelector('.index__bmi');
    const valueBmi = document.querySelector('.value__bmi');
    indexBmi.innerHTML = weight;
    valueBmi.innerText = 'normal weight';
    valueBmi.classList.add('.value__bmi-green');

} else if ((gender == "female" && (18 < years > 24) && (24 < BMI > 29)) ||
    (gender == "female" && (25 < years > 34) && (25 < BMI > 30)) ||
    (gender == "female" && (35 < years > 44) && (26 < BMI > 31)) ||
    (gender == "female" && (45 < years > 54) && (27 < BMI > 32)) ||
    (gender == "female" && (55 < years > 64) && (28 < BMI > 33)) ||
    (gender == "female" && (years < 65) && (29 < BMI > 34)) ||
    (gender == "male" && (18 < years > 24) && (25 < BMI > 30)) ||
    (gender == "male" && (25 < years > 34) && (26 < BMI > 31)) ||
    (gender == "male" && (35 < years > 44) && (27 < BMI > 32)) ||
    (gender == "male" && (45 < years > 54) && (28 < BMI > 33)) ||
    (gender == "male" && (55 < years > 64) && (29 < BMI > 34)) ||
    (gender == "male" && (years < 65) && (30 < BMI > 35))) {
    const indexBmi = document.querySelector('.index__bmi');
    const valueBmi = document.querySelector('.value__bmi');
    indexBmi.innerHTML = weight;
    valueBmi.innerText = 'overweight';
    valueBmi.classList.add('.value__bmi-orange');

} else {
    const indexBmi = document.querySelector('.index__bmi');
    const valueBmi = document.querySelector('.value__bmi');
    indexBmi.innerHTML = weight;
    valueBmi.innerText = 'obesity';
    valueBmi.classList.add('.value__bmi-red');
}