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

let accents = ["a French", "a German", "a Dutch", "an English (Cockney)", "a Scottish", "a Polish", "a Russian", "a Somali", "a Spanish", "an Egyptian", "an American (Southern)", "an American (New Yorker)", "a Norwegian"];

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

// 𑁔𑁔★ NPC DETAILS RANDOMIZER ★𑁔𑁔 
const genders = ["Female","Feminine","Masculine","Male","Nonbinary","Genderless"];
const species = ["Aarakocra",
"Aasimar",
"Bugbear",
"Centaur",
"Changeling",
"Dragonborn",
"Dwarf",
"Elf (Drow)",
"Elf (Eladrin)",
"Elf (High-Elf)",
"Elf (Wood-Elf)",
"Fairy",
"Firbolg",
"Genasi (Air)",
"Genasi (Earth)",
"Genasi (Fire)",
"Genasi (Water)",
"Githyanki",
"Gnome",
"Goblin",
"Goliath",
"Half-Elf",
"Half-Orc",
"Halfling",
"Human",
"Kenku",
"Kobold",
"Lizardfolk",
"Orc",
"Owlin",
"Plasmoid",
"Satyr",
"Sea Elf",
"Shadar-Kai",
"Lycanthrope",
"Tabaxi",
"Thri-kreen",
"Tiefling",
"Triton",
"Warforged",
"Yuan-ti"];
const age = ["Elder Adult","Young Adult","Teenager","Middle-Aged","Geriatric","Ancient"];
const alignment = [
"Lawful good",
"Neutral good",
"Chaotic good",
"Lawful neutral",
"True neutral",
"Chaotic Neutral",
"Lawful evil",
"Neutral evil",
"Chaotic evil"
];
const motivations = [
    "Fame",
    "Infamy",
    "Wealth",
    "Health",
    "Success",
    "Legacy",
    "Resurrection",
    "Family",
    "Boredom",
    "Revenge",
    "Purpose",
    "Refuge",
    "Conquest",
    "Immortality",
    "Honor",
    "Penance",
    "Meaning",
    "Answers",
    "Knowledge",
    "Destiny",
    "Distraction"
];

const classes = [
"Barbarian",
"Bard",
"Cleric",
"Druid",
"Fighter",
"Monk",
"Paladin",
"Ranger",
"Rogue",
"Sorcerer",
"Warlock",
"Wizard",
"Artificer",
];

let ageEl = document.getElementById("age");
let speciesEl = document.getElementById("species");
let genderEl = document.getElementById("gender");
let alignmentEl = document.getElementById("alignment");
let motivationEl = document.getElementById("motivation");
let classEl = document.getElementById("class");

let femaleGen = false;
let randomGen = true;
let nonbinaryGen = false;
let maleGen = false;

function randomizeNPC(){
    let randomSpecies = Math.floor(Math.random() * species.length);
    speciesEl.textContent = species[randomSpecies];

    if (femaleGen){
        let femaleGenders = genders.slice(0,2);
        let randomGender = Math.floor(Math.random() * femaleGenders.length);
        genderEl.textContent = femaleGenders[randomGender];
    } 
    
    else if (maleGen){
        let maleGenders = genders.slice(2,4);
        let randomGender = Math.floor(Math.random() * maleGenders.length);
        genderEl.textContent = maleGenders[randomGender];
    }

    else if (nonbinaryGen){
        let nbGenders = genders.slice(4,6);
        let randomGender = Math.floor(Math.random() * nbGenders.length);
        genderEl.textContent = nbGenders[randomGender];
    }

    else {
    let randomGender = Math.floor(Math.random() * genders.length);
    genderEl.textContent = genders[randomGender];
    }
    
    let randomAge = Math.floor(Math.random() * age.length);
    ageEl.textContent = age[randomAge];

    let randomAlignment = Math.floor(Math.random() * alignment.length);
    alignmentEl.textContent = alignment[randomAlignment];

    let randomMotivation = Math.floor(Math.random() * motivations.length);
    motivationEl.textContent = motivations[randomMotivation];

    let randomClass = Math.floor(Math.random() * classes.length);
    classEl.textContent = classes[randomClass];
}

function changeGender(genderSelection){
if (genderSelection === "fem"){
    maleGen = false;
    randomGen = false;
    nonbinaryGen = false;
   femaleGen = true;
   randomizeNPC();
   return femaleGen;    
} else if (genderSelection === "m"){
    femaleGen = false;
    randomGen = false;
    nonbinaryGen = false;
    maleGen = true;
    randomizeNPC();
    return maleGen;    
}
else if (genderSelection === "nb"){
    femaleGen = false;
    randomGen = false;
    nonbinaryGen = true;
    maleGen = false;
    randomizeNPC();
    return nonbinaryGen;    
} else {
    femaleGen = false;
    randomGen = true;
    nonbinaryGen = false;
    maleGen = false;
    randomizeNPC();
    return randomGen;    
}
}

randomizeNPC();

const months = [{
    "earthMonth": 1,
    "name": "Hammer",
    "common": "Deepwinter"
},
{    "earthMonth": 2,
    "name": "Alturiak",
    "common": "The Claw of Winter"
},
{    "earthMonth": 3,
    "name": "Ches",
    "common": "The Claw of Sunsets"
},
{    "earthMonth": 4,
    "name": "Tarsakh",
    "common": "The Claw of Storms"
},
{    "earthMonth": 5,
    "name": "Mirtul",
    "common": "The Melting"
},
{    "earthMonth": 6,
    "name": "Kythorn",
    "common": "The Time of Flowers"
},
{    "earthMonth": 7,
    "name": "Flamerule",
    "common": "Summertide"
},
{    "earthMonth": 8,
    "name": "Eleasis",
    "common": "Highsun"
},
{    "earthMonth": 9,
    "name": "Eleint",
    "common": "The Fading"
},
{    "earthMonth": 10,
    "name": "Marpenoth",
    "common": "Leaffall"
},
{    "earthMonth": 11,
    "name": "Uktar",
    "common": "The Rotting"
},
{    "earthMonth": 12,
    "name": "Nightal",
    "common": "The Drawing Down"
}];


today = new Date;
todayMonth = months[JSON.stringify(today).slice(6,8) - 1];
const convertedDateResult = document.getElementById("convertResult");
convertedDateResult.innerText = `${JSON.stringify(today).slice(9,11)} ${todayMonth.name} (${todayMonth.common})`;

document.getElementById('cal').addEventListener('change', function() {
    selectedDate = new Date(this.value);
    selectedDay = JSON.stringify(selectedDate).slice(9,11);
    selectedMonth = JSON.stringify(selectedDate).slice(6,8);
    monthCorrection = months[selectedMonth - 1];
    dateResult = `${selectedDay} ${monthCorrection.name} (${monthCorrection.common})`;
    convertedDateResult.innerText = dateResult;
});