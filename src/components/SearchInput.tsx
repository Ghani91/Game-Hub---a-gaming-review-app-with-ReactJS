import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onChangeInput: (value: string) => void;
}
const SearchInput = ({ onChangeInput }: Props) => {
  return (
    <InputGroup borderRadius={400}>
      <InputLeftElement children={<BsSearch />} />
      <Input
        placeholder="Search games"
        variant={"filled"}
        onChange={(event) => onChangeInput(event.target.value)}
      />
      ;
    </InputGroup>
  );
};

export default SearchInput;
