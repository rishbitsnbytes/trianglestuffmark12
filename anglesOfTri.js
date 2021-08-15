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
        outputDiv.innerText = "yep! these angles can form a traingle.";
    }
    else{
        outputDiv.innerText = "nope! these angles cannot form a traingle.";
    }
}