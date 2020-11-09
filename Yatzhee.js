function RollSixSidedDice() {
    document.getElementById("dice").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("dicetwo").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("dicethree").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("dicefour").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("dicefive").value = Math.floor(Math.random()*6) + 1;
}
