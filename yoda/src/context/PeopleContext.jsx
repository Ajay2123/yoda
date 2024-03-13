import { createContext, useState, useMemo } from "react";

export const PeopleContext = createContext();
export const PeopleContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    const [currentUserGoals, setCurrentUserGoals] = useState({});
    const updateCurrentUser = (user) => {
        setCurrentUser(user);
    };
    const updateCurrentUserGoals = (goals) => {
        setCurrentUserGoals(goals);
    };
    const value = useMemo(
        () => ({
            currentUser,
            updateCurrentUser,
            currentUserGoals,
            updateCurrentUserGoals,
        }),
        [
            currentUser,
            updateCurrentUser,
            currentUserGoals,
            updateCurrentUserGoals,
        ]
    );
    return (
        <PeopleContext.Provider value={value}>
            {children}
        </PeopleContext.Provider>
    );
};
