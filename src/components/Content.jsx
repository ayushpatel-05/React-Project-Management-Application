import NoProject from "./NoProject";
import CreateProject from "./CreateProject";
import Project from "./Project";
import { useState } from "react";

const data = [{
    header: 'Mastering React',
    description: `This is a React course \n And this is my project`,
    date: 'July 5, 2024'
}]

export default function Content({createProject, currentProject, updateTaskList}) {
    console.log(currentProject);
    return (
            <>
                {currentProject == -2 ? <NoProject/> : null}
                {currentProject == -1 ? <CreateProject createProject={createProject}/> : null}
                {(currentProject != -1 && currentProject != -2) ? <Project {...currentProject} {...{updateTaskList}}/> : null}
            </>
    )
}