import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import useGameQueryStore from "../store";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>('/games');

// selected genre can be either Genre type, or null (all games)
const useGames = () => {
    const gameQuery = useGameQueryStore(s => s.gameQuery);

    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({ pageParam = 1 }) => apiClient.getAll({ 
            params: {
                genres: gameQuery.genreId, 
                parent_platforms: gameQuery.platformId,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
                page: pageParam
            }
        }),

        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },

        // staleTime: 24 * 60 * 60 * 1000, // 24hrs
        staleTime: ms('24h'),
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
}
    

export default useGames;