import { Input } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { InputGroup } from "./ui/input-group";
import { useRef } from "react";


interface Props {
    onSearch: (searchText: string) => void;

}
const SearchInput = ({ onSearch }: Props) => {
    const ref = useRef<HTMLInputElement>(null);
    if (ref.current) onSearch(ref.current.value)
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>
            <InputGroup startElement={<BsSearch />}>
                <Input ref={ref}
                    whiteSpace="nowrap"
                    borderRadius={20}
                    placeholder="Search Games..."
                    variant="outline"
                />
            </InputGroup>
        </form>
    );
};

export default SearchInput;
