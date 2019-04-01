import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from 'redux/modules/user';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getPhotoLikes: () => {
            dispatch(userActions.getPhotoLikes(ownProps.id)); // 팝업 열었을 때 좋아요한 유저리스트 가져오기.
        }
    }
}

export default connect(null, mapDispatchToProps)(Container);
