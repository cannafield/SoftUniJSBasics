function bascketballEquipment(input){
    let annualTrainingPrice = Number(input[0]);
    let sneakersPrice = annualTrainingPrice * 0.6;
    let equpmentPrice = sneakersPrice * 0.8;
    let ball = equpmentPrice * 0.25;
    let accessoariesPrice = ball * 0.2;
    
    let totalPrice =  sneakersPrice + equpmentPrice + ball + accessoariesPrice + annualTrainingPrice;

    console.log(totalPrice);
}
bascketballEquipment(["365"]);



