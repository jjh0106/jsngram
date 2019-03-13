import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from 'redux/configureStore';
import App from 'components/App';
import I18n from 'redux-i18n';
import { translations } from 'translations';

// import 'ReactotronConfig';

// i18n은 2개의 props를 받는다. 번역파일, 애플리케이션 기본 언어, 번역파일 없을 경우 fallback언어

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={ history }>
            <I18n translations={ translations } initialLang="en" fallbackLang="en"> 
                <App />
            </I18n>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
