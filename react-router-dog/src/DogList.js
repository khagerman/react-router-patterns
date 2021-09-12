import React from "react";
import { Link } from "react-router-dom";

function DogList({ dogs }) {
  return (
    <>
      <h1>Meet some dogs!</h1>
      <ul>
        {dogs.map((dog) => (
          <li key={dog.name}>
            <Link to={`/dogs/${dog.name.toLowerCase()}`}> {dog.name}!</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default DogList;
