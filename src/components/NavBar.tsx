import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import SearchInput from './SearchInput';

const NavBar = () => {
    return (
        <HStack padding='10px'>
            <Image src={logo} boxSize='60px' />
            <SearchInput />
            <Text>NavBar</Text>
        </HStack>
    )
}

export default NavBar;