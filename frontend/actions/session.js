import * as ApiSessionUtil from '../utils/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'; 
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = (user) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user,
    };
};

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    };
};

export const createNewUser = (formUser) => dispatch => ApiSessionUtil.postUser(formUser).then(
    user => dispatch(receiveCurrentUser(user))
);

export const loginUser = formUser => dispatch => ApiSessionUtil.postSession(formUser)
    .then( user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => ApiSessionUtil.deleteSession()
    .then(() => dispatch(logoutCurrentUser()));
