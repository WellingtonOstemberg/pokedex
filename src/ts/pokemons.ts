export type AllPokemonsResultType = {
    name: string
    url: string
}
export type AllPokemonsType = {
    count: number
    next: string | null
    previous: string | null
    results: AllPokemonsResultType[]
}
export type PokemonFormsType = {
    name: string
    url: string
}
export type PokemonGameIndicesType = {
    game_index: number
    version: {
        name: string
        url: string
    }
}
export type PokemonHeldItemsVersionDetailsType = {
    rarity: number
    version: {
        name: string
        url: string
    }
}
export type PokemonHeldItemsType = {
    item: {
        name: string
        url: string
    }
    version_details: PokemonHeldItemsVersionDetailsType[]
}

export type PokemonMovesVersionGroupDetailsType = {
    level_learned_at: number,
    move_learn_method: {
        name: string
        url: string
    }
    version_group: {
        name: string
        url: string
    }
}
export type PokemonMovesType = {
    move: {
        name: string
        url: string
    }
    version_group_details: PokemonMovesVersionGroupDetailsType[]
}
export type PokemonStatsType = {
    base_stat: number
    effort: number
    stat: {
        name: string
        url: string
    }
}
export type PokemonTypesType = {
    slot: number
    type: {
        name: string
        url: string
    }
}

export type PokemonType = {
    abilities: PokemonAbilitiesType[]
    base_experience: number
    forms: PokemonFormsType[]
    game_indices: PokemonGameIndicesType[]
    height: number
    held_items: PokemonHeldItemsType[]
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: PokemonMovesType[]
    name: string
    order: number
    past_types: any[]
    species: {
        name: string
        url: string
    }
    sprites: {
        back_default: string | null
        back_female: string | null
        back_shiny: string | null
        back_shiny_female: string | null
        front_default: string | null
        front_female: string | null
        front_shiny: string | null
        front_shiny_female: string | null
    }
    stats: PokemonStatsType[]
    types: PokemonTypesType[]
    weight: number
}

export type PokemonAbilitiesSubType = {
    ability: {
        name: string
        url: string
    }
    is_hidden: boolean
    slot: number
}

export type PokemonAbilitiesNamesType = {
    name?: string
    language?: {
        name?: string
        url?: string
    }
}
export type PokemonAbilitiesEffectEntriesType = {
    effect?: string
    short_effect?: string
    language?: {
        name?: string
        url?: string
    }
}

export type PokemonAbilitiesEffectChangesEffectEntriesType = {
    effect?: string
    language?: {
        name?: string
        url?: string
    }
}

export type PokemonAbilitiesEffectChangesType = {
    version_group?: {
        name?: string
        url?: string
    }
    effect_entries?: PokemonAbilitiesEffectChangesEffectEntriesType[]
}
export type PokemonAbilitiesFlavorTextEntriesType = {
    flavor_text?: string
    language?: {
        name?: string
        url?: string
    }
    version_group?: {
        name?: string
        url?: string
    }
}

export type PokemonAbilitiesPokemonType = {
    is_hidden?: boolean
    slot?: number
    pokemon?: {
        name?: string
        url?: string
    }
}

export type PokemonAbilitiesType = {
    id?: number
    name?: string
    is_main_series?: boolean
    generation?: {
        name?: string
        url?: string
    }
    names?: PokemonAbilitiesNamesType[]
    effect_entries?: PokemonAbilitiesEffectEntriesType[]
    flavor_text_entries?: PokemonAbilitiesFlavorTextEntriesType[]
    pokemon?: PokemonAbilitiesPokemonType[]
}

export type PokemonCharacteristicsDescriptionsType = {
    description?: string
    language?: {
        name?: string
        url?: string
    }
}

export type PokemonCharacteristicsType = {
    id?: number
    gene_modulo?: number
    possible_values?: number[]
    highest_stat?: {
        name?: string
        url?: string
    }
    descriptions?: PokemonCharacteristicsDescriptionsType[]
}

export type PokemonEggGroupsNamesType = {
    name?: string
    language?: {
        name?: string
        url?: string
    }
}

export type PokemonEggGroupsType = {
    id?: number
    name?: string
    names?: PokemonEggGroupsNamesType[]
    pokemon_species?: {
        name?: string
        url?: string
    }[]
}

export type PokemonGendersPokemonSpeciesDetailsType = {
    rate?: number
    pokemon_species?: {
        name?: string
        url?: string
    }
}

export type PokemonGendersRequiredForEvolutionType = {
    name?: string
    url?: string
}

export type PokemonGendersType = {
    id?:number
    name?: string
    pokemon_species_details?: PokemonGendersPokemonSpeciesDetailsType[]
    required_for_evolution?: PokemonGendersRequiredForEvolutionType[]
}