function promiseMe(string) {

    const myPromise= new Promise((resolve, reject)=>{
        resolve("I promise you to"+string);
        reject("Error")
    })
    return myPromise
}

promiseMe (" fly to the moon").then((value) => {
    console . log ( value ) ;
}) ;