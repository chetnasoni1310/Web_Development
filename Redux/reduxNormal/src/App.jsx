import React from 'react'
import { purchaseBook } from './reduxContainer/BookAction'
import { Provider } from 'react-redux';
import store from './reduxContainer/Store';
import BookContainer from './reduxContainer/BookContainer';

function App() {
  console.log(purchaseBook)
  return (
    <Provider store={store}>
    <div>
      <BookContainer />
    </div>
    </Provider>
  )
}

export default App
