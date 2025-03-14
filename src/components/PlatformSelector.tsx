import usePlatforms from '../hooks/usePlatforms'
import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger
} from '../components/ui/menu'
import { BsChevronDown } from 'react-icons/bs'
import { Platform } from '@/hooks/useGames'
import { Button, Flex } from '@chakra-ui/react';

interface Props {
    onSelectedPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
    const { data, error } = usePlatforms();
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
                {data.map(platform => (
                    <MenuItem
                        key={platform.id}
                        value={platform.name}
                        onClick={() => onSelectedPlatform(platform)}>{platform.name}
                    </MenuItem>
                ))}
            </MenuContent>
        </MenuRoot>
    )
}

export default PlatformSelector;
