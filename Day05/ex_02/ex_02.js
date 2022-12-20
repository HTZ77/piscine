document.addEventListener("DOMContentLoaded", function() {
    var paragraphe = document.querySelectorAll("p")
    for (let i = 0; i < paragraphe.length; i++){
        paragraphe[i].innerHTML =i;

    }
});
