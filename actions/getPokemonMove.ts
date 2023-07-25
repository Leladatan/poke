import axios from "axios";

const getPokemonSlugMove = async (slug: string) => {
    const res = axios.get(`https://pokeapi.co/api/v2/move/${slug}`);
    return await res;
};

export default getPokemonSlugMove;
