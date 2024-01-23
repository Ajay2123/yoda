// SortDropdown.js
import React from "react";
import { Select, MenuItem, FormControl } from "@mui/material";

export const sortEpisodes = (episodes, sortingOption) => {
    switch (sortingOption) {
        case "1-6":
            return episodes.slice().sort((a, b) => a.episode_id - b.episode_id);
        case "6-1":
            return episodes.slice().sort((a, b) => b.episode_id - a.episode_id);
        case "Year":
            return episodes
                .slice()
                .sort((a, b) => a.release_date.localeCompare(b.release_date));
        default:
            return episodes;
    }
};

export const SortDropdown = ({ value, onChange }) => {
    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select value={value} onChange={onChange}>
                <MenuItem value="1-6">By 1-6</MenuItem>
                <MenuItem value="6-1">By 6-1</MenuItem>
                <MenuItem value="Year">By Release Year</MenuItem>
            </Select>
        </FormControl>
    );
};
