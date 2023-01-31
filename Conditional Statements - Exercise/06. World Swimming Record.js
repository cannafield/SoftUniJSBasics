function worldRecord(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let time = Number(input[2]);

    let timeIvan = distance * time;
    let resistance = Math.floor(distance / 15);
    let delay = resistance * 12.5;
    let overallTime = (timeIvan + delay);

    if (record <= overallTime) {
        timeNeeded = overallTime - record
        console.log(`No, he failed! He was ${timeNeeded.toFixed(2)} seconds slower.`)
    } else if (record > overallTime) {

        console.log(`Yes, he succeeded! The new world record is ${overallTime.toFixed(2)} seconds.`)
    }
        
}
        

worldRecord(["10464","1500","20"])

//(["10464","1500","20"])
//(["55555.67","3017","5.03"])