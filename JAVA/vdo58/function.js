function nice(name){
    console.log("Hey "+name+" you are nice")
    console.log("Hey "+name+" you are good")
    console.log("Hey "+name+" your tshirt is good")
    console.log("Hey "+name+" your course is good too")
    
}
// nice("jyoti")
// nice("shivam")


function sum(a,b,c=10){
    // console.log(a+b)
    // console.log(a,b,c)
    return a+b+c
}

console.log(sum(6,4))
// result1=sum(4)
// result2=sum(20,62)
// result3=sum(45,66,1)
// console.log("The sum of these number is:",result1)
// console.log("The sum of these number is:",result2)
// console.log("The sum of these number is:",result3)


const func1 =(x)=>{
    console.log("Hey I am an arrow function",x)
}

func1(45)
func1(100)
func1(450)