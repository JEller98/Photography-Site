import {Link} from "react-router-dom";
import exhibitsList from "../data/exhibits.json";
import {Helmet} from "react-helmet-async";

export default function ExhibitsCategory () {
    return (
        <>
            <Helmet><title>Exhibits - Kassandra Eller</title></Helmet>
            <ul>
                {exhibitsList.map(exhibit => 
                    <li key = {exhibit.slug}>
                        <Link to = {`/exhibits/${exhibit.slug}`}>{exhibit.title}</Link>
                    </li>
                )}
            </ul>
        </>
    );
}