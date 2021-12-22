import { useEffect, useState } from "react";

export interface UseFetchType<T> {
    data: T[];
    isLoading: boolean;
    error: string;
}

const useFetch = <T>(url: string): UseFetchType<T> => {
    const [data, setData] = useState<T[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    // Empty array dependency, use effect runs only once
    useEffect(() => {
        fetch(url)
        .then((res: Response) => {
        if(!res.ok) {
            throw Error('Could not fetch the data for that resource');
        }

        return res.json();
        })
        .then((data: any[]) => {
            setData(data);
            setIsLoading(false);
            setError('');
        })
        .catch((err: TypeError) => {
            setIsLoading(false);
            setError(err.message);
        });
    }, [url]);

    return {data, error, isLoading} as UseFetchType<T>;
}

export default useFetch;