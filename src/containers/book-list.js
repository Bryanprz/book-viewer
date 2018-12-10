import React, { Component } from 'react';
// ReactRedux forms the connection b/w React and Redux
// to create containers, or smart components
import { connect } from 'react-redux'; // pull of just a single property (connect) from module using {}
import { selectBook } from '../actions/index'; // actioncreator for selecting book
import { bindActionCreators } from 'redux'; // sends action to all actionreducers

class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li
				  onClick={() => this.props.selectBook(book)} 
				  key={book.title} 
				  className="list-group-item">
				  {book.title}
				</li>
		  );
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{ this.renderList() }
			</ul>
		)
	}
}

// This function is the glue between Redux state and React component
// maps state to props in the above component
function mapStateToProps(state) {
	// Whatever is returned will show up as props
	// inside of BookList (that magic happens in call to `connect` below)
	// usually we return an object
	return {
		books: state.books
	};
}

function mapDispatchToProps(dispatch) {
	// Whenever selectBook is called, the result should be passed to 
	// all our reducers
	// The purpose of bindActionCreators is TO SEND AN ACTION TO ALL REDUCERS
 	return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// connect (from react-redux) takes a function and a component and produces a container
// container is a component that is aware of the state that is contained by Redux.
// this says 'take the component and mapStateToProps function and return a container'
// we don't export the component BookList (because that has no state on its own),
// instead we want to export the container (component plus state).
export default connect(mapStateToProps, mapDispatchToProps)(BookList);