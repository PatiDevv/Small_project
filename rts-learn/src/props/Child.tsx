interface ChildProps {
  color: string;
}

export const Child = (props: ChildProps) => {
  return (
    <div>
      <h1>{props.color}</h1>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return (
    <div>
      <h1>{color}</h1>
    </div>
  );
};
