import React, { useState, useEffect } from "react";
import "./index.css";
import TableForm from "./components/form";
import Table from "./components/table";
import {AppContainer, Title} from './AppStyle'

function App() {
  const [activities, setActivities] = useState([]);
  const [totalHours, setTotalHours] = useState(0);

  useEffect(() => {
    const initalActivities = JSON.parse(
      localStorage.getItem("workout-log-activities")
    );

    const initalHours = JSON.parse(
      localStorage.getItem("workout-totalHours")
    );

    setActivities(initalActivities || []);
    setTotalHours(initalHours || 0);
  }, []);

  const saveLocalStorage = (activities, totalHours) => {
    const activitiesJson = JSON.stringify(activities);

    localStorage.setItem("workout-log-activities", activitiesJson);
    localStorage.setItem("workout-totalHours", totalHours);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const itemAttributes = Object.fromEntries(formData);
    const newActivities = [...activities, itemAttributes];
    const newHours = totalHours + Number(itemAttributes.time_spent);

    setActivities(newActivities);
    setTotalHours(newHours);

    saveLocalStorage(newActivities, newHours);

    form.reset();
  };

  const removeActivity = (activity) => {
    const indexToRemove = activities.indexOf(activity);

    if (indexToRemove !== -1) {
      const newActivities = [
        ...activities.slice(0, indexToRemove),
        ...activities.slice(indexToRemove + 1, activities.length),
      ];

      const newHours = totalHours - activity.time_spent;

      setActivities(newActivities);
      setTotalHours(newHours);

      saveLocalStorage(newActivities, newHours);
    }
  };

  return (
    <AppContainer>
      <Title className="TitlePage">Workout</Title>
      <TableForm onSubmit={onSubmit} />
      <Table activities={activities} removeActivity={removeActivity} />

      <Title>{totalHours} Hour(s) of Exercises</Title>
    </AppContainer>
  );
}

export default App;
