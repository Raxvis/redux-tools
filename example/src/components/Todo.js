import React from 'react';
import { actions } from './../redux';
import { connect } from 'react-redux';

class Todo extends React.Component {
	handleDeleteTodo(event) {
		event.preventDefault();
		this.props.deleteTodo(this.props.id);
	}

	handleUpdateTodo(event) {
		if (event.key === 'Enter') {
			event.preventDefault();
			this.props.updateTodo({
				listID: this.props.id,
				text: event.target.value,
			});
		}
	}

	render() {
		return <li className="list-group-item">{this.props.text}</li>;
	}
}

const mapDispatchToProps = {
	deleteTodo: actions.todos.deleteTodo,
	updateTodo: actions.todos.updateTodo,
};

export default connect(
	null,
	mapDispatchToProps,
)(Todo);
