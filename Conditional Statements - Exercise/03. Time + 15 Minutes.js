function timePredict(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]) + 15;
    if (minutes >= 60) {
        hours = (hours + 1) % 24;
        minutes = minutes % 60;
        if (minutes < 10) {
            console.log(`${hours}:0${minutes}`);
        }
        else {
            console.log(`${hours}:${minutes}`)
        }
    }
    else {
        if (minutes < 10) {
            console.log(`${hours}:0${minutes}`);
        }
        else {
            console.log(`${hours}:${minutes}`)
        }
    }
}

timePredict(["12", "47"])





