import Button from "./Button"

export default function TaskItem({deleteTask, id, ...props}) {
    return (
        <div className="flex justify-between m-4 mx-4">
            <p>{props.children}</p>
            <button onClick={() => deleteTask(id)}>Clear</button>
            {/* <Button text="Clear"></Button> */}
        </div>
    )
}