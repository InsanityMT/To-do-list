import './App.css';
import Header from "./components/Header/Header";
import AddField from "./components/AddField/AddField";
import Task from "./components/Task/Task";
import { useState } from 'react';

function App() {
    const [tasks, setTasks] = useState([]);

    const handleTaskChange = (id, newTask) => {
      setTasks(tasks.reduce((acc, task) => {
        if (task.id === id) {
          return [...acc, newTask]
        }
        return [...acc, task]
      }, []))
    }

    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }

    return (
    <div className="App">
        <Header />
        <AddField add={(value) => setTasks([...tasks, value])} />
        {tasks.map((task) => {
          return <Task message={task.value} deleteTask={deleteTask} checked={task.checked} id={task.id} key={task.id} onChange={handleTaskChange} />
        })}
    </div>
  );
}

export default App;
