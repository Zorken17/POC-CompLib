import ReactDOM from 'react-dom/client';
import { Button } from '@ab.poc/react';

const App = () => {
  return (
    <>
      {/* <Lable id='1'>Label</Lable> */}
      <Button label='Button' />

      {/* <Test /> */}
    </>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);
