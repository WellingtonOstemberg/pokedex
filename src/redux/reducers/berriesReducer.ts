import { createSlice } from '@reduxjs/toolkit'
import { AllBerriesType, PokemonBerryType} from '../../ts'

export interface BerriesInitialState {
    all: AllBerriesType,
    one: PokemonBerryType
}

export const slice = createSlice({
    name: 'berries',
    initialState: {
        all: {
            count: 1,
            results: [],
            next: '',
            previous: ''
        },
        one: {

        }
       
    },
    reducers: {
        setBerries: (state: BerriesInitialState, action: { payload: AllBerriesType }) => {
            state.all = action.payload
        },
        setBerry: (state: BerriesInitialState, action: { payload: PokemonBerryType }) => {
            state.one = action.payload
        },
    }
})

export const {setBerries, setBerry } = slice.actions
export default slice.reducer
