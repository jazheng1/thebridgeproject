import Navbar from './components/navbar';
import Login from './pages/login';
import TaskList from './pages/todo';
import "./styles.css"

export default function App() {
  // function toggleTodo(id, completed) {
  // }

  return (
    <div className='App'>
      <Navbar />  
      {/* <Login /> */}
      <TaskList />
    </div>
  )
}