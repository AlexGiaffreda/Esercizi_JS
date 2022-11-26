function printname(){
    const helloName = "hello john";
    function inner(){
        return helloName;
    }
    setTimeout(function(){
    console.log(inner());
    }, 1000);
}

printname();