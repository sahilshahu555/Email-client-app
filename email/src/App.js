
import { useState } from 'react';
import './App.css';
import Body from './components/Body/Body';
import Filter from './components/Filter/Filter';
import List from './components/List/List';

function App() {
  const [state, setState] = useState(false)
  return (
    <div className="App">
     <Filter/>
    <div className='container'>
      <List/>
      {state?<Body/>:""}
    </div>

    </div>
  );
}

export default App;
