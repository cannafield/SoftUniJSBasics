function hours(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let hoursToMin = hours *60;
    let minutesToHours = (hoursToMin + minutes) / 60;
    console.log(minutesToHours)
}
hours(["1","30"])