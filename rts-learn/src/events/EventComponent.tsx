const EventComponent: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => console.log(e);

  return (
    <div>
      <input onChange={(e) => console.log(e)}></input>
      <input onChange={onChange}></input>
    </div>
  );
};

export default EventComponent;
