import { Input, Box } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { InputGroup } from "./ui/input-group";
import { useRef } from "react";
import useGameQueryStore from "../store";

const SearchInput = () => {
    const ref = useRef<HTMLInputElement>(null);
    const setSearchText = useGameQueryStore(s => s.setSearchText);

    return (
        <Box width="100%" position="relative">
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    if (ref.current) setSearchText(ref.current.value);
                }}
            >
                <InputGroup 
                    startElement={
                        <BsSearch 
                            size={20} 
                            color="#9ca3af" 
                        />
                    }
                >
                    <Input
                        ref={ref}
                        placeholder="Discover your next favorite game..."
                        variant="outline"
                        size="lg"
                        borderRadius="2xl"
                        bg="rgba(26, 32, 44, 0.8)"
                        backdropFilter="blur(20px)"
                        border="1px"
                        borderColor="rgba(255, 255, 255, 0.1)"
                        color="white"
                        fontSize="md"
                        fontWeight="400"
                        py={6}
                        _placeholder={{ 
                            color: "gray.400",
                            fontWeight: "400"
                        }}
                        _hover={{ 
                            borderColor: "rgba(66, 153, 225, 0.4)",
                            bg: "rgba(26, 32, 44, 0.9)",
                            boxShadow: "0 8px 25px rgba(0,0,0,0.2)"
                        }}
                        _focus={{ 
                            borderColor: "rgba(66, 153, 225, 0.6)", 
                            boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.1), 0 8px 25px rgba(0,0,0,0.2)",
                            bg: "rgba(26, 32, 44, 0.9)"
                        }}
                        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    />
                </InputGroup>
            </form>
        </Box>
    );
};

export default SearchInput;
