let a=(prompt("Enter the first value"));
let b=(prompt("Enter the second value"));
let ch=(prompt("Enter the choice"));
let res;
switch(ch){
    case 1:
        res=a+b;
        document.write('Addition:',res);
        break;
    case 2:
        res=a-b;
        console.log('Substraction:',res);
        break;
    case 3:
        res=a*b;
        console.log('Multiplication:',res);
        break;
    case 4:
        res=a/b;
        console.log('Division:',res);
        break;
    case 5:
        res=a%b;
        console.log('Modulus:',res);
        break;
}