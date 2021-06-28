interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = (props: ChildProps) => {
  return (
    <div>
      <h1>{props.color}</h1>
      <button onClick={props.onClick}>CLick me</button>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      <h1>{color}</h1>
      {children}
      <button onClick={onClick}>CLick me</button>
    </div>
  );
};
