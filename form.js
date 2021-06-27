
const getoptions = () => {
    
    var values = ["Fast Food", "Fashion", "E - Commerce", "Tech","School","automobile","start up","manufacturing","home loans","showroom","other"];
    
    var select = document.getElementById("industry");
    
    for (const val of values)
    {
        var option = document.createElement("option");
        option.value = val;
        option.text = val[0].toUpperCase() + val.slice(1);
        select.appendChild(option);
    }
}

window.onload = getoptions;

let submit = document.querySelector("#submit");
let submitContainer = document.getElementById("submitContainer");
let submitcard = document.getElementById("submitcard");

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    submitContainer.style.display = "flex";
    setTimeout(() => {
        submitcard.style.transform = "translateY(0%)";
    }, 100);
});

submitContainer.addEventListener("click",()=>{
    submitcard.style.transform = "translateY(-300%)";
    setTimeout(() => {
        submitContainer.style.display = "none";
    }, 1001);
})

