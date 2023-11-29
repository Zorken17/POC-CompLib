import { useEffect, useState } from 'react';

interface ButtonProps {
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ label }) => {
  const [numbOfCicks, setNumbOfClicks] = useState<number>(0);

  useEffect(() => {
    console.log('Number of clicks: ', numbOfCicks);
  }, [numbOfCicks]);

  return (
    <button
      style={{ background: 'Green' }}
      onClick={() => setNumbOfClicks(numbOfCicks + 1)}
    >
      {label}
    </button>
  );
};
