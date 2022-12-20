function checkStatus(machine) {
    
        machine.then((value)=>{

                         console.log(value);
                         console.log("Checking status over");

          }).catch((error)=>{

                                 console.log("Error");
                                 console.log("Cheking status over");

    })}function promiseMe (string){



              const myPromise= new Promise( (resolve,reject)=>{

                                          resolve ("I promise you to "+string);
                                          reject ("Error");


    })


    return myPromise;}checkStatus(promiseMe("Fly to the moon"))