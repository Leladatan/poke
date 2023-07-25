export interface IPokemon {
    abilities: [
        {
            ability: {
                name: string;
                url: string;
            };
            is_hidden: boolean;
            slot: number
        }
    ];
    base_experience: number;
    forms: forms[];
    game_indices: [];
    height: number;
    held_items: [];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: [];
    name: string;
    order: number;
    past_types: [];
    species: species;
    sprites: {};
    stats: stats[];
    types: types[];
    weight: number;
}

export interface IPokemonMove {
    id: number;
    name: string;
    accuracy: number;
    priority: number;
    power: number;
    contest_combos: {
        normal: {
            use_before: [
                {
                    name: string;
                    url: string;
                }
            ] | null;
            use_after: [
                {
                    name: string;
                    url: string;
                }
            ] | null;
        };
        super: {
            use_before: [
                {
                    name: string;
                    url: string;
                }
            ] | null;
            use_after: [
                {
                    name: string;
                    url: string;
                }
            ] | null;
        };
    };
    damage_class: {
        name: string;
        url: string;
    }
}

export interface IPokemonForm {
    form_name: string;
    form_names: [];
    form_order: number;
    id: number;
    is_battle_only: boolean;
    is_default: boolean;
    is_mega: boolean;
    name: string;
    names: [];
    order: number;
    pokemon: {
        name: string;
        url: string;
    };
    stats: [];
    sprites: {
        back_default: string;
        back_shiny: string;
        front_default: string;
    };
    types: [
        {
            slot: number;
            type: {
                name: string;
                url: string;
            }
        }
    ]
}

export interface IGetPokemon {
    name: string;
    url: string;
}

interface abilities {
    ability: {
        name: string;
        url: string;
    };
    is_hidden: boolean;
    slot: number;
}

interface forms {
    name: string;
    url: string;
}

interface species {
    name: string;
    url: string;
}

interface stats {
    base_stat: number;
    effort: number;
    stat: stat;
}

interface stat {
    name: string;
    url: string
}

interface types {
    slot: number;
    type: type;
}

interface type {
    name: string;
    url: string;
}
