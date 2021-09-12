import React from "react";
import { Link, useParams } from "react-router-dom";

function DogDetails({ dogs }) {
  const { name } = useParams();
  console.log(name);
  let dog = dogs.filter((dog) => dog.name.toLowerCase() === name)[0];

  let facts = dog.facts;

  return (
    <>
      <h1>About {dog.name} </h1>

      <ul>
        <li> Age: {dog.age}</li>
        <li>
          Facts-
          {facts.map((fact) => (
            <li>{fact}</li>
          ))}
        </li>
      </ul>
      <img src={dog.src} />
      <br></br>
      <Link to="/dogs">Back</Link>
    </>
  );
}

export default DogDetails;
