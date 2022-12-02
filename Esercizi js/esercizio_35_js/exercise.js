function repeatHello(callback){
    setInterval(callback, 1000)
    }
    const hi = (() => console.log("hello"));
    
    repeatHello(hi);
