import {Link} from "react-router-dom";
import personalProjects from "../data/personal_projects.json";
import {useState} from "react";

export default function PersonalWork() {
    const [activeProject, setActiveProject] = useState(null);

    return (
        <>
            <div className = "work-background" style = {activeProject ? {backgroundImage: `url(${activeProject.images[0]})`} : {}} />
        
            <div className = "work-overlay" />

            <ul className = "work-list">
                {personalProjects.map(project => 
                    <li key = {project.slug}>
                        <Link to = {`/${project.slug}`} onMouseEnter = {() => setActiveProject(project)}>
                            {project.title}
                        </Link>
                    </li>
                )}
            </ul>
            {/* <div className = "image-grid">
                {personalProjects.map(project => (
                    <Link key = {project.slug} to = {`/work/${project.slug}`}>
                        <div className = "image-card">
                            <img src = {project.images[0]} alt = {project.title}></img>
                            {project.title}
                        </div>
                    </Link>
                ))}
            </div> */}
        </>
    );
}