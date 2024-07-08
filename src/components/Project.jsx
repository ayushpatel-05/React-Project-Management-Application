import Button from "./Button"
import Input from "./Input"
import TaskList from "./TaskList"

export default function Project({header, description, date, taskList}) {
    return (
        <div className=" m-8 mt-20 flex flex-col w-full max-w-4xl min-h-screen gap-5">
            {/* <div className="self-end">
                <Button text="Cancel" textColor=" text-[#0e0e0e] "></Button>
                <Button text="Save" bgColor=" bg-[#100e0c] " textColor=" text-[#ffff] "></Button>
            </div> */}
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-4xl font-bold">Mastering React</h1>
                <Button text="Delete"></Button>
            </div>
            <p className="">July 5, 2024</p>
            <p className="whitespace-pre-line">{description}</p>
            <hr className="bg-[#ceccca] h-1"></hr>

            <h1 className="font-bold text-3xl">Tasks</h1>
            <div className="flex gap-1">
                <input type="text" className="bg-[#e1dfdd] w-72 px-2 focus:outline-blue-700"/>
                <Button text="Add Task"></Button>
            </div>

            <TaskList></TaskList>
            {/* <Input field="Description" type="textarea"></Input>
            <Input field="Due Date" type="date"></Input> */}
            {/* <h1 className='text-2xl text-[#625f5c] font-bold'>No Project Selected</h1>
            <h2 className='text-[#9a9692]'>Select a project or get started with a new one</h2> */}
        </div>
    )
}