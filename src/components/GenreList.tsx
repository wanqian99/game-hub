import {
	Button,
	HStack,
	Heading,
	Image,
	List,
	ListItem,
	// Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import useGameQueryStore from "../store";

const GenreList = () => {
	// const { data, isLoading, error } = useGenres();
	const { data } = useGenres();
	const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
	const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

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
								onClick={() => setSelectedGenreId(genre.id)}
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
