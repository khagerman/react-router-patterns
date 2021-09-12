import React from "react";
import { Link } from "react-router-dom";

function ColorList({ colors }) {
  return (
    <header>
      <h1>Welcome to the color factory</h1>
      <h3>
        <Link to="/colors/new">Add a Color!</Link>
      </h3>
      <ul>
        {colors.map((color) => (
          <li key={color}>
            <Link to={`/colors/${color}`}>Show me {color}!</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default ColorList;
