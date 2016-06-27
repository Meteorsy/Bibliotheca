import EditText from '../EditText/EditText.react';
import LoginStore from '../../../stores/LoginStore';

class LoginForm extends React.Component {
    constructor() {
        super();

        this.state = LoginStore.onGetState();
    }

    componentDidMount() {
        LoginStore.getInstance().addChangeListener(this._onChange.bind(this));
        LoginStore.validateForm();
    }

    componentWillUnmount() {
        LoginStore.getInstance().removeChangeListener(this._onChange.bind(this));
    }

    render() {
        return (
            <form className="login-form">
                <header>
                    <p>Streetlight Management Platform</p>
                </header>
                <EditText
                    labelName="Username"
                    type="text"
                    id="username"
                    name="username"
                    focusStatus={this.state.isUserFocused} />
                <EditText
                    labelName="Password"
                    type="password"
                    id="password"
                    name="password"
                    focusStatus={this.state.isPwdFocused} />
                <footer>
                    <button type="submit" className="btn">
                        <i className="fa fa-lock" />
                        Login
                    </button>
                    <a href="#" target="_parent">Forgot your password?</a>
                </footer>
            </form>
        );
    }

    _onChange() {
        this.setState(LoginStore.onGetState());
    }
}

export default LoginForm;