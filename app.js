console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
//Print odd numbers from 1-100
for (let i = 0; i <= 99; i += 2) {
   
    console.log(i);
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
//FIZZBUZZ

for (let i = 1; i < 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, "FIZZBUZZ");
    }
    else if 
        (i % 3 == 0) {
            console.log(i, "FIZZ");
        }
    else if (i % 5 == 0) {
            console.log(i, "BUZZ");
        }
    else { 
        console.log(i);
    }
    
}
//Exercise 3 Section
console.log("EXERCISE 2:\n==========\n");
let x = 1;

do{
    let output = "";
    if ( x % 3 == 0) {
        output += "FIZZ";
    }
    if ( x % 5 == 0) {
        output += "BUZZ";
    }
    console.log(`${x} ${output}`);
    x++;
}
while (x <= 100);

//Exercise 4 Section
let numberToFind = Math.round(Math.random() * 500);
let n = Math.round(Math.random() * (500-100) + 100);

for (let i = 1; i <=n; i++) {
    if(i == numberToFind) {
    console.log(`Found ${numberToFind}!`);
    break;
    }

    if (i ==n) {
        console.log(`Did not find ${numberToFind} within 1-${n}..`);
    }   
}


//Exercise 5 Section

let fizzDivizor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= end; i++) {
    let output = "";

    if (i % fizzDivizor == 0) {
        output += "FIZZ";
    }

    if (i % buzzDivisor == 0) {
        output += "BUZZ";
    }

    console.log(`${i} ${output}`);

}

console.log(fizzDivizor, buzzDivisor);