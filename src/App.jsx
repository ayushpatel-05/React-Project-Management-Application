import SideBar from "./components/Sidebar";
import Content from "./components/Content";
import { useState } from "react";


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

  console.log(projectList);

  const projectTitleList = projectList.map((project) => {
    return project.title;
  });

  function handelProjectCreation(newProject) {
    setProjectList((prevState) => {
      const updatedProjectList = prevState.map((project) => {
        const taskList = [...project.taskList];
        return {...project, taskList: taskList};
      });
      newProject.id = prevState.length;
      newProject.taskList = [];
      updatedProjectList.push(newProject)
      return updatedProjectList;
    })
  };

  function handelProjectSwitch(projectId) {
    setCurrentProject(projectId);
  }

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
      <div className="flex">
      <SideBar projectTitleList={projectTitleList} switchProject={handelProjectSwitch} currentProject={currentProject}></SideBar>
      <Content createProject={handelProjectCreation} 
      currentProject={currentProject>=0 ? projectList[currentProject] : currentProject}/>
      </div>
    </>
  );
}

export default App;
