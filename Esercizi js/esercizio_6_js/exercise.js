function printname(){
    let helloName = "hello john";
    function inner(){
        return helloName;
    }
    console.log(inner());
}
printname();
