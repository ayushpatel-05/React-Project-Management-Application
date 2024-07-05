import Button from "./Button"

export default function SideBar() {
    return (
        <div className="flex flex-col w-1/5 min-h-screen bg-[#100e0c] text-white border rounded-tr-2xl pl-14 pt-20 gap-y-10 items-start">
            <h1 className="text-2xl font-bold">YOUR PROJECTS</h1>
            <Button textColor="#9a9692" bgColor="#322e2a" text="+ Add Project"></Button>
            <ul>
                
            </ul>
        </div>
    )
}