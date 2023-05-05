import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import platforms from "../data/platforms";

const apiClient = new APIClient<Platform>('/platforms');

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24hrs (60mins, 60secs, 60milliseconds)
    initialData: {count: platforms.length, results: platforms}, 
})

export default usePlatforms;