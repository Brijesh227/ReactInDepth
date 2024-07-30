import { useState, useEffect } from 'react';

export default function useApiCall(id: number) {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return {
        loading,
        error,
        data
    };
}