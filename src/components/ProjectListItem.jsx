export default function ProjectListItem({projectName, isSelected, switchProject, id}) {
    let extraClass = "";
    if(isSelected)extraClass = "brightness-200 bg-[#131313] rounded-sm"
    return (
        // <li className={`min-w-48 mb-3 text-[#9a9692] hover:brightness-200 ${extraClass}`}>
        //     {projectName}
        // </li>
        <li onClick={() => switchProject(id)} className={`px-2 w-48 mb-3 text-[#9a9692] hover:brightness-200 ${extraClass}`}>
            {projectName}
        </li>
    )
}