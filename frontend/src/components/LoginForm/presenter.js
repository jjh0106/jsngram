import React from 'react';
import propTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';
import formStyles from 'shared/formStyles.module.scss';

const LoginForm = (props, context) => (
    <div className={formStyles.formComponent}>
        <form className={formStyles.form} onSubmit={props.handleSubmit}>
            <input 
                type="text" 
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
                value={context.t('Log in')} 
                className={formStyles.button} 
            />
        </form>
        <span className={formStyles.divider}>{context.t('or')}</span>
        <FacebookLogin 
            appId="299834697373050"
            autoLoad={false}
            fields="name,email,picture"
            callback={props.handleFacebookLogin}
            cssClass={formStyles.facebookLink}
            icon="fa-facebook-official"
        />
        <span className={formStyles.forgotLink}>{context.t('Forgot password?')}</span>
    </div>
);

LoginForm.propTypes = {
    usernameValue: propTypes.string.isRequired,
    passwordValue: propTypes.string.isRequired,
    handleInputChange: propTypes.func.isRequired,
    handleSubmit: propTypes.func.isRequired,
    handleFacebookLogin: propTypes.func.isRequired,
}

LoginForm.contextTypes = {
    t: propTypes.func.isRequired
}

export default LoginForm;