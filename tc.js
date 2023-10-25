let dateObj = new Date();
let timeObj = document.getElementById("timeObj");
timeObj.textContent = dateObj.getHours() + ":" + dateObj.getMinutes();
let resultValue = document.getElementById("resultValue");
let inputValue = document.getElementById("inputValue");
let convertBtn = document.getElementById("convertBtn");
let convertType = document.getElementById("convertType");

convertBtn.onclick = function(){

    if (convertType.value === "Fahrenheit"){
        resultValue.value = (parseInt(inputValue.value) * (9/5) + 32).toFixed(4).toString() + " F";
    }
    else if(convertType.value === "Celcius"){
        resultValue.value = (5/9 * (parseInt(inputValue.value) - 32)).toFixed(4).toString() + " C";
    }
}




