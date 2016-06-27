import Panel from '../Panel/Panel.react';

class QueryCheck extends React.Component {
    constructor() {
        super();

        this.navs = [
            {names: 'Home', icon: 'home', link: '/console'},
            {names: 'Query', icon: '#', link: '/console/query'},
            {names: 'Check', icon: '#', link: '/console/query/check'}
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
                            <th>ID</th>
                            <th>文献名</th>
                            <th>申请人ID</th>
                            <th>申请时间</th>
                            <th>进度</th>
                        </tr>
                    </thead>
                    <tbody className="middle-align">
                        <tr>
                            <td>
                                <input type="checkbox" className="cbr" />
                            </td>
                            <td>1</td>
                            <td>demo</td>
                            <td>130708109</td>
                            <td>2016-06-04</td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" className="cbr" />
                            </td>
                            <td>1</td>
                            <td>demo</td>
                            <td>130708109</td>
                            <td>2016-06-04</td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" className="cbr" />
                            </td>
                            <td>1</td>
                            <td>demo</td>
                            <td>130708109</td>
                            <td>2016-06-04</td>
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
                title="查询审核"
                description="审核文献查询申请并更新进度"
                navs={this.navs}
                childComponent={QueryCheck.renderTable()}/>
        )
    }
}

export default QueryCheck;