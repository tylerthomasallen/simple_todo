import React, { Component } from 'react';
import './todo.css';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            todos: []
        }

        this.updateInput = this.updateInput.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.handleFinished = this.handleFinished.bind(this);
    }

    updateInput(e) {
        this.setState({input: e.target.value});
    }

    addTodo(e) {
        e.preventDefault();
        const { todos, input } = this.state;
        todos.push(input);
        this.setState({todos});
        this.setState({input: ""})
    }

    handleFinished(todo) {
        const { todos } = this.state;
        const { addFinished } = this.props;
        addFinished(todo);
        
        let idx = todos.indexOf(todo);
        if (idx > -1) todos.splice(idx, 1);
        this.setState({todos});
    }


    render() {
        const { input, todos } = this.state;
        return (
            <div>
                <h1>Todo List!</h1>

                <form onSubmit={this.addTodo}>
                <label>Add todo:
                    <input type="text" value={input} onChange={this.updateInput}/>
                </label>
                <input type="submit" name="Add" />
                </form>

                {todos.map((todo, i) => {
                    return (
                        <div key={i} className="todo-item">
                            <h2>{todo}</h2>
                            <h5 onClick={() => this.handleFinished(todo)}>Mark as finished</h5>
                        </div>)
                })}

            </div>
        )
    }
}

export default ToDo;