import {Link} from "react-router-dom";
import personalProjects from "../data/personal_projects.json";
import {useState, useRef, useEffect} from "react";
import {Helmet} from "react-helmet-async";

export default function PersonalWork() {
    //setting up the crossfade
    const [layers, setLayers] = useState({front: null, back: null});
    const [fading, setFading] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        personalProjects.forEach(project => {
            const img = new Image();
            img.src = project.images[0];
        })
    })

    function handleFocus(project) {
        const newImage = project.images[0];

        if (newImage === layers.front) return;

        //cancel in-progress transitions
        if (timerRef.current) clearTimeout(timerRef.current);

        //load into back, then swap back and front
        setLayers(prev => ({front: prev.front, back: newImage}));
        setFading(true);

        timerRef.current = setTimeout(() => {
            setLayers({front: newImage, back: prev.back});
            setFading(false);
        }, 600);
    }

    return (
        <>
            <Helmet><title>Kassandra Eller</title></Helmet>
            
            {/* back layer */}
            <div className = "work-background" style = {layers.back ? {backgroundImage: `url(${layers.back})`} : {}} />
    
            {/* front layer */}
            <div className = "work-background work-background--front" 
            style = {{backgroundImage: layers.front ? `url(${layers.front})` : "none", opacity: fading ? 0 : 1}}></div>

            <div className = "work-overlay" />

            <ul className = "work-list">
                {personalProjects.map(project => 
                    <li key = {project.slug}>
                        <Link to = {`/${project.slug}`} onMouseEnter = {() => handleFocus(project)} onFocus = {() => handleFocus(project)}>
                            {project.title}
                        </Link>
                    </li>
                )}
            </ul>
        </>
    );
}