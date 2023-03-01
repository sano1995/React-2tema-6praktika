import React from 'react';
import { AiOutlineCheck, AiFillPlaySquare} from "react-icons/ai";

function Task(props){
let wallp = (props.status) ? "alert alert-success" : "alert alert-dark";


    return(
        <div style = {{width: 80+"%"}} >
            <div class={wallp}  role="alert" >
                <div class="d-flex justify-content-between">
                    <div class="one">
                        {props.status ? <AiOutlineCheck/> : <AiFillPlaySquare/>}
                        {props.text}
                    </div>
                    <div class="two">
                        <button onClick={() => props.statusChange(props.id)}>{props.status ? "Done" : "check"}</button>
                        <button onClick={() => props.deleteTask(props.id)}>delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Task;