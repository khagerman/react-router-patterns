import React from "react";
import "./ColorPage.css";
import { Link, useParams } from "react-router-dom";

function ColorPage() {
  let { color } = useParams();

  return (
    <>
      <div className="ColorPage" style={{ backgroundColor: color }}>
        <h1>This is {color}!</h1>
        <Link to="/colors">Go Back</Link>
      </div>
    </>
  );
}

export default ColorPage;
