import ReactDOM from 'react-dom/client';
import { Button } from '@ab.poc/atoms';
import { Test } from '@ab.poc/molecules';

const App = () => {
  return (
    <>
      <p>This is a Atoms</p>
      <Button label='Click me' />
      <br></br>
      <br></br>
      <br></br>
      <Test></Test>
    </>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);
