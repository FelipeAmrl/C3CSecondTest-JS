const grade = document.querySelector("#grade");
const result = document.querySelector("#result");
const resultButton = document.querySelector("#result-button");
const resetButton = document.querySelector("#reset");

document.addEventListener("keypress", function(event) {
    if(event.key === "Enter") { 
        resultButton.click(); 
    }
})

let multipleOfFive;

const nextMultipleOfFive = (grade) => {
while(grade % 5 != 0){
    grade++;
}
return multipleOfFive = grade;
}

const resultRounding = (grade) => {

    if(grade>=38){
        if((multipleOfFive - grade) < 3){
            result.style.cssText = "border-color: green; color: green; font-weight: bold";
            result.value = `Aprovado! Nota: ${multipleOfFive}`;
        }
        else{
            result.style.cssText = "border-color: green; color: green; font-weight: bold";
            result.value = `Aprovado! Nota: ${grade}`;
        }
    }
    else{
        result.style.cssText = "border-color: red; color: red; font-weight: bold";
        result.value = `Reprovado! Nota: ${grade}`;
    }
}

const reset = () => {
    grade.value = "";
    result.value = "";
    result.style = "";
}

resultButton.onclick = () => {

    if(grade.value < 0 || grade.value > 100 || grade.value == ""){
        grade.style = "border-color: red";
        alert("Por favor, digite uma nota entre 0 e 100!");
        reset();
    }
    else{
        grade.style = "";
        nextMultipleOfFive(grade.value);
        resultRounding(grade.value);
    }
    
}

resetButton.onclick = () => {
    grade.style = "";
    reset();
}

