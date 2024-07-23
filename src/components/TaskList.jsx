import TaskItem from "./TaskItem"

export default function TaskList({taskList, deleteTask}) {
    return (
        <ul className="bg-[#e1dfdd] px-4 py-10">
            {/* <TaskItem>Learn the basics</TaskItem> */}
            {/* <li>Learn the basics</li> */}
            {/* <TaskItem>Learn advanced concepts</TaskItem> */}
            {taskList.map((task, index) => {
                return <TaskItem key={task.id} {...{deleteTask}} id={task.id}>{task.task}</TaskItem>
            })}
        </ul>
    )
}