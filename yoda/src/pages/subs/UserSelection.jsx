import React, { useState, useEffect, useContext } from "react";
import { Avatar, IconButton } from "@mui/material";
import { fetchPeople } from "../../api/people";
import { PeopleContext } from "../../context/PeopleContext";

export const UserSelection = () => {
    const [peopleList, setPeopleList] = useState([]);
    const { updateCurrentUser, updateCurrentUserGoals } =
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

    const handlePersonChange = (person) => {
        updateCurrentUser(person);
        updateCurrentUserGoals(person.goals);
    };

    return (
        <div>
            {peopleList.map((person) => (
                <IconButton
                    key={person.id}
                    onClick={() => handlePersonChange(person)}
                >
                    <Avatar alt={person.name}>{person.name[0]}</Avatar>
                </IconButton>
            ))}
        </div>
    );
};
