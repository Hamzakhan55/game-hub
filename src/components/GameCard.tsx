import { Game } from "@/hooks/useGames"
import { Card, Heading, HStack, Image, Box, VStack } from "@chakra-ui/react"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getCroppedImageUrl from "../services/image-url"
import Emoji from "./Emoji"

interface Props {
    game: Game
}
const GameCard = ({ game }: Props) => {
    return (
        <Card.Root 
            borderRadius="2xl" 
            overflow="hidden"
            bg="rgba(26, 32, 44, 0.8)"
            backdropFilter="blur(20px)"
            border="1px"
            borderColor="rgba(255, 255, 255, 0.1)"
            _hover={{ 
                transform: "translateY(-8px) scale(1.02)", 
                boxShadow: "0 25px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(66, 153, 225, 0.3)",
                borderColor: "rgba(66, 153, 225, 0.4)"
            }}
            transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
            cursor="pointer"
            position="relative"
        >
            <Box 
                position="relative" 
                overflow="hidden"
                _before={{
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bg: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)",
                    zIndex: 1,
                    opacity: 0,
                    transition: "opacity 0.3s ease"
                }}
                _hover={{
                    _before: { opacity: 1 }
                }}
            >
                <Image 
                    src={getCroppedImageUrl(game.background_image)} 
                    w="100%"
                    h="220px"
                    objectFit="cover"
                    _hover={{ transform: "scale(1.1)" }}
                    transition="transform 0.4s ease"
                />
            </Box>
            <Card.Body p={5}>
                <VStack gap={3} align="stretch">
                    <HStack justifyContent='space-between'>
                        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                        <CriticScore score={game.metacritic} />
                    </HStack>
                    <Heading 
                        fontSize='lg' 
                        color="white"
                        fontWeight="600"
                        lineHeight="1.3"
                        letterSpacing="-0.025em"
                    >
                        {game.name} <Emoji rating={game.rating_top} />
                    </Heading>
                </VStack>
            </Card.Body>
        </Card.Root>
    )
}

export default GameCard;