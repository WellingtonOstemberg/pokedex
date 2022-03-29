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

//Abilities 

export type PokemonAbilitiesPokemonType = {
    is_hidden?: boolean
    slot?: number
    pokemon?: {
        name?: string
        url?: string
    }
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

export type PokemonAbilitiesEffectChangesSubTypeEffectEntriesSubType = {
    effect?: string
    language?: {
        name?: string
        url?: string
    }
}
export type PokemonAbilitiesEffectChangesSubType = {
    version_group?: {
        name?: string
        url?: string
    }
    effect_entries?: PokemonAbilitiesEffectChangesSubTypeEffectEntriesSubType[]
}
export type PokemonAbilitiesEffectEntriesSubType = {
    effect?: string
    short_effect?: string
    language?: {
        name?: string
        url?: string
    }
}
export type PokemonAbilitiesNameSubType = {
    name?: string
    language?: {
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
    names?: PokemonAbilitiesNameSubType[]
    effect_entries?: PokemonAbilitiesEffectEntriesSubType[]
    effect_changes?: PokemonAbilitiesEffectChangesSubType[]
    flavor_text_entries?: PokemonAbilitiesFlavorTextEntriesType[]
    pokemon?: PokemonAbilitiesPokemonType[]
}
//Characteristics 

export type PokemonCharacteristicsDescriptionsSubType = {
    description?: string
    language?: {
        name?: string
        url?: string
    }
}

export type PokemonCharacteristicsType = {
    id?: number
    gene_modulo?: number
    possible_values: number[]
    highest_stat?: {
        name?: string
        url?: string
    }
    descriptions?: PokemonCharacteristicsDescriptionsSubType[]
}
// Egg Groups 

export type PokemonEggGroupsPokemonSpeciesSubType = {
    name?: string
    url?: string
}
export type PokemonEggGroupsNamesSubType = {
    name?: string
    language?: {
        name?: string
        url?: string
    }
}

export type PokemonEggGroupsType = {
    id?: number
    name?: string
    names?: PokemonEggGroupsNamesSubType[]
    pokemon_species?: PokemonEggGroupsPokemonSpeciesSubType[]
}
//Genders 

export type PokemonGendersPokemonSpeciesDetailsSubTypeRequiredForEvolutionSubType = {
    name?: string
    url?: string
}
export type PokemonGendersPokemonSpeciesDetailsSubType = {
    rate?: number
    pokemon_species?: {
        name?: string
        url?: string
    }
    required_for_evolution?: PokemonGendersPokemonSpeciesDetailsSubTypeRequiredForEvolutionSubType[]
}

export type PokemonGendersType = {
    id?: number
    name?: string
    pokemon_species_details?: PokemonGendersPokemonSpeciesDetailsSubType[]

}

//Growth Rates
export type PokemonGrowthRatePokemonSpeciesSubType = {
    name?: string
    url?: string
}

export type PokemonGrowthRateLevelsSubType = {
    level?: number
    experience?: number
}

export type PokemonGrowthRatesDescriptionsSubType = {
    description?: string
    language?: {
        name?: string
        url?: string
    }
}

export type PokemonGrowthRatesType = {
    id?: number
    name?: string
    formula?: string
    descriptions?: PokemonGrowthRatesDescriptionsSubType[]
    levels?: PokemonGrowthRateLevelsSubType[]
    pokemon_species?: PokemonGrowthRatePokemonSpeciesSubType[]
}

// Natures 
export type PokemonNaturesNamesSubType = {
    name?: string
    language?: {
        name?: string
        url?: string
    }
}

export type PokemonNaturesMoveBattleStylePreferencesSubType = {
    low_hp_preference?: number
    high_hp_preference?: number
    move_battle_style?: {
        name?: string
        url?: string
    }
}

export type PokemonNaturesPokeathlonStatChangesSubType = {
    max_change?: number
    pokeathlon_stat?: {
        name?: string
        url?: string
    }
}

export type PokemonNaturesType = {
    id?: number
    name?: string
    decreased_stat?: {
        name?: string
        url?: string
    }
    increased_stat?: {
        name?: string
        url?: string
    }
    likes_flavor?: {
        name?: string
        url?: string
    }
    hates_flavor?: {
        name?: string
        url?: string
    }
    pokeathlon_stat_changes?: PokemonNaturesPokeathlonStatChangesSubType[]
    move_battle_style_preferences?: PokemonNaturesMoveBattleStylePreferencesSubType[]
    names?: PokemonNaturesNamesSubType[]
}
//Pokeathlon Stats
export type PokemonPokeathlonStatsDecreaseSubType = {
    max_change?: number
    nature?: {
        name?: string
        url?: string
    }
}

export type PokemonPokeathlonStatsIncreaseSubType = {
    max_change?: number
    nature?: {
        name?: string
        url?: string
    }
}

export type PokemonPokeathlonStatsType = {
    id?: number
    name?: string
    affecting_natures?: {
        increase?: PokemonPokeathlonStatsIncreaseSubType[]
        decrease?: PokemonPokeathlonStatsDecreaseSubType[]
    }
}
// Pokemon 

export type PokemonPokemonMovesSubTypeVersionGroupDetailsSubType = {
    level_learned_at?: number
    version_group?: {
        name?: string
        url?: string
    }
    move_learn_method?: {
        name?: string
        url?: string
    }
}
export type PokemonPokemonMovesSubType = {
    move?: {
        name?: string
        url?: string
    }
    version_group_details?: PokemonPokemonMovesSubTypeVersionGroupDetailsSubType[]
}

export type PokemonPokemonheldItemsSubType = {
    item?: {
        name?: string
        url?: string
    }
}

export type PokemonPokemonGameIndicesSubType = {
    game_index?: number
    version?: {
        name?: string
        url?: string
    }
}

export type PokemonPokemonFormsSubType = {
    name?: string
    url?: string
}

export type PokemonPokemonAbilitiesSubType = {
    is_hidden?: boolean
    slot?: number
    ability?: {
        name?: string
        url?: string
    }
    location_area_encounters?: string
}
export type PokemonPokemonType = {
    id?: number
    name?: string
    base_experience?: number
    height?: number
    is_default?: boolean
    order?: number
    weight?: number
    abilities?: PokemonPokemonAbilitiesSubType[]
    forms?: PokemonPokemonFormsSubType[]
    game_indices?: PokemonPokemonGameIndicesSubType[]
    held_items?: PokemonPokemonheldItemsSubType[]
    moves?: PokemonPokemonMovesSubType[]
}

export type PokemonPokemonSpeciesType = {
    name?: string
    url?: string
}

export type PokemonPokemonSpritesType = {
    back_default?: string
    back_female?: null
    back_shiny?: string
    back_shiny_female?: null
    front_default?: string
    front_female?: null
    front_shiny?: string
    front_shiny_female?: null
    other?: {
        dream_world?: {
            front_default?: string
            front_female?: null
        }
        home?: {
            front_default?: string
            front_female?: null
            front_shiny?: string
            front_shiny_female?: null
        }
        official_artwork?: {
            front_default?: string
        }
    }
    versions?: {
        generation_i?: {
            red_blue?: {
                back_default?: string
                back_gray?: string
                front_default?: string
                front_gray?: string
            }
            yellow?: {
                back_default?: string
                back_gray?: string
                front_default?: string
                front_gray?: string
            }

        }
        generation_ii?: {
            crystal?: {
                back_default?: string
                back_shiny?: string
                front_default?: string
                front_shiny?: string
            }
            gold?: {
                back_default?: string
                back_shiny?: string
                front_default?: string
                front_shiny?: string
            }
            silver?: {
                back_default?: string
                back_shiny?: string
                front_default?: string
                front_shiny?: string
            }
        }
        generation_iii?: {
            esmerald?: {
                front_default?: string
                front_shiny?: string
            }
            firered_leafgreen?: {
                back_default?: string
                back_shiny?: string
                front_default?: string
                front_shiny?: string
            }
            ruby_sapphire?: {
                back_default?: string
                back_shiny?: string
                front_default?: string
                front_shiny?: string
            }
        }
        generation_iv?: {
            diamond_pearl?: {
                back_default?: string
                back_female?: null
                back_shiny?: string
                back_shiny_female?: null
                front_default?: string
                front_female?: null
                front_shiny?: string
                front_shiny_female?: null
            }
            heartgold_soulsilver?: {
                back_default?: string
                back_female?: null
                back_shiny?: string
                back_shiny_female?: null
                front_default?: string
                front_female?: null
                front_shiny?: string
                front_shiny_female?: null
            }
            platinum?: {
                back_default?: string
                back_female?: null
                back_shiny?: string
                back_shiny_female?: null
                front_default?: string
                front_female?: null
                front_shiny?: string
                front_shiny_female?: null
            }
        }
        generation_v?: {
            black_white?: {
                animated?: {
                    back_default?: string
                    back_female?: null
                    back_shiny?: string
                    back_shiny_female?: null
                    front_default?: string
                    front_female?: null
                    front_shiny?: string
                    front_shiny_female?: null
                }

            }
        }
        generation_vi?: {
            omegaruby_alphasapphire?: {
                front_default?: string
                front_female?: null
                front_shiny?: string
                front_shiny_female?: null
            }
            x_y?: {
                front_default?: string
                front_female?: null
                front_shiny?: string
                front_shiny_female?: null
            }
        }
        generation_vii?: {
            icons?: {
                front_default?: string
                front_female?: null
            }
            ultra_sun_ultra_moon?: {
                front_default?: string
                front_female?: null
                front_shiny?: string
                front_shiny_female?: null
            }
        }
        generation_viii?: {
            icons?: {
                front_default?: string
                front_female?: null
            }
        }
    }
}
export type PokemonPokemonStatsType = {
    base_stat?: number
    effort?: number
}

export type PokemonPokemonTypesTypeSubType = {
    name?: string
    url?: string
}

export type PokemonPokemonTypesType = {
    slot?: number
    type?: PokemonPokemonTypesTypeSubType[]
}

export type PokemonPokemonPastTypesTypesSubType = {
    slot?: number
    type?: {
        name?: string
        url?: string
    }
}

export type PokemonPokemonPastTypesType = {
    generation?: {
        name?: string
        url?: string
    }
    types?: PokemonPokemonPastTypesTypesSubType[]
}

// Pokemon Location Areas

export type PokemonPokemonLocationAreasVersionDetailsSubTypeEncounterDetailsSubTypeConditionValuesSubType = {
    chance?: number
    method?: {
        name?: string
        url?: string
    }
}

export type PokemonPokemonLocationAreasVersionDetailsSubTypeEncounterDetailsSubType = {
    min_level?: number
    max_level?: number
    condition_values?: PokemonPokemonLocationAreasVersionDetailsSubTypeEncounterDetailsSubTypeConditionValuesSubType[]
}

export type PokemonPokemonLocationAreasVersionDetailsSubType = {
    max_chance?: number
    encounter_details?: PokemonPokemonLocationAreasVersionDetailsSubTypeEncounterDetailsSubType[]
    version?: {
        name?: string
        url?: string
    }
}

export type PokemonPokemonLocationAreasType = {
    location_area?: {
        name?: string
        url?: string
    }
    version_details?: PokemonPokemonLocationAreasVersionDetailsSubType[]
}


//Pokemon Colors

export type PokemonColorsPokemonSpeciesSubType = {
    name?: string
    url?: string
}

export type PokemonColorsNameSubType = {
    name?: string
    language?: {
        name?: string
        url?: string
    }
}

export type PokemonColorsType = {
    id?: number
    name?: string
    names?: PokemonColorsNameSubType[]
    pokemon_species?: PokemonColorsPokemonSpeciesSubType[]
}

// Pokemon Forms

export type PokemonPokemonFormsTypesSubType = {
    slot?: number
    type?: {
        name?: string
        url?: string
    }
}

export type PokemonPokemonFormsType = {
    id?: number
    name?: string
    order?: number
    form_order?: number
    is_default?: boolean
    is_battle_only?: boolean
    is_mega?: boolean
    form_name?: string
    pokemon?: {
        name?: string
        url?: string
    }
    sprites?: {
        back_default?: string
        back_female?: null
        back_shiny?: string
        back_shiny_female?: null
        front_default?: string
        front_female?: null
        front_shiny?: string
        front_shiny_female?: null
    }
    types?: PokemonPokemonFormsTypesSubType[]
    version_group?: {
        name?: string
        url?: string
    }
}

// Pokemon Habits

export type PokemonPokemonPokemonHabitatsPokemonSpeciesSubType = {
    name?: string
    url?: string
}

export type PokemonPokemonPokemonHabitatsNamesSubType = {
    name?: string
    language?: {
        name?: string
        url?: string
    }
}

export type PokemonPokemonPokemonHabitatsType = {
    id?: number
    name?: string
    names?: PokemonPokemonPokemonHabitatsNamesSubType[]
    pokemon_species?: PokemonPokemonPokemonHabitatsPokemonSpeciesSubType[]
}
//Pokemon Shapes

export type PokemonPokemonPokemonShapesPokemonSpeciesSubType = {
    name?: string
    url?: string
}

export type PokemonPokemonPokemonShapesNamesSubType = {
    name?: string
    language?: {
        name?: string
        url?: string
    }
}

export type PokemonPokemonPokemonShapesAwesomeNamesSubType = {
    awesome_name?: string
    language?: {
        name?: string
        url?: string
    }
}

export type PokemonPokemonPokemonShapesType = {
    id?: number
    name?: string
    awesome_names?: PokemonPokemonPokemonShapesAwesomeNamesSubType[]
    names?: PokemonPokemonPokemonShapesNamesSubType[]
    pokemon_species?: PokemonPokemonPokemonShapesPokemonSpeciesSubType[]
}

//Pokemon Species 

export type PokemonPokemonPokemonSpeciesVarietiesSubType = {
    is_default?: boolean
    pokemon?: {
        name?: string
        url?: string
    }
}

export type PokemonPokemonPokemonSpeciesGeneraSubType = {
    genus?: string
    language?: {
        name?: string
        url?: string
    }
}
export type PokemonPokemonPokemonSpeciesFormDescriptionsSubType = {
    description?: string
    language?: {
        name?: string
        url?: string
    }
}

export type PokemonPokemonPokemonSpeciesFlavorTextEntriesSubType = {
    flavor_text?: string
    language?: {
        name?: string
        url?: string
    }
    version?: {
        name?: string
        url?: string
    }
}

export type PokemonPokemonPokemonSpeciesNamesSubType = {
    name?: string
    language?: {
        name?: string
        url?: string
    }
}

export type PokemonPokemonPokemonSpeciesEggGroupsSubType = {
    name?: string
    url?: string
}

export type PokemonPokemonPokemonSpeciesPokedexNumbersSubType = {
    entry_number?: number
    pokedex?: {
        name?: string
        url?: string
    }
}

export type PokemonPokemonPokemonSpeciesType = {
    id?: number
    name?: string
    order?: number
    gender_rate?: number
    capture_rate?: number
    base_happiness?: number
    is_baby?: boolean
    is_legendary?: boolean
    is_mythical?: boolean
    hatch_counter?: number
    has_gender_differences?: boolean
    forms_switchable?: boolean
    growth_rate?: {
        name?: string
        url?: string
    }
    pokedex_numbers?: PokemonPokemonPokemonSpeciesPokedexNumbersSubType[]
    egg_groups?: PokemonPokemonPokemonSpeciesEggGroupsSubType[]
    color?: {
        name?: string
        url?: string
    }
    shape?: {
        name?: string
        url?: string
    }
    envolves_from_species?: {
        name?: string
        url?: string
    }
    evolution_chain?: {
        url?: string
        habitat?: null
    }
    generation?: {
        name?: string
        url?: string
    }
    names?: PokemonPokemonPokemonSpeciesNamesSubType[]
    flavor_text_entries?: PokemonPokemonPokemonSpeciesFlavorTextEntriesSubType[]
    form_descriptions?: PokemonPokemonPokemonSpeciesFormDescriptionsSubType[]
    genera?: PokemonPokemonPokemonSpeciesGeneraSubType[]
    varieties?: PokemonPokemonPokemonSpeciesVarietiesSubType[]
}

//Stats 

export type PokemonStatsNamesSubType = {
    name?: string
    language?: {
        name?: string
        url?: string
    }
}

export type PokemonStatsCharacteristicsSubType = {
    url?: string
}

export type PokemonStatsAffectingNautesIncreaseSubType = {
    name?: string
    url?: string
}
export type PokemonStatsAffectingNautesDecreaseSubType = {
    name?: string
    url?: string
}

export type PokemonStatsAffectingMovesDecreaseSubType = {
    change?: number
    move?: {
        name?: string
        url?: string
    }
}

export type PokemonStatsAffectingMovesIncreaseSubType = {
    change?: number
    move?: {
        name?: string
        url?: string
    }
}

export type PokemonStatsType = {
    id?: number
    name?: string
    game_index?: number
    is_battle_only?: boolean
    affecting_moves?: {
        increase?: PokemonStatsAffectingMovesIncreaseSubType[]
        decrease?: PokemonStatsAffectingMovesDecreaseSubType[]
    }
    affecting_natures?: {
        increase?: PokemonStatsAffectingNautesIncreaseSubType[]
        decrease?: PokemonStatsAffectingNautesDecreaseSubType[]
    }
    characteristics?: PokemonStatsCharacteristicsSubType[]
    move_demage_class?: {
        name?: string
        url?: string
    }
    names?: PokemonStatsNamesSubType[]
}

//Types 

export type PokemonPokemonTypesMovesSubType = {
    name?: string
    url?: string
}

export type PokemonPokemonTypesPokemonSubType = {
    slot?: number
    pokemon?: {
        name?: string
        url?: string
    }
}

export type PokemonPokemonTypesNamesSubType = {
    name?: string
    language?: {
        name?: string
        url?: string
    }
}

export type PokemonPokemonTypesGameIndicesSubType = {
    game_index?: number
    generation?: {
        name?: string
        url?: string
    }
}

export type PokemonPokemonTypesPastDamageRelationsSubType = {
    generation?: {
        name?: string
        url?: string
    }
}

export type PokemonPokemonTypesDamageRelationsDoubleDamageFromSubTypes = {
    name?: string
    url?: string
}

export type PokemonPokemonTypesDamageRelationsHalfDamageFromSubTypes = {
    name?: string
    url?: string
}

export type PokemonPokemonTypesDamageRelationsNoDamageFromSubTypes = {
    name?: string
    url?: string
}

export type PokemonPokemonTypesDamageRelationsDoubleDamageToSubTypes = {
    name?: string
    url?: string
}

export type PokemonPokemonTypesDamageRelationsHalfDamageToSubTypes = {
    name?: string
    url?: string
}

export type PokemonPokemonTypesDamageRelationsNoDamageToSubTypes = {
    name?: string
    url?: string
}

export type PokemonPokemonTypesTypes = {
    id?: number
    name?: string
    damage_relations?: {
        no_damage_to?: PokemonPokemonTypesDamageRelationsNoDamageToSubTypes[]
        half_damage_to?: PokemonPokemonTypesDamageRelationsHalfDamageToSubTypes[]
        double_damage_to?: PokemonPokemonTypesDamageRelationsDoubleDamageToSubTypes[]
        no_damage_from?: PokemonPokemonTypesDamageRelationsNoDamageFromSubTypes[]
        half_damage_from?: PokemonPokemonTypesDamageRelationsHalfDamageFromSubTypes[]
        double_damage_from?: PokemonPokemonTypesDamageRelationsDoubleDamageFromSubTypes[]
    }
    past_damage_relations?: PokemonPokemonTypesPastDamageRelationsSubType[]
    game_indices?: PokemonPokemonTypesGameIndicesSubType[]
    generation?: {
        name?: string
        url?: string
    }
    move_damage_class?: {
        name?: string
        url?: string
    }
    names?: PokemonPokemonTypesNamesSubType[]
    pokemon?: PokemonPokemonTypesPokemonSubType[]
    moves?: PokemonPokemonTypesMovesSubType[]
}
