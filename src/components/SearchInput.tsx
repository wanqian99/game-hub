import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchInput = () => {
	const ref = useRef<HTMLInputElement>(null);
	// re-renders gamequerystore only is searchtext changes
	const setSearchText = useGameQueryStore((s) => s.setSearchText);

	return (
		<>
			<form
				onSubmit={(event) => {
					// prevent form from being posted to server
					event.preventDefault();
					if (ref.current) setSearchText(ref.current.value);
				}}
			>
				<InputGroup>
					<InputLeftElement children={<BsSearch />} />
					<Input
						ref={ref}
						borderRadius={20}
						placeholder="Search games..."
						variant={"filled"}
					/>
				</InputGroup>
			</form>
		</>
	);
};

export default SearchInput;
