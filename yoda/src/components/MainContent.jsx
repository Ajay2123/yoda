import React, { useEffect, useContext, useState } from "react";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    Grid,
    Divider,
    ListItemAvatar,
    Avatar,
    Rating,
    styled,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { motion } from "framer-motion";

import { StarWarsContext } from "../context/StarWarsContext";
import { SortDropdown, sortEpisodes } from "./SortDropDown";
import solder from "../assets/solder.png";
import { SearchBox, filterEpisodesByTitle } from "./SearchBox";
function MainContent() {
    const { episodes, setEpisodes, setSelectedEpisode, selectedEpisode } =
        useContext(StarWarsContext);
    const [sortingOption, setSortingOption] = useState("1-6");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchEpisodes = async () => {
            try {
                const response = await fetch("https://swapi.dev/api/films/");
                const data = await response.json();
                setEpisodes(data.results);
                setSelectedEpisode(data.results[0]); // Set the first episode as the default selected episode
            } catch (error) {
                console.error("Error fetching Star Wars episodes:", error);
            }
        };

        fetchEpisodes();
    }, []);

    const StyledRating = styled(Rating)({
        "& .MuiRating-iconFilled": {
            color: "#ff6d75",
        },
        "& .MuiRating-iconHover": {
            color: "#ff3d47",
        },
    });
    const filteredEpisodes = filterEpisodesByTitle(
        sortEpisodes(episodes, sortingOption),
        searchTerm
    );
    const handleSortChange = (event) => {
        setSortingOption(event.target.value);
    };

    const handleSearchChange = (event) => {
        console.log("Search Term:", event.target.value);

        setSearchTerm(event.target.value);
    };
    return (
        <Grid container style={{ margin: 0, padding: 0 }}>
            <Grid
                item
                xs={12}
                sm={4}
                margin={0}
                style={{ margin: 0, padding: 0 }}
            >
                <SortDropdown
                    value={sortingOption}
                    onChange={handleSortChange}
                />
            </Grid>
            <Grid
                item
                xs={12}
                sm={8}
                margin={0}
                style={{ margin: 0, padding: 0 }}
            >
                <SearchBox
                    style={{ margin: 0 }}
                    searchTerm={searchTerm}
                    onSearchChange={handleSearchChange}
                />
            </Grid>
            {/* left View (stacked first on mobile) */}
            <Grid item xs={12} sm={4} order={{ xs: 2, sm: 1 }}>
                <motion.div layout>
                    <List>
                        {filteredEpisodes.map((episode) => (
                            <>
                                <ListItem
                                    alignItems="flex-start"
                                    key={episode.episode_id}
                                    button
                                    onClick={() => setSelectedEpisode(episode)}
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Typography>
                                                {episode.episode_id}
                                            </Typography>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={`Episode ${episode.episode_id}: ${episode.title}`}
                                        secondary={
                                            <>
                                                <Typography
                                                    sx={{
                                                        display: "inline",
                                                    }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    {episode.release_date}
                                                </Typography>
                                            </>
                                        }
                                    />
                                    <StyledRating
                                        name="customized-color"
                                        defaultValue={2}
                                        getLabelText={(value) =>
                                            `${value} Heart${
                                                value !== 1 ? "s" : ""
                                            }`
                                        }
                                        precision={0.5}
                                        icon={
                                            <FavoriteIcon fontSize="inherit" />
                                        }
                                        emptyIcon={
                                            <FavoriteBorderIcon fontSize="inherit" />
                                        }
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </>
                        ))}
                    </List>
                </motion.div>
            </Grid>
            <Grid
                item
                xs={0}
                sm={2}
                order={{ sm: 2 }}
                display={{ xs: "none", sm: "flex" }}
            >
                <motion.div
                    whileHover={{ scale: 2 }}
                    whileTap={{ scale: 2 }}
                    className="item"
                    transition={{ duration: 3 }}
                    key={solder}
                    src={solder}
                >
                    <img src={solder} alt="" height={500} />
                </motion.div>
            </Grid>
            {/* Right View (stacked second on mobile) */}
            <Grid item xs={12} sm={4} order={{ xs: 1, sm: 3 }}>
                <Box>
                    {selectedEpisode ? (
                        <>
                            <Typography variant="h5">
                                Selected Episode
                            </Typography>
                            <Typography variant="h6">
                                {selectedEpisode.title}
                            </Typography>
                            <Typography>
                                {selectedEpisode.opening_crawl}
                            </Typography>
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </Box>
            </Grid>
        </Grid>
    );
}

export default MainContent;
