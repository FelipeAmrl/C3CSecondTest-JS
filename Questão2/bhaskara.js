const aInput = document.querySelector("#a");
const bInput = document.querySelector("#b");
const cInput = document.querySelector("#c");
const resultButton = document.querySelector("#result-button");
const resetButton = document.querySelector("#reset");
const resultOutput = document.querySelector("#result");

document.addEventListener("keypress", function(event) {
    if(event.key === "Enter") { 
        resultButton.click(); 
    }
})

let delta;
let valuesOfX;

const calculateDelta = (a, b, c) => {
    return delta = (b**2) - (4*a*c);
}

const bhaskara = (a, b) => {
    if(delta < 0){
        return false;
    }
    else{
        let x1 = (-b + Math.sqrt(delta)) / 2*a;
        let x2 = (-b - Math.sqrt(delta)) / 2*a;
        valuesOfX = [x1, x2];
        return true;
    }
}

const result = () => {
    const a = aInput.value;
    const b = bInput.value;
    const c = cInput.value;

    calculateDelta(a, b, c);
    
    
    if(a == "" || b == "" || c == ""){
        reset();
        resultOutput.innerHTML = "<p>Por favor, antes de realizar a conta é preciso que os valores de <strong>a, b e c</strong> sejam inseridos!</p>"
    }
    else if(bhaskara(a, b)){
        resultOutput.innerHTML = `<p>x1 é igual a ${valuesOfX[0]} e x2 é igual a ${valuesOfX[1]}.</p>`;
        resultOutput.style = "color: green";
    }
    else{
        reset()
        resultOutput.innerHTML = "<p>Delta é negativo, logo não possui raízes reais.</p>";
        resultOutput.style = "color: red";
    }
}

const reset = () => {
    aInput.value = "";
    bInput.value = "";
    cInput.value = "";
    resultOutput.innerText = "";
    resultOutput.style = "color: black";
}


resultButton.onclick = result;

resetButton.onclick = reset;

