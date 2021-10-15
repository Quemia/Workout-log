import React from "react";

const Form = ({ onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2>Insert an item</h2>
        <input
          type="number"
          name="time_spent"
          placeholder="hours of exercises"
          required
        />
        <select name="activity" required>
          <option value="">Choose an actvity</option>
          <option value="Run">Run</option>
          <option value="Bike">Bike</option>
          <option value="Swimming">Swimming</option>
        </select>
        <input type="date" name="date" required />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
