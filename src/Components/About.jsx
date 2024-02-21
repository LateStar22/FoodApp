import react from "react";
import User from "./User";
import UserClass from "./userClass";
import React from "react";


class About extends React.Component{
    constructor(props){
        super(props);

        console.log("parent constructor");
    }
    componentDidMount(){
        console.log("parent component did mount");
    }
    render(){
        console.log("parent render");
        return (
            <div>
                <h1>About</h1>
                <h2>This is Namaste React course</h2>
                {/* <User></User> */}
                <UserClass></UserClass>
            </div>
        );
    }
}

export default About;