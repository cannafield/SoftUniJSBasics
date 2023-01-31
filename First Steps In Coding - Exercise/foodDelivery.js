function foodDelivery(input){
    let chikenMenu = Number(input[0]) * 10.35;
    let fishMenu = Number(input[1]) * 12.40;
    let vegieMenu = Number(input[2]) * 8.15;

    let desert = (chikenMenu + fishMenu + vegieMenu) * 0.2;


    let fullOrderPrice = chikenMenu + fishMenu + vegieMenu + desert + 2.50;


    console.log(fullOrderPrice);



}
foodDelivery(["2","4","3"]);