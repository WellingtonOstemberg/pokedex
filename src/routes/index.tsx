import { Routes, Route } from "react-router-dom"
import * as Pages from '../pages'
import { Pokemons } from "../pages/pokemons"

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Pages.Home />} />

            <Route path="/pokemons" element={<Pokemons />} />

            <Route path="*" element={<Pages.NotFound />} />
        </Routes>
    )
}
