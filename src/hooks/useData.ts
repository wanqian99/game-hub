// import { AxiosRequestConfig, CanceledError } from "axios";
// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";

// export interface FetchResponse<T> {
//     count: number;
//     results: T[];
// }

// // <T> generic type function
// const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
//     const [data, setData] = useState<T[]>([]);
// 	const [error, setError] = useState("");
//     const [isLoading, setLoading] = useState(false);

// 	useEffect(() => {
//         const controller = new AbortController();

//         setLoading(true);
// 		apiClient
// 			.get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
// 			.then((res) => {
//                 setData(res.data.results);
//                 setLoading(false);
//             })
// 			.catch((err) => {
//                 if(err instanceof CanceledError) return;
//                 setError(err.message);
//                 setLoading(false);
//             });

//             return () => controller.abort();
        
//         // since deps is optional, it can be undefined, cant spread undefined.
//         // so if dependencies is true, spread it. else empty array
// 	}, deps ? [...deps] : []);

//     return { data, error, isLoading };
// };

// export default useData;