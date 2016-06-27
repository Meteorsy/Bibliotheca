import Panel from '../Panel/Panel.react';

class DBListItem extends React.Component {
    constructor() {
        super();
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
                            <th>数据库名</th>
                            <th>链接</th>
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
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" className="cbr" />
                            </td>
                            <td>1</td>
                            <td>demo</td>
                            <td>130708109</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" className="cbr" />
                            </td>
                            <td>1</td>
                            <td>demo</td>
                            <td>130708109</td>
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
                title={this.props.title}
                description={this.props.description}
                navs={this.props.navs}
                childComponent={DBListItem.renderTable()}/>
        )
    }
}

export default DBListItem;