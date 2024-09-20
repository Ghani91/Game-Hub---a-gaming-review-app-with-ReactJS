import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sorter
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>by Date</MenuItem>
        <MenuItem>by Platform</MenuItem>
        <MenuItem>by Release year</MenuItem>
        <MenuItem>by Views</MenuItem>
        <MenuItem>by Ratings</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
