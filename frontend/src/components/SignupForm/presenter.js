import React from 'react';
import propTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';
import formStyles from 'shared/formStyles.module.scss';

const SignupForm = (props, context) => (
    <div className={formStyles.formComponent}>
        <h3 className={formStyles.signupHeader}>{context.t('Sign up to see photos and videos from your friends.')}</h3>
        <FacebookLogin 
            appId="299834697373050"
            autoLoad={false}
            fields="name,email,picture"
            callback={props.handleFacebookLogin}
            cssClass={formStyles.facebookLink}
            icon="fa-facebook-official"
            textButton={context.t('Log in with Facebook')}
        />
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
                placeholder={context.t('Name')} 
                className={formStyles.textInput}
                value={props.nameValue} 
                onChange={props.handleInputChange}
                name="name"
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
    nameValue: propTypes.string.isRequired,
    usernameValue: propTypes.string.isRequired,
    passwordValue: propTypes.string.isRequired,
    handleInputChange: propTypes.func.isRequired,
    handleSubmit: propTypes.func.isRequired,
    handleFacebookLogin: propTypes.func.isRequired,
}

SignupForm.contextTypes = {
    t: propTypes.func.isRequired
}

export default SignupForm;