import AppDispatcher from '../dispatcher/AppDispatcher';
import LoginConstants from '../constants/LoginConstants';

class LoginAction {
    static addFocusClass(e) {
        AppDispatcher.dispatch({
            actionType: LoginConstants.ADD_CLASS,
            elem: e
        });
    }

    static removeFocusClass(e) {
        AppDispatcher.dispatch({
            actionType: LoginConstants.REMOVE_CLASS,
            elem: e
        });
    }
}

export default LoginAction;