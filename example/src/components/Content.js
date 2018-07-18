import List from './List';
import React from 'react';
import { connect } from 'react-redux';

const content = (props) => (
	<div className="mt-2">
		<div className="container-fluid">
			<div className="row">{props.lists.map((list) => <List key={list.id} {...list} />)}</div>
		</div>
	</div>
);

const mapStateToProps = (state) => ({ lists: state.lists });

export default connect(mapStateToProps)(content);
