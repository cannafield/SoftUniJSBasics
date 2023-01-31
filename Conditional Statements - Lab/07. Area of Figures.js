function s(input) {
    let areaTip = input[0];
      if(areaTip === "square") {
          let a = Number(input[1]);
          let s = a * a;
          console.log(s.toFixed(3));
      }else if(areaTip === "rectangle"){
        let a = Number(input[1]);
        let b = Number(input[2]);
        let s = a * b;
        console.log(s.toFixed(3));
      }else if (areaTip === "circle"){
        let r = Number(input[1]);
        let s = r * r * (Math.PI)
        console.log(s.toFixed(3));
      }else if (areaTip === "triangle"){
        let a = Number(input[1]);
        let ha = Number(input[2]);
        let s = a * ha * (1/2);
        console.log(s.toFixed(3));
      }

    }  
  s(["triangle", "4.5", "20"])





