import {type FC} from 'react';
import {Input} from "@/components/ui/input";

interface SearchProps {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchPoke: FC<SearchProps> = ({search, setSearch}) => {
    return (
        <>
            <Input type="text"
                   className=""
                   value={search}
                   onChange={e => {
                       setSearch(e.target.value);
                   }}
                   placeholder="Find poke for name..."
            />
        </>
    );
};

export default SearchPoke;
