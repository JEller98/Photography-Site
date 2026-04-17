import {Link} from "react-router-dom";
import exhibitsList from "../data/exhibits.json";
import {Helmet} from "react-helmet-async";

export default function ExhibitsCategory () {
    return (
        <>
            {/* concept to revisit when there's more exhibits:
            
            Timeline/list with metadata. 
            A vertical list where each exhibit shows the title large on the left and the venue/date smaller and dimmer to the right, 
            separated by a thin rule.
            
            Doesn't really work when there's only one exhibit though...*/}

            <Helmet><title>Exhibits - Kassandra Eller</title></Helmet>
            <div className = "exhibits-grid">
                {exhibitsList.map(exhibit => 
                    <Link key = {exhibit.slug} to = {`/exhibits/${exhibit.slug}`} className = "exhibit-card">
                        <img src = {exhibit.hero} alt = "" className = "exhibit-card--image"></img>
                        <div className = "exhibit-card--overlay">
                            <h2 className = "exhibit-card--title">{exhibit.title}</h2>
                            <p className = "exhibit-card--venue">{exhibit.venue}</p>
                            <p className = "exhibit-card--date">{exhibit.date}</p>
                        </div>
                    </Link>
                    )}
            </div>
        </>
    );
}