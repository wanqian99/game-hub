import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
	const ref = useRef<HTMLInputElement>(null);
	// re-renders gamequerystore only is searchtext changes
	const setSearchText = useGameQueryStore((s) => s.setSearchText);
	const navigate = useNavigate();

	return (
		<>
			<form
				onSubmit={(event) => {
					// prevent form from being posted to server
					event.preventDefault();
					if (ref.current) setSearchText(ref.current.value);
					navigate("/");
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
