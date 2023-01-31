function repainting(input){
    let naylonQuantity = Number(input[0]);
    let paintQuantity = Number(input[1]);
    let thinnerQuantity = Number(input[2]);
    let workTime = Number(input[3]);

    let totalNaylon = naylonQuantity + 2;
    let totalPaint = paintQuantity + (paintQuantity * 0.10);

    let naylonPrice = totalNaylon * 1.50;
    let paintPrice = totalPaint * 14.50;
    let thinnerPrice = thinnerQuantity * 5.00;

    let totalMaterialPrice = naylonPrice + paintPrice + thinnerPrice + 0.40;
    let workPrice = (totalMaterialPrice * 0.3) * workTime;

    let totalPrice = totalMaterialPrice + workPrice

    

console.log(totalPrice);

}

repainting (["10","11","4","8"])





