let random=Math.random()
let a=prompt("enter first number")
let c=prompt("enter operation")
let b=prompt("enter second number")

let obj ={
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}

if (random>0.1){
    // correct calculation
    console.log(`The result of ${a} ${c} ${b}`)
    alert(`The ressult is ${eval(`${a} ${c} ${b}`)}`)
}

else{
    // Perform wrong calculation 
    c=obj[c]
    alert(`The ressult is ${eval(`${a} ${c} ${b}`)}`)
    
}