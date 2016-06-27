import EventEmitter from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import LoginConstants from '../constants/LoginConstants';
import ProgressBar from '../utils/ProgressBar';

let LoginState = {
    stateMap        : new Map(),
    CHANGE_EVENT    : 'change',
    instance        :null
};

class LoginStore extends EventEmitter {
    constructor() {
        super();

        LoginState.stateMap.set('isUserFocused', false);
        LoginState.stateMap.set('isPwdFocused', false);

        this.handleAction();
    }

    handleAction() {
        AppDispatcher.register((action) => {
            switch (action.actionType){
                case LoginConstants.ADD_CLASS:
                    LoginStore.toggleFocus(action.elem, true);
                    this.emitChange();
                    break;
                case LoginConstants.REMOVE_CLASS:
                    LoginStore.toggleFocus(action.elem, false);
                    this.emitChange();
                    break;
                default:
                    break;
            }
        });
    }

    static validateForm() {
        $('form').validate({
            rules: {
                username: {
                    required: true
                },
                password: {
                    required: true
                }
            },
            messages: {
                username: {
                    required: 'Please input your username.'
                },
                password: {
                    required: 'Please input your password.'
                }
            },
            submitHandler: (form) => {
                ProgressBar.loadingTo(70);

                $.ajax({
                    url: "/user/login",
                    method: 'POST',
                    dataType: 'json',
                    data: {
                        username: $(form).find('#username').val(),
                        password: $(form).find('#password').val()
                    },
                    success: (response) => {
                        ProgressBar.loadingTo(100);

                        if (response.userId){
                            window.location.href = '/#/console';
                        } else {
                            toastr.error('Please confirm your username and password before press the login button');
                        }
                    }
                });
            }
        });
    }

    static toggleFocus(e, value){
        if (!e.target.value.trim()){
            let element = e.target.type === 'text' ? 'isUserFocused' : 'isPwdFocused';

            LoginStore.onSetState(element, value);
        }
    }

    static getInstance(){
        if (LoginState.instance === null){
            LoginState.instance = new LoginStore();
        }

        return LoginState.instance;
    }

    static onSetState(key, value) {
        LoginState.stateMap.set(key, value);
    }

    static onGetState() {
        return {
            isUserFocused: LoginState.stateMap.get('isUserFocused'),
            isPwdFocused: LoginState.stateMap.get('isPwdFocused')
        };
    }

    emitChange() {
        this.emit(LoginState.CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(LoginState.CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(LoginState.CHANGE_EVENT, callback);
    }
}

export default LoginStore;