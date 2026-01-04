
function calculateBMI(){

    let height = document.getElementById('height');
    let weight = document.getElementById('weight');
    let bmiContainer = document.getElementById('bmi');
    bmiContainer.style.display="block";
    let bmiStatus = document.getElementById('bmiStatus'); 
    let bmiValue = document.getElementById('bmiValue');
    

    let bmi = (weight.value / ((height.value/100)*(height.value/100))).toFixed(1);

    bmiValue.innerText = bmi;
     

    if(bmi < 18.5)
    {
        bmiStatus.innerText = "Under Weight";
        bmiStatus.style.backgroundColor = "brown"; 
        bmiStatus.style.color = "black";
    }
    else if( bmi >= 18.5 && bmi < 24.9)
    {
        bmiStatus.innerText = "Normal weight";
        bmiStatus.style.backgroundColor = "green";
        bmiStatus.style.color = "white";

    }
    else if( bmi >= 25 && bmi < 29.9){
        bmiStatus.innerText = "Overweight";
        bmiStatus.style.backgroundColor = "yellow";
        bmiStatus.style.color = "black";
    }
    else if( bmi >= 30 && bmi < 35)
    {
        bmiStatus.innerText = "Obesity";
        bmiStatus.style.backgroundColor = "orange";
    }
    else{
        bmiStatus.innerText = "Severe obesity";
        bmiStatus.style.backgroundColor = "red";
    }

}
