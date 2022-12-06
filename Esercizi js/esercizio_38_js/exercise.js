const isLogged = true;

const myNewPromise = (x) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (x == true) {
                resolve(Math.random());
            } else {
                reject("error");
            }
        }, 3000)
    })

}

const secondPromise = (y) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (y > 0.5) {
                resolve({ name: "John", age: 24 });
            } else {
                reject("error");
            }
        }, 1500);
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
