function personalTitle (input){
    let personalAge = Number(input[0]);
    let gender = input[1];
     if(gender == `f`){
        if (personalAge >= 16){
            console.log("Ms.")
        }
        else{
            console.log("Miss")
        }
     }else{
        if(personalAge >= 16){
            console.log("Mr.")
        }
        else{
            console.log("Master")
        }
     }

}
personalTitle(["17", "m"])