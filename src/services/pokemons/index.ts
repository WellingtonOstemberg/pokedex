import { AllPokemonsType } from "../../ts/pokemons"
import { allPokemonsUrl } from "../api"

export const getAllPokemons = async (url = allPokemonsUrl) => {
    const request = await fetch(url)
    const response: AllPokemonsType = await request.json()
    return response
}