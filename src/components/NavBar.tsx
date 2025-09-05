import { HStack, Image, Box, Container, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import SearchInput from './SearchInput';

const NavBar = () => {
    return (
        <Box 
            bg="linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)"
            borderBottom="1px" 
            borderColor="rgba(255,255,255,0.1)"
            position="sticky"
            top={0}
            zIndex={1000}
            boxShadow="0 8px 32px rgba(0,0,0,0.3)"
            backdropFilter="blur(10px)"
        >
            <Container maxW="container.xl" py={5}>
                <HStack gap={8} justify="space-between">
                    <HStack gap={4}>
                        <Box position="relative">
                            <Image 
                                src={logo} 
                                boxSize='45px' 
                                borderRadius="lg"
                                border="2px solid"
                                borderColor="blue.400"
                                _hover={{ 
                                    transform: "scale(1.05)",
                                    borderColor: "blue.300",
                                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                                }}
                                transition="all 0.3s ease"
                            />
                        </Box>
                        <Text 
                            fontSize="xl" 
                            fontWeight="bold" 
                            color="white"
                            letterSpacing="tight"
                        >
                            GameHub
                        </Text>
                    </HStack>
                    <Box flex={1} maxW="600px">
                        <SearchInput />
                    </Box>
                </HStack>
            </Container>
        </Box>
    )
}

export default NavBar;