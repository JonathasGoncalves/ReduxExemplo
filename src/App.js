import React from 'react';
import Sidebar from './components/sidebar';
import Video from './components/video';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Sidebar/>
        <Video />
      </Provider>
        
    </div>
  );
}

export default App;
