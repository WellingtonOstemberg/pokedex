import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { setPokemons } from "../../redux/reducers/pokemonsReducer"
import { getAllBerries, getAllEvolutionChainsType, getAllPokemons } from "../../services/pokemons"
import { PokemonsResultsSubType, PokemonsType, AllBerriesType, PokemonEvolutionChainsType} from "../../ts"
import {Navigate} from 'react-router-dom'
import { setBerries } from "../../redux/reducers/berriesReducer"
import { setEvolutionChains } from "../../redux/reducers/evolutionReducer"

export const Pokemons = () => {
    const pokemons = useAppSelector(state => state.pokemons)
    const berries = useAppSelector(state => state.berries)
    const evolution = useAppSelector(state => state.evolution)
    const dispatch = useAppDispatch()

    //Evolution
    useEffect(() => {
        const fillEvolution = async () => {
          const changeEvolution = (evolution: PokemonEvolutionChainsType) =>
          dispatch(setEvolutionChains(evolution));
            const response = await getAllEvolutionChainsType()
            changeEvolution(response)
        }
        fillEvolution()
      }, [dispatch])

      //Berries
    useEffect(() => {
        const fillBerries = async () => {
          const changeBerries = (berries: AllBerriesType) =>
          dispatch(setBerries(berries));
            const response = await getAllBerries()
            changeBerries(response)
        }
        fillBerries()
      }, [dispatch])

      //Pokemon
    useEffect(() => {
      const fillPokemons = async () => {
        const changePokemons = (pokemons: PokemonsType) =>
        dispatch(setPokemons(pokemons));
          const response = await getAllPokemons()
          changePokemons(response)
      }
      fillPokemons()
    }, [dispatch])

    useEffect(() => {
      console.log(evolution, 'estado global do evolution');
    }, [evolution])

    const  handlePrevious = () => {
        if (pokemons.all.previous) {
            const fillPokemons = async () => {
                const changePokemons = (pokemons: PokemonsType) =>
                dispatch(setPokemons(pokemons));
                  const response = await getAllPokemons(pokemons.all.previous)
                  changePokemons(response)
              }
              fillPokemons()
        }
    }
    const  handleNext = () => {
        if (pokemons.all.next) {
            const fillPokemons = async () => {
                const changePokemons = (pokemons: PokemonsType) =>
                dispatch(setPokemons(pokemons));
                  const response = await getAllPokemons(pokemons.all.next)
                  changePokemons(response)
              }
              fillPokemons()
        }
    }
    useEffect(()=>{
        console.log(berries)
    },[berries])
    
    return (
        <>
            <h1>Pokemons</h1>
            <ul className="list-group">
                {pokemons.all.results.map((pokemon: PokemonsResultsSubType) => {
                    return <li key={pokemon.url} className="list-group-item">{pokemon.name}</li>
                })}
            </ul>
            <ul className="pagination">

                <li className="page-item">
                    <button onClick={handlePrevious} className="page-link">Previous</button>
                </li> 

                <li className="page-item">
                    <button onClick={handleNext} className="page-link">Next</button>
                </li>
            </ul>
        </>
    )
}