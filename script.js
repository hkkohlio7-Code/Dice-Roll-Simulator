const rollBtn = document.getElementById("rollBtn");
const history = document.querySelector(".history");
const dice = document.querySelector(".dice");
const defaultImg = document.getElementById("default-img");

const img = document.createElement("img");
dice.appendChild(img);

let count = 0;
function roll (){
    count++;
    let num = Math.floor(Math.random() * 6 + 1);
    defaultImg.style.display = "none";
    img.id = "dice-face"
    img.src = `${num}.png`;
    img.classList.add("roll-animation");
   setTimeout(() => {
    img.src = `${num}.png`;

    const div = document.createElement("div");
    div.classList.add("rollNo");

    div.innerHTML = `
        <span>Roll No ${count}</span>
        <span><img src="${num}.png" id="sImg"></span>
    `;
    history.appendChild(div);
    img.classList.remove("roll-animation");
}, 1000);
}

rollBtn.addEventListener("click", ()=>{
    roll();
})