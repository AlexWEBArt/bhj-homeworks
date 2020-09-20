
const change = function() {
    const clock = document.getElementById("timer")
    if (clock.textContent != 0) {
        clock.textContent -= 1
    } else {
        alert('Вы победили в конкурсе!');
    }
} 
setInterval(change, 1000)