document.addEventListener("DOMContentLoaded", function() {

    const JB = {age: 57, code: "agent 007", firstName: "James", lastName: "Bond"};


    displayAgentInfo(JB)


});

function displayAgentInfo(objet) {
    const texte = "My name is " + objet.lastName + ", " + objet.firstName + " " + objet.lastName + "! I'm the " + objet.code + " and I'm " + objet.age + " years old."
    document.querySelector("p").innerHTML = texte
}



}