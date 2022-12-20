async function check_route(url){
    const response = await fetch(url)
    return await response.json()
}

check_route("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12528%22).then((value) =>{
console.log(value+" all is good")
}).catch((err)=>{
    console.log(err+" shit happens ")
})