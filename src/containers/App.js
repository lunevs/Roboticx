import React from "react";
import CardList from "../components/CardList";
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/Error';
import './App.css';

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));

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

        if (this.state.robots.length === 0) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList searchfield={this.state.searchfield} robots={filteredRobotsArray}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }

}

export default App;