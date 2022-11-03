import "./App.css";
import { useState } from "react";
import TaskPage from "./components/TaskPage";
import ErrorPage from "./components/ErrorPage";
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
import {v4 as uuidv4} from 'uuid';
import { useParams } from "react-router";

const App = () => {
  const initialTasks = [
    {
      id: uuidv4(),
      name: "Feed the cats",
      done: false,
    },
    {
      id: uuidv4(),
      name: "Clean the bedroom",
      done: true,
    },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [addNewTask, setNewTask] = useState('');
  const [editFlag, setEditFlag] = useState(false);
  const [temp, setTemp] = useState(true);


  //filters all task done:true
  const doneTasks = tasks.filter((task) => task.done);
  //filters all task done:false
  const notDone = tasks.filter((task) => !task.done);

  const completeTaskHandler = (id) => {
    let newState = [...tasks];
 
    //look for the index of the given ID
    const index = newState.findIndex((task) => task.id === id);
  
    //change the done from false to true
    newState[index].done = true;

    //set the State to the new value
    setTasks(newState);
  };

  const onChange = (e) =>{
    setNewTask(e.target.value)
          
}
  //ADD NEW TASK
  const addingTask = (e) => {
    e.preventDefault();
    const AddednewTask = {
      id: uuidv4(),
      name: addNewTask,
      done: false
      }
  
    const updatedTask = tasks.filter(task => task.name.trim().toLowerCase() === addNewTask.trim().toLowerCase())
    
      if(addNewTask.trim() !== "" && updatedTask.length === 0) {
        const newTask = [...tasks, AddednewTask]
        setTasks(newTask)
        alert(`Task Added Successfully`)
        setEditFlag(false)
      }else if (addNewTask.trim() === ""){
        alert(`Task empty. Please input task.`)
      }else{
        alert(`Task already exists. Please input new task.`)
      }
      setNewTask('');    
}
 
  // DELETE TASK;
  const deleteTask = (id) => {
    const newTask = tasks.filter(task => task.id !==id)
    setTasks(newTask)
  }

  //TOGGLE BUTTON - ADD
  const handleFlag=(e)=> {
    e.preventDefault()
    editFlag ? setEditFlag(false) : setEditFlag(true) 
  }

 
 const value=(i)=>{
  let val = i;
  setTemp(val);
  
 }

  return (
    <div className="container">
     { temp ? 
      <div className="App">
       <div>
         <h1>TO-DO LIST</h1> <br></br> <br></br>
         <div className="link">   
           <Link className ="links" to="All">All Tasks</Link> | <Link className ="links" to="Done"> Done Tasks</Link> | <Link className ="links" to="Pending"> Pending Tasks</Link> 
         </div> <br></br>
         <nav className="Nav">
             {!editFlag && 
              <button className = "addTask-Btn" onClick={handleFlag}> Add Task </button>          
            } <br></br>
            {editFlag && <form>
                <div>
                <label> Task:  </label>
                  <input name="name" type="text" onChange={onChange} value={addNewTask}/>
                  <button  className = "add-Btn" onClick={(e)=>addingTask(e)}> <img src="https://cdn-icons-png.flaticon.com/512/1721/1721910.png" alt="plus icon" width="35px"></img> </button>
                  <button  className = "cancel-Btn" onClick={(e)=>handleFlag(e)} > <img src="https://cdn-icons-png.flaticon.com/512/1721/1721955.png" alt="cancel icon" width="35px"></img>  </button>
                </div> 
              </form>
            } <br></br>
        </nav>
        <br/>
      </div>
      <div className="Task-Cont">
        <Routes>
          <Route path=":status"  element={<TaskPage tasks={tasks} completeTask={completeTaskHandler} onDelete = {deleteTask} value={value} />}  />
        </Routes>
        
      </div>
    </div>
    :
    <div> 
    <Routes>
    <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    </div> 
    }
    </div>
  );
};

export default App;
