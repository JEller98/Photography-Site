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

    // needed for YARL
    const slides = project.images.map((image, index) => ({
        src: image, 
        title: project.names?.[index] ?? "",
        description: project.descriptions?.[index] ?? ""
    }));

    return (
        <>
            <Helmet><title>{project.title} - Kassandra Eller</title></Helmet>
            <h1 className = "project-title">{project.title}</h1>
            
            <div className = "image-grid">
                {/* images */}
                {project.images.map((image, index) => (
                    <button key = {index} 
                    onClick = {() => {setIndex(index); setOpen(true);}} 
                    className = "image-card" tabIndex = {0}>
                        {/* setting up overlay for a given image within the overall project */}
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
                    </button>
                ))}
            </div>    

            {/* YARL config */}
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
