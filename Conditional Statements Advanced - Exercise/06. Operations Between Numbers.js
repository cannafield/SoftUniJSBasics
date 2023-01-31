function opetion(input){
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator =  input[2];

    switch (operator) {
        case '+':
            result =  n1 + n2;
            if(result % 2 === 0){
                evenOrOdd = 'even'
            }else{
                evenOrOdd = 'odd'
            }
            console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`)
            break;
        case '-':
            result = n1 - n2;
            if(result % 2 === 0){
                evenOrOdd = 'even'
            }else{
                evenOrOdd = 'odd'
            }
            console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`)
            break;
        case '*':
            result =  n1 * n2;
            if(result % 2 === 0){
                evenOrOdd = 'even'
            }else{
                evenOrOdd = 'odd'
            }
            console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`)
            break;    
        case '/':
            if(n2 === 0){
                console.log(`Cannot divide ${n1} by zero`)
                return;
            }
            result = n1 / n2;
            console.log(`${n1} ${operator} ${n2} = ${result.toFixed(2)}`)
            break;
        case '%':
            if(n2 === 0){
                console.log(`Cannot divide ${n1} by zero`)
                return;
            }
            result = n1 % n2;
            console.log(`${n1} ${operator} ${n2} = ${result}`)
            break;
                 
       
    }
    
}
opetion(["112", "0", "/"])