function depositCalculator(input){
    
    let deposit = Number(input[0]);
    
    let period = Number(input[1]);
   
    let percent = Number(input[2]) / 100;
    
   
    let finalDeposit = deposit + period * (deposit * percent / 12);

    console.log (finalDeposit);
}
depositCalculator(["200","3","5.7"]);