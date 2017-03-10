import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { incrementCounter } from './actions';

const App = ({ counter, onIncrease, users}) => (
  <div className='appWrapper'>
    <section className='usersSection'>
      <ol>
        {users.map(u => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ol>
    </section>

    <section className='counterSection'>
      <button onClick={onIncrease}>
        {counter}
      </button>
    </section>
  </div>
);

const mapStateToProps = (state, ownProps) => (
  {
    counter: state.counter,
    users: state.users
  }
);

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    onIncrease: () => {
      dispatch(incrementCounter());
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
