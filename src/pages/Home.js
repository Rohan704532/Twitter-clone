import React from "react";
import "./Home.css";
import Left from "../Components/Left"
import Right from "../Components/Right"
import Feed from "../Components/Feed"

function home(){
    return(
        <div className="Maindiv">
            <div className="Left">
                <Left/>
            </div>
            <div className="Center">
                <Feed/>
            </div>
            <div className="Right">
                <Right/>
            </div>
        </div>
    )
}

export default home;