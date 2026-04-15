import { useParams } from "react-router-dom";
import personalProjects from "../data/personal_projects.json";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import {useState} from "react";

export default function PersonalWorkProject() {
    const {slug} = useParams();
    const project = personalProjects.find(p => p.slug === slug);

    //lightbox stuff
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    if(!project) {
        return <p>Project not found.</p>;
    }

    const slides = project.images.map((image, index) => ({src: image, description: project.descriptions?.[index] ?? ""}));
    console.log(slides);


    return (
        <>
            <h1>{project.title}</h1>

            {/* checks for the senior exhibtion */}
            {project.venue && <p>{project.venue}</p>}
            {project.date && <p>{project.date}</p>}
            {project.artist_statement &&  (<a href = {project.artist_statement} target = "_blank" rel = "noopener noreferrer">Artist Statement</a>)}
            

            { /* pulling info from the JSON */}
            <div className = "image-grid">
                {project.images.map((image, index) => (
                    <div key = {index} onClick = {() => {setIndex(index); setOpen(true);}} className = "image-card">
                        <img src = {image} alt = {project.descriptions?.[index] ?? ""}/>
                        {project.descriptions?.[index] && (<p>{project.descriptions[index]}</p>)}
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
