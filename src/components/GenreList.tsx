import { HStack, List, ListItem, Image, Button, Heading } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenreId: number;
}

const GenreList = ({ selectedGenreId, onSelectGenre }: Props) => {
    const { data } = useGenres();

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
                                onClick={() => onSelectGenre(genre)}
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
