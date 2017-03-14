import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'css/Documents.css';
import { toggleFavouriteDocument, deleteDocument } from 'actions';

class Documents extends Component {
  state = {
    selectedDocumentId: null
  };

  handleSelect = (documentId) => {
    this.setState({ selectedDocumentId: documentId });
  };

  render() {
    return (
      <section className='documentsSection'>
        <h3 className='documentsHeadline'>Documents</h3>
        <ol>
          {this.props.documents.map(d => (
            <li key={d.id} className={`documentItem ${d.isDeleted ? 'isDeleted' : ''} ${this.state.selectedDocumentId === d.id ? 'isSelected' : ''}`} onClick={() => { this.handleSelect(d.id)}}>
              <h3>{d.title}</h3>
              <h6>{d.date} - {d.author}</h6>
              <div className='documentsButtonWrapper'>
                <button className='favouriteButton' onClick={(e) => { this.props.toggleFavourite(d.id); e.stopPropagation(); }}>
                  {d.isFavourite ? '🌟' : '⭐'}
                </button>
                <button className='deleteButton' onClick={(e) => { this.props.deleteDocument(d.id); e.stopPropagation(); }} disabled={d.isDeleted}>
                  ☠️
                </button>
              </div>
            </li>
          ))}
        </ol>
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => (
  {
    documents: state.documents
  }
);

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleFavourite: (documentId) => {
    dispatch(toggleFavouriteDocument(documentId));
  },
  deleteDocument: (documentId) => {
    dispatch(deleteDocument(documentId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Documents);
