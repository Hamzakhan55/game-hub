import useGameQueryStore from "../store";
import { Button, Heading, HStack, Image, List, ListItem, Box, VStack, Text, Badge } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
    const { data } = useGenres();
    const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
    const setSelectedGenreId = useGameQueryStore(s => s.setGenreId);

    return (
        <VStack spacing={6} align="stretch">
            <Box textAlign="center" pb={4} borderBottom="1px" borderColor="whiteAlpha.200">
                <Heading 
                    fontSize="xl" 
                    color="white"
                    fontWeight="700"
                    letterSpacing="-0.025em"
                    mb={2}
                >
                    Game Genres
                </Heading>
                <Text fontSize="sm" color="gray.400" fontWeight="400">
                    Discover games by category
                </Text>
            </Box>
            
            <Box maxH="70vh" overflowY="auto" pr={2}>
                <List.Root spacing={2}>
                    {data?.results.map((genre) => (
                        <ListItem key={genre.id}>
                            <Button
                                variant="ghost"
                                justifyContent="flex-start"
                                width="100%"
                                height="auto"
                                p={3}
                                borderRadius="lg"
                                bg={genre.id === selectedGenreId 
                                    ? "linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15))"
                                    : "transparent"
                                }
                                color={genre.id === selectedGenreId ? "white" : "gray.300"}
                                fontWeight={genre.id === selectedGenreId ? "600" : "500"}
                                onClick={() => setSelectedGenreId(genre.id)}
                                border="1px solid"
                                borderColor={genre.id === selectedGenreId ? "rgba(59, 130, 246, 0.3)" : "transparent"}
                                position="relative"
                                _hover={{ 
                                    bg: genre.id === selectedGenreId 
                                        ? "linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(147, 51, 234, 0.25))"
                                        : "rgba(255, 255, 255, 0.06)",
                                    color: "white",
                                    transform: "translateX(4px)",
                                    borderColor: "rgba(59, 130, 246, 0.4)",
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.25)"
                                }}
                                _active={{
                                    transform: "translateY(0px)"
                                }}
                                transition="all 0.2s ease"
                            >
                                {genre.id === selectedGenreId && (
                                    <Box
                                        position="absolute"
                                        left={0}
                                        top={0}
                                        bottom={0}
                                        width="3px"
                                        bg="linear-gradient(180deg, #3b82f6, #9333ea)"
                                        borderRadius="0 2px 2px 0"
                                    />
                                )}
                                <HStack gap={3} width="100%" align="center">
                                    <Box
                                        position="relative"
                                        borderRadius="lg"
                                        overflow="hidden"
                                        boxShadow={genre.id === selectedGenreId 
                                            ? "0 0 15px rgba(59, 130, 246, 0.3)" 
                                            : "0 2px 8px rgba(0,0,0,0.3)"
                                        }
                                        border="1px solid"
                                        borderColor={genre.id === selectedGenreId 
                                            ? "rgba(59, 130, 246, 0.4)" 
                                            : "whiteAlpha.200"
                                        }
                                        transition="all 0.2s ease"
                                    >
                                        <Image
                                            boxSize="32px"
                                            borderRadius="lg"
                                            objectFit="cover"
                                            src={getCroppedImageUrl(genre.image_background)}
                                        />
                                    </Box>
                                    <Text 
                                        fontSize="md" 
                                        textAlign="left"
                                        flex={1}
                                        fontWeight={genre.id === selectedGenreId ? "600" : "500"}
                                        letterSpacing="0.025em"
                                        transition="all 0.2s ease"
                                    >
                                        {genre.name}
                                    </Text>
                                </HStack>
                            </Button>
                        </ListItem>
                    ))}
                </List.Root>
            </Box>
        </VStack>
    );
};

export default GenreList;
