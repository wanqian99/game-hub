import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "../hooks/usePlatforms";

const apiClient = new APIClient<Game>('/games');

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
    useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({ pageParam = 1 }) => apiClient.getAll({ 
            params: {
                genres: gameQuery.genre?.id, 
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
                page: pageParam
            }
        }),

        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },

        staleTime: 24 * 60 * 60 * 1000, // 24hrs
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