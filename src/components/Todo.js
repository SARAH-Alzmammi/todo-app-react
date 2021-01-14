import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		//  binding the method for the keyword "this" to work and not getting an error
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete(evt) {
		// 1- prevent Default behavior of refrshing the page on subimiting
		evt.preventDefault();
		//2- use "deleteTodo" method from TodoList component"passed as props" to remove a task with the given id
		this.props.deleteTodo(this.props.id);
	}
	render() {
		return (
			<div className="Todo">
				<li>{this.props.task}</li>
				<button onClick={this.handleDelete}>X</button>
			</div>
		);
	}
}

export default Todo;
