const side1 = document.querySelector("#side1");
const side2 = document.querySelector("#side2");
const side3 = document.querySelector("#side3");
const triangleType = document.querySelector("#triangle-type");
const resultButton = document.querySelector("#result-button");
const resetButton = document.querySelector("#reset");
const triangleImage = document.querySelector("#triangle");

const triangleImages = [
    "https://stringfixer.com/files/23295535.jpg",
    "https://dictionary.cambridge.org/fr/images/thumb/isosce_noun_002_19585.jpg?version=5.0.250",
    "https://etc.usf.edu/clipart/38500/38596/triwent3_38596_lg.gif"
]

document.addEventListener("keypress", function(event) {
    if(event.key === "Enter") { 
        resultButton.click(); 
    }
})

const equilateral = (side1, side2, side3) => {
    if(side1 == "" || side2 == "" || side3 == ""){
        return false;
    }
    else if(side1 == side2 && side2 == side3){
        return true;
    }
    else{
        return false;
    }
}

const isosceles = (side1, side2, side3) => {
    if(side1 == "" || side2 == "" || side3 == ""){
        return false;
    }
    else if(side1 == side2 || side2 == side3 || side1 == side3){
        return true;
    }
    else{
        return false;
    }
}

const scalene = (side1, side2, side3) => {
    if(side1 == "" || side2 == "" || side3 == ""){
        return false;
    }
    else if(side1 != side2 && side2 != side3 && side1 != side3){
        return true;
    }
    else{
        return false;
    }
}

const result = () => {
    if(equilateral(side1.value, side2.value, side3.value)){
        triangleType.value = "Triângulo Equilátero";
        triangleImage.innerHTML = `<img src=${triangleImages[0]} alt="Imagem de um triângulo equilátero">`;
    }
    else if(isosceles(side1.value, side2.value, side3.value)){
        triangleType.value = "Triângulo Isóceles";
        triangleImage.innerHTML = `<img src=${triangleImages[1]} alt="Imagem de um triângulo isóceles">`;
        
    }
    else if(scalene(side1.value, side2.value, side3.value)){
        triangleType.value = "Triângulo Escaleno";
        triangleImage.innerHTML = `<img src=${triangleImages[2]} alt="Imagem de um triângulo escaleno">`;
    }
    else{
        reset();
        triangleImage.innerHTML = "<p>Por favor não deixar nenhum dos valores dos lados do triângulo em branco!</p>";
        triangleImage.style = "color: red";
    }
}

const reset = () => {
    side1.value = "";
    side2.value = "";
    side3.value = "";
    triangleType.value = "";
    triangleImage.innerHTML = "";
    triangleImage.innerText = "";
}


resultButton.onclick = result;
    
resetButton.onclick = reset;


