import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FetchResponse } from "../services/api-client";
import apiClient from "../services/api-client";

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
    rating_top: number;
}

// selected genre can be either Genre type, or null (all games)
const useGames = (gameQuery: GameQuery) => 
    useQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: () => apiClient.get<FetchResponse<Game>>('/games', {
                params: {
                    genres: gameQuery.genre?.id, 
                    parent_platforms: gameQuery.platform?.id,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText
                }
        })
        .then(res => res.data)
    })
    // // api path link, axios request config, dependencies
    // useData<Game>(
    //     '/games', 
    //     {params: {
    //             genres: gameQuery.genre?.id, 
    //             platforms: gameQuery.platform?.id,
    //             ordering: gameQuery.sortOrder,
    //             search: gameQuery.searchText
    //         }
    //     }, 
    //     [gameQuery]);

export default useGames;