// utils.js
export const validateProjectData = (projectData) => {
    return (
      projectData &&
      projectData.title &&
      projectData.description &&
      projectData.date &&
      projectData.title.trim() !== '' &&
      projectData.description.trim() !== '' &&
      projectData.date.trim() !== ''
    );
  };
  