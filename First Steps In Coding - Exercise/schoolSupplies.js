function suppliesSchool(input){
    
    let pencil = Number(input[0]) * 5.80;
    let marker = Number(input[1]) * 7.20;
    let cleaner = Number(input[2]) * 1.20;

    let finalPrice = pencil + marker + cleaner;
    let discountPrice = finalPrice - (finalPrice * 0.25);

    console.log(discountPrice);


}
suppliesSchool(["2","3","4","25"])