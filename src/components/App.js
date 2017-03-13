import React from 'react';
import { connect } from 'react-redux';
import 'css/App.css';
import Counter from './Counter';

const App = ({ counter, onIncrease, users}) => (
  <div className='appWrapper'>
    <section className='usersSection'>
      <ol>
        {users.map(u => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ol>
    </section>

    <Counter />
  </div>
);

const mapStateToProps = (state, ownProps) => (
  {
    users: state.users
  }
);

export default connect(mapStateToProps)(App);
