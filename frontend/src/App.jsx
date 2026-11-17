import tasks from "./tasks.json";
import TaskList from "./components/TaskList";
import './App.css';
import Header from './components/Header';
<Header taskCount={tasks.length} />
function App() {
  return (
  <div className="app">
  <h1>Student Assistant</h1>
  <TaskList tasks={tasks} />
  </div>

  )
}

export default App
