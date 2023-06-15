// Iteration 1: Names and Input
/*
let hacker1 = "Jazz";
console.log(`The driver is ${hacker1}`);
let hacker2 = "Rudy";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let driverlength = hacker1.length;
let navigatorlength = hacker2.length;

if (driverlength > navigatorlength) {
  console.log(`The driver has the longest name, it has ${driverlength} characters.`);
} else if (driverlength < navigatorlength) {
  console.log(`The navigator has the longest name, it has ${navigatorlength} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${navigatorlength} characters!`);
}

let separatedDriverName = "";

for (let i = 0; i < hacker1.length; i++){
   separatedDriverName += hacker1[i].toUpperCase() + " ";
 }
   console.log(separatedDriverName.trim());

let separatedNavigatorName = "";

for (let i = 0; i < hacker2.length; i++){
   separatedNavigatorName += hacker2[i].toUpperCase() + " ";
 }
   console.log(separatedNavigatorName.trim());
*/
/*
const hacker1 = 'Jazz';


const hacker2 = 'Rudy';

let rev = '';


for (let j = hacker2.length - 1; j >= 0; j--) {
 rev += hacker2[j];
  
}

console.log(rev);
*/
/*
let hacker1 = "Jazz"
let hacker2 = "Rudy"

if (hacker1 < hacker2) {
  console.log(hacker1);
}
else if (hacker1 > hacker2) {
  console.log(hacker2);
}
else if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?")
}
*/

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat lacus quis mauris suscipit lacinia. Etiam facilisis eu sapien vel blandit. In lacinia nisi a maximus facilisis. Suspendisse mi purus, consectetur et mi non, egestas semper dui. Cras sed mauris vitae sem auctor interdum. Vivamus venenatis fringilla eros, accumsan aliquet libero. Aliquam erat volutpat. Nunc viverra eu urna a commodo. Cras ex libero, fringilla et volutpat at, egestas vitae diam. Maecenas sed arcu id turpis commodo eleifend eget vel erat. Quisque laoreet vehicula ante, vitae bibendum eros interdum sed. Integer purus diam, tincidunt nec faucibus et, aliquam ut sapien.\n\n Quisque eget erat enim. Donec nec ornare est. Aliquam orci dui, semper ut sem et, sagittis auctor dui. Sed sit amet velit nibh. Vivamus lobortis iaculis eleifend. Mauris viverra libero a volutpat malesuada. Proin consectetur, sapien convallis consectetur efficitur, lectus lectus fermentum nulla, sed sollicitudin tortor enim ut urna.\n\n Fusce semper mattis erat nec mattis. Integer luctus elementum pretium. Vestibulum volutpat, dui vel tempus ullamcorper, magna neque lobortis neque, eget tempus odio metus ac ex. Donec efficitur elit at odio molestie, in venenatis arcu rutrum. Nulla ante metus, porta nec ex ut, tempus accumsan lorem. Vestibulum et sodales arcu, vel malesuada purus. Cras dui tortor, luctus facilisis ornare et, fermentum vitae nisi. Vestibulum et nibh quis ex sollicitudin euismod. Fusce a ligula tincidunt lectus condimentum convallis.\n\n`
  
const words = longText.split(' ').length;

console.log(words);


/* incorrect
etcounter = 0
if (longtext ==="et"); {
etcounter +=1
}
console.log(etcounter);
*/

// program to check the occurrence of a character

function countString(str, letter) {

    // creating regex 
    const re = new RegExp(letter, 'g');

    // matching the pattern
    const count = str.match(re).length;

    return count;
}

// take input from the user
const string = prompt('Enter a string: ');
const letterToCheck = prompt('Enter a letter to check: ');

//passing parameters and calling the function
const result = countString(string, letterToCheck);

// displaying the result
console.log(result);


