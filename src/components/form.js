import React from "react";
import './form.css'

const Form = (onSubmit) => {
  return (
    <div className="FormContainer">
      <form onSubmit={onSubmit}>
        <h2>Insert an item</h2>
        <input type="number" name="time_spent" placeholder="hours of exercise" className="input"/>
        <select name="activity" className="optionsForm">
          <option value="">Choose an actvity</option>
          <option value="Run">Run</option>
          <option value="Bike">Bike</option>
          <option value="Swimming">Swimming</option>
        </select>
        <input type="date" name="date" className="input"/>

        <button type="submit" className="buttonForm">Add</button>
      </form>
    </div>
  );
};

export default Form;
