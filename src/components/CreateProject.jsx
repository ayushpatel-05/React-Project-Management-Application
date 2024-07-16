import Button from "./Button"
import Input from "./Input"
import { useState, useEffect } from "react"
import { validateProjectData } from "../utils/utils";

export default function CreateProject({createProject}) {
    const [projectData, setProjectData] = useState(null);
    // console.log(projectData);

    useEffect(() => {
        console.log(projectData);
      }, [projectData]);

    function handelProjectData(field, value) {
        // value = value.trim();
        setProjectData((oldProjectData) => {
            return {...oldProjectData,
            [field]: value}
        })
    }

    function handelBtnClick(button) {
        if(button == 'save') {
            if(validateProjectData(projectData))
            {
                createProject(projectData);
                setProjectData(null);
            }
        }
        else {
            // console.log("here");
            setProjectData(null);
        }
    }

    return (
        <div className=" m-8 flex flex-col grow max-w-4xl min-h-screen justify-center items-center gap-5">
            <div className="self-end">
                <Button text="Cancel" textColor=" text-[#0e0e0e] " handelClick={handelBtnClick}></Button>
                <Button text="Save" bgColor=" bg-[#100e0c] " textColor=" text-[#ffff] " handelClick={() => handelBtnClick('save')}></Button>
            </div>
            <Input field="Title" type="text" handelProjectData={(event) => handelProjectData('title', event.target.value)} data={projectData ? projectData['title'] : null}></Input>
            <Input field="Description" type="textarea" handelProjectData={(event) => handelProjectData('description', event.target.value)} data={projectData ? projectData['description'] : null}></Input>
            <Input field="Due Date" type="date" handelProjectData={(event) => handelProjectData('date', event.target.value)} data={projectData ? projectData['date'] : null}></Input>
        </div>
    )
}