import React, { useContext } from "react";

import { PeopleContext } from "./context/PeopleContext";
import GoalCard from "./pages/subs/GoalCard";
import Header from "./pages/Header";

const App = () => {
    const { currentUser } = useContext(PeopleContext);
    return (
        <div>
            <Header />
            <GoalCard />
        </div>
    );
};

export default App;
