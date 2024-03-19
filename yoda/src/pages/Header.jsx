import React, { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";
import { UserSelection } from "./subs/UserSelection";
import "./Header.css";

const Header = () => {
    const { currentUser } = useContext(PeopleContext);
    return (
        <div className="header">
            <h1>Hello {currentUser?.name}</h1>
            <UserSelection />
        </div>
    );
};

export default Header;
