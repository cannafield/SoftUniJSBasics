function skiTrip(input){
    let day = Number(input[0]);
    let typeRoom = input[1];
    let grade = input[2];
    let duration = day - 1;

    let onePersonRoom = 18.00;
    let apartmen= 25.00;
    let presidentApart = 35;



    if(duration < 10){
        switch(typeRoom){
            case `apartment`:
                
                totalprice = (apartmen * duration) * 0.7;
                
            break;
            case`president apartment`:
               
                totalprice = (presidentApart * duration) * 0.9;
                
            break;
          case`room for one person`: 
          totalprice = onePersonRoom * duration;
                 
            break;
        
       }
    }
    if(duration >= 10 && duration <= 15){
        switch(typeRoom){
            case `apartment`:
                
                totalprice = (apartmen * duration) * 0.65;
                
            break;
            case`president apartment`:
               
                totalprice = (presidentApart * duration) * 0.85;
                
            break;
          case`room for one person`: 
          totalprice = onePersonRoom * duration;
                
            break;
        }
    }
    if(duration > 15){
        switch(typeRoom){
            case `apartment`:
                
                totalprice = (apartmen * duration) * 0.50;
                
            break;
            case`president apartment`:
               
                totalprice = (presidentApart * duration) * 0.80;
                
            break;
          case`room for one person`: 
                 totalprice = onePersonRoom * duration;
                
            break;
        }
    }
    switch(grade){
        case 'negative':
            totalprice *= 0.90;
            console.log(totalprice.toFixed(2));
            break;
        case 'positive':
            totalprice1 = (totalprice * 0.25) + totalprice;
            console.log(totalprice1.toFixed(2));
            break;
        
       }
    }
    

skiTrip(["12",
"room for one person",
"positive"])



