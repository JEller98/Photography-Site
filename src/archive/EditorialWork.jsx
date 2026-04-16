import {Link} from "react-router-dom";
import editorialProjects from "../data/editorial_projects.json";

export default function EditorialWork() {
    return (
        <>  
            {/* Editorial work- hidden for the foreseeable future */}
            {/* {editorialProjects.map(project => (
                <Link key = {project.slug} to = {`/editorial/${project.slug}`}>
                    {project.title}
                </Link>
            ))} */}
        </>
    );
}