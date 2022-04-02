//Evolution Chains
export type PokemonEvolutionChainsEvolvesToEvolutionDetailsSubType = {
    item?: null
    trigger?: {
        name?: string
        url?: string
    }
    gender?: null
    held_item?: null
    known_move?: null
    known_move_type?: null
    location?: null
    min_level?: number
    min_happiness?: null
    min_beauty?: null
    min_affection?: null
    needs_overworld_rain?: false
    party_species?: null
    party_type?: null
    relative_physical_stats?: null
    time_of_day?: string
    trade_species?: null
    turn_upside_down?: boolean
}


export type PokemonEvolutionChainsEvolvesToSubType = {
    is_baby?: boolean
    species?: {
        name?: string
        url?: string
    }
    evolution_details?: PokemonEvolutionChainsEvolvesToEvolutionDetailsSubType[]
}

export type PokemonEvolutionChainsType = {
    id?: number
    baby_trigger_item?: null
    chain?: {
        is_baby?: boolean
        species?: {
            name?: string
            url?: string
            evolution_details?: null
        }
        evolves_to?: PokemonEvolutionChainsEvolvesToSubType[]
    }
}
// Evolution Triggers 

export type PokemonEvolutionTriggersNamesSubType = {
    name?: string
    language?: {
        name?: string
        url?: string
    }
}

export type PokemonEvolutionTriggersType = {
    id?: number
    name?: string
    names?: PokemonEvolutionTriggersNamesSubType[]
    pokemon_species?: {
        name?: string
        url?: string
    }
}