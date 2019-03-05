import * as SessionActions from '../actions/session';

const _nullSession = {
    currentUser: null, 
}

export default (state = _nullSession, action) => {
    Object.freeze(state);
    switch(action.type) {
        case SessionActions.RECEIVE_CURRENT_USER:
        return Object.assign({}, {currentUser: action.user});
        
        case SessionActions.LOGOUT_CURRENT_USER:
        return _nullSession;
    default:
        return state;
    }
}; 