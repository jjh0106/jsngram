import React from 'react';
import propTypes from 'prop-types';
import LogoFacebook from 'react-ionicons/lib/LogoFacebook';
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
        <span className={formStyles.facebookLink}>
            <LogoFacebook fontSize="20px" color="#385185" />
            {context.t('Log in with Facebook')}
        </span>
        <span className={formStyles.forgotLink}>{context.t('Forgot password?')}</span>
    </div>
);

LoginForm.propTypes = {
    usernameValue: propTypes.string.isRequired,
    passwordValue: propTypes.string.isRequired,
    handleInputChange: propTypes.func.isRequired,
    handleSubmit: propTypes.func.isRequired,
}

LoginForm.contextTypes = {
    t: propTypes.func.isRequired
}

export default LoginForm;