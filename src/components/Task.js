import React from "react";


const Task = ({status, completeTask, id,onDelete,name}) =>{
  
  const componentToShow=()=> {
    if (status) {
      return <p> Task completed! </p>;
    } else if (!status) {
      return (
        <button className = "done-Btn" onClick={() => completeTask(id)}>
          <img src="https://cdn-icons.flaticon.com/png/512/2550/premium/2550322.png?token=exp=1660618965~hmac=03217e84350c90bbbaeea538913d4a5b" alt="check icon" width="35px"></img>
        </button>
      );
    } else {
      return <div></div>;
    }
  }
  const handleDelete = (id) => {
   onDelete(id)
  }
  
    return (
      <div> 
        <div className="Task">
          <div>
            <h2>{name}</h2>
            {componentToShow()}
            <button className = "delete-Btn" onClick={()=>handleDelete(id)} ><img src="https://cdn-icons-png.flaticon.com/512/6711/6711573.png" alt="trashcan icon" width="35px"></img></button>
          </div>
      
        </div>
      </div>
    );
    }
export default Task;
