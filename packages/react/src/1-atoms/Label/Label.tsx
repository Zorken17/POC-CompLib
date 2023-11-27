interface LabelProps {
  id: string;
  children: React.ReactNode;
  fontWeight?: 'normal | bold | 900';
}

export const Lable: React.FC<LabelProps> = ({ id, children, fontWeight }) => {
  return (
    <label htmlFor={id}>
      <p style={{ fontWeight: fontWeight }}>{children}</p>
    </label>
  );
};
