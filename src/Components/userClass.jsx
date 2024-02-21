import react, { Component } from "react";
import userContext from "../utils/userContext";

class UserClass extends Component {
    constructor(props) {
        super(props);
        this.state = { //way to create state variable in Class based components.
            imgId: "",
            name: "",
            location: "",
            company: "",
            login: "",
        }
        console.log(this.props.name + "child constructor"); // Constructor gets called only once when the class is instantiated or loaded.On every render, the constructor is not called.
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/LateStar22");
        const json = await data.json();
        console.log(json);
        this.setState({
            imgId: json.avatar_url,
            name: json.name,
            location: json.location,
            company: json.company,
            login: json.login
        })
    }

    componentDidUpdate() {
        console.log("did update called");
    }

    componentWillUnmount() {
        console.log("component will unmount");
    }
    render() {
        const { imgId, name, location, company, login } = this.state;
        console.log(name + "child render");
        return (
            <div className="user-card">
                <img src={imgId} alt="" />
                <h3>Name : {name}</h3>
                <h3>UserName : {login}</h3>
                <h3>Company : {company}</h3>
                <h3>Location : {location}</h3>
                <h3>Contact : 7385003650</h3>
                <div>
                    <userContext.Consumer>{({loggedInUser}) => <h3>{loggedInUser}</h3>}</userContext.Consumer>
                </div>
            </div>
        );
    }
}

export default UserClass;