document.addEventListener("DOMContentLoaded", function() {
    const cube = document.getElementById("square");

    function reduceOpacity(){

        const opacite= window.getComputedStyle(square).getPropertyValue("opacity");
        const newopacite= parseFloat(opacite) * 0.5 ;
        square.style.opacity=newopacite.toString();
    }


    function resetOpacity(){
        square.style.opacity="1"
    }

    square.addEventListener("mouseover", reduceOpacity);
    square.addEventListener("mouseout", resetOpacity);
})

