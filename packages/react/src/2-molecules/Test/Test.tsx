import { Button, Label } from '../../1-atoms';

export const Test = () => {
  return (
    <>
      <h1>This is a TEST molecule!</h1>
      <Label id='2' fontWeight='bold'>
        This is a Label
      </Label>
      <Button label='Click me!' />
    </>
  );
};
