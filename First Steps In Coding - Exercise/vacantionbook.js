function vacantionBookList(input){

    let pagesCount = Number(input[0]);

    let pagesPerHour = Number(input[1]);

    let daysCount = Number(input[2]);

    let hoursNeed = pagesCount / pagesPerHour / daysCount;

    console.log(hoursNeed);


}

vacantionBookList(["212 ","20 ","2 "]);