
let notReach = document.getElementById("notReach");
let Nocontainer = document.getElementById("Nocontainer");
let cancelCard = document.getElementById("cancelCard");

notReach.addEventListener("click",(e)=> {
    e.preventDefault();
    Nocontainer.style.display = "flex";
    setTimeout(() => {
        cancelCard.style.transform = "translateY(0)";
    }, 100);
})

Nocontainer.addEventListener("click",()=>{
    cancelCard.style.transform = "translateY(-300%)";
    setTimeout(() => {
        Nocontainer.style.display = "none";
    }, 1001);
})