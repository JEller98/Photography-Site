import NavBar from "./NavBar";
import {Outlet, useNavigate} from "react-router-dom";

export default function Layout() {
    const navigate = useNavigate();

    return (
        <>
            <NavBar />
            <main>
                <Outlet />
            </main>
            <footer>
                {/* social links here */}
                <a href = "https://www.instagram.com/k.ellerphotos/" target = "_blank" rel = "noopener noreferrer"><img src = "/images/footer/instagram.svg" alt = "Visit Instagram Page"></img></a>
                <a href = "https://www.facebook.com/Kassandra-Eller-Photography-104628328407197/about/" target = "_blank" rel = "noopener noreferrer"><img src = "/images/footer/facebook.svg" alt = "Visit Facebook Page"></img></a>
                <a href = "https://www.linkedin.com/in/kassandra-eller-411356195" target = "_blank" rel = "noopener noreferrer"><img src = "/images/footer/linkedin.svg" alt = "Visit LinkedIn Profile"></img></a>
            </footer>
        </>
    );
};