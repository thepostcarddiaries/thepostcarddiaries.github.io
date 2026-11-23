// showPicks: shows our konbini picks if they are hidden, and hides them if they are showing
function showPicks() {
    // find the picks box and the button by their id
    var picks = document.getElementById("picks");
    var button = document.getElementById("picksButton");

    // if the picks are hidden, show them and change the button text
    if (picks.style.display === "none") {
        picks.style.display = "block";
        button.innerHTML = "Hide our top konbini picks";
    } else {
        // otherwise hide them again and change the text back
        picks.style.display = "none";
        button.innerHTML = "Show our top konbini picks";
    }
}
