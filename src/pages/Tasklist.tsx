import { useState } from "react"

const Tasklist = () =>{
    const[tasks,setTasks] = useState('');

    const fetchTasks = async()=>{
        
        const response = await fetch('/api/tasks'),
        const data = await response.json();
        setTasks(data);
    };
    const addTask = async(task)=>{
        const response = await fetch('/api.tasks',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({task}),
        });
        fetchTasks();
    };
    
    const DeleteTask = async(id)=>{
        await fetch('/api/tasks/${id}',{method:'DELETE'});
        fetchTasks();
    };

    return (
        <div>
            <h1> Task List</h1>
            <ul>
                {tasks.map(task=>(
                    <li key = {task._id}>{task.name} <button onClick={()=>DeleteTask(task.id)}>Delete</button></li>
                ))}
            </ul>
            <input type="text" placeholder="New Task" onKeyDown={(e) => e.key === 'Enter' && addTask(e.target.value)}/>
        </div>
    );
};

export default Tasklist;
