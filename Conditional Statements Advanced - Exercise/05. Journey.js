function jurney(input){
    let budget = Number(input[0]);
    let seasson = input[1];
    let price = 0;
    destination = '';
    type = '';

    if(budget <= 100){
        destination = `Bulgaria`
        switch (seasson) {
            case 'summer':
                price = budget * 0.3;
                type = 'Camp'
                break;
                
        
            case 'winter':
                price = budget * 0.7;
                type = 'Hotel'
                break;
                
        }
    }else if (budget <=1000){
        destination = `Balkans`
        switch (seasson) {
            case 'summer':
                price = budget * 0.4;
                type = 'Camp'
                break;
                
        
            case 'winter':
                price = budget * 0.8;
                type = 'Hotel'
                break;
        }
    }else if (budget > 1000){
        destination = 'Europe'
        price = budget * 0.9;
        type = 'Hotel'
    }
        
console.log(`Somewhere in ${destination}`)
console.log(`${type} - ${price.toFixed(2)}`)
}
jurney(["1500", "summer"])