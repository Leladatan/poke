import Item from "./components/Item";
import getPokemonSlug from "@/actions/getPokemonSlug";
import getPokemonSlugForm from "@/actions/getPokemonForm";
import getPokemonSlugMove from "@/actions/getPokemonMove";
import {useSearchParams} from "next/navigation";

const PokePage = async ({params}: {params: {
        slug: string
    }}) => {
    const pokemon = await getPokemonSlug(params.slug);
    const pokemonForm = await getPokemonSlugForm(params.slug);

    return (
        <>
            <Item pokemon={pokemon.data} pokemonForm={pokemonForm.data} />
        </>
    );
};

export default PokePage;
