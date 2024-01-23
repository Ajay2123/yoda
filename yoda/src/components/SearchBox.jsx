// SearchUtils.js
import React from "react";
import { TextField } from "@mui/material";

const SearchBox = ({ searchTerm, onSearchChange }) => {
    return (
        <TextField
            label="Search by Title"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={onSearchChange}
        />
    );
};

const filterEpisodesByTitle = (episodes, searchTerm) => {
    return episodes.filter((episode) =>
        episode.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
};

export { SearchBox, filterEpisodesByTitle };
