import Button from "./Button"

export default function TaskItem(props) {
    return (
        <div className="flex justify-between m-4 mx-4">
            <p>{props.children}</p>
            <button>Clear</button>
            {/* <Button text="Clear"></Button> */}
        </div>
    )
}