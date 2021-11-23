import "./App.css";
import Form from "./components/Form";
import Task from "./components/Task";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase";

const App = () => {
  const [task, setTasks] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "tasks"));

    const unsub = onSnapshot(q, (querySnapshot) => {
      let taskArray = [];
      querySnapshot.forEach((doc) => {
        taskArray.push({ ...doc.data(), id: doc.id });
      });
      setTasks(taskArray);
    });
    return () => unsub();
  }, []);
  console.log(task);

  const toggleComplete = () => {
    updateDoc(doc(db, "tasks", task.id), { completed: !task.completed });
  };

  return (
    <div className="app">
      <Form />
      {task.map((task) => {
        return (
          <Task toggleComplete={toggleComplete} key={task.id} task={task} />
        );
      })}
      {/* <Task /> */}
    </div>
  );
};

export default App;
