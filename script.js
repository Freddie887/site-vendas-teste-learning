function calcular(event){
    event.preventDefault();

    let alcoolInput = document.getElementById("alcool").value;
    let gasolinaInput = document.getElementById("gasolina").value;
    let contentresult = document.getElementById("content-result");
    let calculo = (alcoolInput / gasolinaInput);
    let textresult = document.getElementById("text-result");
    let gasolinaspan = document.getElementById("gasolina-result");
    let alcoolspan = document.getElementById("alcool-result")


    if(calculo < 0.7){
       textresult.innerHTML = "Compensa usar Alcool";
    }else{
        textresult.innerHTML = "Compensa usar Gasolina";
    }
    gasolinaspan.innerHTML = "gasolina R$" + gasolinaInput;
    alcoolspan.innerHTML = "alcool R$" + alcoolInput;


    contentresult.classList.remove("hide")
}

