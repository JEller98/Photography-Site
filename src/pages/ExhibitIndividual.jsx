import {useParams} from "react-router-dom";
import exhibitsList from "../data/exhibits.json"
import {Helmet} from "react-helmet-async";

export default function ExhibitIndividual() {
    const {slug} = useParams();
    const exhibit = exhibitsList.find(e => e.slug);

    if(!exhibit) {
        return <p>Exhibit not found.</p>;
    }

    return (
        <>
            <Helmet><title>{exhibit.title} - Kassandra Eller</title></Helmet>
            
            <h1 className = "project-title">{exhibit.title}</h1>

            <p className = "project-meta">{exhibit.venue}</p>
            <p className = "project-meta">{exhibit.date}</p>
            <a href = {exhibit.artist_statement} target = "_blank" 
            rel = "noopener noreferrer" className = "project-meta">Artist Statement</a>

            { /* pulling info from the JSON */}
            <div className = "image-grid">
                {exhibit.images.map((image, index) => (
                    <button key = {index}  
                    className = "image-card exhibit-image-card" tabIndex = {0}>
                        <img src = {image} alt = {exhibit.alt_text?.[index] ?? ""}/>
                    </button>
                ))}
            </div>
        </>
    );
}