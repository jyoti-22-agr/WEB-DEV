// <!-- Write a program to calculate a factorial of a number using reduced and a for loop. -->

let a = 10

function factorial(number){
    let arr = Array.from(Array(number+1).keys())
    console.log(arr.slice(1,))
    let c= arr.slice(1,).reduce((a,b)=>{
    return a*b
    } )
    return c
}




function facFor(number){
    let  fac=1
    for (let index = 1; index <= number; index++) {
        fac = fac* index;
        
    }
    return fac
}


console.log(factorial(a))
console.log(facFor(a))