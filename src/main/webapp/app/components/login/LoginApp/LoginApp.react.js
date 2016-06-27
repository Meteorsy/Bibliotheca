import LoginForm from '../LoginForm/LoginForm.react';
import LoginButton from '../LoginButton/LoginButton.react';

class LoginApp extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id="loginApp">
                <div className="row login">
                    <div className="col-sm-6">
                        <LoginForm />
                        <div className="external-login">
                            <LoginButton className="wechat" text="Wechat Login" />
                            <LoginButton className="weibo" text="Weibo Login" />
                            <LoginButton className="qq" text="QQ Login" />
                        </div>
                    </div>
                    <div className="loading-bar" data-rate="0"></div>
                </div>
            </div>
        );
    }
}

export default LoginApp;