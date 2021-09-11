import React, { useState, useContext } from 'react';
// import { useFetch } from './useFetch';

const StoryContext = React.createContext();

export const StoryProvider = ({children}) => {
    const [query, setQuery] = useState('idk');
    const {loading, error, stories} = useFetch(`s=${query}&`);

    return <StoryContext.Provider value={{query, setQuery, loading, error, stories}}>
        {children}
    </StoryContext.Provider>
}

export const useStoryContext = () => {
    return useContext(StoryContext)
}
