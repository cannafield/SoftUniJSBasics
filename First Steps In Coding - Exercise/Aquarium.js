function Aquarium(input){
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]) / 100;

    let totalVolumeincm = lenght * width * height;
    let totalVolumeinL = totalVolumeincm / 1000;
    
    let volumeTaken = percent * totalVolumeinL;
    
    let volumLeft = totalVolumeinL - volumeTaken;

    console.log(volumLeft);


}
Aquarium(["85","75","47","17"])