
function getRandomInt(min, max) {
    return Math.floor(Math.random()*(max - min)) + min;
}

console.log(getRandomInt(1, 151))

const fetchApi = async () => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/35/')
        const data = await res.json()
        console.log(data)
    } catch (error){
        console.log(error)
    }
}

fetchApi()

/*const url ='Access-Control-Allow-Origin: http://pokeapi.co/api/v2/pokemon/1/';
const MyIp ='186.19.22.1';
console.log(url);*/

