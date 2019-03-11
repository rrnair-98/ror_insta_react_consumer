import React from 'react';
import axios from 'axios';
import {BASE_URL, USERS_URL} from "./Constants";
import NavLink from "react-router-dom/es/NavLink";
class UserPost extends React.Component{
    constructor(){
        super()

        this.state ={data: [], offset:0};
        this.handleClick = this.handleClick.bind(this);
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
                        <button onClick={this.handleClick}>Load more</button>
                    </ul>

                </div>
            );
        else render("This is the userpost page");
    }


    componentDidMount() {
        this.dataFetcherDelegate(0)
    }

    dataFetcherDelegate(offset){
        console.log("Here");
        UserPost.fetchData(this.props.match.params.id, offset).then(receivedJSON => {
            if(  typeof receivedJSON != "undefined"
                && receivedJSON != null
                && receivedJSON.length != null
                && receivedJSON.length > 0
            ) {

                let currentDataArray = this.state.data;
                currentDataArray.push(receivedJSON);
                this.setState({data: currentDataArray});
                console.log(this.state.data);
            }
        else
            alert("nothing to fetch");

    }
        ).catch(err=> {
            console.log(err);
        });
    }


    handleClick(){
        let current = this.state.offset + 5;
        this.setState(state => ({offset: current}))
        this.dataFetcherDelegate(current);
    }
    static async fetchData(id, offset){
        const res = await axios.get(USERS_URL+id+"/posts/"+offset);
        return await res.data;//.json is applied implicitly
    }


}

export default UserPost;