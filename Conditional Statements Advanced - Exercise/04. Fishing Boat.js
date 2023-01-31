function priceBoat(input) {
    let budged = Number(input[0]);
    let seasson = input[1];
    let fisherCount = Number(input[2]);
    let price = 0;

    switch (seasson) {
        case 'Spring':
            price = 3000
            break;
        case 'Winter':
            price = 2600
            break;
        case 'Summer':
        case 'Autumn':
            price = 4200
            break;
    }
    if (fisherCount <= 6) {
        price *= 0.9;
    } else if (fisherCount <= 11) {
        price *= 0.85;
    } else if (fisherCount > 12) {
        price *= 0.75;
    }
    if ((fisherCount % 2 === 0) && seasson !== `Autumn`) {
        price = price * 0.95;
    }

     if (budged >= price) {
        left = budged - price
        console.log(`Yes! You have ${left.toFixed(2)} leva left.`)
    } else if (budged <= price) {
        moneyNeeded = price - budged
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
    }
}
priceBoat(["3000", "Summer", "11"])