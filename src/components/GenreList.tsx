import { HStack, List, ListItem, Image, Text, Spinner, Button, Heading } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { useState } from "react";



interface Props {
    onSelectedGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {

    const { data, error } = useGenres();



    return (
        <>
            <Heading fontSize='2xl' marginBottom={3} style={{ color: 'white' }}>Genres</Heading>
            <List.Root>
                {data.map(genre => <ListItem key={genre.id} paddingY='5px' listStyle='none' >
                    <HStack>
                        <Image boxSize='32px' borderRadius={8} objectFit='cover' src={getCroppedImageUrl(genre.image_background)} />
                        <Button
                            style={{ color: 'white' }}
                            width="80%"
                            minHeight="40px"
                            whiteSpace="normal"
                            textAlign="center"
                            fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                            onClick={() => onSelectedGenre(genre)}
                            fontSize="lg"
                            variant="outline"
                            padding="12px"
                            margin="0"
                            borderRadius="8px"
                            _hover={{ color: 'white', bg: 'gray.700' }}
                            _focus={{ color: 'white', bg: 'gray.700' }}
                        >
                            {genre.name}
                        </Button>
                    </HStack>
                </ListItem>)
                }
            </List.Root >
        </>
    )
}

export default GenreList;