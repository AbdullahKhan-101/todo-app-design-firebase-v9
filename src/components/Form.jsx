import React, { useState } from "react";
import "./Form.css";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const Form = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("data not be empty");
    } else {
      addDoc(collection(db, "tasks"), {
        title,
        createdAt: new Date(),
        completed: false,
      });
      setTitle("");
    }
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h3>Add your task here</h3>
        <div className="input_container">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your task...."
          />
          <button type="submit">Add </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
