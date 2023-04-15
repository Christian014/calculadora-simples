let number1, number2;
let calculadora;



function calcular (number1, calculadora, number2) {
    switch (calculadora) {
        case '+':
            result = number1 + number2;
            
            break;
    
        case '-':
            result = number1 - number2;
            break;

        case '/':
            result = number1 / number2;
            break;
    
        case '*':
            result = number1 * number2;
            break;
            
        default:
            console.log('Invalid')
            break;
    };
    console.log(result);
}