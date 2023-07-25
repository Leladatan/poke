import {type FC, useEffect} from 'react';
import {IPokemon, IPokemonForm, IPokemonMove} from "@/types/pokemon";
import Image from "next/image";
import {Bomb, ChevronsRight, FileLock, Heart, LucideIcon} from "lucide-react";
import {capitalizeFirstLetter} from "@/functions/capitalize";

interface ItemProps {
    pokemon: IPokemon;
    pokemonForm: IPokemonForm;
}

interface IIconStat {
    name: string;
    icon: LucideIcon;
    color?: string;
}

const IconsStat: IIconStat[] = [
    {
        name: "hp",
        icon: Heart,
        color: "text-red-600",
    },
    {
        name: "attack",
        icon: Bomb,
        color: "text-yellow-600",
    },
    {
        name: "defense",
        icon: FileLock,
        color: "text-blue-600",
    },
    {
        name: "special-attack",
        icon: Bomb,
        color: "text-yellow-600",
    },
    {
        name: "special-defense",
        icon: FileLock,
        color: "text-blue-600",
    },
    {
        name: "speed",
        icon: ChevronsRight,
        color: "text-sky-600",
    },

];

const Item: FC<ItemProps> = ({pokemon, pokemonForm}) => {
    return (
        <div className="flex flex-col gap-y-2.5 px-3">
            <h2>Name: {capitalizeFirstLetter(pokemon.name!)}</h2>
            <h3>Types</h3>
            <ul>
                {pokemon.types.map(type => (
                    <li key={type.type.name}>
                        Name: {type.type.name}
                    </li>
                ))}
            </ul>
            <div className="flex flex-col gap-y-2.5">
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
            </div>
            {pokemon.stats?.map(item => (
                <div key={item.stat.name} className="flex gap-x-2">
                    <p>{item.stat.name}</p>
                    <p>{item.base_stat}</p>
                    {IconsStat.filter(icon => icon.name === item.stat.name)
                        .map(icon => (
                        <icon.icon key={icon.name} className={icon.color} />
                    ))}
                </div>
            ))}
            {pokemonForm && <Image src={pokemonForm.sprites.front_default} width={150} height={150} alt="Pokemon image" />}
            <div>
                <h3>Abilities</h3>
                {pokemon.abilities.map(ability => (
                    <div key={ability.ability.name}>
                        <p>Name: {ability.ability.name}</p>
                        <p>Is hidden: {ability.is_hidden ? "yes" : "no"}</p>
                        <p>Slot: {ability.slot}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Item;
