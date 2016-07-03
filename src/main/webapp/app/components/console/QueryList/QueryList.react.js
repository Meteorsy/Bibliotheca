import Panel from '../Panel/Panel.react';

class QueryList extends React.Component {
    constructor() {
        super();

        this.state = {
            data: []
        };

        this.navs = [
            {names: 'Home', icon: 'home', link: '/console'},
            {names: 'Query', icon: '#', link: '/console/query'},
            {names: 'List', icon: '#', link: '/console/query/list'}
        ];
    }

    componentDidMount() {
        jQuery.ajax({
            url: '/query/list',
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
                            <th>关键词</th>
                            <th>申请时间</th>
                            <th>进度</th>
                        </tr>
                    </thead>
                    <tbody className="middle-align">
                        {this.state.data.map((query) => {
                            return (
                                <tr>
                                    <td>
                                        <input type="checkbox" className="cbr" value={query.id} />
                                    </td>
                                    <td>{query.id}</td>
                                    <td>{query.keywords}</td>
                                    <td>{query.date}</td>
                                    <td>{query.state}</td>
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
                title="申请列表"
                description="申请查询文献进度"
                navs={this.navs}
                childComponent={this.renderTable()} />
        )
    }
}

export default QueryList;