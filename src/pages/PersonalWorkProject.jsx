import { useParams } from "react-router-dom";
import personalProjects from "../data/personal_projects.json";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import {useState} from "react";
import {Helmet} from "react-helmet-async";

export default function PersonalWorkProject() {
    const {slug} = useParams();
    const project = personalProjects.find(p => p.slug === slug);

    //lightbox stuff
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    if(!project) {
        return <p>Project not found.</p>;
    }

    const slides = project.images.map((image, index) => ({
        src: image, 
        title: project.names?.[index] ?? "",
        description: project.descriptions?.[index] ?? ""
    }));

    return (
        <>
            <Helmet><title>{project.title} - Kassandra Eller</title></Helmet>
            <h1 className = "project-title">{project.title}</h1>

            {/* checks for the senior exhibtion */}
            {project.venue && <p className = "project-meta">{project.venue}</p>}
            {project.date && <p className = "project-meta">{project.date}</p>}
            {project.artist_statement && 
            (<a href = {project.artist_statement} target = "_blank" 
            rel = "noopener noreferrer" className = "project-meta">Artist Statement</a>)}
            
            { /* pulling info from the JSON */}
            <div className = "image-grid">
                {project.images.map((image, index) => (
                    <div key = {index} 
                    onClick = {() => {setIndex(index); setOpen(true);}} 
                    className = "image-card" tabIndex = {0} 
                    onKeyDown = {e => e.key === "Enter" && (setIndex(index), setOpen(true))}>
                        <img src = {image} alt = {project.descriptions?.[index] ?? ""}/>
                        {(project.names?.[index] || project.descriptions?.[index]) && (
                        <div className = "image-overlay">
                            {project.names?.[index] && (
                                <p className = "image-overlay--name">{project.names[index]}</p>
                            )}

                            {project.descriptions?.[index] && (
                                <p className = "image-overlay--description">{project.descriptions[index]}</p>
                            )}
                        </div>
                    )}
                    </div>
                ))}
            </div>    

            <Lightbox
                open = {open}
                close = {() => setOpen(false)}
                slides = {slides}
                index = {index}
                plugins = {[Captions]}
                captions = {{showToggle: false, descriptionTextAlign: "center"}}
            />
        </>
    );
}
