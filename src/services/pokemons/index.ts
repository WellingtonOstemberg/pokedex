import { request } from "http"
import { AllBerriesType } from "../../ts/berries"
import { PokemonsType } from "../../ts/pokemons"
import { allPokemonsUrl } from "../api"
import { PokemonEvolutionChainsType } from "../../ts"

export const getAllPokemons = async (url = allPokemonsUrl) => {
    const request = await fetch(url)
    const response: PokemonsType = await request.json()
    return response
}
export const getAllBerries = async () => {
    const request = await fetch('https://pokeapi.co/api/v2/berry/')
    const response: AllBerriesType = await request.json()
    return response
}
export const getAllEvolutionChainsType = async () => {
    const request = await fetch('https://pokeapi.co/api/v2/evolution-chain/')
    const response: PokemonEvolutionChainsType = await request.json()
    return response
}
