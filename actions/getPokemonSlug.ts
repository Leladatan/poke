import axios from "axios";

const getPokemonSlug = async (slug: string) => {
    const res = axios.get(`https://pokeapi.co/api/v2/pokemon/${slug}`);
    return await res;
};

export default getPokemonSlug;
