import Panel from '../Panel/Panel.react';

class DBListItem extends React.Component {
    constructor() {
        super();
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
                            <th>数据库名</th>
                            <th>链接</th>
                        </tr>
                    </thead>
                    <tbody className="middle-align">
                        {this.props.table.map((dates) => {
                            return (
                                <tr>
                                    <td>
                                        <input type="checkbox" className="cbr" value={dates.id} />
                                    </td>
                                    <td>{dates.id}</td>
                                    <td>{dates.db_name}</td>
                                    <td>
                                        <a href={dates.db_link} target="_blank">
                                            {dates.db_link}
                                        </a>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        )
    }

    render() {
        return (
            <Panel
                title={this.props.title}
                description={this.props.description}
                navs={this.props.navs}
                childComponent={this.renderTable()}/>
        )
    }
}

export default DBListItem;