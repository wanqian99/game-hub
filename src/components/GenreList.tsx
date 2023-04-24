import {
	Button,
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
	// used to notify the parent (App component) that a genre has been selected
	onSelectGenre: (genre: Genre) => void;
	// for highlighting selected genre
	selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
	const { data, isLoading, error } = useGenres();

	if (error) return null;
	if (isLoading) return <Spinner />;

	return (
		<>
			<List>
				{data.map((genre) => (
					<ListItem key={genre.id} paddingY={"5px"}>
						<HStack>
							<Image
								src={genre.image_background}
								boxSize={"32px"}
								borderRadius={8}
							/>
							<Button
								onClick={() => onSelectGenre(genre)}
								fontSize={"lg"}
								fontWeight={
									genre.id === selectedGenre?.id
										? "bold"
										: "normal"
								}
								variant={"link"}
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
