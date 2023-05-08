// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres";
import ms from 'ms';
import Genre from "../entities/Genre";

const apiClient = new APIClient<Genre>('/genres');

// const useGenres = () => useData<Genre>('/genres');
// const useGenres = () => ({data: genres, isLoading: false, error: null})
const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    // staleTime: 24 * 60 * 60 * 1000, // 24hrs (60mins, 60secs, 60milliseconds)
    staleTime: ms('24h'),
    // initialData: {count: genres.length, results: genres, next: null}, 
    initialData: genres
})

export default useGenres;
