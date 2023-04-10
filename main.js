let showWinner = document.getElementById("show-winner");
let showHeroesBtn = document.getElementById("show-heroes-button");
let showHeroesContainer = document.getElementById("heroes-container");
let startFightButton = document.getElementById("start-fight-btn");

showWinner.innerHTML = epicFight.findWinner();
showHeroesBtn.addEventListener("click", showHeroesFunct);
startFightButton.addEventListener("click", startFightFunc);

function showHeroesFunct() {
    showHeroesContainer.classList.add("d-flex");
    showHeroesBtn.classList.add("d-none");
    startFightButton.classList.add("d-block");
}

function startFightFunc() {
    startFightButton.classList.remove("d-block");
    showWinner.classList.add("d-block");
}






