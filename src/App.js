import { useState } from 'react';
import './App.css';
import Box from './Component/Box';

function App() {
  const boxs = ["Box #", "Box #", "Box #", "Box #", "Box #", "Box #", "Box #", "Box #", "Box #", "Box #", "Box #", "Box #", "Box #", "Box #", "Box #", "Box #",];

  const [restValue, setRestValue] = useState(0);

  return (
    <div className="App">
      <div className='box-wrap'>
        {
          boxs.map(box => <Box setRestValue={setRestValue} restValue={restValue} box={box} />)
        }
      </div>
    </div>
  );
}

export default App;
