import Panel from '../Panel/Panel.react';
import InputControl from '../InputControl/InputControl.react';
import SimpleButton from '../SimpleButton/SimpleButton.react';

class QueryRequest extends React.Component {
    constructor() {
        super();

        this.navs = [
            {names: 'Home', icon: 'home', link: '/console'},
            {names: 'Query', icon: '#', link: '/console/query'},
            {names: 'Request', icon: '#', link: '/console/query/request'}
        ];
    }

    static renderForm() {
        return (
            <div className="panel-body">
                <form role="form" className="form-horizontal">
                    <InputControl
                        labelName="文献名"
                        icon="file-word-o"
                        type="text"
                        placeholder="请输入文献名或关键词"
                        names="keyword" />
                    <div className="form-group text-right">
                        <SimpleButton
                            type="submit"
                            class="success"
                            text="提交" />
                        <SimpleButton
                            type="reset"
                            class="default"
                            text="重置" />
                    </div>
                </form>
            </div>
        )
    }

    render() {
        return (
            <Panel
                title="查询申请"
                description="申请管理员帮助查询相关文献"
                navs={this.navs}
                heading="查询申请"
                childComponent={QueryRequest.renderForm()} />
        )
    }
}

export default QueryRequest;