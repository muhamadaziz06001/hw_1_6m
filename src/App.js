import { useState } from 'react';
import Btn from './Btn';
import Num from './Num';

function App() {
  const [num, setNum] = useState(0);

  const increment = () => {
    if (num < 15) setNum(num + 1);
  };

  const increment5 = () => {
    if (num < 15) setNum(num + 5);
  };

  const decrement = () => {
    if (num > 0) setNum(num - 1);
  };

  const decrement5 = () => {
    if (num > 0) setNum(num - 5);
  };

  const reset = () => {
    setNum(0);
  };

  return (
    <div>
      <Num num={num} />
      <Btn increment={increment} decrement={decrement} reset={reset} increment5={increment5} decrement5={decrement5} />
    </div>
  );
}

export default App;
