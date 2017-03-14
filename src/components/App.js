import React, {Component} from 'react';
import 'css/App.css';
import Counter from './Counter';
import { LOCAL_STORAGE_KEY } from 'constants';

const openPopout = () => {
  window.open('popout.html', 'Popout Window Title', 'width=800, height=500,resizable=1');
};

class App extends Component {
  state = {
    counter: 0
  };

  onIncrease = () => {
    const newCounter = this.state.counter + 1;
    const newState = { counter: newCounter };
    this.setState(newState);
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newState));
  };

  componentWillMount = () => {
    window.addEventListener('storage', this.handleStorageChange);
    this.restoreState();
  };

  handleStorageChange = (e) => {
    const newState = JSON.parse(e.newValue);
    this.setState(newState);
  };

  restoreState() {
    const persistedState = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY));
    if (persistedState) {
      this.setState(persistedState);
    }
  }

  render() {
    return (
      <div>
        { this.props.showPopoutButton &&
          <button className='openPopoutButton' onClick={openPopout}>
            Open popout
          </button>
        }
        <Counter onIncrease={this.onIncrease} counter={this.state.counter} />
      </div>
    );
  }
}

export default App;
