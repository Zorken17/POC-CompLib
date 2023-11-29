interface LabelProps {
  id: string;
  children: React.ReactNode;
  fontWeight?: 'normal' | 'bold' | '900';
}

export const Label: React.FC<LabelProps> = ({
  id,
  children,
  fontWeight = 'normal',
}) => {
  return (
    <label htmlFor={id}>
      <p style={{ fontWeight: fontWeight }}>{children}</p>
    </label>
  );
};
