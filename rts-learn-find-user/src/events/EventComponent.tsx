const EventComponent: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => console.log(e);

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) =>
    console.log(event);
  return (
    <div>
      <input onChange={(e) => console.log(e)}></input>
      <input onChange={onChange}></input>
      <div draggable onDragStart={onDragStart}>
        Drag me?
      </div>
    </div>
  );
};

export default EventComponent;
