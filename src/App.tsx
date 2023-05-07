import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
	return (
		<>
			<Grid
				templateAreas={{
					base: `"nav" "main"`,
					lg: `"nav nav" "aside main"`,
				}}
				templateColumns={{
					base: "1fr",
					lg: "200px 1fr",
				}}
			>
				{/* NAVIGATION BAR */}
				<GridItem area={"nav"}>
					<NavBar />
				</GridItem>
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
}

export default App;
