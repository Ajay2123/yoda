import React, { useState, useEffect, useContext } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { fetchPeople } from "../../api/people";
import { PeopleContext } from "../../context/PeopleContext";

export const UserSelection = () => {
    const [peopleList, setPeopleList] = useState([]);
    const [selectedPerson, setSelectedPerson] = useState("");
    const { currentUser, updateCurrentUser, updateCurrentUserGoals } =
        useContext(PeopleContext);

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                const data = await fetchPeople();
                setPeopleList(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchDataFromApi();
    }, []);

    useEffect(() => {
        updateCurrentUser(
            peopleList.filter((person) => person.name === selectedPerson)[0]
        );
        updateCurrentUserGoals(currentUser?.goals);
    }, [selectedPerson]);

    const handlePersonChange = (event) => {
        setSelectedPerson(event.target.value);
    };

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel id="person-select-label">Select Person</InputLabel>
                <Select
                    labelId="person-select-label"
                    id="person-select"
                    value={selectedPerson}
                    label="Select Person"
                    onChange={handlePersonChange}
                >
                    {peopleList.map((person) => (
                        <MenuItem key={person.id} value={person.name}>
                            {person.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};
