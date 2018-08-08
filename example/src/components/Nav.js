import React from 'react';
import { actions } from './../redux';
import { connect } from 'react-redux';

class Modal extends React.Component {
	constructor(props) {
		super(props);
		this.state = { listName: '' };
	}

	updateName(event) {
		this.setState({ listName: event.target.value });
	}

	save(event) {
		event.preventDefault();
		this.props.save();
	}

	keyPress(event) {
		if (event.key === 'Enter') {
			event.preventDefault();
			this.props.addList(this.state.listName);
			this.setState({ listName: '' });
		}
	}

	render() {
		return (
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
				<a className="navbar-brand" href="./">
					Redux Tools Example
				</a>
				<button
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
					className="navbar-toggler"
					data-target="#navbarSupportedContent"
					data-toggle="collapse"
					type="button"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedConent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<a className="nav-link" href="./">
								Home
							</a>
						</li>
						<li className="nav-item">
							<button className="btn btn-link nav-link" onClick={() => this.props.save()}>
								{this.props.saving ? 'Saving...' : 'Save'}
							</button>
						</li>
					</ul>
					<form className="form-inline my-2 my-sm-0">
						<input
							className="form-control mr-sm-2"
							onChange={(event) => this.updateName(event)}
							onKeyPress={(event) => this.keyPress(event)}
							placeholder="Add List (Name)"
							type="text"
							value={this.state.listName}
						/>
					</form>
				</div>
			</nav>
		);
	}
}

const mapDispatchToProps = {
	addList: actions.lists.addList,
	save: actions.app.saveRequest,
};

const mapStateToProps = (state) => ({
	saving: state.app.saving,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Modal);
