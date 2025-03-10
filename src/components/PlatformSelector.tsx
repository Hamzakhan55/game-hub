import usePlatforms from '../hooks/usePlatforms'
import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger
} from '../components/ui/menu'
import { BsChevronDown } from 'react-icons/bs'

const PlatformSelector = () => {
    const { data, error } = usePlatforms();

    if (error) return null;
    return (
        <MenuRoot>
            <MenuTrigger>
                Platforms <BsChevronDown />
            </MenuTrigger>
            <MenuContent>
                {data.map(platform => <MenuItem key={platform.id} value={platform.name}>{platform.name}</MenuItem>)}
            </MenuContent>
        </MenuRoot>
    )
}

export default PlatformSelector;