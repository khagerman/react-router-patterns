import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./NewColorForm.css";
const NewColorForm = ({ addColor, colors }) => {
  const initialState = {
    color: "",
  };
  const history = useHistory();
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { color } = formData;
    addColor((colors) => [color, ...colors]);
    setFormData(initialState);
    history.push("/colors");
  };

  return (
    <form className="NewColorForm" onSubmit={handleSubmit}>
      <label htmlFor="color">Add another color!</label>
      <input
        id="color"
        type="text"
        name="color"
        placeholder="color"
        value={formData.color}
        onChange={handleChange}
        colors={colors}
        addColor={addColor}
      />

      <button>Add Color</button>
    </form>
  );
};

export default NewColorForm;
