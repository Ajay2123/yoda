import React, { createContext, useState, useMemo } from "react";

export const StarWarsContext = createContext();

export const StarWarsProvider = ({ children }) => {
    const [episodes, setEpisodes] = useState([]);
    const [selectedEpisode, setSelectedEpisode] = useState(null);

    const contextValue = useMemo(
        () => ({
            episodes,
            setEpisodes,
            selectedEpisode,
            setSelectedEpisode,
        }),
        [episodes, selectedEpisode]
    );

    return (
        <StarWarsContext.Provider value={contextValue}>
            {children}
        </StarWarsContext.Provider>
    );
};
