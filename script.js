

let outputScreen = document.getElementById("outputscreen");

function valueFunction(value){
    if(outputScreen.value == "Error"){
        outputScreen.value = "";
        outputScreen.value += value;
    }
    else{
    outputScreen.value += value ;
    }
}

function clearAllValue(){
    outputScreen.value = "";
}

function deleteLast(){
    outputScreen.value = outputScreen.value.slice(0, -1);
}

function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch{
        outputScreen.value = "Error";
    }
}

/* Save Data */

const data = outputScreen.localStorage.setItem("screenData", this.value);

window.onload = function(){
    let saved = localStorage.getItem("screenData");
    if(saved){
        outputScreen.innerHTML= saved;
    }
}