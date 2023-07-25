"use client";

import {FC, useEffect, useState} from "react";
import axios from "axios";
import {IGetLocation} from "@/types/location";
import LocationCard from "@/app/locationlist/components/LocationCard";

const LocationsList: FC = () => {
    const [data, setData] = useState<IGetLocation[]>([]);
    const [offset, setOffset] = useState<number>(0);

    useEffect((): void => {
        const getLocations = async (offset: number): Promise<void> => {
            const res = await axios.get(
                `https://pokeapi.co/api/v2/location?offset=${offset}&limit=70`
            );
            setData([...data, ...res.data.results]);
        };

        getLocations(offset);
    }, [offset]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);

        return (): void => {
            document.removeEventListener('scroll', scrollHandler);
        }
    }, []);

    const scrollHandler = (e: any): void => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setOffset(prev => prev + 70);
        }
    };

    return (
        <div className="grid grid-cols-5 gap-10 px-4">
            {data.map(location => (
                <LocationCard key={location.name} location={location}/>
            ))}
        </div>
    );
};

export default LocationsList;
