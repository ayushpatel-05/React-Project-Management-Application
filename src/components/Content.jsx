import NoProject from "./NoProject";
import CreateProject from "./CreateProject";
import Project from "./Project";

const data = [{
    header: 'Mastering React',
    description: `This is a React course \n And this is my project`,
    date: 'July 5, 2024'
}]

export default function Content() {
    return (
            <>
                {/* <NoProject></NoProject> */}
                {/* <CreateProject></CreateProject> */}
                <Project header={data[0].header} description={data[0].description} date={data[0].date}></Project>
            </>
    )
}