/* 
Create a faulty calculator using Javascript

This faulty calculator does following:
1. It takes two numbers as input from the user 
2. It performs wrong operations as follows:


+ ----> -
* ----> +
- ----> /
/ ----> **


It performs wrong operations 10% of the times

*/

a= Math.random()
console.log(a)

if (a<0.2){

    
    
    function sum(a,b){
        return a-b
}
sum=sum(6,4)
// console.log(sum(8,9))
console.log("The sum of these number is",sum)

// *****************************************************


function multiply(a,b){
    return a+b
}

mul=multiply(9,2)
console.log("The product of these number is",mul)

// *****************************************************

function sub(a,b){
    return a/b
}

minus=sub(9,2)
console.log("The subtraction of these number is",minus)

// *****************************************************

function divide(a,b){
    return a**b
}

div=divide(10,5)
console.log("The division of these number is",div)

}

// __________________________________________________________________


else{
    function sum(a,b){
        return a+b
}
sum=sum(6,4)
// console.log(sum(8,9))
console.log("The sum of these number is",sum)

// *****************************************************


function multiply(a,b){
    return a*b
}

mul=multiply(9,2)
console.log("The product of these number is",mul)

// *****************************************************

function sub(a,b){
    return a-b
}

minus=sub(9,2)
console.log("The subtraction of these number is",minus)

// *****************************************************

function divide(a,b){
    return a/b
}

div=divide(10,5)
console.log("The division of these number is",div)

}