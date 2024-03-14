import React, { useContext } from "react";
import { UserSelection } from "./pages/subs/UserSelection";
import { PeopleContext } from "./context/PeopleContext";

const App = () => {
    const { currentUser } = useContext(PeopleContext);
    return (
        <div>
            <h1>Hello {currentUser?.name}</h1>

            <UserSelection></UserSelection>

            {/* Render your people list here */}
        </div>
    );
};

export default App;
