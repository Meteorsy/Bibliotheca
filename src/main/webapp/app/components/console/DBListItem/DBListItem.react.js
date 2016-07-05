import Panel from '../Panel/Panel.react';
import InputControl from '../InputControl/InputControl.react';
import SimpleButton from '../SimpleButton/SimpleButton.react';
import SelectList from '../SelectList/SelectList.react';
import DBValidator from '../../../validators/DBValidator';

class DBListItem extends React.Component {
    constructor() {
        super();

        this.state = {
            rights: 3
        };

        this.options = [
            {key: 0, value: '中文数据库'},
            {key: 1, value: '外文数据库'},
            {key: 4, value: '试用数据库'},
            {key: 3, value: '自建数据库'},
            {key: 2, value: '开源数据库'}
        ]
    }

    componentDidMount() {
        jQuery.ajax({
            url: '/user/validate',
            method: 'POST',
            dataType: 'json',
            success: (response) => {
                this.setState({rights: response})
            }
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
                    <SimpleButton toggles="modal" target="#dbModal" type="button" class="info" ids={obj} text="修改" onClick={this.doModify} />
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
                            <th>
                                <input type="checkbox" className="cbr" />
                            </th>
                            <th>ID</th>
                            <th>数据库名</th>
                            <th>链接</th>
                            {this.renderHeader()}
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
                                    {this.renderBody(dates.id)}
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
            <div className="modal fade" id="dbModal" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form id="dbModify" role="form" method="post" className="form-horizontal">
                            <InputControl labelName="数据库名" type="text" names="dbName" icon="database" placeholder="Please input the dbName" />
                            <InputControl labelName="数据库链接" type="text" names="dbLink" icon="link" placeholder="Please input the dbLink" />
                            <SelectList
                                labelName="数据库类型"
                                names="dbType"
                                options={this.options} />
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
                title={this.props.title}
                description={this.props.description}
                navs={this.props.navs}
                childComponent={this.renderTable()}/>
        )
    }

    doModify(e) {
        DBValidator.validateModify(e.target.dataset.id);
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
                    window.toastr.success("Success to delete the db");
                } else {
                    window.toastr.error("Something go wrong when deleting the db");
                }
            }
        });
    }
}

export default DBListItem;