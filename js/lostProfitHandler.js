const moneyCounterDOM = document.getElementById('moneyCounter');
const gallonsCounterDOM = document.getElementById("galonsCounter")
const vehcilesCountDOM = document.getElementById('noOfVehicles');
let totalCost = 0;
let totalGallons = 0;
let numberOfVehciles = 0;
let VehicleCostPerMin = (((2500/365)/24)/60);

vehicleInput();
updateMoneyDisplay();

vehcilesCountDOM.addEventListener("input", vehicleInput);

function vehicleInput(){
    let vehicleNumberInput = vehcilesCountDOM.value;
    if (!isNaN(+vehicleNumberInput) && isInt(+vehicleNumberInput)){
        numberOfVehciles = +vehicleNumberInput;
    }
    vehcilesCountDOM.value = numberOfVehciles;
}

function updateTotalCost(){
    let milisecconds = Date.now() - 1672531200000;
    totalCost = ((milisecconds/1000)/60) * (VehicleCostPerMin * numberOfVehciles);
    totalGallons = totalCost/5;
    updateMoneyDisplay();
    window.requestAnimationFrame(updateTotalCost);
}

function updateMoneyDisplay(){
    moneyCounterDOM.value = totalCost.toFixed(2);
    gallonsCounterDOM.value = totalGallons.toFixed(3);
}

function isInt(value) {
    return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
}

window.requestAnimationFrame(updateTotalCost);