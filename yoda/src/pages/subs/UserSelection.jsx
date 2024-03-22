import React, { useState, useEffect, useContext } from "react";
import { Avatar, IconButton } from "@mui/material";
import { fetchPeople } from "../../api/people/getPeople";
import { PeopleContext } from "../../context/PeopleContext";
import { fetchGoalsBypersonID } from "../../api/goals/getGoals";

export const UserSelection = () => {
    const [peopleList, setPeopleList] = useState([]);
    const { updateCurrentUser, updateCurrentUserGoals } =
        useContext(PeopleContext);

    const fetchPeopleFromApi = async () => {
        try {
            const data = await fetchPeople();
            setPeopleList(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const fetchGoalsFromApi = async (id) => {
        try {
            const data = await fetchGoalsBypersonID(id);
            updateCurrentUserGoals(data);
        } catch (error) {
            console.error("Error fetching Goals:", error);
        }
    };

    useEffect(() => {
        fetchPeopleFromApi();
    }, []);

    const handlePersonChange = (person) => {
        updateCurrentUser(person);
        fetchGoalsFromApi(person.id);
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
