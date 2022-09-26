const buttons = document.getElementsByTagName('button');

function show(num) {

    const contents = document.querySelectorAll('.content__day');

    Array.from(contents)
        .forEach(item => item.style.display = 'none');
    contents[num - 1].style.display = "block";

    Array.from(buttons).forEach(item => item.classList.remove('active'));

    buttons[num - 1].classList.add('active');
}

let gender = localStorage.getItem('0').toLowerCase();
let goal = localStorage.getItem('1');
let weight = JSON.parse(localStorage.getItem('2'))['Weight (kg)'];
let growth = JSON.parse(localStorage.getItem('2'))['Growth (cm)'];
let years = JSON.parse(localStorage.getItem('2'))['Years'];
let weightLost = JSON.parse(localStorage.getItem('3'))['Weight (kg)'];
let badHabits = JSON.parse(localStorage.getItem('4'));
let sleep = localStorage.getItem('5');
let difference = weight - weightLost;
let weightNew = weight - difference;
let BMI = parseInt(weight / ((growth / 100) ** 2));
let BMINew = parseInt(weightNew / ((growth / 100) ** 2));
// const callories = (655.1 + (9,563 * weight) + (1,85 * growth) - (4,676 * years)) / 1000;
const callories = 10 * weight + 6.25 * growth - 5 * years - 161;

document.querySelector('.callories-indicator').innerText = `${callories.toFixed(0)} kcal`;
document.querySelector('.height-indicator').innerText = `${growth}cm`;
document.querySelector('.weight-indicator').innerText = `${weight}kg`;
document.querySelector('.age-indicator').innerText = years;
document.querySelector('.point1-weight').innerText = `${weight} kg`;
document.querySelector('.point2-weight').innerText = `${(weight - weightLost) / 2 + Number(weightLost)} kg`;
document.querySelector('.point3-weight').innerText = `${weightLost} kg`;
document.querySelector('.chart-desire-weight').innerText = weightLost;



const indexBmi = document.querySelector('.index__bmi');
const BMIIndicator = document.querySelector('.indicator');
const BMIMin = 19;
const BMIMax = 35;
const BMIForIndicator = BMI < BMIMin ? BMIMin : BMI > BMIMax ? BMIMax : BMI;
let BMIIndicatorLeft = (BMIForIndicator - BMIMin) / (BMIMax - BMIMin) * 100;
BMIIndicator.style.left = `${BMIIndicatorLeft}%`;


if ((gender == "female" && (18 < years && years < 24) && BMI < 19) ||
    (gender == "female" && (25 < years && years < 34) && BMI < 20) ||
    (gender == "female" && (35 < years && years < 44) && BMI < 21) ||
    (gender == "female" && (45 < years && years < 54) && BMI < 22) ||
    (gender == "female" && (55 < years && years < 64) && BMI < 23) ||
    (gender == "female" && (years > 65) && BMI < 24) ||
    (gender == "male" && (18 < years && years < 24) && BMI < 20) ||
    (gender == "male" && (25 < years && years < 34) && BMI < 21) ||
    (gender == "male" && (35 < years && years < 44) && BMI < 22) ||
    (gender == "male" && (45 < years && years < 54) && BMI < 23) ||
    (gender == "male" && (55 < years && years < 64) && BMI < 24) ||
    (gender == "male" && (years > 65) && BMI < 25)) {
        console.log('Under')
    indexBmi.innerHTML = BMI + indexBmi.innerHTML;
    const valueBmi = document.querySelector('.value__bmi');
    valueBmi.innerText = 'underweight';
    valueBmi.classList.add('value__bmi-yellow');

} else if ((gender == "female" && (18 < years && years < 24) && (19 <= BMI && BMI < 24)) ||
    (gender == "female" && (24 <= years && years < 34) && (20 <= BMI && BMI < 25)) ||
    (gender == "female" && (34 <= years && years < 44) && (21 <= BMI && BMI < 26)) ||
    (gender == "female" && (44 <= years && years < 54) && (22 <= BMI && BMI < 27)) ||
    (gender == "female" && (54 <= years && years < 64) && (23 <= BMI && BMI < 28)) ||
    (gender == "female" && (years >= 64) && (24 <= BMI && BMI < 29)) ||
    (gender == "male" && (18 < years && years < 24) && (20 <= BMI && BMI < 25)) ||
    (gender == "male" && (24 <= years && years < 34) && (21 <= BMI && BMI < 26)) ||
    (gender == "male" && (34 <= years && years < 44) && (22 <= BMI && BMI < 27)) ||
    (gender == "male" && (44 <= years && years < 54) && (23 <= BMI && BMI < 28)) ||
    (gender == "male" && (54 <= years && years < 64) && (24 <= BMI && BMI < 29)) ||
    (gender == "male" && (years >= 64) && (25 <= BMI && BMI < 30))) {
        console.log('Normal')
    indexBmi.innerHTML = BMI + indexBmi.innerHTML;
    const valueBmi = document.querySelector('.value__bmi');
    valueBmi.innerText = 'normal weight';
    valueBmi.classList.add('value__bmi-green');

} else if ((gender == "female" && (18 < years && years < 24) && (24 <= BMI && BMI < 29)) ||
    (gender == "female" && (24 <= years && years < 34) && (25 <= BMI && BMI < 30)) ||
    (gender == "female" && (34 <= years && years < 44) && (26 <= BMI && BMI < 31)) ||
    (gender == "female" && (44 <= years && years < 54) && (27 <= BMI && BMI < 32)) ||
    (gender == "female" && (54 <= years && years < 64) && (28 <= BMI && BMI < 33)) ||
    (gender == "female" && (years >= 64) && (29 <= BMI && BMI < 34)) ||
    (gender == "male" && (18 <= years && years < 24) && (25 <= BMI && BMI < 30)) ||
    (gender == "male" && (24 <= years && years < 34) && (26 <= BMI && BMI < 31)) ||
    (gender == "male" && (34 <= years && years < 44) && (27 <= BMI && BMI < 32)) ||
    (gender == "male" && (44 <= years && years < 54) && (28 <= BMI && BMI < 33)) ||
    (gender == "male" && (54 <= years && years < 64) && (29 <= BMI && BMI < 34)) ||
    (gender == "male" && (years >= 64) && (30 <= BMI && BMI < 35))) {
    indexBmi.innerHTML = BMI + indexBmi.innerHTML;
    const valueBmi = document.querySelector('.value__bmi');
    valueBmi.innerText = 'overweight';
    valueBmi.classList.add('value__bmi-orange');

} else {
    indexBmi.innerHTML = BMI + indexBmi.innerHTML;
    const valueBmi = document.querySelector('.value__bmi');
    valueBmi.innerText = 'obesity';
    valueBmi.classList.add('value__bmi-red');
}