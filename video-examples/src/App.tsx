import { useState } from 'react';
import { FirstChart } from './components/01-FirstChart';
import { BasicConfiguration } from './components/02-BasicConfiguration';
import './App.css';

function App() {
  const [example, setExample] = useState('first');

  return (
    <div>
      <nav>
        <button onClick={() => setExample('first')}>First Chart</button>
        <button onClick={() => setExample('config')}>Basic Configuration</button>
      </nav>
      <main>
        {example === 'first' && <FirstChart />}
        {example === 'config' && <BasicConfiguration />}
      </main>
    </div>
  );
}

export default App;
