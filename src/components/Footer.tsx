import React from "react";

interface FooterProps {
    title: string;
}

const Footer: React.FC<FooterProps> = ({ title }) => {
    return(
        <footer>
            <p>Aprendiendo react + ts + astro</p>
            <p>{ title }</p>
        </footer>
    );
}

export default Footer;
