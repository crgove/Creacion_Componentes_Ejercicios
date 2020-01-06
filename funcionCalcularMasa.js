export default function calcularMasa(peso, altura){
    let calculo = peso/Math.pow(altura, 2);

    let resultado = ""

    if(calculo < 18.5) {
       resultado = "Peso insuficiente";
    } else if(calculo >= 18.5 && calculo < 24.9){
        resultado = "Peso normal"
    } else if(calculo >= 25 && calculo <= 26.9){
        resultado = "Sobrepeso grado I"
    } else if(calculo >= 27 && calculo <= 29.9){
        resultado ="Sobrepeso grado II"
    } else if(calculo >= 30 && calculo <= 34.9){
        resultado = "Obesidad tipo I"
    } else if(calculo >= 35 && calculo <= 39.9){
        resultado = "Obesidad tipo II"
    } else if(calculo >= 40 && calculo <= 49.9){
        resultado = "Obesidad mórbida"
    } else if(calculo >= 50){
        resultado = "Obesidad extrema"
    }

    return resultado;

    //IMC = Peso (kg) / altura (m)
}

//console.log(calcularMasa(57, 1.62));

/*<18,5 Peso insuficiente
18,5-24,9 Normopeso
25-26,9 Sobrepeso grado I
27-29,9 Sobrepeso grado II
(preobesidad)
30-34,9 Obesidad de tipo I
35-39,9 Obesidad de tipo IIals
missatges
40-49,9 Obesidad de tipo III (mórbida)
>50 Obesidad de tipo IV (extrema)*/