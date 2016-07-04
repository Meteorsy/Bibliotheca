import Panel from '../Panel/Panel.react';
import InputControl from '../InputControl/InputControl.react';
import SimpleButton from '../SimpleButton/SimpleButton.react';
import UserValidator from '../../../validators/UserValidator';

class UserModify extends React.Component {
    constructor() {
        super();

        this.navs = [
            {names: 'Home', icon: 'home', link: '/console'},
            {names: 'User', icon: '#', link: '/console/user'},
            {names: 'Modify', icon: '#', link: '/console/user/modify'}
        ];
    }

    componentDidMount() {
        UserValidator.validateModified();
    }

    static renderForm () {
        return (
            <div className="panel-body">
                <form id="userModified" role="form" method="post" className="form-horizontal">
                    <InputControl labelName="密码" icon="key" type="password" placeholder="Input your password" names="password" />
                    <InputControl labelName="重复密码" icon="key" type="password" placeholder="repeat your password" names="rePassword" />
                    <InputControl labelName="昵称" icon="comment" type="text" placeholder="Input your username" names="username" />
                    <InputControl labelName="手机" icon="mobile" type="text" placeholder="Input your phone number" names="mobile" />
                    <InputControl labelName="邮箱" icon="envelope-o" type="text" placeholder="Input your email address" names="email" />
                    <div className="form-group text-right">
                        <SimpleButton type="submit" class="success" text="提交" />
                        <SimpleButton type="reset" class="default" text="重置" />
                    </div>
                </form>
            </div>
        )
    }

    render() {
        return (
            <Panel
                title="用户修改"
                description="修改用户信息"
                navs={this.navs}
                childComponent={UserAdd.renderForm()}  />
        )
    }
}

export default UserModify;