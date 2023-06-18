import axios from "axios";
import { useState, useEffect } from "react";
import Modal from "../../components/Modal";
import HabitCard from "./HabitCard";
import habitsData from "../../data.json";

import "./LandingPage.css";

export default function LandingPage() {
  const [habits, setHabits] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const getData = async () => {
    const response = await axios.get("/src/data.json");
    // console.log(response);
    setHabits(response.data.Habits);
  };

  useEffect((e) => {
    // getData();
    setHabits(habitsData.Habits);
  }, []);

  return (
    <div className="landing-page">
      <h1>Habit Tracker</h1>
      <button onClick={() => setOpenModal(true)}>Add Habit</button>
      {openModal && (
        <Modal
          closeModal={setOpenModal}
          habits={habits}
          setHabits={setHabits}
        />
      )}
      <div className="habit-cards">
        {habits.map((habit) => (
          <HabitCard
            key={habit.id}
            props={habit}
            habits={habits}
            setHabits={setHabits}
          />
        ))}
      </div>
    </div>
  );
}
