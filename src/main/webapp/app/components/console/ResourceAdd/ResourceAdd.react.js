import Panel from '../Panel/Panel.react';
import InputControl from '../InputControl/InputControl.react';
import SimpleButton from '../SimpleButton/SimpleButton.react';
import SelectList from '../SelectList/SelectList.react';
import BookValidator from '../../../validators/BookValidator';
import DBValidator from '../../../validators/DBValidator';

class ResourceAdd extends React.Component {
    constructor() {
        super();

        this.navs = [
            {names: 'Home', icon: 'home', link: '/console'},
            {names: 'Book', icon: '#', link: '/console/book'},
            {names: 'Check', icon: '#', link: '/console/book/check'}
        ];

        this.options = [
            {key: 0, value: '中文数据库'},
            {key: 1, value: '外文数据库'},
            {key: 4, value: '试用数据库'},
            {key: 3, value: '自建数据库'},
            {key: 2, value: '开源数据库'}
        ]
    }

    componentDidMount() {
        BookValidator.validateAdd();
        DBValidator.validateForm();
    }

    renderTab() {
        return (
            <div className="panel-body">
                <ul className="nav nav-tabs">
                    <li>
                        <a href="#book" data-toggle="tab">图书资源</a>
                    </li>
                    <li>
                        <a href="#spread" data-toggle="tab">阅读推广</a>
                    </li>
                    <li>
                        <a href="#db" data-toggle="tab">数据库资源</a>
                    </li>
                </ul>
                <div className="tab-content">
                    {this.renderBookForm()}
                    {this.renderSpreadForm()}
                    {this.renderDBForm()}
                </div>
            </div>
        )
    }

    renderBookForm() {
        return (
            <div className="tab-pane fade" id="book">
                <form id="bookAdd" role="form" method="post" className="form-horizontal">
                    <InputControl labelName="书籍Id" type="text" names="bookId" icon="book" placeholder="Please input the booId" />
                    <InputControl labelName="书籍名" type="text" name="bookName" icon="comment-o" placeholder="Please input the bookName" />
                    <div className="form-group text-right">
                        <SimpleButton type="submit" class="success" text="提交" />
                        <SimpleButton type="reset" class="default" text="重置" />
                    </div>
                </form>
            </div>
        );
    }

    renderSpreadForm() {
        return (
            <div className="tab-pane fade" id="spread">
                <form id="SpreadAdd" role="form" method="post" className="form-horizontal">
                    <InputControl labelName="推广标题" type="text" names="dbName" icon="exchange" placeholder="Please input the spread name" />
                    <InputControl labelName="内容链接" type="text" name="dbLink" icon="link" placeholder="Please input the spread link" />
                    <div className="form-group text-right">
                        <SimpleButton type="submit" class="success" text="提交" />
                        <SimpleButton type="reset" class="default" text="重置" />
                    </div>
                </form>
            </div>
        )
    }

    renderDBForm() {
        return (
            <div className="tab-pane fade" id="db">
                <form id="dbAdd" role="form" method="post" className="form-horizontal">
                    <InputControl labelName="数据库名" type="text" names="dbName" icon="database" placeholder="Please input the dbName" />
                    <InputControl labelName="数据库链接" type="text" name="dbLink" icon="link" placeholder="Please input the dbLink" />
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
        )
    }

    render() {
        return (
            <Panel
                title="资源添加"
                description="添加书籍与文献或数据库资源"
                navs={this.navs}
                childComponent={this.renderTab()} />
        )
    }
}

export default ResourceAdd;