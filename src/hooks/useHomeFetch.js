import { useState, useEffect, useRef } from 'react';
// API
import API from '../API';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const fetchMovies = async(page, searchTerm = "") => {
        try {
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm, page);

            setState(prev => ({
                ...movies,
                results: page > 1 ? [...prev.results, ...movies.results] : [...movies.results] // if page>1 append new movies to previos movies, else set to new movies
            }));
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    };
    //Initial render and search
    useEffect(() => {
        setState(initialState); // whipe up old state

        fetchMovies(1, searchTerm);
    }, [searchTerm]); //if dependency is empty, it will only trigger on mount

    useEffect(() => { //load more only if isloadmore is true
        if (!isLoadingMore) return;
        fetchMovies(state.page + 1, searchTerm);
        setIsLoadingMore(false);
    }, [isLoadingMore, searchTerm, state.page]);

    return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
}