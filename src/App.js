import React from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import {robots} from './robots';
import './App.css';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})

        console.log(event.target.value);
    }

    searchRobot = (robot) => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    }

    render(){

        const filteredRobots = this.state.robots.filter(this.searchRobot)

        return(
            <div className=''>
                <div>
                    <h1 className='f1 white fw10 ml3'> NXTube</h1>
                    <Searchbox searchChange={this.onSearchChange}/>
                </div>
                <div className='tl'>
                    <CardList robots={filteredRobots} />  
                </div>
            </div>
        );
    }
}

export default App;