import ReactDOM from 'react-dom';

import { Button, Lable } from '@zorken17/react';

const App = () => {
  return (
    <>
      <Lable id='1'>Label</Lable>
      <Button label='Button' />
    </>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
