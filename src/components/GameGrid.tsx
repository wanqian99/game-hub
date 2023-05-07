import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {
	const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
	const skeletons = [1, 2, 3, 4, 5, 6];

	if (error) return <Text>{error.message}</Text>;

	// total number of items fetched so far
	// reduce: combine the number of games on each page into a number
	// total: accumulator (variable that contaisn the total)
	// page: element in the pages array
	// count number of of games on that page, and add it to total
	// 0: initial value for the total
	const fetchGamesCount =
		data?.pages.reduce((total, page) => total + page.results.length, 0) ||
		0;

	return (
		// <Box padding={"10px"}>
		<InfiniteScroll
			dataLength={fetchGamesCount}
			// !! to convert to boolean value. so if undefined, it will be boolean false
			hasMore={!!hasNextPage}
			next={() => fetchNextPage()}
			loader={<Spinner />}
		>
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
				spacing={6}
				padding={"10px"}
			>
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardContainer key={skeleton}>
							<GameCardSkeleton />
						</GameCardContainer>
					))}
				{data?.pages.map((page, index) => (
					<React.Fragment key={index}>
						{page.results.map((game) => (
							<GameCardContainer key={game.id}>
								<GameCard game={game} />
							</GameCardContainer>
						))}
					</React.Fragment>
				))}
			</SimpleGrid>
		</InfiniteScroll>
		// {/* {hasNextPage && (
		// 	<Button onClick={() => fetchNextPage()} marginY={5}>
		// 		{isFetchingNextPage ? "Loading..." : "Load More"}
		// 	</Button>
		// )} */}
		// </Box>
	);
};

export default GameGrid;
