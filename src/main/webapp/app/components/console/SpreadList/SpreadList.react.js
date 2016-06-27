import Panel from '../Panel/Panel.react';

class SpreadList extends React.Component {
    constructor() {
        super();

        this.navs = [
            {names: 'Home', icon: 'home', link: '/console'},
            {names: 'Spread', icon: '#', link: '/console/spread'},
            {names: 'List', icon: '#', link: '/console/spread/list'}
        ];
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
                            <th>推广编号</th>
                            <th>推广内容</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody className="middle-align">
                        <tr>
                            <td>
                                <input type="checkbox" className="cbr" />
                            </td>
                            <td>1</td>
                            <td>demo</td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" className="cbr" />
                            </td>
                            <td>1</td>
                            <td>demo</td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" className="cbr" />
                            </td>
                            <td>1</td>
                            <td>demo</td>
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
                title="推广列表"
                description="管理员推广文献"
                navs={this.navs}
                childComponent={SpreadList.renderTable()} />
        )
    }
}

export default SpreadList;