
let wins = 0;
let losses = 0;

function flipCoin() {
    const coin = document.getElementById("coin");
    const result = document.getElementById("result");

    const randomNumber = Math.random();

    coin.classList.remove("flipping");

    // Randomly choose Head or Tail
    const outcome = randomNumber < 0.5 ? "Head" : "Tail";

    // Restart the animation
    void coin.offsetWidth;
    coin.classList.add("flipping");

    coin.textContent = outcome;

    if (outcome === "Head") {
        result.textContent = "🎉 You Win!";
        wins++;
    } else {
        result.textContent = "😔 You Lose!";
        losses++;
    }

    updateScore();
}

function updateScore() {
    document.getElementById("score").textContent =
        "Wins: " + wins + " | Losses: " + losses;
}

function resetGame() {
    wins = 0;
    losses = 0;

    document.getElementById("coin").textContent = "?";
    document.getElementById("result").textContent =
        "Ready to play?";

    document.getElementById("coin").classList.remove("flipping");

    updateScore();
}
