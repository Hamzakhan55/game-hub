import { Button, MenuContent, MenuRoot, MenuTrigger } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

const SortSelector = () => {
    return (
        <MenuRoot>
            <MenuTrigger asChild>
                <Button>Order By: Relevance <BsChevronDown /></Button>

            </MenuTrigger>
            <MenuContent>
                <MenuContent>Relevance</MenuContent>
                <MenuContent>Date Added</MenuContent>
                <MenuContent>Name</MenuContent>
                <MenuContent>Release Date</MenuContent>
                <MenuContent>Popularity</MenuContent>
                <MenuContent>Average Rating</MenuContent>
            </MenuContent>
        </MenuRoot>
    )
}

export default SortSelector