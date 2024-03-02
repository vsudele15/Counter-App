const mainNumber= document.querySelector('#number')
let curVal=0;

const btndec= document.querySelector('#dec')
const btnre= document.querySelector('#re')
const btninc= document.querySelector('#inc')

btninc.addEventListener("click", ()=>{
    curVal++;
    mainNumber.textContent=curVal;
});

btndec.addEventListener("click", ()=>{
    curVal--;
    mainNumber.textContent=curVal;
});

btnre.addEventListener("click", ()=>{
    curVal=0;
    mainNumber.textContent=curVal;
});