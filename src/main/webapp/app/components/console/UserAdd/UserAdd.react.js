import NavHeader from '../NavHeader/NavHeader.react';
import InputControl from '../InputControl/InputControl.react';
import SelectList from '../SelectList/SelectList.react';
import SimpleButton from '../SimpleButton/SimpleButton.react';

class UserAdd extends React.Component {
    constructor() {
        super();
        
        this.options = [
            {key: 0, value: '超级管理员'},
            {key: 1, value: '管理员'},
            {key: 1, value: '巡逻人员'},
            {key: 3, value: '维修人员'}
        ];

        this.navs = [
            {names: 'Home', icon: 'home', link: '/console'},
            {names: 'User', icon: '#', link: '/console/user'},
            {names: 'Add', icon: '#', link: '/console/user/add'}
        ];
    }

    render() {
        return (
            <div className="main-content">
                <NavHeader title="用户添加" description="添加子用户以辅助系统运行" nav={this.navs} />
                <div className="row">
                    <div className="col-sm-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">用户添加</h3>
                            </div>
                            <div className="panel-body">
                                <form role="form" className="form-horizontal">
                                    <InputControl labelName="账号" icon="user" type="text" placeholder="Input your account" names="userId" />
                                    <InputControl labelName="密码" icon="key" type="password" placeholder="Input your password" names="password" />
                                    <InputControl labelName="重复密码" icon="key" type="password" placeholder="repeat your password" names="rePassword" />
                                    <InputControl labelName="昵称" icon="comment" type="text" placeholder="Input your username" names="username" />
                                    <InputControl labelName="手机" icon="mobile" type="text" placeholder="Input your phone number" names="mobile" />
                                    <InputControl labelName="邮箱" icon="envelope-o" type="text" placeholder="Input your email address" names="email" />
                                    <SelectList labelName="权限" names="rights" options={this.options} />
                                    <div className="form-group text-right">
                                        <SimpleButton type="submit" class="success" text="提交" />
                                        <SimpleButton type="reset" class="default" text="重置" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserAdd;