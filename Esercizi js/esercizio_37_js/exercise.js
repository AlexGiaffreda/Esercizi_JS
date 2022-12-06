const number = 8;

let p = new Promise((resolve, reject) => {
    if (number > 10) {
        resolve("done")
    }
    else {
        reject("undone")
    }
});
p.then((print) => {
    console.log(print)
}).catch((error) => {
    console.log(error)
})
