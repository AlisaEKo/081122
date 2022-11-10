if (new Date().getHours() < 14) {
    console.log("Good Morning");
} else {
    console.log("Have a Great Day!");
}


if (new Date().getHours() < 10) {
    console.log("Good Morning");
} else if (new Date().getHours() <= 13) {
    console.log("Have a Great Day!");
}
else {
    console.log("Good Evening");
}


let answer = prompt("Enter A Number Between 1 - 9");

switch (Number(answer)) {
    case 1:
        alert(`your number is: ${answer}`);
        break;
    case 2:
        alert(`your number is: ${answer}`);
        break; 
    case 3:
        alert(`your number is: ${answer}`);
        break; 
    case 4:
        alert(`your number is: ${answer}`);
        break; 
    case 5:
        alert(`your number is: ${answer}`);
        break; 
    case 6:
        alert(`your number is: ${answer}`);
        break; 
    case 7:
        alert(`your number is: ${answer}`);
        break; 
    case 8:
        alert(`your number is: ${answer}`);
        break; 
    case 9:
        alert(`your number is: ${answer}`);
        break; 
    default:
        alert("your number is not between 1 - 9");
        break; 

    }

    let i = 10;
    while (i < 20) {
        console.log ("i = " + i);
        i++;

    }

// exercise 23 //

let x = 96;

if (x < 18) {
    console.log("Not Valid"); 
} 
else if (x > 18 && x <= 30){
    console.log("You are still young, but good to go");
}
else if (x == 50){
    console.log("GOLDEN");
}
else if (x > 30 && x <= 60){
    console.log("Ageing like a fine wine, aren't you?");
}
else if (x > 60 && x <= 95){
    console.log("Please, call me sir");
}    
else if (x > 95) {
    console.log("Most Valuable Grandpa");
}


// exercise 24 //

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
console.log("Today is " + day);

let i = 0;
while (i <= 100) {
    console.log(i);
    i = i + 2;
}

let i = 0;
while (i <= 100) {
    if(!(i%2))
    {
        console.log(i);
    }
    i++;
}


// exercise 25 //

let randomWords = "Alisa, Tom, Mika, Ron";
console.log(randomWords.length);

let foodWords = "Fruit, Meat, Vegetables";
console.log(foodWords.slice(13));

let upperCWord = "ALISA";
console.log(upperCWord.toLowerCase());

let lowerCWord = "alisa";
console.log(lowerCWord.toUpperCase());

let foodWords2 = "Fruit, Meat, Vegetables";
console.log(foodWords2.replace("Meat", "Tree"));


extra exercise //

write a function that recives a string and reverses it //
for example "dracula" "alucard" //




function reverseString(input) {
    let localString = "";
    for (let i = 0; i < input.length; i++)
    {
        localString += input[input.length -1 -i];
    }
    return localString;
}


let word = "roman";
word = reverseString(word);
console.log(word);


const rWord = "alisa";
let i = rWord.length;
while (i--) {
    console.log(rWord[i]);
}


const s_word = 'alisa';
const rev = [...s_word]
    .reverse()
    .join('');

console.log(rev);


let modEx = 2356;
let sumDigit = 0;

while (modEx) {
    sumDigit += modEx % 10;
    modEx = Math.floor(modEx / 10);
}

console.log(sumDigit);

