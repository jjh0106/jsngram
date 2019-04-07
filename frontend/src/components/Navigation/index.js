import { connect } from 'react-redux';
import Container from './container';
import { push } from 'react-router-redux';
import { actionCreators as userActions } from 'redux/modules/user';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        goToSearch: (searchTerm) => {
            dispatch(push(`/search/${searchTerm}`));
        },
        handleLogout: () => {
            if( window.confirm('로그아웃 하시겠습니까?') ){
                dispatch(userActions.logout());
            }
            return false;
        }
    }
}

export default connect(null, mapDispatchToProps)(Container);