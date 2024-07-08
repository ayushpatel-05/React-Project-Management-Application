import Button from "./Button"
import ProjectListItem from "./ProjectListItem"

export default function SideBar() {
    return (
        <div className="flex flex-col w-1/5 min-h-screen bg-[#100e0c] text-white border rounded-tr-2xl pl-14 pt-20 gap-y-10 items-start">
            <h1 className="text-2xl font-bold">YOUR PROJECTS</h1>
            <Button text="+ Add Project" bgColor=" bg-[#322e2a] " textColor="text-[#9a9692]"></Button>
            <ul>
                <ProjectListItem projectName="Learning React" isSelected={true}></ProjectListItem>
                <ProjectListItem projectName="Mastering React" isSelected={false}></ProjectListItem>
            </ul>
        </div>
    )
}