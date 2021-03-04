import React from "react";
import { Constants } from "../../shared/constants/constants";
import NewsletterForm from "../newsletter-form/newsletter-form";
import './style.css';

interface FooterProps {}

const Footer: React.FC <FooterProps>= () => {

    return (
        <div className='footer'>
            <div className='subscribe-container'>
                <span>{Constants.labels.subscribeToNewsletter}</span>
                <NewsletterForm />
            </div>
            <div className='links'>
                <a href={Constants.url.linkedin} title=''>{Constants.labels.linkedin}</a>
                <a href={Constants.url._500px} title=''>{Constants.labels._500px}</a>
            </div>
        </div>
    );
}

export default Footer;