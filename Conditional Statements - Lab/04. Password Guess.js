function passwordGuess(input){
    let pass = ("s3cr3t!P@ssw0rd");
    if (pass == (input[0]) ){
        console.log("Welcome");
    }else{
        console.log("Wrong password!");
    }
}
passwordGuess(["s3cr3t!P@ssw0rd"])