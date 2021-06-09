import React from "react";
import ReactDOM from "react-dom";
import EventComponent from "./events/EventComponent";
import { GuestList } from "./state/GuestList";
import UserSearch from "./state/UserSearch";

const App = () => {
  return (
    <div>
      <EventComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
