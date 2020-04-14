import React from "react";
import CardList from "./CardList";
import {robots} from "./Robots";
import SearchBox from './SearchBox';

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({
            searchfield: event.target.value
        });
    }

    render() {
        const filteredRobotsArray = this.state.robots.filter(item => {
            return item.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList searchfield={this.state.searchfield} robots={filteredRobotsArray} />
            </div>
        );
    }

}

export default App;