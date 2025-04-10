import useGameQueryStore from "../store";
import { Button, Flex, MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";



const SortSelector = () => {
    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date Added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release Date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average Rating' },
    ];

    const setSortOrder = useGameQueryStore(s => s.setSortOrder);
    const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder);
    const currentSortOrder = sortOrders.find(order => order.value === sortOrder);

    return (
        <MenuRoot>
            <MenuTrigger as={Button} borderRadius={10} paddingRight={4}>
                <Flex align="center" gap={2}>
                    Order By: {currentSortOrder?.label || 'Relevance'}
                    <BsChevronDown />
                </Flex>
            </MenuTrigger>

            <MenuContent
                zIndex="popover"
                position="absolute"
                left="30%"
                right="55%"
                mt="50px"
                bg="white"
                borderColor="gray.700"
                borderRadius="10px"
                maxHeight="300px"
                overflowY="auto"
                boxShadow="lg"
            >
                {sortOrders.map(order => (
                    <MenuItem
                        key={order.value} value={order.value}
                        onClick={() =>
                            setSortOrder(order.value)}
                        color="black"
                        _hover={{ bg: "gray.200" }}
                        px="12px"
                        py="8px"
                        borderRadius="6px"
                    >
                        {order.label}</MenuItem>))}
            </MenuContent>
        </MenuRoot>
    )
}

export default SortSelector;

