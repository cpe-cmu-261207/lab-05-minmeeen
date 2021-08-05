import React from 'react';
import { useState } from "react";
import Task from './Task';


const Todo = () => {
    const [input, setInput] = useState<string>("");

    const onChangeCallback = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setInput(ev.target.value);
    }

    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if (ev.key === 'Enter') {
            addTask(input)
        }
    }

    function addTask(input: string) {
        if (input === "") {
            alert("Task cannot be empty");
        }else{
            
        }
    }
    return (
        <div className='mx-auto max-w-4xl'>

            <div className='flex space-x-1'>
                <input className='border border-gray-400 w-full text-2xl'
                    onKeyDown={onKeyDownCallback}
                    onChange={onChangeCallback}
                ></input>

                <button className='border border-gray-400 w-8 font-bold'
                    onClick={() => addTask(input)}
                >+</button>
            </div>

            {/* task zone */}

            {/* <div>
                <Task name={"Ahhhh"}></Task>
            </div> */}
            {/* <Task></Task> */}






        </div>
    )
}

export default Todo