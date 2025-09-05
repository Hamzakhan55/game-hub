import useGameQueryStore from '../store';
import { Button, Flex, Text, Box } from '@chakra-ui/react';
import { BsChevronDown, BsController } from 'react-icons/bs';
import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger
} from '../components/ui/menu';
import usePlatform from '../hooks/usePlatform';
import usePlatforms from '../hooks/usePlatforms';

const PlatformSelector = () => {
    const { data, error } = usePlatforms();
    const setSelectedPlatformId = useGameQueryStore(s => s.setPlatformId);
    const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId);
    const selectedPlatform = usePlatform(selectedPlatformId);
    if (error) return null;

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
                    minW={{ base: "140px", md: "160px" }}
                    _hover={{
                        bg: "rgba(26, 32, 44, 0.9)",
                        borderColor: "rgba(59, 130, 246, 0.4)",
                        transform: "translateY(-1px)"
                    }}
                    transition="all 0.2s ease"
                >
                    <Flex align="center" gap={3} width="100%" justify="space-between">
                        <Flex align="center" gap={2}>
                            <BsController size={16} color="#60a5fa" />
                            <Text fontSize="sm" fontWeight="500" noOfLines={1}>
                                {selectedPlatform?.name || "All Platforms"}
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
                minW="200px"
                positioning={{ placement: "bottom-start" }}
            >
                <MenuItem
                    value="all"
                    onClick={() => setSelectedPlatformId(undefined)}
                    bg="transparent"
                    color="gray.300"
                    borderRadius="lg"
                    px={3}
                    py={2}
                    _hover={{ bg: "rgba(59, 130, 246, 0.1)", color: "white" }}
                    fontWeight={!selectedPlatformId ? "600" : "400"}
                >
                    All Platforms
                </MenuItem>
                {data?.results.map(platform => (
                    <MenuItem
                        key={platform.id}
                        value={platform.name}
                        onClick={() => setSelectedPlatformId(platform.id)}
                        bg="transparent"
                        color="gray.300"
                        borderRadius="lg"
                        px={3}
                        py={2}
                        _hover={{ bg: "rgba(59, 130, 246, 0.1)", color: "white" }}
                        fontWeight={selectedPlatformId === platform.id ? "600" : "400"}
                    >
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuContent>
        </MenuRoot>
    )
}

export default PlatformSelector;
