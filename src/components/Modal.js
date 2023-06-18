import { useState } from "react";
import axios from "axios";

import "./Modal.css";

export default function ({ closeModal, habits, setHabits, selectedHabit }) {
  const [name, setName] = useState("");
  const [repeat, setRepeat] = useState("");
  const [goals, setGoals] = useState("");

  const addHabit = async () => {
    try {
      const newHabit = {
        id: habits.length + 1,
        name: name,
        repeat: repeat,
        goal: goals
      };
      const updatedHabits = [...habits, newHabit];
      // await axios.put("/data.json", { Habits: updatedHabits });
      setHabits(updatedHabits);
      closeModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="modal-background">
      <div className="modal-container">
        <label>
          Name
          <input
            name="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Repeat
          <select onChange={(e) => setRepeat(e.target.value)}>
            <option value="Daily">Daily</option>
            <option value="Once a Week">Once a Week</option>
            <option value="Once a Month">Once a Month</option>
          </select>
        </label>
        <label>
          Goals
          <select onChange={(e) => setGoals(e.target.value)}>
            <option value="Finish Today">Finish Today</option>
            <option value="Finish in a Week">Finish in a Week</option>
            <option value="Finish in a Month">Finish in a Month</option>
          </select>
        </label>
        <button onClick={() => closeModal(false)}>close</button>
        <button onClick={addHabit}>Save</button>
      </div>
    </div>
  );
}
