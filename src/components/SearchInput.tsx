import { Input } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { InputGroup } from "./ui/input-group";

const SearchInput = () => {
    return (
        <InputGroup flex="1" startElement={<BsSearch />}>
            <Input
                whiteSpace="nowrap"
                borderRadius={20}
                placeholder="Search Games..."
                variant="outline"
            />
        </InputGroup>
    );
};

export default SearchInput;
