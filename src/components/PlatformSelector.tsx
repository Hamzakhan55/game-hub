import useGameQueryStore from '../store';
import { Button, Flex } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
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
            <MenuTrigger as={Button} borderRadius={10} paddingRight={4}>
                <Flex align="center" gap={2}>
                    {selectedPlatform?.name || "Platform"}
                    <BsChevronDown />
                </Flex>
            </MenuTrigger>

            <MenuContent>
                {data?.results.map(platform => (
                    <MenuItem
                        key={platform.id}
                        value={platform.name}
                        onClick={() => setSelectedPlatformId(platform.id)}>{platform.name}
                    </MenuItem>
                ))}
            </MenuContent>
        </MenuRoot>
    )
}

export default PlatformSelector;
