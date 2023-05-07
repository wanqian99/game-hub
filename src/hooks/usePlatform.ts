import usePlatforms from "./usePlatforms";

// get platform for game heading
const usePlatform = (id?: number) => {
    const { data: platforms } = usePlatforms();
    // find selected platform id
	return platforms?.results.find(
		(p) => p.id === id
	);
}

export default usePlatform;