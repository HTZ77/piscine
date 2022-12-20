function checkFuel(fuel){
    const promiseME= new Promise( (resolve,reject)=>{
        if (fuel>=9){
            resolve("Ready to launch!");
        } else{
            reject("Please refill fuel");
        }
    })
    return promiseME}checkFuel(8).then(value => {    console.log(value)}).catch(error=>{console.log(error)})