import Panel from '../Panel/Panel.react';
import InputControl from '../InputControl/InputControl.react';

class ResourceAdd extends React.Component {
    constructor() {
        super();

        this.navs = [
            {names: 'Home', icon: 'home', link: '/console'},
            {names: 'Book', icon: '#', link: '/console/book'},
            {names: 'Check', icon: '#', link: '/console/book/check'}
        ];
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
                <form role="form" className="form-horizontal">
                    <InputControl labelName="书籍名" type="text" names="bookName" icon="book" placeholder="Please input the bookName" />
                </form>
            </div>
        )
    }

    renderSpreadForm() {
        return (
            <div className="tab-pane fade" id="spread">
                <form role="form" className="form-horizontal">

                </form>
            </div>
        )
    }

    renderDBForm() {
        return (
            <div className="tab-pane fade" id="db">
                <form role="form" className="form-horizontal">

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