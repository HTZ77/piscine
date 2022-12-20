var agent = {"firstname": "James" , "Lastname": "Bond" };

function addCar (agentString, car ){

      return JSON.parse(agentString).car = car
}

console.log(addCar(agent, "bmw"))