function hotel(input) {
    let month = input[0];
    let duration = Number(input[1]);
    
    let priceApartment = 0;
    let priceStudio = 0;
    

    switch (month) {
      case 'May':
      case 'October':
        priceApartment =  65;
        priceStudio = 50;
            break;
      case 'June':
      case 'September':
        priceStudio = 75.20;
        priceApartment = 68.70;
            break;
        case 'July':
        case 'August':
            priceApartment = 77;
            priceStudio = 76;
            break;
    
    }   
    if (duration > 14){
        priceApartment *= 0.9;
    }
    if (duration > 7 && duration < 14 && (month == 'May' || month == 'October')){
        priceStudio *= 0.95;
    }
    if (duration > 14 && (month == 'May' || month == 'October')){
        priceStudio *= 0.70;
    }
    if (duration > 14 && (month == 'June' || month == 'September')){
        priceStudio *= 0.80;
    }
    let totalPriceApartment = priceApartment * duration;
    let totalPriceStudio = priceStudio * duration;
    
        console.log(`Apartment: ${totalPriceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`)
     
}  
hotel(["June",

"14"])


