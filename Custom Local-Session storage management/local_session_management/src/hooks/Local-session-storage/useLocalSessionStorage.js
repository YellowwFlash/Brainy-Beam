import { useState, useEffect } from "react";

function useLocalSessionStorage(key, initialValue) {
    const [storage, setStorage] = useState(sessionStorage);

    const getStoredValue = () => {
        try {
            const item = storage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error("Error reading from storage", error);
            return initialValue;
        }
    };

    const [storedValue, setStoredValue] = useState(getStoredValue);

    useEffect(() => {
        setStoredValue(getStoredValue());
    }, [key, storage]);

    useEffect(() => {
        try {
            if (storedValue !== undefined) {
                storage.setItem(key, JSON.stringify(storedValue));
            }
        } catch (error) {
            console.error("Error writing to storage", error);
        }
    }, [key, storedValue, storage]);

    return [storedValue, setStoredValue, setStorage];
}

export default useLocalSessionStorage;
