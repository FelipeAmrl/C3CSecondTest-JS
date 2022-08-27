const number = document.querySelector("#number");
const resultButton = document.querySelector("#result-button");
const resetButton = document.querySelector("#reset");
const resultDisplay = document.querySelector("#result");

document.addEventListener("keypress", function(event) {
    if(event.key === "Enter") { 
        resultButton.click(); 
    }
})

let resultList = [];

const counter = (limitingNumber) => {
   
    if(limitingNumber >=0){

        for (let index = 1; index <= limitingNumber; index++) {

            if(index % 5 == 0 && index % 9 == 0){
                resultList.push("LuidyMoura "); 
            }
            else if(index % 5 == 0){
                resultList.push("Luidy ");
            }
            else if(index % 9 == 0){
                resultList.push("Moura ");
            }
            else{
                resultList.push(`${index} `);
            }
        }

        return resultList;
    }
    else{
        for (let index = limitingNumber; index <= -1; index++) {

            if(index % 5 == 0 && index % 9 == 0){
                resultList.push("LuidyMoura "); 
            }
            else if(index % 5 == 0){
                resultList.push("Luidy ");
            }
            else if(index % 9 == 0){
                resultList.push("Moura ");
            }
            else{
                resultList.push(`${index} `);
            }
        }

        return resultList;
    }
}

const reset = () => {
    resultDisplay.value = "";
    number.value = "";
    resultList = [];
}

resultButton.onclick = () => {

    resultDisplay.value = "";

    let displayedNumber = Number.parseFloat(number.value);

    if(Number.isInteger(displayedNumber)){
        counter(number.value);
        resultDisplay.value = `${resultList}`;
        resultList = [];
    }
    else{
        alert("Por favor, inserir somente números inteiros!");
        reset();
    }
}

resetButton.onclick = reset;
 



