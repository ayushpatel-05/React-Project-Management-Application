import SideBar from "./components/Sidebar";
import Content from "./components/Content";
import { useState } from "react";
import { nanoid } from "nanoid";


// {
//   id: 1,
//   title: "title",
//   description: "sdfs",
//   date: "",
//   taskList: []
// }

function App() {
  const [projectList, setProjectList] = useState([]);
  const [currentProject, setCurrentProject] = useState(-1);//-2 --> NoProject, -1 --> CreateProject, Else Project ID

  console.log("Project List: ",JSON.stringify(projectList));
  console.log("Current Project:", currentProject);

  const projectTitleList = projectList.map((project) => {
    return {title: project.title, id: project.id};
  });

  function handelProjectCreation(newProject) {
    setProjectList((prevState) => {
      const updatedProjectList = prevState.map((project) => {
        const taskList = [...project.taskList];
        return {...project, taskList: taskList};
      });
      newProject.id = nanoid();
      newProject.taskList = [];
      updatedProjectList.push(newProject)
      return updatedProjectList;
    })
  };

  function handelProjectSwitch(projectId) {
    console.log("ProjectID: ",projectId);
    setCurrentProject(projectId);
  }

  function handelProjectTaskUpdation(task) {
    const taskObj = {};
    taskObj.task = task;
    taskObj.id = nanoid();

    setProjectList((oldProjectList) => {
        // oldProjectList[currentProject].taskList.push(task);
        // return 
        const newObj = structuredClone(oldProjectList);
        console.log(JSON.stringify(newObj));
        console.log(currentProject);
        const index = oldProjectList.findIndex(project => project.id == currentProject);
        newObj[index].taskList.push(taskObj);
        return newObj;
    })
  }

  const currentProjectObj = projectList.find(project => project.id == currentProject);

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
      <div className="flex">
      <SideBar projectTitleList={projectTitleList} switchProject={handelProjectSwitch} currentProject={currentProject}></SideBar>
      <Content createProject={handelProjectCreation} 
      currentProject={currentProject>=0 ? currentProjectObj : currentProject}
      updateTaskList={handelProjectTaskUpdation}/>
      </div>
    </>
  );
}

export default App;
