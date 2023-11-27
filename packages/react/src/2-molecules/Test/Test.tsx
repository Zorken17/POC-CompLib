import { Button, Lable } from '../../1-atoms';

export const Test = () => {
  return (
    <>
      <h1>This is a TEST molecule</h1>
      <Lable id='2' fontWeight='bold'>
        This is a Label
      </Lable>
      <Button label='Click me!' />
    </>
  );
};
