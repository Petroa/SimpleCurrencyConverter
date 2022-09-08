//Write your code here


//      ПСЕВДОКОД1
// сделай алгоритм пересчета валют: функции, перем и тд.
// сделай запрос:
//      выведи сообщение
//      сделай инпут
// Handle the next mistakes:
//      Upper - Lowercase
//      Unknown data
//      Lower than 1

//      --------------

//      Псевдокод для 4 части
//новый текст
//инпут решение
//проверка инпута решения на 2 положения
//  в первом конвертируем+инпут решение
//  во втором выход+новый текст
//
//      --------------


//      ИМПОРТ
const input = require('sync-input');

//      Переменные
let usdVar = 1.0;
let jpyVar = 113.5;
let eurVar = 0.89;
let rubVar = 74.36;
let gbrVar = 0.75;
let amountArray = ['USD', 'JPY', 'EUR', 'RUB', 'GBP'];
let decisionArray =['1', '2'];

//      Приветствие
console.log("Welcome to Currency Converter!");

console.log ("1 USD equals 1 USD");
console.log ("1 USD equals 113.5 JPY");
console.log ("1 USD equals 0.89 EUR");
console.log ("1 USD equals 74.36 RUB");
console.log ("1 USD equals 0.75 GBP");

console.log("What do you want to do?")
console.log("1-Convert currencies 2-Exit program");

        // Цикл
let decisionInput = input().toUpperCase();

while (decisionInput !== 2) {
    // Инпут-решение что делать
    if (decisionArray.includes(decisionInput) !== true){
        console.log("Unknown input");
        while(decisionArray.includes(decisionInput) !== true){
            console.log("What do you want to do?")
            console.log("1-Convert currencies 2-Exit program");
            decisionInput = input().toUpperCase();
        }
    }
    if (decisionInput === "2"){
        console.log("Have a nice day!")
        break;
    }

    // Стартовый инпут: что?
    let fromInput = input("What do you want to convert?\n" +
        "From: ").toUpperCase();

    // проверка стартового инпута если ввел не то
    if (amountArray.includes(fromInput) !== true) {
        console.log("Unknown currency");
        // цикл запросов на первом if пока не даст правильный ответ
        while((amountArray.includes(fromInput) !== true))
        {
            fromInput = input("What do you want to convert?\n" +
                "From: ").toUpperCase();
        }
    }

    // Первый инпут: во что?
    let userInput = input("To: ").toUpperCase();

    // проверка первого инпута и стоп цикл на первом if чз брейк
    if (amountArray.includes(userInput) !== true) {
        console.log("Unknown currency");
        // цикл запросов на первом if пока не даст правильный ответ
        while((amountArray.includes(userInput) !== true))
        {
            userInput = input("To: ").toUpperCase();
        }
    }

    // Второй инпут: количество?

    let amount = Number(input("Amount: "));

    // проверка второго инпута №1+цикл
    if (isNaN(amount) === true) {
        console.log("The amount has to be a number");
        // цикл запросов пока не даст правильный ответ
        while((isNaN(amount) === true))
        {
            amount = Number(input("Amount: "));
        }
    }
    // проверка второго инпута №2+цикл
    if (amount < 0) {
        console.log("The amount cannot be less than 1");
        // цикл запросов пока не даст правильный ответ
        while(amount < 0)
        {
            amount = Number(input("Amount: "));
        }
    }
    if (fromInput === "USD") {
        currencyConverterUSD();
        continue;
    }
    if (fromInput === "JPY") {
        currencyConverterJPY();
        continue;
    }
    if (fromInput === "EUR") {
        currencyConverterEUR();
        continue;
    }
    if (fromInput === "RUB") {
        currencyConverterRUB();
        continue;
    }
    if (fromInput === "GBP") {
        currencyConverterGBP();
    }
    // Функция перерасчета валют для USD
    function currencyConverterUSD(){
        if (userInput === "JPY" && fromInput === "USD"){
            let jpyResult = amount * jpyVar;
            return console.log(`Result: ${amount} USD equals ${jpyResult.toFixed(4)} JPY`);
        }
        else if (userInput === "USD" && fromInput === "USD"){
            let jpyResult = amount;
            console.log(`Result: ${amount} USD equals ${jpyResult.toFixed(4)} USD`);
        }
        else if (userInput === "EUR" && fromInput === "USD"){
            let jpyResult = amount * eurVar;
            console.log(`Result: ${amount} USD equals ${jpyResult.toFixed(4)} EUR`);
        }
        else if (userInput === "RUB" && fromInput === "USD"){
            let jpyResult = amount * rubVar;
            console.log(`Result: ${amount} USD equals ${jpyResult.toFixed(4)} RUB`);
        }
        else if (userInput === "GBP" && fromInput === "USD"){
            let jpyResult = amount * gbrVar;
            console.log(`Result: ${amount} USD equals ${jpyResult.toFixed(4)} GBP`);
        }
    }
    // Функция перерасчета валют для JPY
    function currencyConverterJPY(){
        if (userInput === "JPY" && fromInput === "JPY"){
            let jpyResult = amount;
            console.log(`Result: ${amount} JPY equals ${jpyResult.toFixed(4)} JPY`);
        }
        if (userInput === "USD" && fromInput === "JPY"){
            let jpyResult = amount / jpyVar * usdVar;
            console.log(`Result: ${amount} JPY equals ${jpyResult.toFixed(4)} USD`);
        }
        else if (userInput === "EUR" && fromInput === "JPY"){
            let jpyResult = amount / jpyVar * eurVar;
            console.log(`Result: ${amount} JPY equals ${jpyResult.toFixed(4)} EUR`);
        }
        else if (userInput === "RUB" && fromInput === "JPY"){
            let jpyResult = amount / jpyVar * rubVar;
            console.log(`Result: ${amount} JPY equals ${jpyResult.toFixed(4)} RUB`);
        }
        else if (userInput === "GBP" && fromInput === "JPY"){
            let jpyResult = amount / jpyVar * gbrVar;
            console.log(`Result: ${amount} JPY equals ${jpyResult.toFixed(4)} GBP`);
        }
    }
    // Функция перерасчета валют для EUR
    function currencyConverterEUR(){
        if (userInput === "JPY" && fromInput === "EUR"){
            let jpyResult = amount / eurVar * jpyVar;
            console.log(`Result: ${amount} EUR equals ${jpyResult.toFixed(4)} JPY`);
        }
        if (userInput === "USD" && fromInput === "EUR"){
            let jpyResult = amount / eurVar * usdVar;
            console.log(`Result: ${amount} EUR equals ${jpyResult.toFixed(4)} USD`);
        }
        else if (userInput === "EUR" && fromInput === "EUR"){
            let jpyResult = amount;
            console.log(`Result: ${amount} EUR equals ${jpyResult.toFixed(4)} EUR`);
        }
        else if (userInput === "RUB" && fromInput === "EUR"){
            let jpyResult = amount / eurVar * rubVar;
            console.log(`Result: ${amount} EUR equals ${jpyResult.toFixed(4)} RUB`);
        }
        else if (userInput === "GBP" && fromInput === "EUR"){
            let jpyResult = amount / eurVar * gbrVar;
            console.log(`Result: ${amount} EUR equals ${jpyResult.toFixed(4)} GBP`);
        }
    }
    // Функция перерасчета валют для RUB
    function currencyConverterRUB(){
        if (userInput === "JPY" && fromInput === "RUB"){
            let jpyResult = amount / rubVar * jpyVar;
            console.log(`Result: ${amount} RUB equals ${jpyResult.toFixed(4)} JPY`);
        }
        if (userInput === "USD" && fromInput === "RUB"){
            let jpyResult = amount / rubVar * usdVar;
            console.log(`Result: ${amount} RUb equals ${jpyResult.toFixed(4)} USD`);
        }
        else if (userInput === "EUR" && fromInput === "RUB"){
            let jpyResult = amount / rubVar * eurVar;
            console.log(`Result: ${amount} RUB equals ${jpyResult.toFixed(4)} EUR`);
        }
        else if (userInput === "RUB" && fromInput === "RUB"){
            let jpyResult = amount;
            console.log(`Result: ${amount} RUB equals ${jpyResult.toFixed(4)} RUB`);
        }
        else if (userInput === "GBP" && fromInput === "RUB"){
            let jpyResult = amount / rubVar * gbrVar;
            console.log(`Result: ${amount} RUB equals ${jpyResult.toFixed(4)} GBP`);
        }
    }
    // Функция перерасчета валют для GBP
    function currencyConverterGBP(){
        if (userInput === "JPY" && fromInput === "GBP"){
            let jpyResult = amount / gbrVar * jpyVar;
            console.log(`Result: ${amount} GBP equals ${jpyResult.toFixed(4)} JPY`);
        }
        if (userInput === "USD" && fromInput === "GBP"){
            let jpyResult = amount / gbrVar * usdVar;
            console.log(`Result: ${amount} GBP equals ${jpyResult.toFixed(4)} USD`);
        }
        else if (userInput === "EUR" && fromInput === "GBP"){
            let jpyResult = amount / gbrVar * eurVar;
            console.log(`Result: ${amount} GBP equals ${jpyResult.toFixed(4)} EUR`);
        }
        else if (userInput === "RUB" && fromInput === "GBP"){
            let jpyResult = amount / gbrVar * rubVar;
            console.log(`Result: ${amount} GBP equals ${jpyResult.toFixed(4)} RUB`);
        }
        else if (userInput === "GBP" && fromInput === "GBP"){
            let jpyResult = amount;
            console.log(`Result: ${amount} GBP equals ${jpyResult.toFixed(4)} GBP`);
        }
    }
}


