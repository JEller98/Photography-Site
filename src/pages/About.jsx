import { Helmet } from "react-helmet-async";

export default function About() {
    return (
        <>
            <Helmet><title>About - Kassandra Eller</title></Helmet>
            
            <div className = "about-container">
                {/* replace aria-hidden with meaningful alt text */}
                <div className = "about-image" aria-hidden = "true"> 
                    <img src = "https://picsum.photos/1920/1080" />
                </div>

                <div className = "about-content">
                    <p>
                        Kassandra Eller is a visual artist working between digital and analog processes, often using alternative photographic techniques to keep a physical hand in the act of image-making. Her work moves through ideas of memory, trauma, and place, considering how identity is shaped by what we carry and what we return to. Themes of nature, femininity, and family weave throughout her images, where the personal and environmental begin to overlap.
                    </p>
                    <p>
                        Her practice leans into both experimentation and intuition, allowing images to shift and settle into something felt rather than fixed.
                    </p>
                    <p>
                        Eller received her BFA in Studio Art from Central Washington University in 2022, where she was Director of Photography for PULSE Magazine and completed an internship with Magnum Photos in New York. She is currently an editor at Lenscratch, an online publication focused on contemporary photography.                    </p>
                    <p>
                        Her work has been exhibited regionally, including in Seattle, WA, Portland, OR, and Los Angeles, CA, and beyond.
                    </p>
                    <p>
                        To download her CV, <a href = "/pdfs/CV.pdf" target = "_blank" rel = "noopener noreferrer">click here.
                        <span className = "sr-only"> (opens in new tab)</span></a>
                    </p>
                    <p>For inquiries about her work, process, or purchasing prints, please reach out at <a href = "mailto:kassandraellerphotography@gmail.com">kassandraellerphotogrpahy@gmail.com.</a></p>
                </div>
            </div>
            {/*Potentially do a contact form here?*/}
        </>
    );
};