import { createSlice } from '@reduxjs/toolkit'
import { PokemonEvolutionChainsType, PokemonBerryType} from '../../ts'

export interface EvolutionChainsInitialState {
    all: PokemonEvolutionChainsType
}

export const slice = createSlice({
    name: 'evolutionChains',
    initialState: {
        all: {}
    },
    reducers: {
        setEvolutionChains: (state: EvolutionChainsInitialState, action: { payload: PokemonEvolutionChainsType }) => {
            state.all = action.payload
        },
    }
})

export const { setEvolutionChains } = slice.actions
export default slice.reducer
