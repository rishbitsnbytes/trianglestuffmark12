const formTriangle = document.querySelector('#formTriangle');
const inputAngles = document.querySelectorAll('.inputAngle');
const outputDiv= document.querySelector('#isTriangle');

let anglesJS=[];


document.addEventListener('submit',formTriangleHandler);

function formTriangleHandler(e){
    e.preventDefault();

    for(i=0; i<inputAngles.length; i++){
        anglesJS[i] = Number(inputAngles[i].value);
    }
    
    let sum=0;
    anglesJS.map((angle)=>{
        sum=sum+angle;
    })

    if(sum ===180){
        outputDiv.innerText = "Yuhu! these angles can make a triangle";
    }
    else{
        outputDiv.innerText = "Oops! these angles cannot make a triangle";
    }
}