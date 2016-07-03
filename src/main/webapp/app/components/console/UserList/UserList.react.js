import Panel from '../Panel/Panel.react';
import InputControl from '../InputControl/InputControl.react';
import SimpleButton from '../SimpleButton/SimpleButton.react';
import UserValidator from '../../../validators/UserValidator';

class UserList extends React.Component {
    constructor() {
        super();

        this.state = {
            data: []
        };

        this.navs = [
            {names: 'Home', icon: 'home', link: '/console'},
            {names: 'User', icon: '#', link: '/console/user'},
            {names: 'List', icon: '#', link: '/console/user/list'}
        ];
    }

    componentDidMount() {
        jQuery.ajax({
            url: '/user/list',
            method: 'POST',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, error) {
                console.error(status, error.toString());
            }.bind(this)
        });
    }

    renderTable() {
        return (
            <div className="panel-body">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>
                                <input type="checkbox" className="cbr" />
                            </th>
                            <th>ID</th>
                            <th>用户名</th>
                            <th>邮箱</th>
                            <th>联系方式</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody className="middle-align">
                        {this.state.data.map((user) => {
                            return (
                                <tr>
                                    <td>
                                        <input type="checkbox" className="cbr" />
                                    </td>
                                    <td>{user.userId}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>
                                        <SimpleButton toggles="modal" target="#userModal" type="button" class="info" ids={user.userId} text="Edit" onClick={this.doModify} />
                                        <SimpleButton type="button" class="danger" text="Delete" ids={user.userId} onClick={this.doDelete} />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                {this.renderForm()}
            </div>
        )
    }

    renderForm() {
        return (
            <div className="modal fade" id="userModal" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form id="userModify" role="form" method="post" className="form-horizontal">
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
                </div>
            </div>
        );
    }

    render() {
        return (
            <Panel
                title="用户总览"
                description="列出所有以注册用户以供浏览操作"
                navs={this.navs}
                childComponent={this.renderTable()} />
        )
    }

    doDelete(e) {
        jQuery.ajax({
            url: 'user/delete',
            method: 'POST',
            dataType: 'json',
            data: {
                userId: e.target.dataset.id
            },
            success: (response) => {
                if (response) {
                    window.toastr.success("Success to delete the user");
                    window.location.href = '/#/console';
                } else {
                    window.toastr.error("Something go wrong when deleting the user");
                }
            }
        });
    }

    doModify(e) {
        UserValidator.validateModify(e.target.dataset.id);
    }
}

export default UserList;