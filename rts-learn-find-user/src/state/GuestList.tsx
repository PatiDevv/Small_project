import { useState } from "react";

export const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guests, setGuest] = useState<string[]>([]);

  const onClik = () => {
    setName(" ");
    setGuest([...guests, name]);
    console.log([...guests, name]);
  };

  return (
    <div>
      <h3>List Guest</h3>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <button onClick={onClik}>Add guest</button>
    </div>
  );
};
