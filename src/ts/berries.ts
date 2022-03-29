//Berries 

export type PokemonBerriesFlavorsSubType = {
    potency?: number
    flavor?: {
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
    natural_gift_type?: {
        name?: string
        url?: string
    }
}
//Berry Firmnesses

export type PokemonBerryFirmnessesNamesSubType = {
    name?: string
    language?: {
        name?: string
        url?: string
    }
}

export type PokemonBerryFirmnessesBerriesSubType = {
    name?: string
    url?: string
}

export type PokemonBerryFirmnessesType = {
    id?: number
    name?: string
    berries?: PokemonBerryFirmnessesBerriesSubType[]
    names?: PokemonBerryFirmnessesNamesSubType[]
}
//Berry Flavors

export type PokemonBerryFlavorsNamesSubType = {
    name?: string
    language?: {
        name?: string
        url?: string
    }
}
export type PokemonBerryFlavorsBerriesSubType = {
    potency?: number
    berry?: {
        name?: string
        url?: string
    }
}

export type PokemonBerryFlavorsType = {
    id?: number
    name?: string
    berries?: PokemonBerryFlavorsBerriesSubType[]
    contest_type?: {
        name?: string
        url?: string
    }
    names?: PokemonBerryFlavorsNamesSubType[]
}



