import { HStack, List, ListItem, Image, Text, Spinner, Button } from "@chakra-ui/react";
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
        <List.Root>
            {data.map(genre => <ListItem key={genre.id} paddingY='5px' listStyle='none'>
                <HStack>
                    <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                    <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectedGenre(genre)} fontSize='lg' variant='ghost'>{genre.name}</Button>
                </HStack>
            </ListItem>)
            }
        </List.Root >
    )
}

export default GenreList;