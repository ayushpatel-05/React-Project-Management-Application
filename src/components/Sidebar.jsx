import Button from "./Button"
import ProjectListItem from "./ProjectListItem"

export default function SideBar({projectTitleList, switchProject, currentProject}) {
    return (
        <div className="flex flex-col w-1/5 min-h-screen bg-[#100e0c] text-white border rounded-tr-2xl gap-y-10 items-center pt-20 overflow-hidden">
            <h1 className="text-2xl font-bold">YOUR PROJECTS</h1>
            <Button text="+ Add Project" bgColor=" bg-[#322e2a] " textColor="text-[#9a9692]"></Button>
            <ul>
                {projectTitleList.map((project, index) => {
                    {console.log(project.id);}
                    return <ProjectListItem projectName={project.title} isSelected={index==currentProject} id={project.id} switchProject={switchProject}></ProjectListItem>
                })}
                {/* <ProjectListItem projectName="Learning React" isSelected={true} ></ProjectListItem>
                <ProjectListItem projectName="Mastering React" isSelected={false}></ProjectListItem> */}
            </ul>
        </div>
    )
}