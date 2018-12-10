import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
  	if (!this.props.book) {
  	  return <div>Select a book to see details.</div>
  	}

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  // whatever gets returned will show up as props inside of 
  // BookDetail component (adding state to component making it a container)
  return {
  	book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail)