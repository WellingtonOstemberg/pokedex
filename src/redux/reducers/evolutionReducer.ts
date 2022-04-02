import { createSlice } from '@reduxjs/toolkit'
import { PokemonEvolutionChainsType } from '../../ts/evolution'

export interface EvolutionsState {
    all: PokemonEvolutionChainsType
    one: any
}

export const slice = createSlice({
    name: 'evolutions',
    initialState: {
        all: {
            count: 468,
            results: [],
            next: '',
            previous: ''
        },
    },
    reducers: {
        setEvolution: (state: EvolutionsState, action: { payload: EvolutionsState }) => {
            state.all = action.payload
        },
    }
})

export const { setPokemon, setPokemons } = slice.actions
export default slice.reducer