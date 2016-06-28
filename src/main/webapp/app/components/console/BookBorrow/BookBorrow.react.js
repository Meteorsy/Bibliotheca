import Panel from '../Panel/Panel.react';
import ExSelectList from '../ExSelectList/ExSelectList.react';
import SimpleButton from '../SimpleButton/SimpleButton.react';

class BookBorrow extends React.Component {
    constructor() {
        super();

        this.navs = [
            {names: 'Home', icon: 'home', link: '/console'},
            {names: 'Book', icon: '#', link: '/console/book'},
            {names: 'Borrow', icon: '#', link: '/console/book/borrow'}
        ];
    }

    renderForm() {
        return (
            <div className="panel-body">
                <form role="form" className="form-horizontal">
                    <ExSelectList
                        labelName="图书名"
                        names="bookName" />
                    <div className="form-group text-right">
                        <SimpleButton
                            type="submit"
                            class="success"
                            text="借阅" />
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
                title="图书借阅"
                description="输入关键词借阅图书"
                navs={this.navs}
                childComponent={this.renderForm()} />
        )
    }
}

export default BookBorrow;