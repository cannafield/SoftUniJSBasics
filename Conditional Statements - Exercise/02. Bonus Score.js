function totalPoints(input) {
    let points = Number(input[0]);

    if (points <= 100) {
        bonus = 5
    } else if (points > 100 && points <= 1000) {
        bonus = points * 0.2;
    } else if (points > 1000) {
        bonus = points * 0.1;
    }

 if (points % 2 == 0) {

        bonus = bonus + 1;
    } else if (points % 10 === 5) {
        bonus = bonus + 2;
    }


    console.log(bonus);
    console.log(points + bonus);

}
totalPoints(["2703"])   





