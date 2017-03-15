import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'css/Notes.css';
import { addNote } from 'actions';

class Notes extends Component {
  handleChange = (e) => {
    this.setState({body: e.target.value});
  };

  state={
    body: ''
  };

  onClick = () => {
    this.props.handleSubmit(this.state.body);
    this.setState({ body: '' });
  };

  render() {
    return (
      <section className='notesSection'>
        <h3 className='notesHeadline'>Notes</h3>
        <textarea className='addNoteInput' value={this.state.body} onChange={this.handleChange} />
        <br />
        <button className='openPopoutButton' onClick={this.onClick}>
          Add note
        </button>

        <ol>
          {this.props.notes.slice().sort((a,b) => (a.id < b.id ? 1 : -1)).map(n => (
            <li key={n.id} className={`noteItem ${n.isNew ? 'isNew' : ''}`}>
              <h3>{n.id} - {n.title}</h3>
              <h6>{n.date} - {n.author}</h6>
              <p>
                {n.body}
              </p>
            </li>
          ))}
        </ol>
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
