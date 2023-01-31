function Yard(input){

    let squareMeter = Number(input[0]);
    let priceYard = squareMeter * 7.61;
    let discount = priceYard * 0.18;
    let finalPrice = priceYard - discount;
    






    console.log(`The final price is: ${finalPrice} lv.`)
	console.log(`The discount is: ${discount} lv.`)


}
Yard(["550"])




// let finalPice = squeareMeter * 7.16;
//let discount = finalPice * 0.18;

     // let pricePerMete= squareMeter * 7.61;
    // let discount = pricePerMete * 0.82;
    // let finalPrice = pricePerMete - discount;