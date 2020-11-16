import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import Routes from './routing/Routes';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
