export default function ProjectListItem({projectName, isSelected}) {
    let extraClass = "";
    if(isSelected)extraClass = "brightness-200 bg-[#131313] rounded-sm"
    return (
        <li className={`min-w-48 mb-3 text-[#9a9692] hover:brightness-200 ${extraClass}`}>
            {projectName}
        </li>
    )
}