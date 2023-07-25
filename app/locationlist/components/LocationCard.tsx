import {type FC} from 'react';
import {capitalizeFirstLetter} from "@/functions/capitalize";
import {IGetLocation} from "@/types/location";

interface LocationCardProps {
    location: IGetLocation;
}

const LocationCard: FC<LocationCardProps> = ({location}) => {
    return (
        <h3>{capitalizeFirstLetter(location.name!)}</h3>
    );
};

export default LocationCard;
