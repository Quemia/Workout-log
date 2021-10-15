import React from "react";

const Table = ( {activities, removeActivity} ) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Time</td>
          <td>Type</td>
          <td>Date</td>
          <td> Actions</td>
        </tr>
      </thead>
      <tbody>
        {activities.map((activity, index) => (
          <tr key={index}>
            <td>{activity.time_spent}</td>
            <td>{activity.activity}</td>
            <td>{activity.date}</td>
            <td>
              <span onClick={() => removeActivity(activity)}>X</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
