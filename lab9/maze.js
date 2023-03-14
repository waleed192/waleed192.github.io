const boundaries = document.getElementsByClassName("boundary")
const maze = document.getElementById("maze")
let wallsHit = 0;
let gameStarted = false;

var mouseOverFunction = function () {
    if (gameStarted) {
        $(".boundary").addClass("youlose")
        wallsHit++;
    }
};

Array.from(boundaries).forEach(e => {
    e.onmouseover = mouseOverFunction;
});

maze.onmouseleave = mouseOverFunction;

function startMaze() {
    $(".boundary").removeClass("youlose")
    $("#status").text("Playing...")
    wallsHit = 0;
    gameStarted = true;
}

function endMaze() {
    $(".boundary").removeClass("youlose")
    gameStarted = false;
    if (wallsHit) {
        $("#status").text("You touched walls " + wallsHit + " times! \nYou lost :[  Try again!!!!")
    } else {
        $("#status").text("You win :]")
    }
}

start = document.getElementById("start")
start.onclick = startMaze

end = document.getElementById("end")
end.onclick = endMaze