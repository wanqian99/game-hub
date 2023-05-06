import {
	Button,
	HStack,
	Heading,
	Image,
	List,
	ListItem,
	// Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
	// used to notify the parent (App component) that a genre has been selected
	onSelectGenre: (genre: Genre) => void;
	// for highlighting selected genre
	selectedGenreId?: number;
}

const GenreList = ({ selectedGenreId, onSelectGenre }: Props) => {
	// const { data, isLoading, error } = useGenres();
	const { data } = useGenres();

	// if (error) return null;
	// if (isLoading) return <Spinner />;

	return (
		<>
			<Heading fontSize="2xl" marginBottom={3}>
				Genres
			</Heading>
			<List>
				{data?.results.map((genre) => (
					<ListItem key={genre.id} paddingY={"5px"}>
						<HStack>
							<Image
								src={genre.image_background}
								boxSize={"32px"}
								borderRadius={8}
								objectFit={"cover"}
							/>
							<Button
								textAlign={"left"}
								whiteSpace={"normal"}
								onClick={() => onSelectGenre(genre)}
								fontSize={"lg"}
								fontWeight={
									genre.id === selectedGenreId
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
