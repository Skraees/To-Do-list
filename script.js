
let but = document.querySelector("button");
let div = document.querySelector("#list");
but.addEventListener("click", () => {
    let input = document.querySelector("#input");
    let ele = document.createElement("li");
    ele.innerHTML = input.value;
    div.insertAdjacentElement("afterbegin", ele);
    input.value = "";
})
let clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    div.innerHTML = "";
})

let 
