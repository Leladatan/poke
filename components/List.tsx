"use client";

import {FC, useEffect, useState} from "react";
import axios from "axios";
import {IGetPokemon} from "@/types/pokemon";
import ListCard from "@/components/ListCard";

const List: FC = () => {
    const [data, setData] = useState<IGetPokemon[]>([]);
    const [offset, setOffset] = useState<number>(0);

    useEffect((): void => {
        const getPokemons = async (offset: number): Promise<void> => {
            const res = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=60`
            );
            setData([...data, ...res.data.results]);
        };

        getPokemons(offset);
    }, [offset]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);

        return (): void => {
            document.removeEventListener('scroll', scrollHandler);
        }
    }, []);

    const scrollHandler = (e: any): void => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setOffset(prev => prev + 60);
        }
    };

    return (
        <div className="flex flex-col gap-y-6 px-6 ">
            <div className="grid grid-cols-5 gap-4">
                {data.map(poke => (
                    <ListCard key={poke.name} poke={poke} />
                ))}
            </div>
        </div>
    );
};

export default List;
