import Panel from '../Panel/Panel.react';

class SpreadList extends React.Component {
    constructor() {
        super();

        this.state = {
            data: []
        };

        this.navs = [
            {names: 'Home', icon: 'home', link: '/console'},
            {names: 'Spread', icon: '#', link: '/console/spread'},
            {names: 'List', icon: '#', link: '/console/spread/list'}
        ];
    }

    componentDidMount() {
        jQuery.ajax({
            url: '/selfDb/spread',
            method: 'POST',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, error) {
                console.error(status, error.toString());
            }.bind(this)
        })
    }

    renderTable() {
        return (
            <div className="panel-body">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>推广编号</th>
                            <th>推广内容</th>
                            <th>链接</th>
                        </tr>
                    </thead>
                    <tbody className="middle-align">
                        {this.state.data.map((spread) => {
                            return (
                                <tr>
                                    <td>{spread.id}</td>
                                    <td>{spread.db_name}</td>
                                    <td>
                                        <a href={spread.db_link} target="_blank">
                                            {spread.db_link}
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
                title="推广列表"
                description="管理员推广文献"
                navs={this.navs}
                childComponent={this.renderTable()} />
        )
    }
}

export default SpreadList;