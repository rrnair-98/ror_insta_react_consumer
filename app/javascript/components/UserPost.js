import React from 'react';
import axios from 'axios';
import {BASE_URL, USERS_URL} from "./Constants";
import NavLink from "react-router-dom/es/NavLink";
class UserPost extends React.Component{
    constructor(){
        super()
        this.state ={data: []};

    }


    render() {
        if(this.state.data != null)

            return(
                <div >
                    <ul>
                        {
                            this.state.data.map((el, i) => (
                                el.map( (d, i) =>(
                                <li key={i}>
                                    {d.id}, {d.caption}, {d.num_likes}

                                </li>
                            ))))
                        }
                        <NavLink to>Load more</NavLink>
                    </ul>

                </div>
            );
        else render("This is the userpost page");
    }


    componentDidMount() {
        console.log("Here")
        UserPost.fetchData(this.props.match.params.id).then(receivedJSON => {
            let currentDataArray = this.state.data;
            currentDataArray.push(receivedJSON);
            this.setState({data: currentDataArray});
            console.log(this.state.data);
        }).catch(err=> {
            console.log(err);
        });
    }

    static async fetchData(id){
        const res = await axios.get(USERS_URL+id+"/posts");
        return await res.data;//.json is applied implicitly
    }


}

export default UserPost;