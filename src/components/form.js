import React from 'react'

const Form = (onSubmit) => {


    return(
    <form onSubmit={onSubmit}>
    <h2>Insert an item</h2>
    <input type="number" name="time_spent" />
    <select name="activity">
        <option value="">Choose an actvity</option>
        <option value="Run">Run</option>
        <option value="Bike">Bike</option>
        <option value="Swimming">Swimming</option>
    </select>
    <input type="date" name="date" />

    <button type="submit">Add</button>
    </form>
    )
}

export default Form
