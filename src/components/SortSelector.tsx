import useGameQueryStore from "../store";
import { Button, Flex, Text } from "@chakra-ui/react";
import { BsChevronDown, BsSortDown } from "react-icons/bs";
import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger
} from './ui/menu';

const SortSelector = () => {
    const sortOrders = [
        { value: '', label: 'Relevance', icon: '🎯' },
        { value: '-added', label: 'Date Added', icon: '📅' },
        { value: 'name', label: 'Name', icon: '🔤' },
        { value: '-released', label: 'Release Date', icon: '🚀' },
        { value: '-metacritic', label: 'Popularity', icon: '⭐' },
        { value: '-rating', label: 'Average Rating', icon: '👍' },
    ];

    const setSortOrder = useGameQueryStore(s => s.setSortOrder);
    const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder);
    const currentSortOrder = sortOrders.find(order => order.value === sortOrder);

    return (
        <MenuRoot>
            <MenuTrigger asChild>
                <Button
                    variant="outline"
                    bg="rgba(26, 32, 44, 0.8)"
                    backdropFilter="blur(10px)"
                    border="1px solid"
                    borderColor="rgba(255, 255, 255, 0.1)"
                    borderRadius="xl"
                    color="white"
                    px={4}
                    py={3}
                    h="auto"
                    minW={{ base: "160px", md: "180px" }}
                    _hover={{
                        bg: "rgba(26, 32, 44, 0.9)",
                        borderColor: "rgba(59, 130, 246, 0.4)",
                        transform: "translateY(-1px)"
                    }}
                    transition="all 0.2s ease"
                >
                    <Flex align="center" gap={3} width="100%" justify="space-between">
                        <Flex align="center" gap={2}>
                            <BsSortDown size={16} color="#60a5fa" />
                            <Text fontSize="sm" fontWeight="500" noOfLines={1}>
                                {currentSortOrder?.label || 'Relevance'}
                            </Text>
                        </Flex>
                        <BsChevronDown size={12} />
                    </Flex>
                </Button>
            </MenuTrigger>

            <MenuContent
                bg="rgba(15, 15, 35, 0.95)"
                backdropFilter="blur(20px)"
                border="1px solid"
                borderColor="rgba(255, 255, 255, 0.1)"
                borderRadius="xl"
                boxShadow="0 20px 40px rgba(0,0,0,0.4)"
                p={2}
                minW="220px"
                maxH="300px"
                overflowY="auto"
                positioning={{ placement: "bottom-start" }}
            >
                {sortOrders.map(order => (
                    <MenuItem
                        key={order.value}
                        value={order.value}
                        onClick={() => setSortOrder(order.value)}
                        bg="transparent"
                        color="gray.300"
                        borderRadius="lg"
                        px={3}
                        py={2}
                        _hover={{ bg: "rgba(59, 130, 246, 0.1)", color: "white" }}
                        fontWeight={sortOrder === order.value ? "600" : "400"}
                    >
                        <Flex align="center" gap={3}>
                            <Text fontSize="md">{order.icon}</Text>
                            <Text fontSize="sm">{order.label}</Text>
                        </Flex>
                    </MenuItem>
                ))}
            </MenuContent>
        </MenuRoot>
    )
}

export default SortSelector;

