function fruitShop(input){
    let product = input[0];
    let day = input[1];
    let pieces = Number(input[2]);
    let sum = 0;
     
       switch (day){
        case "Monday" : 
        case "Tuesday": 
        case "Wednesday" : 
        case "Thursday": 
        case "Friday":
            switch(product){
                case "banana":
                    sum = pieces * 2.50;
                    console.log(sum.toFixed(2))
                     break;
                    case "apple":
                        sum = pieces * 1.20;
                        console.log(sum.toFixed(2))
                        break;
                    case "orange":
                        sum = pieces * 0.85;
                        console.log(sum.toFixed(2))
                        break;
                    case "grapefruit":
                        sum = pieces * 1.45;
                        console.log(sum.toFixed(2))
                        break;
                    case "kiwi":
                        sum = pieces * 2.70;
                        console.log(sum.toFixed(2))
                        break;
                    case "pineapple":
                        sum = pieces * 5.50;
                        console.log(sum.toFixed(2))
                        break;
                    case "grapes":
                        sum = pieces * 3.85;
                        console.log(sum.toFixed(2))
                        break;
                        default : console.log("error");break;
                    }
        
            
             break;
            case "Saturday":
            case "Sunday":
                switch(product){
                    case "banana":
                        sum = pieces * 2.70;
                        console.log(sum.toFixed(2))
                         break;
                    case "apple":
                            sum = pieces * 1.25;
                            console.log(sum.toFixed(2))
                            break;
                    case "orange":
                            sum = pieces * 0.90;
                            console.log(sum.toFixed(2))
                            break;
                    case "grapefruit":
                            sum = pieces * 1.60;
                            console.log(sum.toFixed(2))
                            break;
                    case "kiwi":
                            sum = pieces * 3.00;
                            console.log(sum.toFixed(2))
                            break;
                    case "pineapple":
                            sum = pieces * 5.60;
                            console.log(sum.toFixed(2))
                            break;
                    case "grapes":
                            sum = pieces * 4.20;
                            console.log(sum.toFixed(2))
                            break;
                }
            break;
        default : console.log("error");break;
       } 
       
    }      
fruitShop(["tomato", "Monday", "0.5"])