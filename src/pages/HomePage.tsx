import { Grid, Show, GridItem, Flex, Box } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
	return (
		<>
			<Grid
				templateAreas={{
					base: `"main"`,
					lg: `"aside main"`,
				}}
				templateColumns={{
					base: "1fr",
					lg: "200px 1fr",
				}}
			>
				{/* ASIDE */}
				{/* only render aside on large device */}
				<Show above="lg">
					<GridItem area={"aside"} paddingX={5}>
						{/* if selectedGenres is true, send another request to get the games */}
						{/* sets selected genre state, so it refreshes, 
          so that main content will display based on selected genre */}
						<GenreList />
					</GridItem>
				</Show>
				{/* MAIN CONTENT */}
				<GridItem area={"main"}>
					<Box paddingLeft={2}>
						<GameHeading />
						<Flex marginBottom={5}>
							<Box marginRight={5}>
								<PlatformSelector />
							</Box>
							<SortSelector />
						</Flex>
					</Box>

					{/* gets selected genre state to display games */}
					{/* displays all games if null */}
					<GameGrid />
				</GridItem>
			</Grid>
		</>
	);
};

export default HomePage;
