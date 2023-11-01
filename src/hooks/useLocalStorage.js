import React, {useState, useEffect} from "react";

const useLocalStorage = (key, defaultValue = []) => {
    if (window.localStorage.getItem(key)) {
        defaultValue = JSON.parse(window.localStorage.getItem(key));
    }

    const [state, setState] = useState(defaultValue);

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);

    return [state, setState]
}

export default useLocalStorage;


  