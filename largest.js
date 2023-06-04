let a=prompt("Enter the 1st number:");
let b=prompt("Enter the 2nd number:");
let c=prompt("Enter the 3rd number:");

let max = (a>b)?(a>c?a:c):(b>c?b:c);
console.log("Largest number is:",max);
//document.write("Largest number among " + a +","+ b + " and " + c + " is " + max + ".");