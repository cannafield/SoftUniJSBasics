function movie (input){
 
    let budget = Number (input[0]);
    let extra = Number (input[1]);
    let priceFor1 = Number (input[2]);
    let Costumes = Number (priceFor1 * extra);
    let decor = budget * 0.1;
     
    if (extra >= 150) {
        Costumes = Costumes * 0.9
    }
    if (decor + Costumes > budget) {
        let NotEnough = (decor + Costumes) - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${NotEnough.toFixed(2)} leva more.`);
     
    } else if (decor + Costumes <= budget){
        let EnoughMoney = budget - (decor + Costumes);
        console.log("Action!");
        console.log(`Wingard starts filming with ${EnoughMoney.toFixed(2)} leva left.`);
    }
    }
    movie (["9587.88",

"222",

"55.68"])