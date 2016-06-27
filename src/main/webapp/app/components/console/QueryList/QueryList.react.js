import Panel from '../Panel/Panel.react';

class QueryList extends React.Component {
    constructor() {
        super();

        this.navs = [
            {names: 'Home', icon: 'home', link: '/console'},
            {names: 'Query', icon: '#', link: '/console/query'},
            {names: 'List', icon: '#', link: '/console/query/list'}
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
                title="申请列表"
                description="申请查询文献进度"
                navs={this.navs}
                childComponent={QueryList.renderTable()} />
        )
    }
}

export default QueryList;