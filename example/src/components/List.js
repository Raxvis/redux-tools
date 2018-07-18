import React from 'react';
import Todo from './Todo';
import { actions } from './../redux';
import { connect } from 'react-redux';

class List extends React.Component {
	state = { edit: false };

	handleHeaderClick() {
		const { edit } = this.state;

		this.setState({ edit: !edit });
	}

	handleHeaderChange(event) {
		this.props.updateList({
			id: this.props.id,
			name: event.target.value,
		});
	}

	handleHeaderKeyPress(event) {
		if (event.key === 'Enter') {
			const { edit } = this.state;

			this.setState({ edit: !edit });
		}
	}

	handleDeleteClick(event) {
		event.preventDefault();
		this.props.deleteList(this.props.id);
	}

	handleInputKeyPress(event) {
		if (event.key === 'Enter') {
			event.preventDefault();
			this.props.addTodo({
				listID: this.props.id,
				text: event.target.value,
			});
			event.target.value = '';
		}
	}

	render() {
		const { edit } = this.state;
		const { name, todos } = this.props;
		const listTodos = todos.filter((todo) => todo.listID === this.props.id);

		return (
			<div className="col-lg-2 col-md-3 col-sm-4 mb-4">
				<div className="card">
					<div className="card-body">
						{edit ? (
							<div className="form-group">
								<input
									className="form-control"
									onChange={(event) => this.handleHeaderChange(event)}
									onKeyPress={(event) => this.handleHeaderKeyPress(event)}
									placeholder="List Name"
									type="text"
									value={name}
								/>
							</div>
						) : (
							<h5 className="card-title">
								{name}
								<span className="small">
									{' '}
									-{' '}
									<a href="#" onClick={() => this.handleHeaderClick()}>
										edit
									</a>
								</span>
							</h5>
						)}
						<div className="form-group">
							<input className="form-control" onKeyPress={(event) => this.handleInputKeyPress(event)} placeholder="New Todo" type="text" />
						</div>
						<ul className="list-group">{listTodos.map((todo) => <Todo key={todo.id} {...todo} />)}</ul>
						<a className="card-link" href="#" onClick={this.handleDeleteClick.bind(this)}>
							Delete List
						</a>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ todos: state.todos });

const mapDispatchToProps = {
	addTodo: actions.todos.addTodo,
	deleteList: actions.lists.deleteList,
	updateList: actions.lists.updateList,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(List);
