import React from "react";
import "./Footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div>Movie App</div>
            <div>{new Date().getFullYear()} Mr. Abhishek Kumar  All Rights Reserved</div>
        </div>
    );
};

export default Footer;