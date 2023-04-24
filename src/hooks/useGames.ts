import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
	id: number;
	name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

// selected genre can be either Genre type, or null (all games)
const useGames = (gameQuery: GameQuery) => 
    // api path link, axios request config, dependencies
    useData<Game>(
        '/games', 
        {params: {
                genres: gameQuery.genre?.id, 
                platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText
            }
        }, 
        [gameQuery]);

export default useGames;