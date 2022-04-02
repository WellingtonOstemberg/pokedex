import { configureStore } from '@reduxjs/toolkit'
import berriesReducer from './reducers/berriesReducer'
import pokemonsReducer from './reducers/pokemonsReducer'

export const store = configureStore({
    reducer: {
        pokemons: pokemonsReducer,
        berries: berriesReducer,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch