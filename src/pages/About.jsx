import { Helmet } from "react-helmet-async";

export default function About() {
    return (
        <>
            <Helmet><title>About - Kassandra Eller</title></Helmet>
            <p>
                Kassandra Eller is a visual artist who experiments with how photographic processes intertwine with the ideas of how one views family, nature, and life itself. She strives to reveal the intricacies of how each being reacts to strife and trauma in her works.
            </p>
            <p>
                Eller earned her BFA in Studio Art from Central Washington University in March 2022. As an undergraduate, she held the position of Director of Photography for PULSE Magazine, based in Ellensburg, Washington, and concluded an internship with Magnum Photos in New York. She is currently an intern at Lenscratch, working directly under Aline Smithson.
            </p>
            <p>
                Eller is currently open to freelance work.
            </p>
            <p>
                {/*Ensure the CV link actually goes somewhere*/}
                To download her CV, <a href = "/pdfs/CV.pdf" target = "_blank" rel = "noopener noreferrer">click here.</a>
            </p>
            <p>Email: <a href = "mailto:kassandraellerphotography@gmail.com">kassandraellerphotography@gmail.com</a></p>

            {/*Potentially do a contact form here?*/}
        </>
    );
};