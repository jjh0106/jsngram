import React from 'react';
import propTypes from 'prop-types';
import LogoFacebook from 'react-ionicons/lib/LogoFacebook';
import formStyles from 'shared/formStyles.module.scss';

const SignupForm = (props, context) => (
    <div className={formStyles.formComponent}>
        <h3 className={formStyles.signupHeader}>{context.t('Sign up to see photos and videos from your friends.')}</h3>
        <button className={formStyles.button}>
            <LogoFacebook fontSize="20px" color="#ffffff" />
            {context.t('Log in with Facebook')}
        </button>
        <span className={formStyles.divider}>{context.t('or')}</span>
        <form className={formStyles.form} onSubmit={props.handleSubmit}>
            <input 
                type="email" 
                placeholder={context.t('Email')} 
                className={formStyles.textInput}
                value={props.emailValue} 
                onChange={props.handleInputChange}
                name="email"
            />
            <input 
                type="text" 
                placeholder={context.t('Full Name')} 
                className={formStyles.textInput}
                value={props.fullnameValue} 
                onChange={props.handleInputChange}
                name="fullname"
            />
            <input 
                type="username" 
                placeholder={context.t('Username')} 
                className={formStyles.textInput} 
                value={props.usernameValue}
                onChange={props.handleInputChange}
                name="username"
            />
            <input 
                type="password" 
                placeholder={context.t('Password')} 
                className={formStyles.textInput} 
                value={props.passwordValue}
                onChange={props.handleInputChange}
                name="password"
            />
            <input 
                type="submit" 
                value={context.t('Sign up')} 
                className={formStyles.button} 
            />
            <p className={formStyles.terms}>
                {context.t('By signing up, you agree to our')} <span>{context.t('Terms & Privacy Policy')}</span>.
            </p>
        </form>
    </div>
);

SignupForm.propTypes = {
    emailValue: propTypes.string.isRequired,
    fullnameValue: propTypes.string.isRequired,
    usernameValue: propTypes.string.isRequired,
    passwordValue: propTypes.string.isRequired,
    handleInputChange: propTypes.func.isRequired,
    handleSubmit: propTypes.func.isRequired
}

SignupForm.contextTypes = {
    t: propTypes.func.isRequired
}

export default SignupForm;