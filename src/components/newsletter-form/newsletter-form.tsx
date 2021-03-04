import React, { useState } from "react";
import { Constants } from "../../shared/constants/constants";
import { Validation } from "../../shared/utilities/string-utility";
import './style.css';

interface NewsletterFormProps {
}

const NewsletterForm: React.FC <NewsletterFormProps> = () => {
    const [emailField, setEmailField] = useState('');
    const [emailError, setEmailError] = useState(false);

    const updateEmail = (_event: React.ChangeEvent<HTMLInputElement>) => {
        setEmailField(_event.target.value);
    }

    const validateEmailField = (_event: React.MouseEvent<HTMLButtonElement>) => {
        setEmailError(!Validation.checkEmail(emailField));
    }

    return (
        <>
            <div className={`newsletter-form ${emailError ? 'error' : ''}`}>
                <div className='email-container'>
                    <input 
                        type='text' 
                        className='email-field'
                        value={emailField} 
                        onChange={(event) => updateEmail(event)} 
                    />
                    <div className='email-error'>
                        <span>{Constants.labels.emailError}</span>
                    </div> 
                </div>
                <button 
                    className='validate-email-field' 
                    onClick={(event) => validateEmailField(event)}
                    /*disabled={!!emailError}*/
                > {Constants.labels.subscribeButton}
                </button>
            </div>
        </>
    );
}
export default NewsletterForm;