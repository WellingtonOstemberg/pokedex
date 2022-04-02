import { createSlice } from '@reduxjs/toolkit'
import { PokemonsType } from '../../ts/pokemons'

export interface PokemonsInitialState {
    all: PokemonsType
    one: any
}

export const slice = createSlice({
    name: 'pokemons',
    initialState: {
        all: {
            count: 1,
            results: [],
            next: '',
            previous: ''
        },
        one: {
            adult: false,
            backdrop_path:  null,
            belongs_to_collection: null,
            budget: undefined,
            genres: [],
            homepage: null,
            id: undefined,
            imdb_id: null,
            original_language: '',
            original_title: '',
            overview: null,
            popularity: undefined,
            poster_path: null,
            production_companies: [],
            production_countries: [],
            release_date: '',
            revenue: undefined,
            runtime: undefined,
            spoken_languages: [],
            status: undefined,
            tagline: null,
            title: 'Sem filme 2',
            video: false,
            vote_average: undefined,
            vote_count: undefined,
        }
    },
    reducers: {
        setPokemons: (state: PokemonsInitialState, action: { payload: PokemonsType }) => {
            state.all = action.payload
        },
        setPokemon: (state: PokemonsInitialState, action: { payload: any }) => {
            state.one = action.payload
        }
    }
})

export const { setPokemon, setPokemons } = slice.actions
export default slice.reducer
