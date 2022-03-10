import React from "react";
import {FaTimes, FaPen, FaRegCircle} from "react-icons/fa";
const Icon = ({Name})=>{
    return(
        <h1>
            <FaTimes className="Icon"/>
            <FaPen className="Icon"/>
            <FaRegCircle className="Icon"/>

        </h1>
    );
};

export default Icon;