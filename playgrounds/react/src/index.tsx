import ReactDOM from 'react-dom/client';
import { Button } from '@ab.poc/react/lib/1-atoms/Button/';

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
