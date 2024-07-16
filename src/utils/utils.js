// utils.js
export const validateProjectData = (projectData) => {
    return (
      projectData &&
      projectData.title.trim() !== '' &&
      projectData.description.trim() !== '' &&
      projectData.date.trim() !== ''
    );
  };
  