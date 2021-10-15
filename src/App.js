import React, { useState, useEffect} from "react";
import "./index.css";
import Form from "./components/form";
import Table from "./components/table";

function App() {
  const [activities, setActivities] = useState([]);
  const [totalHours, setTotalHours] = useState(0);

  const saveLocalStorage = (activities) => {
    const activitiesJson = JSON.stringify(activities);

    localStorage.setItem("workout-log-activities", activitiesJson);
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

    saveLocalStorage(newActivities);

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
      saveLocalStorage(newActivities);
      
      setTotalHours(newHours);
    }
  };

  return (
    <div className="Container">
      <h1 className="TitlePage">Workout</h1>
      <Form onSubmit={onSubmit} />
      <Table activities={activities} removeActivity={removeActivity} />

      <h1>{totalHours} Hour(s) of Exercises</h1>
    </div>
  );
}

export default App;
