import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
	return (
		<>
			<Grid
				templateAreas={{
					base: `"nav" "main"`,
					lg: `"nav nav" "aside main"`,
				}}
			>
				{/* NAVIGATION BAR */}
				<GridItem area={"nav"}>
					<NavBar />
				</GridItem>
				{/* ASIDE */}
				{/* only render aside on large device */}
				<Show above="lg">
					<GridItem area={"aside"}>
						<GenreList />
					</GridItem>
				</Show>
				{/* MAIN CONTENT */}
				<GridItem area={"main"}>
					<GameGrid />
				</GridItem>
			</Grid>
		</>
	);
}

export default App;
