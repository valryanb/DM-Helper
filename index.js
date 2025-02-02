let navButtonClicks = 0;

function revealNav(){
    navButtonClicks++;
    let n = document.getElementById("navList");
    if ( navButtonClicks === 1){
    n.style.display = "block";
    n.style.animation = "slideIn linear 1s forwards";
} else if (navButtonClicks > 1 ){
    n.style.animation = "slideOut linear 1s forwards";
    navButtonClicks = 0;
    setTimeout( () => {
        n.style.display = "none";
    }, "1000");
}
}

function scrollData(scrollPoints){
switch (scrollPoints) {
    case 1: 
    let e = document.getElementById('1');
    e.scrollIntoView({ behavior: 'smooth', block: 'center' });
    break;
    case 2:
    let e2 = document.getElementById('2');
    e2.scrollIntoView({ behavior: 'smooth', block: 'center' });
    break;
    case 3:
    let e3 = document.getElementById('3');
    e3.scrollIntoView({ behavior: 'smooth', block: 'center' });
    break;
    case 4:
    let e4 = document.getElementById('4');
    e4.scrollIntoView({ behavior: 'smooth', block: 'center' });
    break;
    default: 
    console.log("Scroll enabled.");
    break;
}
}

function clickScroll(n) {
    if ( n === 1 ){
    scrollData(1);
    }
    else if ( n === 2 ){
    scrollData(2);
    } else if ( n === 3 ){
    scrollData(3);
    } else if ( n === 4 ){
        scrollData(4);
    }
}

// 𑁔𑁔★ CURRENCY CONVERTER ★𑁔𑁔 
// 1 PP = 5000 USD
// 1 GP = 500 USD
// 1 EP = 250
// 1 SP = 50 USD
// 1 CuP = 5 USD

let currencyType = ["Copper","Silver","Gold","Platinum","Electrum"];

function convertCurrency(){
let i = document.getElementById('valueInput').value;
if (i <= 49){
    currencyResult("a");
} else if (i > 49 && i < 250){
    currencyResult("b");
} else if(i >= 250 && i < 500){
    currencyResult("e");
}
else if (i >= 500 && i < 5000){
    currencyResult("c");
}
    else {
    currencyResult("d");
}
}

function currencyResult(resultConvert) {
  let i = document.getElementById('valueInput').value;
  let t = document.getElementById('convertedCurrency');
switch (resultConvert) {
    //copper
case "a":
    convertedValue = Math.floor(i / 5);
    convertedCurrencyResult = `${convertedValue} ${currencyType[0]} pieces`;
    t.innerText = convertedCurrencyResult;
    break;
    // silver
case "b": 
    convertedValue = Math.floor(i / 50);
    convertedCurrencyResult = `${convertedValue} ${currencyType[1]} pieces`;
    t.innerText = convertedCurrencyResult;
    break;
    // gold
case "c":
    convertedValue = Math.floor(i / 500);
    convertedCurrencyResult = `${convertedValue} ${currencyType[2]} pieces`;
    t.innerText = convertedCurrencyResult;
    break;
    // platinum
case "d":
    convertedValue = Math.floor(i / 5000);
    convertedCurrencyResult = `${convertedValue} ${currencyType[3]} pieces`;
    t.innerText = convertedCurrencyResult;
    break;
    // ELECTRUM 🙄
case "e": 
    convertedValue = Math.floor(i / 50);
    convertedValueElectrum = Math.floor(i / 250);
    convertedCurrencyResult = `${convertedValue} ${currencyType[1]} pieces`;
    t.innerText = `${convertedCurrencyResult}, or ${convertedValueElectrum} ${currencyType[4]} pieces`;
default: 
    console.log("Currency Conversion error.");
}
}

// 𑁔𑁔★ DAYS TRAVELLED ★𑁔𑁔
// 30 ft. travel per Round by default > 10 rounds per 1 (real life) minute 
// > 600 rounds * 30 ft > 18,000 ft. p/ hour

const roundsPerMinute = 10;

function daysTravelled() {
    let d = document.getElementById('daysInput').value;
    let s = document.getElementById('speedInput').value;
    milesInput = document.getElementById('milesTotal');
    distance = s * roundsPerMinute * 60 * d;
    miles = Math.floor(distance / 5280);
    milesInput.innerText = miles;
}

// 𑁔𑁔★ ACCENT GENERATOR ★𑁔𑁔 

let accents = ["a French", "a German", "a Dutch", "an English (Cockney)", "a Scottish", "a Polish", "a Russian", "a Nigerian", "a Spanish", "an Egyptian", "an American (Southern)", "an American (New Yorker)", "a Norwegian"];

function randomizeAccent() {
    let accentsRandom = Math.floor(Math.random() * 13);
    let a= document.getElementById('randomOutput');
    a.innerText = accents[accentsRandom];
    return;
}

// 𑁔𑁔★ REVERSE CURRENCY CONVERSION ★𑁔𑁔 
// 1 PP = 10 GP
// 1 GP = 10 SP or 2 EP
// 1 EP = 5 SP
// 1 SP = 10 CuP

function reverseConvertCurrency(){
    let earthMoney = document.getElementById('reverseConvertedCurrency');
    let s = document.getElementById("dungeon-value").selectedIndex;
    let c = document.getElementById('reverseValueInput').value;
    let emConvert = (x) => (c * x).toLocaleString();
    if ( s == [5]){
        earthMoney.innerText = emConvert(5);
    }
    else if ( s == [4]){
        earthMoney.innerText = emConvert(50);
    }
    else if ( s == [3]){
        earthMoney.innerText = emConvert(250);
    }
    else if ( s == [2]){
        earthMoney.innerText = emConvert(500);
    }
    else if ( s == [1]){
        earthMoney.innerText = emConvert(5000);
    }
}

// randomize scroll points 

function randomScroll() {
    const randomResult = Math.floor(Math.random() * 4) + 1;
    clickScroll(randomResult);
}

// sound board

function playSound(wav) {

    switch (wav) {
        case "knock": 
        new Audio('sounds/knock.wav').play();
        break;

        case "match":
            new Audio('sounds/match.wav').play();
        break;

        case "coins":
            new Audio('sounds/coins.wav').play();
        break;

        case "arrow":
            new Audio('sounds/arrow.wav').play();
        break;

        case "glass":
            new Audio('sounds/glass.wav').play();
        break;

        case "floor":
            new Audio('sounds/floor.wav').play();
        break;

        case "thunder":
            new Audio('sounds/thunder.ogg').play();
        break;

        case "whispers":
            new Audio('sounds/whispers.wav').play();
        break;

        case "rustle":
            new Audio('sounds/rustle.wav').play();
        break;

        case "scream":
            new Audio('sounds/scream.mp3').play();
        break;
    }

}

// date conversion 

// const months = 
// { [ 
//     "1": ["Hammer", "Deepwinter"],
//     "2": ["Alturiak", "The Claw of Winter"],
//     "3": ["Ches", "The Claw of Sunsets"],
// ]
// };