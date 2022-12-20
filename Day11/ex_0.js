async function myFetch(url){
    const response = await fetch(url)
    return await response.json()
}

myFetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12528%22).then((value) =>{
console.log(value)
}).catch((err)=>{
    console.log(err)
})



