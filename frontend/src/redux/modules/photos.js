// imports
import { actionCreators as userActions } from 'redux/modules/user';

// actions

const SET_FEED = "SET_FEED";
const LIKE_PHOTO = "LIKE_PHOTO";
const UNLIKE_PHOTO = "UNLIKE_PHOTO";

// action creators

function setFeed(feed){
    return {
        type: SET_FEED,
        feed
    };
}

function doLikePhoto(photoId){
    return {
        type: LIKE_PHOTO,
        photoId
    };
}

function doUnlikePhoto(photoId){
    return {
        type: UNLIKE_PHOTO,
        photoId
    };
}

// API actions
function getFeed(){
    return (dispatch, getState) => {
        const { user: { token } } = getState();
        fetch('/images/', {
            headers: {
                'Authorization': `JWT ${token}`
            }
        })
        .then(response => {
            if( response.status === 401 ){
                dispatch(userActions.logout());
            } 
            return response.json();
        })
        .then(json => dispatch(setFeed(json)));
    }
}

function likePhoto(photoId){
    return (dispatch, getState) => {
        dispatch(doLikePhoto(photoId));
        const { user: { token } } = getState();
        fetch(`/images/${photoId}/likes/`, {
            method: 'POST',
            headers: {
                Authorization: `JWT ${token}`
            }
        })
        .then(response => {
            if (response.staus === 401) {
                dispatch(userActions.logout());
            } else if (!response.ok) {
                dispatch(doUnlikePhoto(photoId));
            }
        })
    };
}

function unlikePhoto(photoId){
    return (dispatch, getState) => {
        dispatch(doUnlikePhoto(photoId)); // 먼저 뷰에서 하트 색상을 바꿔준다.
        const { user: { token } } = getState();
        fetch(`/images/${photoId}/unlikes/`, {
            method: 'DELETE',
            headers: {
                Authorization: `JWT ${token}`
            }
        })
        .then(response => {
            if (response.staus === 401) {
                dispatch(userActions.logout());
            } else if (!response.ok) {
                dispatch(doLikePhoto(photoId)); // API 통신에 문제가 생긴다면 다시 하트 색상, 좋아요 숫자를 되돌린다.
            }
        })
    };
}

// initial state
const initialState = {};

// reducer
function reducer(state = initialState, action){
    switch(action.type){
        case SET_FEED:
            return applySetFeed(state, action);
        case LIKE_PHOTO:
            return applyLikePhoto(state, action);
        case UNLIKE_PHOTO:
            return applyUnlikePhoto(state, action);
        default:
            return state;
    }
}

// reducer functions
function applySetFeed(state, action){
    const { feed } = action;
    return {
        ...state,
        feed
    }
}

function applyLikePhoto(state, action){
    const { photoId } = action;
    const { feed } = state;
    const updatedFeed = feed.map(photo => {
        if( photo.id === photoId ){
            return {
                ...photo,
                is_liked: true,
                like_count: photo.like_count + 1
            }
        }
        return photo;
    });
    return {
        ...state,
        feed: updatedFeed
    }
}

function applyUnlikePhoto(state, action){
    const { photoId } = action;
    const { feed } = state;
    const updatedFeed = feed.map(photo => {
        if( photo.id === photoId ){
            return {
                ...photo,
                is_liked: false,
                like_count: photo.like_count - 1
            }
        }
        return photo;
    });
    return {
        ...state,
        feed: updatedFeed
    }
}

// exports
const actionCreators = {
    getFeed,
    likePhoto,
    unlikePhoto
};

export { actionCreators };

// reducer export
export default reducer;