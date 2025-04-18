import useGameQueryStore from "../store";
import { Button, Heading, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";



const GenreList = () => {
    const { data } = useGenres();
    const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
    const setSelectedGenreId = useGameQueryStore(s => s.setGenreId);

    return (
        <>
            <Heading fontSize="2xl" marginBottom={3} color="white">
                Genres
            </Heading>
            <List.Root gap={2}>
                {data?.results.map((genre) => (
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack>
                            <Image
                                boxSize="32px"
                                borderRadius={8}
                                objectFit="cover"
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                color="white"
                                width="80%"
                                minHeight="40px"
                                whiteSpace="normal"
                                textAlign="center"
                                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                                onClick={() => setSelectedGenreId(genre.id)}
                                fontSize="lg"
                                variant="outline"
                                padding="12px"
                                margin="0"
                                borderRadius="8px"
                                _hover={{ color: "white", bg: "gray.700" }}
                                _focus={{ color: "white", bg: "gray.700" }}
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List.Root>
        </>
    );
};

export default GenreList;
