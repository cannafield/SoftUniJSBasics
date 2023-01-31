function project(input){
    let architectName = input[0];
    let numberOfProject = Number(input[1]);
    let needHour = numberOfProject * 3;
 
    

    console.log(`The architect ${architectName} will need ${needHour} hours to complete ${numberOfProject} project/s.`);
}
project(["George","4"])