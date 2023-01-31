function workingDays(input){
    let hours = Number(input[0]);
    let day = input[1];
     if (hours >= 10 && hours<= 18 && hours != 0){
        switch (day){
            case "Monday" : 
        case "Tuesday": 
        case "Wednesday" : 
        case "Thursday": 
        case "Friday": 
        case "Saturday" :
        console.log("open");
              break;
           default:
                console.log("closed")
                break;
        }
     }else{
        console.log("closed")
     }
}
workingDays(["11","Saturday"])