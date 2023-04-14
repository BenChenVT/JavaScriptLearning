console.log('hello world');

// type
let name = 'Ben';
let age = 30;
let isApproved = false;
let firstName = undefined;
let selectColor = null;
console.log(name);

// object
let person = {
    lastName:  'Ben',
    trueAge: 30
};
person.lastName = 'John';
person['lastName'] = 'Marry' // use when i don't know until the runtime
console.log(person);
console.log(person.lastName);

// Array
let selectedColor = ['red', 'blue'];
selectedColor[2] = 6;
console.log(selectedColor);
console.log(selectedColor[0]);

// function
function greet(first, second) {
    console.log('hello world' + first + ' ' + second);
}

greet('Xiangke', 45.5);

//EG1/////////////////////////// get element by id /////////////////////////////////
let myName = 'bro';

document.getElementById("p1").innerHTML = 'hello ' + myName;


//EG2/////////////////////////// user input /////////////////////////////////
// --- easy way: window prompt

// let username = window.prompt("what is your name?");
// console.log(username); // useless

// --- difficulty way html textbox
let username1;
document.getElementById("button1").onclick = function(){
    username1 = document.getElementById("text1").value;
    console.log(username1);
    document.getElementById("label1").innerHTML = "Enter your name: " + username1;
}

//EG3/////////////////////////// type conversion /////////////////////////////////
// convert datatype of a value to another --> string, number, boolean
let age1 = "23";
age2 = Number(age1);
console.log(typeof age);

let x, y, z;

x = Number("3.14");
y = String(3.14);
z = Boolean("pizza");  // --> true; if empty string: false;


//EG4/////////////////////////// const type -- a variable that can't be changed /////////////////////////////////
const PI = 3.1415;
let radius;
let circumference;

radius = "40";
radius = Number(radius);
circumference = 2 * PI * radius;
console.log("the circumference is: ", circumference);

//EG5/////////////////////////// Math -- Math class in JS /////////////////////////////////
//x = Math.round(x);
//x = Math.floor(x);
//x = Math.ceil(x);
//x = Math.pow(x, 2);
//x = Math.sqrt(x);
//x = Math.abs(x);
//x = Math.max(x, y, z);
//x = Math.PI;

//EG6/////////////////////////// practice -- innerText/innerHTML /////////////////////////////////
let count = 0;
document.getElementById("resetB").onclick = function(){
    document.getElementById("countLabel").innerText = "0"; // 把后面的string作为plainText放进countLbael
    count = 0;
}
document.getElementById("increaseB").onclick = function(){
    count++;
    document.getElementById("countLabel").innerHTML = String(count);//把后面的string作为HTML放进countLbael
}
document.getElementById("decreaseB").onclick = function () {
    count--;
    document.getElementById("countLabel").innerHTML = String(count);
}
// innerText -> put in content, treat it as text
// innerHTML -> put in content, treat it as HTML format

//EG7/////////////////////////// random number /////////////////////////////////
let x7 = Math.floor(Math.random() * 6)+1;

//EG8/////////////////////////// useful string method /////////////////////////////////
let userName8 = "      bro code     ";
let phoneNumber = "123-456-7890";
let x8 = userName8.charAt(3);
let len8 = userName8.length;
let o8 = userName8.indexOf("o");
let lastO8 = userName8.lastIndexOf("0");
userName8 = userName8.trim(); // trim the space before and after
userName8.toUpperCase();
phoneNumber = phoneNumber.replaceAll("-", "");


//EG9/////////////////////////// slice() /////////////////////////////////
// extract a section of a string
// and returns it as a new string
// without modifying the original string
let fullName9 = "bro code";
let firstName9, lastName9;

// lastName9 = fullName9.slice(4);
// firstName9 = fullName9(0, 3);

lastName9 = fullName9.slice(fullName9.indexOf(" ") + 1);
firstName9 = fullName9.slice(0, fullName9.indexOf(" "));


//EG10/////////////////////////// method chainning /////////////////////////////////
let username10 = "bro";
let letter = username10.charAt(2).toUpperCase().trim();

//EG11/////////////////////////// if statement /////////////////////////////////
if(3 > 2){
    console.log();
}
else if(2 > 1){
    console.log();
}
else{
    console.log();
}

//EG12/////////////////////////// checkbox property /////////////////////////////////
document.getElementById("button12").onclick = function(){
    const CheckBox12 = document.getElementById("checkbox12");
    
    const VISA12 = document.getElementById("visaBtn");
    const Master12 = document.getElementById("mastercardBtn");
    const PayPal12 = document.getElementById("PayPalBtn");
    
    
    if(CheckBox12.checked){
        console.log("you are subscribed");
    }
    else{
        console.log("you are not subscribed");
    }

    if(VISA12.checked){
        console.log("payment declined");
    }
}

//EG13/////////////////////////// switch /////////////////////////////////
let grade13 = "pizza";

switch(grade13){
    case "A":
        console.log("you did great");
        break;
    case "B":
        console.log("you did great");
        break;
    case "B":
        console.log("you did great");
        break;
    case "B":
        console.log("you did great");
        break;
    default: 
        console.log(grade13, "is not a grade");
}

//EG14/////////////////////////// loop /////////////////////////////////
// it has same while loop and for loop just like java
// here is something different
let userName14;
do {
    userName14 = "hello";
}while(userName14 == "");


//EG15/////////////////////////// function /////////////////////////////////
function getArea15(width, height){
    return width * height;
}
console.log("the area is ", getArea15(3, 2));

//EG16/////////////////////////// tenuary /////////////////////////////////
let age16 = 24;
let prompt16;
age16 >= 21 ? prompt16 = "you can buy drink" : prompt16 = "get out";
console.log(prompt16);

//EG17/////////////////////////// variable scope /////////////////////////////////

// let --> variable are limited to block scope{}
// var --> variable are limited to a function(){}
for(var i = 0; i < 10; i++){
    let age16 = i;
}
let age17 = 9; // global

//EG18/////////////////////////// Template literals /////////////////////////////////
let name18 = "ben";
let item18 = 12;
let total18 = 76;
let text18 = 
`Hello ${name18}<br>
you have ${item18} items<br>
the total is ${total18}<br>`;
document.getElementById("label18").innerHTML = text18;

//EG19/////////////////////////// toLocaleString() /////////////////////////////////
// toLocaleString() = returns a string with a language sensitivee representation
//                    of this string

// number.toLocaleSring(locale, {options});

// locale --> specify the laguage (undefined = default set in browser)
// options --> object with formatting options

let myNum19 = 123456.5654;
let myNum19_1 = myNum19.toLocaleString("en-US");
let myNum19_2 = myNum19.toLocaleString("hi-IN");
let myNum19_3 = myNum19.toLocaleString("de-DE");
let myNum19_4 = myNum19.toLocaleString("en-US", {style:"currency", currency: "USD"});
console.log(myNum19_1, " ", myNum19_2, " ", myNum19_3, " ", myNum19_4);
myNum19 = 23.46
let myNum19_5 = myNum19.toLocaleString(undefined, {style: "percent"});
let myNum19_6 = myNum19.toLocaleString(undefined, { style: "unit", unit: "celsius" });
console.log(myNum19_5, " ", myNum19_6, " ");

//EG20/////////////////////////// guessing number hw /////////////////////////////////
const answer20 = Math.floor(Math.random() * 10 + 1);
// Math.random()  return a number >= 0, < 1
let guesses20 = 0;
document.getElementById("submitButton20").onclick = function(){
    let userInput20 = document.getElementById("guessField20").value;
    guesses20++;
    if (userInput20 == answer20) {
        alert(`${answer20} is the answer, it took you ${guesses20} guesses`);
    }
    else if (userInput20 < answer20) {
        alert(`${userInput20} is too small`);
    }
    else {
        alert(`${userInput20} is too big`);
    }
}

//EG21/////////////////////////// temprature converter hw /////////////////////////////////
document.getElementById("submitButton21").onclick = function(){
    let input21 = document.getElementById("tempField21").value;
    let result21;
    let cel = document.getElementById("calcius21").checked;
    if(cel){
        result21 = (input21 - 32) * 5 / 9;
        result21 = result21.toLocaleString(undefined, {style:"unit", unit: "celsius"});
    }
    else{
        result21 = (input21* 1.8) + 32;
        result21 = result21.toLocaleString(undefined, { style:"unit", unit:"fahrenheit"});
    }
    document.getElementById("result21").innerHTML = result21;
}

//EG22/////////////////////////// array /////////////////////////////////
let car22 = ["honda", "bmw", "nissan"];
car22[2] = "infiniti";
car22.push("Lexus");      //add element to the end
car22.pop();              //remove element from end
car22.unshift("audi");    //add element to the beginning
car22.shift();            //remove element from beginning

let lenght22 =car22.length;
let index = car22.indexOf("bmw"); //not found return -1

console.log(car22);

car22 = car22.sort().reverse();
for(let c22 of car22){
    console.log(c22);
}

//EG23/////////////////////////// 2D array /////////////////////////////////
let odd23 = [1, 3, 5, 7];
let even23 = [2, 4, 6, 8];
let prime23 = [3, 5, 7, 11];

let num23 =  [odd23, even23, prime23];
let n23 = num23[2][1];

//EG24/////////////////////////// spread operator (...) /////////////////////////////////
// which allows an iterable such as an array or string to be EXPAND in places
// where zero or more arguments are expected (unpacks the elements)
let numbers24 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let name24 = "been chen";
console.log(...numbers24);
console.log(...name24);

console.log(Math.max(numbers24)); // show NaN
console.log(Math.max(...numbers24)); // show 10

let numbers24_2 = [11, 22, 33, 44, 55, 66, 77];
numbers24.push(...numbers24_2);
console.log(numbers24);

//EG25/////////////////////////// rest parameters (...) /////////////////////////////////
// which represents an indefinite number of parameters 
// (packs individual parameters into an array)
let a25 = 1, b25 = 2, c25 = 3, d25 = 4, e25 = 5, f25 = 6;
console.log(sum25(a25, b25, c25, d25, e25, f25));

function sum25(...numbers){
    let total25 = 0;
    for(let number of numbers){
        total25 += number;
    }
    return total25;
}

//EG26/////////////////////////// callback /////////////////////////////////
// Pass function as an argument to another function
// develop asynchronous code, avoid errors and potential problem
// Ex. wait for a file to load.
let total26 = sum26(2, 3);
displayDOM26(total26);

function sum26(x, y){
    let result26 = x + y;
    return result26
}

function displayConsole26(output){
    console.log(output);
}

function displayDOM26(output){
    let text26 = document.getElementById("label26").textContent;
    document.getElementById("label26").innerHTML = text26 + " the result is " + String(output);
}

// using callback -->
sum26wcallback(54, 9, displayConsole26);

function sum26wcallback(x, y, callback){
    let output26 = x + y;
    callback(output26);
}

//EG27/////////////////////////// array forEach() /////////////////////////////////
// executes a provided callback function once! for each array ELEMENT(element)!
let student27 = ["ben", "robin", "lulu", "mike"];
student27.forEach(captalize27);
student27.forEach(print27);

function captalize27(element, index, array){  // <-- 这个element意思是指每一个element in array
    //                  ^       ^  --> for each 东西 in the array
    array[index] = element[0].toUpperCase() + element.substring(1); // concatenate with the rest string
    //                     ^ this select the first letter of the string
}

function print27(element){
    console.log(element);
}

//EG28/////////////////////////// array map() /////////////////////////////////
// executes a provided callback function once! for each array element 
// AND creates a new array
// 说人话就是把A array里面的每个东西拿出来运行一下callback然后map到另一个B array里面
// 相比于forEach  map直接把return的东西放到每一个element上了
let numbers28 = [1, 2, 3, 4, 5, 6];
let squares28 = numbers28.map(square28); // --> map需要一个callback参数  
// --> 这里相当于把numbers里 平方以后的数放到squares28这个array里面了
// 这里squares28是个array
squares28.forEach(print28);

function square28(element){
    return Math.pow(element, 2);
}

function print28(element){
    console.log(element);
}

//EG29/////////////////////////// array filter() /////////////////////////////////
// which create a new array with all elements that pass the test procided by a function
console.log("this is EG29");
let age29 = [18, 6, 4, 21, 28, 47, 29, 89, 2];
let adult28 = age29.filter(checkage29);
// map和filter 都是在forEach的基础上，filter 是在map的基础上， 他们都需要callback 参数
adult28.forEach(print);

function checkage29(element){
    return element > 18;
}

function print(element){
    console.log(element);
}


//EG30/////////////////////////// array reduce() /////////////////////////////////
// which reduce an array to a single value;
let price30 = [10, 24, 43,1,45];
let total30 = price30.reduce(checkOut30);

console.log(`the total is $${total30}`);

function checkOut30(total, element){
    // check out things less than 30
    if(element < 30){
        return total = total + element;
    }
    else{
        return total;
    }
}

//EG31/////////////////////////// array reduce() /////////////////////////////////
let grade31 = [100, 50, 30, 60, 70, 43, 64];

grade31 = grade31.sort(descendingSort31);

grade31.forEach(print);

function descendingSort31(x, y){
    return y - x;
}

function ascendingSort31(x, y) {
    return x - y;
}

function print(element) {
    console.log(element);
}

//EG32/////////////////////////// function expression /////////////////////////////////
// function without a name(anonymous function) 
// avoid polluting the global scope with name.
// write it, then forget about it.
const greeting = function(){
    console.log("hello this is using function expression");
}
greeting();

//--- --- --- --- --- --- ---
let count32 = 0;
document.getElementById("decreaseButton32").onclick = function(){
    count-=1;
    document.getElementById("label32").innerHTML = count;
}
// in this way save function name
document.getElementById("increaseButton32").onclick = function () {
    count += 1;
    document.getElementById("label32").innerHTML = count;
}


// function decreaseCount32(){
//     count-=1;
//     document.getElementById("label32").innerHTML = count;
// }

// function increaseCount32(){
//     count += 1;
//     document.getElementById("label32").innerHTML = count;
// }


//EG33/////////////////////////// arrow function expression /////////////////////////////////
// 例子1
const greeting33 = function(userName){
    console.log(`hello ${userName}`);
}
// ---> swith to arrow
const greeting33_arw = (userName) =>{
    console.log(`hello ${userName}`);
}
greeting33_arw("ben");
// 例子2
const percent33 = function(x, y){
    return x / y * 100;
}
// ---> swith to arrow
const percent33_arw = (x, y) => {
    return x / y *100;
}
console.log(`${percent33(75, 100)}%  ${percent33_arw(65, 100)}%`);
// 例子3
let grade33 = [100, 40, 60];
// grade33.sort(descending33);
// grade33.forEach(print33);

// function descending33(x, y){
//     return y - x;
// }
// function print33(element){
//     console.log(element);
// }
// ---> step1
// grade33.sort(function descending33(x, y) {
//     return y - x;
// });
// grade33.forEach(function print33(element) {
//     console.log(element);
// });
// ---> step2
grade33.sort((x, y) => y - x);
grade33.forEach((element) => {
    let a = 3;
    console.log(element+3);
});

//EG34/////////////////////////// shuffle element in array /////////////////////////////////
let cards34 = ["A", "2", "3", "4", "5", "6", "7"];

shuffle34(cards34);

console.log(cards34);

function shuffle34(array){
    let currentIndex = array.length;

    while(currentIndex != 0){
        let randomIndex = Math.floor(Math.random() * array.length);
        currentIndex -= 1;

        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }

    return array;
}


//EG35/////////////////////////// nested functions /////////////////////////////////
// Functions inside other functions. 
// Outer functions have access to inner function
// Inner functions are "hidden" from outside function 
// used in closure(in later example)

let userName35 = "Ben";
let userInbox35 = 0;
login35(); // 正常显示
//displayUserName35();    // 会报错 outside 看不到 inner
function login35(){
    displayUserName35();
    displayUserInbox35();

    function displayUserName35() {
        console.log(`welcome ${userName35}`);
    }
    function displayUserInbox35() {
        console.log(`you have ${userInbox35} new message`);
    }
}

//EG36/////////////////////////// Map /////////////////////////////////
const store36 = new Map([
    ["apple", 20],
    ["banana", 10],
    ["socks", 5],
    ["shoes", 15]
]);

store36.get("apple");
store36.set("hat", 50);
store36.has("apple");
store36.delete("apple");
store36.size;
store36.forEach((value, key) => console.log(`${key}, $${value}`));


//EG37/////////////////////////// object(对象) & this key work/////////////////////////////////
// object 就是(properties and functions)
// 跟java在格式上有点区别
// 学了几年才明白this，其实就是指当前这个object里的一些特有东西
const car37 = {
    model:"Ford",
    color:"red",
    year:2023,

    drive : function(){
        console.log("you are driving the car.");
    },
    brake : function(){
        console.log("you are braking the car.");
    },
    info : function(){
        console.log(`this is a ${this.model}`);
    }
}
car37.drive();
console.log(`the color is ${car37.color}`);
car37.info();

this.window = "myCoolWindow"
// console.log(this.name); // 这里的this是指window content哈哈哈哈

//EG38/////////////////////////// class(类) /////////////////////////////////
// class 就是用来构造一个object 所以需要有一个构造方法（constructor）
class Player38{
    score = 75;
    age = 1;
    // 跟java一样  new一个class 先run一遍constructor
    // 但是JS每个class只能有一个constructor
    // 如果参数给的不够多 --》 不够的会变成undefined
    // 如果参数给的太多了 --》 多的就放在哪里不用了
    constructor(name, age){ 
        this.name = name;
        this.age = age;
        // this.score = 90;
    }

    pause(time){
        console.log(`you paused ${time}s`);
    }
}
let player38 = new Player38("ben");
console.log(player38.name, player38.age); //这里age是undefined
player38.pause(7);
player38 = new Player38(23);
console.log(player38.name);
console.log(player38.score);


//EG39/////////////////////////// static 关键字 /////////////////////////////////
// static = belongs to the class, not the object
class Car39{
    // useful for caches, fixed-configuration
    static numberOfCars = 0; // 这里的static 让这个property属于Car39所有

    constructor(model){
        this.model = model;
        Car39.numberOfCars += 1; // 一旦是static之后，要用class跟他们去交流
    }

    // useful for utility
    static startRace() { // 这里的static 让这个method属于Car39所有
        console.log("GO!!");
    }
}
const car39_1 = new Car39("BMW");
const car39_2 = new Car39("honda");
const car39_3 = new Car39("Audi");
console.log(`you have total number of ${Car39.numberOfCars} cars`); 
Car39.startRace();
// 一旦是static之后，要用class跟他们去交流


//EG40/////////////////////////// inheritance /////////////////////////////////
class Animal40{
    alive = true;
    eat(){
        console.log(`this ${this.name} is eating`);
    }
    sleep() {
        console.log(`this ${this.name} is sleeping`);
    }
}
class Rabbit40 extends Animal40 {
    name = "rabbit";
    run() {
        console.log(`this ${this.name} is running`);
    }
}
class fish40 extends Animal40 {
    name = "fish";
    run() {
        console.log(`this ${this.name} is swimming`);
    }
}


//EG41/////////////////////////// super 关键字 /////////////////////////////////
class Animal41 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
class Rabbit41 extends Animal41 {
    constructor(name, age, runspeed){
        super(name, age);
        this.runspeed = runspeed;
    }
}
class fish41 extends Animal41 {
    constructor(name, age, runspeed) {
        super(name, age);
        this.runspeed = runspeed;
    }
}
const rabbit41 = new Rabbit41("ben", 4, 20);
console.log(`the name: ${rabbit41.name}`);
console.log(`the age: ${rabbit41.age}`);
console.log(`the speed: ${rabbit41.runspeed}`);



//EG42/////////////////////////// getter & setter /////////////////////////////////
class Car42{
    constructor(power){
        this._gas = 25;
        this._power = power;
    }
    get power(){
        return `${this._power}hp`;
    }
    get gas(){
        return `${this._gas}L (${this._gas /50 *100}%)`;
    }
    set gas(value){
        // 这里可以操作一下 让这个value不超过50
        if(value > 50){
            value = 50;
        }
        else if(value < 0){
            value = 0;
        }
        this._gas = value;
    }
}
let car42 = new Car42(400);
car42._power = 300;
console.log(car42.power); // 没有get这里会显示undefined
console.log(car42.gas);
car42.gas = 49;
console.log(car42.gas);

//EG43/////////////////////////// pass object to function /////////////////////////////////
class Car43 {
    constructor(model, year, color){
        this._model = model;
        this._year = year;
        this._color = color;
    }
}
const car431 = new Car43("Honda", 2021, "red");
const car432 = new Car43("BMW", 2020, "blue");
const car433 = new Car43("audi", 2020, "black");

displayInfo43(car432);

function displayInfo43(car){
    console.log(car._model);
    console.log(car._year);
}


//EG44/////////////////////////// anonymous object /////////////////////////////////
// Object without a name not directly referenced
// less syntax, no need for unique names

// con: no direct access to it
class Card44{
    constructor(value, suit){
        this.value = value;
        this.suit = suit;
    }
}
// 如果要一整副牌的话，要72个variable name
let card441 = new Card44("A", "Heats");
let card442 = new Card44("A", "Dimond");
let card443 = new Card44("A", "spades");
let card444 = new Card44("A", "club");
let card445 = new Card44("2", "club");
let card446 = new Card44("2", "Heats");
let card447 = new Card44("2", "dimond");
let card448 = new Card44("2", "spades");

// using anonymous object: --->
cards42 = [
    new Card44("A", "Heats"), 
    new Card44("A", "Dimond"), 
    new Card44("A", "spades"), 
    new Card44("A", "club"), 
    new Card44("2", "club"), 
    new Card44("2", "Heats"), 
    new Card44("2", "dimond"), 
    new Card44("2", "spades")
]

cards42.forEach((card) => {
    console.log(card.value + card.suit);
});


//EG45/////////////////////////// error-try catch/////////////////////////////////
// = object with a description of something went wrong

// such as --> can't open a file, lose connection
//             user type incorrect input, TypeError

// try --> 写一些危险代码

// throw --> execute a user-define error 
// 就比如下面这个，尽管我们不输入number，他不会报错，
// console中会显示 NaN is a number

// catch --> error 即为错误的description

// finally  --> 无论怎么样都会运行

try{
    // let x = window.prompt("enter a #");
    // x = Number(x);

    // if (x == "") throw "that was empty";
    // if(isNaN(x)) throw "that wasn't a number";

    // console.log(`${x} is a number`);
}
catch(error){
    console.log(error);
}
finally{
    // 通常try如果开了一个file  那么finally一定要把这个file关掉
    // good for clean up
    console.log("this always execute");
}

//EG46/////////////////////////// setTimeout() /////////////////////////////////
// invokes a function after a number of ms
// asynchronous function (doesn't pause execution)

let timer461 = setTimeout(first46, 3000, 500, "Feb 8th");
let timer462 = setTimeout(second46, 6000);

function first46(price, data){
    // alert(`buy this car with only $${price}, at ${data}`);
}
function second46(){
    // alert(`it is worthy`);
}


document.getElementById("button46").onclick = function(){
    clearTimeout(timer461);
    clearTimeout(timer462);
    alert( `thanks for buy  look at EG46`);
}

//EG47/////////////////////////// setInterval /////////////////////////////////
// similar to setTimeout, 但是这个function 循环执行 with a number of ms
// also asynchronous, don't pause execution

let count47 = 0;
// let max47 = window.prompt("count up to what #?");
max47 = -1;// comment out to see the demo
let interval471 = setInterval(countUp47, 1000, Number(max47));
function countUp47(max47){
    count47+=1;
    if(count47 > max47){
        clearInterval(interval471);
        return;
    }
    console.log(count47);
}

//EG48/////////////////////////// date object /////////////////////////////////
let date48 = new Date();
let date48_zero = new Date(0);   // date sarting point
let date48_from_zero = new Date(100000000); // date from the starting point
let date48_format = new Date(2023, 0, 23, 5, 65, 3); 
// year, month, date, hour, minute, millisecond
// date48.getFullYear();
// date48.getDate();
// date48.getDay(); // sunday -> 0, monday-> 1
// date48.getMonth(); // Jan -> 0, Feb -> 2
date48 = date48.toLocaleDateString()
document.getElementById("label48").innerHTML = `today's date is ${date48}`;
console.log(date48_zero);
console.log(date48_from_zero);
console.log(date48_format);

//EG49/////////////////////////// clock label /////////////////////////////////
let label49 = document.getElementById("label49");
update();
setInterval(update, 1000);

function update(){
    let date = new Date();
    label49.innerHTML = formatTime(date);

    function formatTime(date){
        let hour = date.getHours();
        let min = formatZero(date.getMinutes());
        let second = formatZero(date.getSeconds());
        let amPm = hour >= 12 ? "pm" : "am";
        hour = (hour % 12) || 12; // --> OR bit wise operator
        hour = formatZero(hour);
        return `${hour}:${min}:${second} ${amPm}`;
    } 

    function formatZero(time){
        return time < 10 ? `0${time}` : `${time}`;
    }
}

//EG50/////////////////////////// synchronous/asynchronous /////////////////////////////////
// synchronous code = In an order sequence.
//                    Step by step linear instructions
//                    (start now, finish now)

// asynchronous code = Out of secuqnce.
//                     Ex. Access a database
//                         Fetch a file
//                         Tasks that take time
//                     (start now, finish sometime later)




//EG51/////////////////////////// console.time /////////////////////////////////
//console.time() = starts a timer you can use to
//                 track how long an operation takes
//                 give each timer a unique name

// start
console.time("Response time");
setTimeout((() => console.log("hello in 3 second")), 3000);
console.timeEnd("Response time");
// end 
// 只计中间code的时间 
// 如果是 asynchronous, 则不计入等待时间
// 里面的string是计时器的名字





//EG52/////////////////////////// promise /////////////////////////////////
// promise = object that encapsulates the result of an asynchronous operation
//           let asynchronous methods return values like synchronous methods
//           "I promise to return something in the future"

//          the STATE is 'pending' then: 'fulfilled' or 'rejected'
//          the RESULT is what can be returned
//          2 parts producing & consuming
const promise52 = new Promise((resolve, reject) => {
    let fileLoaded52 = false;

    if (fileLoaded52){
        resolve("file loaded");
    }
    else{
        reject("File not loaded");
    }
});


promise52.then((value) => {
    console.log(value);
}).catch(error => console.log(error));












