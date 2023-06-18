import { useState } from "react";

import "./LandingPage.css";

export default function ({ props, habits, setHabits }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const editHandler = () => {};

  const deleteHandler = () => {
    const updatedHabits = habits.filter((habit) => habit.id !== props.id);
    setHabits(updatedHabits);
  };

  const archiveHandler = () => {};

  console.log(props);
  return (
    <div className="habit-card" id={props.id} onClick={toggleDetails}>
      <p className="habit-name">{props.name}</p>
      {showDetails && (
        <div className="habit-details">
          <p>{props.repeat}</p>
          <p>{props.goal}</p>
          <button onClick={editHandler}>edit</button>
          <button onClick={deleteHandler}>Delete</button>
          <button onClick={archiveHandler}>Archive</button>
        </div>
      )}
    </div>
  );
}
