import React, { Component } from 'react';
import ToDo from './todo';
import Finished from './finished';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            finished: []
        }

        this.addFinished = this.addFinished.bind(this);
    }

    addFinished(todo) {
        const { finished } = this.state;
        finished.push(todo);
        this.setState({finished});
    }

    render() {
        const { finished } = this.state;
        return (
            <div className="App">
                <Finished finished={finished}/>
                <ToDo addFinished={this.addFinished}/>
            </div>
        );
    }
}

export default Container;