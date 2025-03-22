import React from "react";
import "../../../assets/css/Introduction.css"; // Import the CSS file

interface IntroductionProps {
    title: string;
    subtitle: string;
    description: string;
    closing: string;
}

const Introduction: React.FC<IntroductionProps> = ({ title, subtitle, description, closing }) => {
    return (
        <div className="introduction-container">
            <h1 className="introduction-title">{title}</h1>
            <h2 className="introduction-subtitle">{subtitle}</h2>
            <p className="introduction-description">{description}</p>
            <p className="introduction-closing">{closing}</p>
        </div>
    );
};

export default Introduction;
