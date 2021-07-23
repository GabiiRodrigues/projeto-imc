let pesoInput = document.getElementById("peso");
let alturaInput = document.getElementById("altura");
let button = document.getElementsByTagName("button");
let imcInput = document.getElementById("imc");
let infoImc = document.getElementsByTagName("p");
let peso = "";
let altura = "";
let imc = "";


pesoInput.addEventListener("change",()=>{
    peso = parseFloat(pesoInput.value);
})

alturaInput.addEventListener("change",()=>{
    altura = parseFloat(alturaInput.value);
})

button[0].addEventListener("click",()=>{
    imc = peso / (altura * altura)
    imcInput.value = imc.toFixed(1);

    if(imc < 18){
        infoImc[0].innerHTML = "Abaixo do peso";
    }
     else if(imc >= 18 && imc <= 24){
         infoImc[0].innerHTML = "Peso ideal, Parabens!!!";
    
        }
        else if(imc >= 25 && imc <= 29){
            infoImc[0].innerHTML = "Acima do peso";
    
        }
        else if(imc >= 30 && imc <= 34){
            infoImc[0].innerHTML = "Obesidade Grau 1";
    
        }
        else if(imc >= 35 && imc <= 40){
            infoImc[0].innerHTML = "Obesidade Grau 2";
    
        }
        else if(imc >= 40){
            infoImc[0].innerHTML = "Obesidade Grau 3";
    
        }
    
})








    
    
