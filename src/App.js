import React, { useState } from 'react';
import Form from "./components/form";
function App() {
  const [activities, setActivities] = useState([{"time_spent":"2", "activity":"Bike", "date":"2021-04-08"}, {"time_spent":"1", "activity":"Run", "date":"2021-04-07"}]);
  const [totalHours, setTotalHours] = useState(3);

  const onSubmit = (event) => {
    event.preventDefault();
    debugger
    const form = event.currentTarget
    const formData = new FormData(form)
    const itemAttributes = Object.fromEntries(formData)
    const newActivities = [...activities, itemAttributes]
    const newHours = totalHours + Number(itemAttributes.time_spent)
    
    setActivities(newActivities)
    setTotalHours(newHours)
    
    form.reset()
  };

  const removeActivity = (activity) =>{
    const indexToRemove = activities.indexOf(activity)
      if(indexToRemove !== -1){
        const newActivities = [
          ...activities.slice(0, indexToRemove),
          ...activities.slice(indexToRemove + 1, activities.length)
        ]

        const newHours = totalHours - activity.time_spent

        setActivities(newActivities) 
        setTotalHours(newHours)
      } 
  }


  return (
    <div>
      <h1>Workout</h1>
      <Form onSubmit={onSubmit} />
      <table>
        <thead>
          <tr>
            <td>Time</td>
            <td>Type</td>
            <td>Date</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index)=>(
          <tr key={index}>
            <td>{activity.time_spent}</td>
            <td>{activity.activity}</td>
            <td>{activity.date}</td>
            <td>
              <span onClick={() => removeActivity(activity)}>
                X
              </span>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
      
      <h1>{totalHours} Hour(s) of Exercises</h1>

    </div>

  );
}

export default App;
