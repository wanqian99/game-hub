import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
						<GenreList
							onSelectGenre={(genre) =>
								setGameQuery({ ...gameQuery, genre })
							}
							selectedGenre={gameQuery.genre}
						/>
					</GridItem>
				</Show>
				{/* MAIN CONTENT */}
				<GridItem area={"main"}>
					<Flex paddingLeft={2} marginBottom={5}>
						<Box marginRight={5}>
							<PlatformSelector
								selectedPlatform={gameQuery.platform}
								onSelectPlatform={(platform) =>
									setGameQuery({ ...gameQuery, platform })
								}
							/>
						</Box>
						<SortSelector
							sortOrder={gameQuery.sortOrder}
							onSelectSortOrder={(sortOrder) =>
								setGameQuery({ ...gameQuery, sortOrder })
							}
						/>
					</Flex>
					{/* gets selected genre state to display games */}
					{/* displays all games if null */}
					<GameGrid gameQuery={gameQuery} />
				</GridItem>
			</Grid>
		</>
	);
}

export default App;
