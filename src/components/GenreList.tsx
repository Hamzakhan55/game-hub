import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";


const GenreList = () => {

    const { data } = useGenres();
    return (
        <List.Root>
            {data.map(genre => <ListItem key={genre.id} paddingY='5px' listStyle='none'>
                <HStack>
                    <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                    <Text fontSize='lg'>{genre.name}</Text>
                </HStack>
            </ListItem>)
            }
        </List.Root >
    )
}

export default GenreList;