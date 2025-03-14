import { Input } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { InputGroup } from "./ui/input-group";
import { useRef } from "react";

interface Props {
    onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
    const ref = useRef<HTMLInputElement>(null);

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (ref.current) onSearch(ref.current.value); // Call onSearch on submit
            }}
        >
            <InputGroup startElement={<BsSearch />}>
                <Input
                    ref={ref}
                    whiteSpace="nowrap"
                    borderRadius={20}
                    placeholder="Search Games..."
                    variant="outline"
                    style={{ color: 'white' }}
                    borderColor="gray.600"
                    _hover={{ borderColor: "white" }}
                    _focus={{ borderColor: "white", boxShadow: "0 0 0 1px white" }}
                />
            </InputGroup>
        </form>
    );
};

export default SearchInput;
