const isLogged = true;

function firstPromise(isLogged) {
    return new Promise((resolve, reject) => {
        let random = Math.random();

        if(isLogged == true){
            resolve(random)
        
        }else {
            reject(new Error("Not logged"));
        }
    })
}

function secondPromise(parameter){
    return new Promise((resolve, reject) => {

        if(parameter > 0.5){
            resolve({name: "John", age: 24})
        
        }else{
            reject(new Error("No user data"));
        }
    })
};

firstPromise(isLogged)
.then(secondPromise)
.then((print) => console.log(print))
.catch((err) => console.log(err))
.finally(() =>  console.log("Complete"));
