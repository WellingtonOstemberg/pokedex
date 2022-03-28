import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { setPokemons } from "../../redux/reducers/pokemonsReducer"
import { getAllPokemons } from "../../services/pokemons"
import { AllPokemonsResultType, AllPokemonsType } from "../../ts/pokemons"
import {Navigate} from 'react-router-dom'

export const Pokemons = () => {
    const pokemons = useAppSelector(state => state.pokemons)
    const dispatch = useAppDispatch()

    useEffect(() => {
      const fillPokemons = async () => {
        const changePokemons = (pokemons: AllPokemonsType) =>
        dispatch(setPokemons(pokemons));
          const response = await getAllPokemons()
          changePokemons(response)
      }
      fillPokemons()
    }, [dispatch])

    useEffect(() => {
      console.log(pokemons, 'estado global');
    }, [pokemons])

    const  handlePrevious = () => {
        if (pokemons.all.previous) {
            const fillPokemons = async () => {
                const changePokemons = (pokemons: AllPokemonsType) =>
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
                const changePokemons = (pokemons: AllPokemonsType) =>
                dispatch(setPokemons(pokemons));
                  const response = await getAllPokemons(pokemons.all.next)
                  changePokemons(response)
              }
              fillPokemons()
        }
    }
    
    
    return (
        <>
            <h1>Pokemons</h1>
            <ul className="list-group">
                {pokemons.all.results.map((pokemon: AllPokemonsResultType) => {
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