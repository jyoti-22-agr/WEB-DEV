console.log("Script.js initializing....")

// let boxes = document.getElementsByClassName('box')
// console.log(boxes) 

let boxes = document.querySelector(".container").children
 

// math.random = a + r(b-a) => a=0; b=255;  so we take  [0+Math.random()*255] and math.ceil gives us an integer no.
function getRandomColor (){
    let val1 = Math.ceil(0+Math.random()* 255);
    let val2 = Math.ceil(0+Math.random()* 255);
    let val3 = Math.ceil(0+Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

Array.from(boxes).forEach(e=>{
    e.style.background =getRandomColor()
    e.style.color = getRandomColor()
})

