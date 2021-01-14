import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm ';
import './TodoList.css';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			task : []
		};
		// binding the method for the keyword "this" to work and NOT getting an error.
		this.createTodo = this.createTodo.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
	}
	// createTodo method takes one parameter which is the new todo and makes a copy of the existing state and add to it the new todo then set the state with the new copy.
	createTodo(newTodo) {
		this.setState({
			task : [
				...this.state.task,
				newTodo
			]
		});
	}

	// deleteTodo method takes an id as  a parameter then, filter the state and keep every object that is NOT matching the parameter.
	deleteTodo(id) {
		this.setState({
			task : this.state.task.filter((t) => t.id !== id)
		});
	}

	render() {
		//  map the state to make each one <Todo/> component passing there  key, id, task, and the method to delete one.
		const tasks = this.state.task.map((t) => {
			return <Todo key={t.id} id={t.id} task={t.task} deleteTodo={this.deleteTodo} />;
		});
		return (
			<div>
				<h1>Todo App</h1>
				<div className="TodoList">
					<ul> {tasks} </ul>
					{/* passing "createTodo" method to use it with "handleSubmit" method in <NewTodoForm/> component  */}
					<NewTodoForm createTodo={this.createTodo} />
				</div>
			</div>
		);
	}
}

export default TodoList;
