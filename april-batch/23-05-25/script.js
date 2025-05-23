// Skip It
let displayElement=document.getElementById('value');
let plusButton=document.getElementById('plus-btn');
let minusButton=document.getElementById('minus-btn');
console.log("Script Connected!");

let initialValue=0;

const checkUI=()=>{
     displayElement.innerHTML=initialValue;
     if(initialValue<1)
     {
        document.getElementById('minus').style.visibility="hidden";
     }
     else if(initialValue>0)
     {
         document.getElementById('minus').style.visibility="visible";
     }
}
checkUI();
const increaseValue=()=>{
    initialValue++;
  checkUI();
}

const decreaseValue=()=>{
    initialValue--;
  checkUI();
}


plusButton.addEventListener('click',increaseValue);
minusButton.addEventListener('click',decreaseValue);
