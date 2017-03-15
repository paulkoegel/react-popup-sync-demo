### TODOs

- [ ] fix initialisation. Problem: click counter 5 times, and only then open the popout -> popout will show 0, main will show 5. Clicking again in either will be synchronised again, but the counters will remain off by 5 counts :(
  Here's a hint:
  [http://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store/35641992#35641992](http://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store/35641992#35641992)
- [ ] move calls of otherWindow.eventCenter to a custom Redux middleware. Only listen to events prefixed with 'DOCUMENTS_', 'NOTES_' and 'COUNTER_', don't synchronise other events with the popout.
  Hints: [http://redux.js.org/docs/advanced/Middleware.html](http://redux.js.org/docs/advanced/Middleware.html)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
