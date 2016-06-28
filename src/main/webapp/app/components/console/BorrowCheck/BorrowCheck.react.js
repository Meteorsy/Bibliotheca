import Panel from '../Panel/Panel.react';

class BorrowCheck extends React.Component {
    constructor() {
        super();

        this.navs = [
            {names: 'Home', icon: 'home', link: '/console'},
            {names: 'Book', icon: '#', link: '/console/book'},
            {names: 'Check', icon: '#', link: '/console/book/check'}
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
                        <th>借阅者ID</th>
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
                title="借阅审核"
                description="借阅书籍审核列表"
                navs={this.navs}
                childComponent={BorrowCheck.renderTable()} />
        )
    }
}

export default BorrowCheck;