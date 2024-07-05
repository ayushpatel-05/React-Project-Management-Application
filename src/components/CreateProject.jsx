import Button from "./Button"
import Input from "./Input"

export default function CreateProject() {
    return (
        <div className=" m-8 flex flex-col grow max-w-4xl min-h-screen justify-center items-center gap-5">
            <div className="self-end">
                <Button text="Cancel" textColor=" text-[#0e0e0e] "></Button>
                <Button text="Save" bgColor=" bg-[#100e0c] " textColor=" text-[#ffff] "></Button>
            </div>
            <Input field="Title" type="text"></Input>
            <Input field="Description" type="textarea"></Input>
            <Input field="Due Date" type="date"></Input>
            {/* <h1 className='text-2xl text-[#625f5c] font-bold'>No Project Selected</h1>
            <h2 className='text-[#9a9692]'>Select a project or get started with a new one</h2> */}
        </div>
    )
}