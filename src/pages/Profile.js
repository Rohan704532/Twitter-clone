import React from "react";
import "./Profile.css";
import Left from "../Components/Left"
import Right from "../Components/Right"
import Profilemain from "../Components/Profilemain/Profilemain";

function Profile(){
    return(
        <div className="Maindiv">
            <div className="Left">
                <Left/>
            </div>
            <div className="Center">
                <Profilemain/>
            </div>
            <div className="Right">
                <Right/>
            </div>
        </div>
    )
}

export default Profile;