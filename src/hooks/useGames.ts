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
const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => 
    // api path link, axios request config, dependencies
    useData<Game>('/games', {params: {genres: selectedGenre?.id, platforms: selectedPlatform?.id}}, 
                            [selectedGenre?.id, selectedPlatform?.id]);

export default useGames;