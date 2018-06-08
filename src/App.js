import React, {Component} from 'react';
import {Button, Input} from 'semantic-ui-react'
import TableComponent from "./js/component/TableComponent";
import './css/site.css'

class App extends Component {
    state = {showInitialInput: true, planetSizeX: 0, planetSizeY: 0};

    setSizeX = (e) => {
        this.setState({planetSizeX: e.target.value})
    };

    setSizeY = (e) => {
        this.setState({planetSizeY: e.target.value})
    };

    createPlanet = () => {
        this.setState({showInitialInput: false})
    };

    render() {
        return (
            <div>
                {this.state.showInitialInput ?

                    <div>
                        <Input type='text' placeholder='İnsert x size of the planet' onChange={this.setSizeX}/>
                        <Input type='text' placeholder='İnsert y size of the planet' onChange={this.setSizeY}/>
                        <Button color={"green"} onClick={() => this.createPlanet()}>Create Planet</Button>
                    </div>
                    : null}

                {!this.state.showInitialInput ? <TableComponent planetSizeX={this.state.planetSizeX} planetSizeY={this.state.planetSizeY}/> : null}
            </div>
        );
    }
}

export default App;
