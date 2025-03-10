import usePlatforms from '../hooks/usePlatforms'
import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger
} from '../components/ui/menu'
import { BsChevronDown } from 'react-icons/bs'
import { Platform } from '@/hooks/useGames'
import { Button } from '@chakra-ui/react';

interface Props {
    onSelectedPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
    const { data, error } = usePlatforms();

    if (error) return null;
    return (
        <MenuRoot>
            <MenuTrigger>
                <Button> {selectedPlatform?.name || "Platform"} <BsChevronDown /></Button>
            </MenuTrigger>
            <MenuContent>
                {data.map(platform => <MenuItem onClick={() => onSelectedPlatform(platform)} key={platform.id} value={platform.name}>{platform.name}</MenuItem>)}
            </MenuContent>
        </MenuRoot>
    )
}

export default PlatformSelector;