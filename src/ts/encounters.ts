//Encounter Methods 

export type PokemonEncounterMethodsNamesSubType = {
    name?: string
    language?: {
        name?: string
        url?: string
    }
}

export type PokemonEncounterMethodsType = {
    id?: number
    name?: string
    order?: number
    names?: PokemonEncounterMethodsNamesSubType[]
}
//Encounter Conditions

export type PokemonEncounterConditionsNamesSubType = {
    name?: string
    language?: {
        name?: string
        url?: string
    }
}

export type PokemonEncounterConditionsValuesSubType = {
    name?: string
    url?: string
}

export type PokemonEncounterConditionsType = {
    id?: number
    name?: string
    values?: PokemonEncounterConditionsValuesSubType[]
    names?: PokemonEncounterConditionsNamesSubType[]
}
//Encounter Condition Values

export type PokemonEncounterConditionValuesNamesSubType = {
    name?: string
    language?: {
        name?: string
        url?: string
    }
}

export type PokemonEncounterConditionValuesType = {
    id?: number
    name?: string
    condition?: {
        name?: string
        url?: string
    }
    names?: PokemonEncounterConditionValuesNamesSubType[]
}