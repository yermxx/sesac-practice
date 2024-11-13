import { useState } from 'react';
import './App.css';
import Hello from './components/Hello';

function App() {
  const [count, setCount] = useState(0);
  const plusCount = () => setCount(count + 1);
  const minusCount = () => setCount(count - 1);

  console.log('App');

  return (
    <>
      <Hello
        name='Hani!'
        age={20}
        count={count}
        plusCount={plusCount}
        minusCount={minusCount}
      />
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
