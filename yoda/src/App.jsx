import React, { useEffect, useState } from "react";
import { fetchPeople } from "./api/people";

const App = () => {
    const [peopleList, setPeopleList] = useState([]);

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                const data = await fetchPeople();

                setPeopleList(data);
                console.log(peopleList[0].goals);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchDataFromApi();
    }, []);

    useEffect(() => {
        console.log(peopleList);
    }, [peopleList]);

    return (
        <div>
            <h1>Hello World</h1>
            {/* Render your people list here */}
            <ul>
                {peopleList.map((person) => (
                    <>
                        <li key={person.id}>{person.name}</li>
                        <ul>
                            {person.goals.map((goal, index) => (
                                <>
                                    <li key={index}>{goal.description}</li>
                                </>
                            ))}
                        </ul>
                    </>
                ))}
            </ul>
        </div>
    );
};

export default App;
