import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css';

class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { task: '' };
		//  binding the method for the keyword "this" to work and not getting an error
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	//set the state with the new data while it get enterd "At the same time"
	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}

	handleSubmit(evt) {
		// 1- prevent Default behavior of refrshing the page on subimiting
		evt.preventDefault();
		//2- use "createTodo" method from "TodoList" component to create a task with unique id
		this.props.createTodo({ ...this.state, id: uuidv4() });
		// 3- make the form input empty
		this.setState({ task: '' });
	}
	render() {
		return (
			<form className="NewTodoForm" onSubmit={this.handleSubmit}>
				<input
					type="text"
					placeholder="Enter New Todo"
					id="task"
					// the name must be the same on the state "task" for "handleChange" method logic to work
					name="task"
					value={this.state.task}
					onChange={this.handleChange}
				/>
				<button className="addTodoBtn">Add Todo</button>
			</form>
		);
	}
}

export default NewTodoForm;
