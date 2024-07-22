import Button from "./Button"
import { useState } from "react"
import Input from "./Input"
import TaskList from "./TaskList"

export default function Project({id, title, description, date, taskList, updateTaskList}) {
    const [task, setTask] = useState("");

    function handelUpdateTask(e) {
        // console.log(e);
        setTask(e.target.value);
    }

    return (
        <div className=" m-8 mt-20 flex flex-col w-full max-w-4xl min-h-screen gap-5">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-4xl font-bold">Mastering React</h1>
                <Button text="Delete"></Button>
            </div>
            <p className="">July 5, 2024</p>
            <p className="whitespace-pre-line">{description}</p>
            <hr className="bg-[#ceccca] h-1"></hr>

            <h1 className="font-bold text-3xl">Tasks</h1>
            <div className="flex gap-1">
                <input onChange={handelUpdateTask} type="text" className="bg-[#e1dfdd] w-72 px-2 focus:outline-blue-700"/>
                <Button handelClick={updateTaskList} parameter={task} text="Add Task"></Button>
            </div>

            <TaskList taskList={taskList}></TaskList>
        </div>
    )
}