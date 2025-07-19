let obj={
    harry:98,
    rohan:70,
    aakash:7
}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element)
    }
}