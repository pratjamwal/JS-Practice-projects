const increasebtn = document.getElementById("increase");
const resetbtn = document.getElementById("reset");
const decreasebtn = document.getElementById("decrease");
const labelbtn = document.getElementById("label")
let count  = 0;

increasebtn.onclick = function(){
    count++;
    label.textContent = count;
}

decreasebtn.onclick = function(){
    count--;
    label.textContent = count;
}

resetbtn.onclick = function(){
    count = 0;
    label.textContent = count;
}
