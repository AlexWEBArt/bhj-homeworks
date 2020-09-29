
const counter = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");
image.onclick = function() {
    if (image.width == 200) {
        image.width = 250;
    }   else {
        image.width = 200;
    }
    counter.textContent = Number(counter.textContent) + 1;
};
    