import React from "react";
import { Link } from "react-router-dom";

function ColorList({ colors }) {
  return (
    <div>
      <h1>Welcome to the color factory</h1>
      <h2>
        <Link to="/colors/new">Add a Color!</Link>
      </h2>
      <div>
        {colors.map((color) => (
          <p key={color}>
            <Link to={`/colors/${color}`}>Show me {color}!</Link>
          </p>
        ))}
      </div>
    </div>
  );
}

export default ColorList;
