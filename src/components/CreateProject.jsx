import Button from "./Button"

export default function CreateProject() {
    return (
        <div className="flex flex-col grow max-w-4xl min-h-screen justify-center items-center gap-5">
            <div className="self-end">
                <Button text="Cancel" textColor="#0e0e0e"></Button>
                <Button text="Save" bgColor="#100e0c" textColor="#9a9692"></Button>
            </div>
            {/* <img src={noproject} alt="" className='w-20 bg-none '/> */}
            <h1 className='text-2xl text-[#625f5c] font-bold'>No Project Selected</h1>
            <h2 className='text-[#9a9692]'>Select a project or get started with a new one</h2>
        </div>
    )
}