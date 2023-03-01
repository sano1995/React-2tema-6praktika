import React, { useState, useEffect } from 'react';
import Task from './Task';


const url= "https://jsonplaceholder.typicode.com/todos";

function Tasks() {


    const [taskList, setTask]= useState([]);
    
    async function getUsers (){
    const response = await fetch ("https://jsonplaceholder.typicode.com/todos");
    const taskList = await response.json();
    setTask(taskList);
    console.log(taskList);
}
useEffect(() => {
    getUsers();
}, []);



function statusChange(id){
    const updateTasks= [...taskList];
    updateTasks.forEach((task) => {
        if (task.id === id){
            task.status = true;
        }
    });
    setTask(updateTasks);
}

function deleteTask(id){
    setTask(taskList.filter((item) => item.id !== id));
}

    const tasks = taskList.map( (task) => {
        return (
            <Task
            key={task.id}
            id={task.id}
            text={task.title}
            status={task.status}
            statusChange={statusChange}
            deleteTask={deleteTask}
            />
        )
    })


    return (
        <div>
            <h1>TO DO LIST</h1>
            {tasks}</div>
    )
};

export default Tasks;