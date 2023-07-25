import axios from "axios";

const getPokemonSlugForm = async (slug: string) => {
    const res = axios.get(`https://pokeapi.co/api/v2/pokemon-form/${slug}`);
    return await res;
};

export default getPokemonSlugForm;
