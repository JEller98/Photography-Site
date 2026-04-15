import {Link} from "react-router-dom";

export default function HomePage() {
    return (
        <div className = "home-grid">
            <Link to = "/work"><img src = "/images/personal-work/ties/PortfolioPlate+copy+72dpi+copy.webp"></img> Personal Work</Link>
            {/* Editorial work. Client is unsure if it's needed; will stay hidden for the foreseeable future */}
            {/* <Link to = "/editorial"><img src = "/images/editorial-work/photos/tea/hero.webp"></img>Editorial Work</Link> */}
        </div>
    );
}