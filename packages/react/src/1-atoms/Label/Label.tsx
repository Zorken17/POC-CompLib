interface LabelProps {
  id: string;
  children: React.ReactNode;
}

export const Lable: React.FC<LabelProps> = ({ id, children }) => {
  return (
    <label htmlFor={id}>
      <p>{children}</p>
    </label>
  );
};
