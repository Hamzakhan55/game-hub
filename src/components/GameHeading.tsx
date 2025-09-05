import useGameQueryStore from "../store"
import { Heading, Box } from "@chakra-ui/react"
import useGenre from "../hooks/useGenre"
import usePlatform from "../hooks/usePlatform"

const GameHeading = () => {
    const genreId = useGameQueryStore(s => s.gameQuery.genreId);
    const genre = useGenre(genreId);
    
    const platformId = useGameQueryStore(s => s.gameQuery.platformId);
    const platform = usePlatform(platformId);
    
    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
    
    return (
        <Box mb={6}>
            <Heading 
                as='h1' 
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                color='white'
                fontWeight='bold'
                letterSpacing='tight'
                lineHeight='1.2'
            >
                {heading}
            </Heading>
        </Box>
    )
}

export default GameHeading