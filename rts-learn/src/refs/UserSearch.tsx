import { useEffect, useRef, useState } from "react";

const users = [
  {
    name: "Ala",
    age: 20,
  },
  {
    name: "Maja",
    age: 20,
  },
  {
    name: "Marika",
    age: 20,
  },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number | undefined }>();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name.toLowerCase() === name.toLowerCase();
    });
    setUser(foundUser);
  };

  return (
    <>
      <div>Find User</div>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={onClick}>Find</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </>
  );
};

export default UserSearch;
