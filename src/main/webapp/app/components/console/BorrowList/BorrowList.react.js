import Panel from '../Panel/Panel.react';

class BorrowList extends React.Component {
    constructor() {
        super();

        this.navs = [
            {names: 'Home', icon: 'home', link: '/console'},
            {names: 'Book', icon: '#', link: '/console/book'},
            {names: 'List', icon: '#', link: '/console/book/list'}
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
                            <th>图书ID</th>
                            <th>图书名</th>
                            <th>借阅时间</th>
                            <th>截止时间</th>
                            <th>状态</th>
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
                title="借阅总览"
                description="借阅书籍信息总览"
                navs={this.navs}
                childComponent={BorrowList.renderTable()} />
        )
    }
}

export default BorrowList;