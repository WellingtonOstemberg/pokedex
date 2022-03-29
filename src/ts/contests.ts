//Contests 
export type PokemonContestsTypesNamesSubType = {
    name?: string
    color?: string
    language?: {
        name?: string
        url?: string
    }
}

export type PokemonContestsTypesType = {
    id?: number
    name?: string
    berry_flavor?: {
        name?: string
        url?: string
    }
    names?:PokemonContestsTypesNamesSubType[]
}
//Contest Effects 


export type PokemonContestEffectsFlavorTextEntriesSubType = {
    flavor_text?: string
    language?: {
        name?: string
        url?: string
    }
}

export type PokemonContestEffectsEffectEntriesSubType = {
    effect?: string
    language?: {
        name?: string
        url?: string
    }
}

export type PokemonContestEffectsType = {
    id?: number
    appeal?: number
    jam?: number
    effect_entries?: PokemonContestEffectsEffectEntriesSubType[]    
    flavor_text_entries?:PokemonContestEffectsFlavorTextEntriesSubType[]
}
//Super Contest Effects 


export type PokemonSuperContestEffectsFlavorTextEntriesSubType = {
    flavor_text?: string
    language?: {
        name?: string
        url?: string
    }
}

export type PokemonSuperContestEffectsType = {
    id?: number
    appeal?: number
    flavor_text_entries?: PokemonSuperContestEffectsFlavorTextEntriesSubType[]
    moves?: {
        name?: string
        url?: string
    }
}