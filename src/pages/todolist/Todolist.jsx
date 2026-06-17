import React, { useState } from 'react';
import { PiSketchLogoDuotone } from 'react-icons/pi';

function Todolist(props) {
    const [count, setCount] = useState(0);
    const [Task, setTask] = useState("");
    const [todo, setTodo] = useState([
        {
            index: 1,
            title: "quet nha",
            status: false
        },
        {
            index: 2,
            title: "lau nha",
            status: false
        }
    ]);
    const handleAdd = () => {
        const newTodo = {
            title: Task,
            status: false
        }
        setTodo([...todo, newTodo]);
        setTask("");
    }
    return (
        <div>
            <p className='text-center'>To do list</p>
            <p className='text-center mt-3.5'>{Task}</p>
            <div className="box flex gap-3 justify-center mb-3">
                <button onClick={() => setCount(count > 0 ? count - 1 : count)} className='bg-red-600 py-2 px-3.5 rounded-xl'>--</button>
                <button onClick={() => setCount(count + 1)} className='bg-red-600 p-2.5 rounded-xl'>++</button>
            </div>
            <div className='flex gap-2 justify-center'>
                <input value={Task} onChange={(e) => setTask(e.target.value)} type="text" placeholder='What to do ?' className='p-2 border-2 rounded-xl pr-10' />
                <button onClick={handleAdd} className='text-white bg-red-600 p-2 rounded-xl'>Add</button>
            </div>
            {
                todo.map((item, index) => (
                    <div className='flex justify-between items-center px-2 mx-2 mt-3 bg-black text-white'>
                        <p>{index + 1}</p>
                        <p>{item.title}</p>
                        <div className="box-button flex gap-2 py-1">
                            <button className='py-3 px-3 bg-blue-500 rounded-xl '>Edit</button>
                            <button className='py-3 px-2.5 bg-red-600 rounded-xl'>Delete</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Todolist;