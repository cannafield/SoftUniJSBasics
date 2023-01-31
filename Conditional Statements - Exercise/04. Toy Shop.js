function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzelNum = Number(input[1]);
    let dollNum = Number(input[2]);
    let bearNum = Number(input[3]);
    let minionsNum = Number(input[4]);
    let truckNum = Number(input[5]);

    let puzzelPrice = 2.60;
    let dollPrice = 3;
    let bearPrice = 4.10;
    let minionsPrice = 8.20;
    let truckPrice = 2;

    let totalPrice = (puzzelNum * puzzelPrice) + (dollNum * dollPrice) + (bearNum * bearPrice) + (minionsNum * minionsPrice) + (truckNum * truckPrice);
    let totalNum = puzzelNum + dollNum + bearNum + minionsNum + truckNum;

    let win = totalPrice

    if (totalNum >= 50) {

        discount = totalPrice * 0.25
        finalPrice = totalPrice - discount
        win = finalPrice

    }

    let loan = win * 0.1;
    let profit = win - loan;

    if (profit >= tripPrice) {
        moneyLeft = profit - tripPrice
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)

    } else {
        moneyNeed = tripPrice - profit
        console.log(`Not enough money! ${moneyNeed.toFixed(2)} lv needed.`)
    }
}
toyShop(["320", "8", "2", "5", "5", "1"])





//console.log(`Not enough money! ${moneyNeed.toFixed(2)} lv needed.`)