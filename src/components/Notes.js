import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'css/Notes.css';
import { addNote } from 'actions';

class Notes extends Component {
  handleChange = (e) => {
    console.log('handleChange', e.target.value);
    this.setState({body: e.target.value});
  };

  state={
    body: 'aa'
  };

  render() {
    return (
      <section className='notesSection'>
        <h3>Notes</h3>
        <ol>
          {this.props.notes.map(n => (
            <li key={n.id} className='noteItem'>
              <h3>{n.title}</h3>
              <h6>{n.date} - {n.author}</h6>
              <p>
                {n.body}
              </p>
            </li>
          ))}
        </ol>
        <hr />
        <textarea value={this.state.body} onChange={this.handleChange} />
        <button onClick={() => {this.props.handleSubmit(this.state.body)}}>
          Add note
        </button>
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => (
  {
    notes: state.notes
  }
);

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSubmit: (value) => {
    dispatch(addNote(value))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
