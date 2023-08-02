// friuts = ["banana", "apple"];
// console.log('my friuts are',friuts);

// food = prompt('how much was the food?');
// tipPercentage = prompt('tip %') / 100;
// tipAmount = food * tipPercentage;

// console.log(tipAmount);

let weather = 'sunny';
if(weather == 'rain'){
    console.log('grab your umbrella')
}
else{
    console.log('wear your sunglasses')
};

//ARRAYS[];
const groceries =['orange', 'apple', 'pear'];
groceries.pop();                //pop- removes item from the end of an array.
groceries.push('mango');        //push- adds item to the end of an array.
groceries.shift();              //shift- removes item from the beginning of an array.
groceries.unshift('banana');    //unshift- adds item to the beginning of an array.
groceries.slice();              // divides an array into a potion

console.log(groceries);
console.log(groceries[2]);

const friuts =['orange', 'apple', 'pear', 'cashew', "guava"];
friuts.slice(0,3)
console.log(friuts.slice(2,5));
console.log(friuts.indexOf('apple'));         //gives the index of an item in array

const person ={                               //object{key: value pairs}
    name:'Enesi Wise',
    age: 21
}
console.log(person.name);                    //object dot notation
console.log(person['age']);                 //object bracket notation
person.phone = '07064749960';
console.log('phone number:', person.phone)

console.log(person)


const food = ['rice', "bean", `yam`, 'corn', "wheat"];
for(item of food){
    console.log(item);
}
//OR
for(let i =0; i < food.length; i++){
    console.log(food[i])
}


const numbers = [1, 2, 3, 4, 5]
for(const number of numbers){
    console.log(number * 2)
}

const sumArray = (numbers) => {
    let result = 0;
    for(const number of numbers){
        console.log(number);
        result = result + number
    }
    return {result}
}
const nums = [1,2,3,4,5];
console.log(sumArray(nums));


const max = (numbers) => {
    let result = numbers[0]
    for(const number of numbers){
        if(number > result){
            result = number
        }
    }
    return {result}
}
console.log(max([1,2,3,4,5]));

let anAdjective = 'awesome';
let ourStr = 'freeCodeCamp is ';
ourStr += anAdjective
console.log(ourStr);
let length = ourStr.length;
console.log(length);

const createPerson = (name, age, gender) => ({name, age, gender});
console.log(createPerson('wise', 21, 'female'));

let result=[1, 2, 3, 4, 5].map(number => number * 2); //map method
console.log(result); 

const filter = (numbers, greaterThan) => {
   let result = []
   for(number of numbers){
    if(number > greaterThan){
        result.push(number)
    }
   }
   return result
}
console.log(filter([1, 2, 3, 4, 5, 6], 3));

const num = [1,2,3,4,5,6]                           //filter method
console.log(num.filter(num => num > 4))

//COLOR SQUARES.
// let redDiv = document.getElementById('red').onclick = () => console.log ('You clicked red');
// let yellowDiv = document.getElementById('yellow').onclick = () => console.log ('You clicked yellow');
// let greenDiv = document.getElementById('green').onclick = () => console.log ('You clicked green');

const squares = document.querySelectorAll('.colorSquare');
console.log(squares);

const timesClicked = {'red':0, 'yellow':0, 'green':0}; 
squares.forEach(square => {
    square.onclick = () => {
        timesClicked[square.value] +=1
        square.innerText = timesClicked[square.value]
        //console.log(square.value)
    }
});
function clearScores (){
    squares.forEach(square => square.innerText = 0)
}
const clearGame = document.getElementById('clearGame').onclick = () => clearScores();


//TIP CALCULATOR
const billInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');

let numberOfPeople = Number(numberOfPeopleDiv.innerText);
const calculateBill = () => {
    const bill = Number(billInput.value)
    const tipPercent = Number(tipInput.value)/100
    const tipAmount = bill * tipPercent
    const total = tipAmount + bill
    const perPersonTotal = total/ numberOfPeople
    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2).toLocaleString('en-US')}`
}
const increasePeople = () => {
    numberOfPeople += 1
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill()
}
const decreasePeople = () => {
    if (numberOfPeople <= 1){           //Guard clause
        return
    }
    numberOfPeople -=1
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill()
}


// ROCK PAPER SCISSORS GAME *video reference-(6:35:30) *

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result1;

choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}
function checkWinner(){
    if(player == computer){
        return "Draw!";
    }
    else if(computer == "ROCK"){
        return (player == "PAPER")? "You win!": "You lose!"
    }
    else if(computer == "PAPER"){
        return (player == "SCISSORS")? "You win!": "You lose!"
    }
    else if(computer == "SCISSORS"){
        return (player == "ROCK")? "You win!": "You lose!"
    }
}
