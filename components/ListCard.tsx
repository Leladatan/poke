"use client";

import {type FC, useEffect, useState} from 'react';
import Link from "next/link";
import getPokemonSlugForm from "@/actions/getPokemonForm";
import {IGetPokemon, IPokemonForm} from "@/types/pokemon";
import Image from "next/image";
import {capitalizeFirstLetter} from "@/functions/capitalize";
import {cn} from "@/lib/utils";

interface ListCardProps {
    poke: IGetPokemon;
}

interface Type {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

export const colorTypes = [
    {
        name: "poison",
        color: "bg-green-500/10"
    },
    {
        name: "fire",
        color: "bg-red-500/10"
    },
    {
        name: "water",
        color: "bg-blue-500/10"
    },
    {
        name: "normal",
        color: "bg-slate-500/10"
    },
    {
        name: "electric",
        color: "bg-violet-500/10"
    },
    {
        name: "fairy",
        color: "bg-purple-500/10"
    },
    {
        name: "bug",
        color: "bg-orange-500/10"
    },
    {
        name: "grass",
        color: "bg-lime-500/10"
    },
    {
        name: "ground",
        color: "bg-amber-800/10"
    },
    {
        name: "fighting",
        color: "bg-neutral-500/10"
    },
    {
        name: "dark",
        color: "bg-neutral-900/10"
    },
    {
        name: "psychic",
        color: "bg-zinc-500/10"
    },
    {
        name: "ghost",
        color: "bg-zinc-400/10"
    },
    {
        name: "ice",
        color: "bg-gray-500/10"
    },
    {
        name: "rock",
        color: "bg-slate-700/10"
    },
    {
        name: "steel",
        color: "bg-slate-900/10"
    },
    {
        name: "dragon",
        color: "bg-yellow-500/10"
    },
    {
        name: "flying",
        color: "bg-sky-500/10"
    },
];

const ListCard: FC<ListCardProps> = ({poke}) => {
    const [types, setType] = useState<Type[]>([]);
    const [image, setImage] = useState("");
    const colorType = colorTypes.filter(
        color => color.name === types[0]?.type.name
    );

    useEffect((): void => {
        const Image = async () => {
            const image = await getPokemonSlugForm(poke.name);
            setType(image.data.types);
            setImage(image.data.sprites.front_default);
        };

        Image();
    }, []);

    return (
        <Link href={`pokelist/${poke.name}`}
              className={cn("flex flex-col items-center justify-center gap-y-2 border-2 rounded-md p-2",
                  colorType[0]?.color
              )}>
            <Image src={image ? image : "/logo.png"} alt="Pokemon image" width={90} height={90} loading={"lazy"}/>
            <h3>{capitalizeFirstLetter(poke.name!)}</h3>
        </Link>
    );
};

export default ListCard;
