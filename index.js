let homeScore = 0
let guestScore = 0

function updateScores() {
    document.getElementById("home-score").textContent = homeScore;
    document.getElementById("guest-score").textContent = guestScore;
}

function addoneH() {
    homeScore += 1;
    updateScores();
}

function addtwoH() {
    homeScore += 2;
    updateScores();
}

function addthreeH() {
    homeScore += 3;
    updateScores();
}


function addoneG() {
    guestScore += 1;
    updateScores();
}

function addtwoG() {
    guestScore += 2;
    updateScores();
}

function addthreeG() {
    guestScore += 3;
    updateScores();
}

function startgame() {
    homeScore = 0;
    guestScore = 0;
    updateScores();
}