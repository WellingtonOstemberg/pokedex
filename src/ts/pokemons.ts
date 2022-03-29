// Todos os Pokemons
export type PokemonsResultsSubType = {
    name?: string
    url?: string
}
export type PokemonsType = {
    count?: number
    next?: string | null
    previous?: string | null
    results?: PokemonsResultsSubType[]
}

// Berries
export type PokemonBerriesFlavorsSubType = {
    potency: number
    flavor: {
        name?: string
        url?: string
    }
}
export type PokemonBerriesType = {
    id?: number
    name?: string
    growth_time?: number
    max_harvest?: number
    natural_gift_power?: number
    size?: number
    smoothness?: number
    soil_dryness?: number
    firmness?: {
        name?: string
        url?: string
    }
    flavors?: PokemonBerriesFlavorsSubType[]
    item?: {
        name?: string
        url?: string
    }
    natural_gift_type: {
        name?: string
        url?: string
    }
}

// Berry Firmnesses