let rand=Math.random();
console.log(rand)


if (rand<0.2){
    console.log(document.body.firstElementChild.firstElementChild.style.backgroundColor="red")
    console.log(document.body.firstElementChild.children[1].style.backgroundColor="green")
    console.log(document.body.firstElementChild.children[2].style.backgroundColor="yellow")
    console.log(document.body.firstElementChild.children[3].style.backgroundColor="pink")
    console.log(document.body.firstElementChild.children[4].style.backgroundColor="blue")
}

else if(rand<=0.4){
    console.log(document.body.firstElementChild.firstElementChild.style.backgroundColor="pink")
    console.log(document.body.firstElementChild.children[1].style.backgroundColor="aqua")
    console.log(document.body.firstElementChild.children[2].style.backgroundColor="purple")
    console.log(document.body.firstElementChild.children[3].style.backgroundColor="yellow")
    console.log(document.body.firstElementChild.children[4].style.backgroundColor="red")
    
}

else if(rand<=0.6){
    console.log(document.body.firstElementChild.firstElementChild.style.backgroundColor="blue")
    console.log(document.body.firstElementChild.children[1].style.backgroundColor="grey")
    console.log(document.body.firstElementChild.children[2].style.backgroundColor="pink")
    console.log(document.body.firstElementChild.children[3].style.backgroundColor="red")
    console.log(document.body.firstElementChild.children[4].style.backgroundColor="green")
    
}

else if(rand<=0.8){
    console.log(document.body.firstElementChild.firstElementChild.style.backgroundColor="green")
    console.log(document.body.firstElementChild.children[1].style.backgroundColor="red")
    console.log(document.body.firstElementChild.children[2].style.backgroundColor="aqua")
    console.log(document.body.firstElementChild.children[3].style.backgroundColor="blue")
    console.log(document.body.firstElementChild.children[4].style.backgroundColor="yellow")
    
}

else{
    console.log(document.body.firstElementChild.firstElementChild.style.backgroundColor="blue")
    console.log(document.body.firstElementChild.children[1].style.backgroundColor="yellow")
    console.log(document.body.firstElementChild.children[2].style.backgroundColor="red")
    console.log(document.body.firstElementChild.children[3].style.backgroundColor="green")
    console.log(document.body.firstElementChild.children[4].style.backgroundColor="purple ")

}
