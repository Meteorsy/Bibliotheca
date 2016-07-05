import Panel from '../Panel/Panel.react';
import InputControl from '../InputControl/InputControl.react';
import SimpleButton from '../SimpleButton/SimpleButton.react';
import DBValidator from '../../../validators/DBValidator';

class SpreadList extends React.Component {
    constructor() {
        super();

        this.state = {
            data: [],
            rights: 3
        };

        this.navs = [
            {names: 'Home', icon: 'home', link: '/console'},
            {names: 'Spread', icon: '#', link: '/console/spread'},
            {names: 'List', icon: '#', link: '/console/spread/list'}
        ];
    }

    componentDidMount() {
        let right = this.state.rights;

        jQuery.ajax({
            url: '/user/validate',
            method: 'POST',
            dataType: 'json',
            success: (response) => {
                right = response;
            }
        });

        jQuery.ajax({
            url: '/selfDb/spread',
            method: 'POST',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({
                    data: data,
                    rights: right
                });
            }.bind(this),
            error: function(xhr, status, error) {
                console.error(status, error.toString());
            }.bind(this)
        });
    }

    renderHeader() {
        if (this.state.rights < 2) {
            return (
                <td>操作</td>
            );
        }
    }

    renderBody(obj) {
        if (this.state.rights < 2) {
            return (
                <td>
                    <SimpleButton toggles="modal" target="#spreadModal" type="button" class="info" ids={obj} text="修改" onClick={this.doModify} />
                    <SimpleButton type="button" class="danger" text="删除" ids={obj} onClick={this.doDelete} />
                </td>
            );
        }
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
                            {this.renderHeader()}
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
                                    {this.renderBody(spread.id)}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                {this.renderForm()}
            </div>
        )
    }

    renderForm() {
        return (
            <div className="modal fade" id="spreadModal" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form id="SpreadModify" role="form" method="post" className="form-horizontal">
                            <InputControl labelName="推广标题" type="text" names="dbName" icon="exchange" placeholder="Please input the spread name" />
                            <InputControl labelName="内容链接" type="text" names="dbLink" icon="link" placeholder="Please input the spread link" />
                            <div className="form-group text-right">
                                <SimpleButton type="submit" class="success" text="提交" />
                                <SimpleButton type="reset" class="default" text="重置" />
                            </div>
                        </form>
                    </div>
                </div>
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

    doModify(e) {
        DBValidator.validateModified(e.target.dataset.id);
    }

    doDelete(e) {
        jQuery.ajax({
            url: 'selfDb/delete',
            method: 'POST',
            dataType: 'json',
            data: {
                id: e.target.dataset.id
            },
            success: (response) => {
                if (response) {
                    window.toastr.success("Success to delete the spread");
                } else {
                    window.toastr.error("Something go wrong when deleting the spread");
                }
            }
        });
    }
}

export default SpreadList;