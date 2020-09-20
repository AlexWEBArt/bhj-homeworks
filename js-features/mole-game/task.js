const win = document.getElementById("dead"), 
      lose = document.getElementById("lost"), 
      getHole = index => document.getElementById(`hole${index}`);

for (let index = 1; index <= 9; index++) {
    getHole(index).onclick = function() {
        if (getHole(index).className.includes('hole hole_has-mole') == true) {
            win.textContent -= -1;
        } else {
            lose.textContent -= -1;
        };

        if (win.textContent == 10) {
            alert("Игра окончена. Вы победили!");
            win.textContent = 0;
            lose.textContent = 0;
        };
        if (lose.textContent == 5) {
            alert("Игра окончена. Вы проиграли!");
            win.textContent = 0;
            lose.textContent = 0;
        };
    };
};
