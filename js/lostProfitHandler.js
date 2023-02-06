const moneyCounterDOM = document.getElementById('moneyCounter');
const vehcilesCountDOM = document.getElementById('noOfVehicles');
let totalCost = 4.5454325432;
let numberOfVehciles = 0;
let VehicleCostPerMin = (((2500/365)/24)/60);

vehicleInput();
updateMoneyDisplay();

vehcilesCountDOM.addEventListener("input", vehicleInput);

function vehicleInput(){
    let vehicleNumberInput = vehcilesCountDOM.value;
    if (!isNaN(+vehicleNumberInput) && Number.isInteger(+vehicleNumberInput)){
        numberOfVehciles = +vehicleNumberInput;
    }
    vehcilesCountDOM.value = numberOfVehciles;
}

function updateTotalCost(){
    let milisecconds = Date.now() - 1672531200000;
    totalCost = ((milisecconds/1000)/60) * (VehicleCostPerMin * numberOfVehciles);
    updateMoneyDisplay();
    window.requestAnimationFrame(updateTotalCost);
}

function updateMoneyDisplay(){
    moneyCounterDOM.value = totalCost.toFixed(2);
}

window.requestAnimationFrame(updateTotalCost);