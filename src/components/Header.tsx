import React from "react";

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return(
        <header className="'container mx-auto p-4">
            <h1 className="text-4xl text-sky-800">Ladrillos.club</h1>
            <h3>Estoy en un header!</h3>
        </header>
    );
}

export default Header;