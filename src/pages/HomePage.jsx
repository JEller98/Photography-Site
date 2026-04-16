import {Link} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import {useState, useEffect, useRef} from "react";

//placeholder assets until higher-quality ones are obtained from client
const images = [
    "https://picsum.photos/seed/eller1/1920/1080",
    "https://picsum.photos/seed/eller2/1920/1080",
    "https://picsum.photos/seed/eller3/1920/1080",
    "https://picsum.photos/seed/eller4/1920/1080",
    "https://picsum.photos/seed/eller5/1920/1080",
];

export default function HomePage() {
    //fade animation
    const [layers, setLayers] = useState({front: 0, back: null});
    const [transitioning, setTransitioning] = useState(false);
    const timerRef = useRef(null);
    const intervalRef = useRef(null);

    function advanceTo(nextIndex) {
        if (transitioning) {
            return;
        }

        setLayers(prev => ({front: prev.front, back: nextIndex}));
        setTransitioning(true);

        timerRef.current = setTimeout(() => {
            setLayers({front: nextIndex, back: null});
            setTransitioning(false);
        }, 2500);
    }

    useEffect(() => {
        //preload the images to avoid "pops" where possible
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });

        intervalRef.current = setInterval(() => {
            setLayers(prev => {
                const nextIndex = (prev.front + 1) % images.length;
                advanceTo(nextIndex);
                return prev;
            });
        }, 5000);

        return () => {
            clearInterval(intervalRef.current);
            clearTimeout(timerRef.current);
        }
    }, []);

    return (
        <>
            <Helmet><title>Kassandra Eller</title></Helmet>

        {/* back layer */}
        <div className = "hero-bg" style = {{backgroundImage : `url(${images[layers.back ?? layers.front]})`}} />

        {/* front layer */}
        <div className = {`hero-bg hero-bg--front ${transitioning ? "hero-bg--outgoing" : ""}`}
        style = {{backgroundImage: `url(${images[layers.front]})`}} />

        <div className = "hero-overlay" />

        <div className = "hero-content">
            <h1 className = "hero-title">Kassandra Eller</h1>
            <p className = "hero-subtitle">Visual Artist</p>
            <div className = "hero-links">
                <Link to = "work">Personal Work</Link>
                <Link to = "exhibits">Exhibits</Link>
                
                {/* Editorial work. Client is unsure if it's needed; will stay hidden for the foreseeable future */}
                {/* <Link to = "/editorial"><img src = "/images/editorial-work/photos/tea/hero.webp"></img>Editorial Work</Link> */}
            </div>
        </div>
        </>
    );
}