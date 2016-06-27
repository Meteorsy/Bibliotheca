import Panel from '../Panel/Panel.react';

class UserList extends React.Component {
    constructor() {
        super();

        this.navs = [
            {names: 'Home', icon: 'home', link: '/console'},
            {names: 'User', icon: '#', link: '/console/user'},
            {names: 'List', icon: '#', link: '/console/user/list'}
        ]
    }

    static renderTable() {
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
                        <tr>
                            <td>
                                <input type="checkbox" className="cbr" />
                            </td>
                            <td>130708109</td>
                            <td>demo</td>
                            <td>13738144507@qq.com</td>
                            <td>11111111111</td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" className="cbr" />
                            </td>
                            <td>130708109</td>
                            <td>demo</td>
                            <td>13738144507@qq.com</td>
                            <td>11111111111</td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" className="cbr" />
                            </td>
                            <td>130708109</td>
                            <td>demo</td>
                            <td>13738144507@qq.com</td>
                            <td>11111111111</td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" className="cbr" />
                            </td>
                            <td>130708109</td>
                            <td>demo</td>
                            <td>13738144507@qq.com</td>
                            <td>11111111111</td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" className="cbr" />
                            </td>
                            <td>130708109</td>
                            <td>demo</td>
                            <td>13738144507@qq.com</td>
                            <td>11111111111</td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" className="cbr" />
                            </td>
                            <td>130708109</td>
                            <td>demo</td>
                            <td>13738144507@qq.com</td>
                            <td>11111111111</td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" className="cbr" />
                            </td>
                            <td>130708109</td>
                            <td>demo</td>
                            <td>13738144507@qq.com</td>
                            <td>11111111111</td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" className="cbr" />
                            </td>
                            <td>130708109</td>
                            <td>demo</td>
                            <td>13738144507@qq.com</td>
                            <td>11111111111</td>
                            <td>

                            </td>
                        </tr>
                    </tbody>
                </table>
                <ul className="pagination pull-right">
                    <li><a href="#">&laquo;</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">&raquo;</a></li>
                </ul>
            </div>
        )
    }

    render() {
        return (
            <Panel
                title="用户总览"
                description="列出所有以注册用户以供浏览操作"
                navs={this.navs}
                childComponent={UserList.renderTable()} />
        )
    }
}

export default UserList;
