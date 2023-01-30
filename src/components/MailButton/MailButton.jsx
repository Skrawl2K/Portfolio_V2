import React from "react";
import { Link } from "react-router-dom";
import './MailButton.css'

const MailButton = ({ mailto, label }) => {
    return (
        <Link className="button"
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};

export default MailButton;