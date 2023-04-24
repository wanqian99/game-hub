import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";

function App() {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
							onSelectGenre={(genre) => setSelectedGenre(genre)}
							selectedGenre={selectedGenre}
						/>
					</GridItem>
				</Show>
				{/* MAIN CONTENT */}
				<GridItem area={"main"}>
					<PlatformSelector />
					{/* gets selected genre state to display games */}
					{/* displays all games if null */}
					<GameGrid selectedGenre={selectedGenre} />
				</GridItem>
			</Grid>
		</>
	);
}

export default App;
