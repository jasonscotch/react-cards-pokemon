import React, {useState} from 'react';
import axios from "axios";
import uuid from "uuid";
import useLocalStorage from './useLocalStorage';

const useAxios = (key, url) => {
    const initialState = [];
    const [items, setItems] = useLocalStorage(key);

    const addItems = async (extra = "") => {
        const res = await axios.get(`${url}${extra}`);
        setItems(items => [...items, { ...res.data, id: uuid() }]);
    }

    const resetData = () => {
        setItems(initialState)
    }

    return [items, addItems, resetData];
}

export default useAxios;
