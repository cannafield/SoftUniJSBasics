function luncbreak(input){
    let serialName = input[0];
    let episodTime = Number(input[1]);
    let timeBreak = Number(input[2]);

    let lunchtime = timeBreak * (1 / 8);
    let peacetime = timeBreak * (1 / 4);
    let timeForLandP = lunchtime + peacetime;
    let timeLeft = timeBreak - timeForLandP;
       if(timeLeft >= episodTime){
        time = Math.ceil(timeLeft - episodTime)
         console.log(`You have enough time to watch ${serialName} and left with ${time} minutes free time.`)
       }else {
        time = Math.ceil(episodTime - timeLeft)
         console.log(`You don't have enough time to watch ${serialName}, you need ${time} more minutes.`)
       }




}
luncbreak(["Teen Wolf","48","60"])


//(["Teen Wolf","48","60"])
//(["Game of Thrones","60","96"])