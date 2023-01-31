function shoping(input){
    let budged =  Number(input[0]);
    
    let videoCardPieces = Number(input[1]);
    let procesorsPices = Number(input[2]);
    let ramMemPieces = Number(input[3]);
    
    let videoCardPrice1 = 250;
    let videoCardPrice = videoCardPieces * videoCardPrice1;
   
    let procesorsPrice = videoCardPrice * 0.35;
    let totalpriceProcesors = procesorsPrice * procesorsPices;

    let ramPrice = videoCardPrice * 0.1;
    let totalpriceRam = ramPrice * ramMemPieces;

    
    let totalPriceNeeded = videoCardPrice + totalpriceProcesors +totalpriceRam;
    
    let discount = 0;
    if (videoCardPieces > procesorsPices && budged >= totalPriceNeeded){
    discount = totalPriceNeeded * 0.85
    levaLeft = budged - discount
    console.log(`You have ${levaLeft.toFixed(2)} leva left!`)
    }else if (budged >= totalPriceNeeded){
       levaLeft = budged - totalPriceNeeded
       console.log(`You have ${levaLeft.toFixed(2)} leva left!`)
    }if (videoCardPieces > procesorsPices && budged < totalPriceNeeded){
        discount = totalPriceNeeded * 0.85
        levaNeeded = discount - budged
       console.log(`Not enough money! You need ${levaNeeded.toFixed(2)} leva more!`)
    }else if(budged < totalPriceNeeded){
        levaNeeded = totalPriceNeeded - budged
        console.log(`Not enough money! You need ${levaNeeded.toFixed(2)} leva more!`)
    
    }
    
    


}
shoping(["920.45","3","1","1"])



//(["900","2","1","3"])
//(["920.45","3","1","1"])