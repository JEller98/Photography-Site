import {useParams} from "react-router-dom";
import personalProjects from "../data/personal_projects.json";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import {useState, useEffect} from "react";
import "../style/projects.css";
import "../style/yarl-override.css";

export default function PersonalWorkProject() {
    const {slug} = useParams();
    const project = personalProjects.find(p => p.slug === slug);

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);

    //lightbox stuff
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    //helmet isn't playing nice, doing this instead
    useEffect(() => {
        if(project?.title) {
            document.title = `${project.title} - Kassandra Eller`;
        }
    }, [project]);

    //disable descriptions on overlay if the user is on a smaller screen
    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 1200);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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

                            {project.descriptions?.[index] && !isMobile && (
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
