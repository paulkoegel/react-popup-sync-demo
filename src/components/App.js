import React from 'react';
import { connect } from 'react-redux';
import 'css/App.css';
import Counter from './Counter';

const openPopout = () => {
  window.open('popout.html', 'Popout Window Title', 'width=800, height=500');
};

const App = ({ counter, onIncrease, users}) => (
  <div>
    <button onClick={openPopout}>
      Open popout
    </button>
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
  </div>
);

const mapStateToProps = (state, ownProps) => (
  {
    users: state.users
  }
);

export default connect(mapStateToProps)(App);
