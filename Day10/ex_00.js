function asyncFunc() {
    const MyPromise= new Promise((resolve, reject)=>{
        resolve("Hello World");
        reject("Error")
    })
    console.log (MyPromise)
    return MyPromise

}

asyncFunc()