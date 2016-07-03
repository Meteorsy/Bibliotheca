import Panel from '../Panel/Panel.react';
import ExSelectList from '../ExSelectList/ExSelectList.react';
import SimpleButton from '../SimpleButton/SimpleButton.react';
import BookValidator from '../../../validators/BookValidator';

class BookBorrow extends React.Component {
    constructor() {
        super();

        this.state = {
            data: []
        };

        this.navs = [
            {names: 'Home', icon: 'home', link: '/console'},
            {names: 'Book', icon: '#', link: '/console/book'},
            {names: 'Borrow', icon: '#', link: '/console/book/borrow'}
        ];
    }

    componentDidMount() {
        jQuery.ajax({
            url: '/book/list',
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

        BookValidator.validateForm();
    }

    renderForm() {
        return (
            <div className="panel-body">
                <form id="bookBorrow" role="form" method="post" className="form-horizontal">
                    <ExSelectList
                        labelName="图书名"
                        names="bookId"
                        data={this.state.data} />
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