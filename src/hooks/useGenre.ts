import useGenres from "./useGenres";

// get genre for game heading
const useGenre = (id?: number) => {
    const { data: genres } = useGenres();
    // find selected genre id
    return genres?.results.find((g) => g.id === id);
}

export default useGenre;