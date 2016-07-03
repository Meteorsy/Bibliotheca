import Panel from '../Panel/Panel.react';
import SimpleButton from '../SimpleButton/SimpleButton.react';

class QueryCheck extends React.Component {
    constructor() {
        super();

        this.state = {
            data: []
        };

        this.navs = [
            {names: 'Home', icon: 'home', link: '/console'},
            {names: 'Query', icon: '#', link: '/console/query'},
            {names: 'Check', icon: '#', link: '/console/query/check'}
        ];
    }

    componentDidMount() {
        jQuery.ajax({
            url: '/query/check',
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
                            <th>文献名</th>
                            <th>申请人ID</th>
                            <th>申请时间</th>
                            <th>操作</th>
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
                                    <td>{query.requester}</td>
                                    <td>{query.date}</td>
                                    <td>{query.state}</td>
                                    <td>
                                        <SimpleButton type="button" class="info" ids={query.id} text="已接受" onClick={this.doModify} />
                                        <SimpleButton type="button" class="danger" text="已处理" ids={query.id} onClick={this.doModify} />
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
                title="查询审核"
                description="审核文献查询申请并更新进度"
                navs={this.navs}
                childComponent={this.renderTable()}/>
        )
    }

    doModify(e) {
        jQuery.ajax({
            url: 'query/modify',
            method: 'POST',
            dataType: 'json',
            data: {
                userId: e.target.dataset.id,
                state: e.target.dataset.value
            },
            success: (response) => {
                if (response > 0) {
                    window.toastr.success("Success to change the query state");
                    window.location.href = '/#/console';
                } else {
                    window.toastr.error("Something go wrong when changing the query state");
                }
            }
        });
    }
}

export default QueryCheck;