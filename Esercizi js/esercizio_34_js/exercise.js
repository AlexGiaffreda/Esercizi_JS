const printAsyncName = function(callback, world) {
    
    setTimeout (() => callback(), 1000);

    setTimeout(() => {console.log(world)},2000);
}

printAsyncName(() => console.log("Hello"),"World")
