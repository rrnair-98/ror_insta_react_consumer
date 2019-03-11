import React from 'react';
import axios from 'axios';
import {BASE_URL, USERS_URL} from "./Constants";
import NavLink from "react-router-dom/es/NavLink";
class Home extends React.Component{

    constructor(){
        super();

        this.state = { data: [] };

    }

    render(){
        console.log("here");
        if(this.state.data != null)

            return(
            <div >
                <ul>
                    {
                        this.state.data.map((el, i) => (
                            <li key={i}>
                                {el.id}, {el.name}, {el.status}, {el.email}

                                <NavLink to={"user/"+el.id+"/posts/"}>
                                    posts
                                </NavLink>

                            </li>
                        ))
                    }
                </ul>

            </div>
        );
        else render("This is the home page");

    }

    componentDidMount() {
        Home.fetchData(1).then(receivedJSON => {
            let currentDataArray = this.state.data;
            currentDataArray.push(receivedJSON);
            this.setState({data: currentDataArray});
            console.log(this.state.data);
        }).catch(err=> {
                console.log(err);
            });
    }

    static async fetchData(id){
        const res = await axios.get(USERS_URL+id+"/");
        return await res.data;//.json is applied implicitly
    }



}
export default Home