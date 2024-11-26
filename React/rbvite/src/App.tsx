import { useRef } from 'react';
import Hello, { type MyHandler } from './components/Hello';
import My from './components/My';
import { useCounter } from './hooks/counter-hook';
import { SessionProvider } from './hooks/session-context';

function App() {
  const myHandleRef = useRef<MyHandler>(null);
  const { count, plusCount } = useCounter();

  return (
    <div className='grid place-items-center'>
      <SessionProvider>
        <Hello age={29} ref={myHandleRef} />
        <hr />
        <My />
      </SessionProvider>
      <div className='card mb-6'>
        <button
          className='btn btn-primary btn-outline-success'
          onClick={() => {
            plusCount();
            myHandleRef.current?.jumpHelloState();
          }}
        >
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
