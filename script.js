const hexCode=document.querySelector("#hex-code");
const button=document.querySelector(".btn");
const background=document.querySelector(".content");
const colors=["#b8c85e","#008141","#ccffff", "#0033ff","#fff0f5"];

background.style.backgroundColor= "#b8c85e";

button.addEventListener("click",changeBackground);

function changeBackground(){
    const hexIndex=parseInt(Math.random()*colors.length);
    background.style.backgroundColor=colors[hexIndex];
    hexCode.innerHTML=colors[hexIndex];
}


