var circle = document.getElementById("circle")
var rotate90 = document.getElementById("rotate-add-90")
var rotate45 = document.getElementById("rotate-add-45")
var rotatereset = document.getElementById("rotate-reset")
var rotatesub45 = document.getElementById("rotate-sub-45")
var rotatesub90 = document.getElementById("rotate-sub-90")

function rotatecircle(step) {
    circle.style.transform = "rotate("+ step + "deg)";
}
rotate90.addEventListener("click", function (){
    (rotatecircle(90))
});
rotate45.addEventListener("click", function (){
    (rotatecircle(45))
});
rotatereset.addEventListener("click", function (){
    (rotatecircle(0))
});
rotatesub45.addEventListener("click", function (){
    (rotatecircle(-45))
});
rotatesub90.addEventListener("click", function (){
    (rotatecircle(-90))
});