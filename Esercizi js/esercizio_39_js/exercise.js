const isLogged = true;

const myNewPromise = (x) => {
    return new Promise((resolve, reject) => {
            if (x == true) {
                resolve(Math.random());
            } else {
                reject(new Error ("error"));
            }
    })
}

const secondPromise = (y) => {
    return new Promise((resolve, reject) => {
            if (y > 0.5) {
                resolve({ name: "John", age: 24 });
            } else {
                reject(new Error("error"));
            }
        })
}

myNewPromise(isLogged)
.then((second) => {
    console.log(second);
    return second;
})

.then((second) => secondPromise(second))
.then((print) => console.log(print))
.catch((err) => console.error(err))
.finally(() => console.log("complete"))
