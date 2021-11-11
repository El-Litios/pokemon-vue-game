//retornar un arreglo de un maximo
const getPokemons = () => {
    const PokemonArr = Array.from( Array(650) )
    return PokemonArr.map((_,index) => index+1)
}

//saber los nombres de los pokemon
const getNames = ( [pokemon1, pokemon2, pokemon3, pokemon4] = [] ) => {
    console.log(pokemon1);
    console.log(pokemon2);
    console.log(pokemon3);
    console.log(pokemon4);
}

//Mezclamos el arreglo
const getOptions = () => {
    const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5 )
    getNames(mixedPokemons.splice(0,4))
}

export default getOptions