import Panel from '../Panel/Panel.react';
import SimpleButton from '../SimpleButton/SimpleButton.react';
import BookValidator from '../../../validators/BookValidator';

class BookList extends React.Component {
    constructor() {
        super();

        this.state = {
            data: []
        };

        this.navs = [
            {names: 'Home', icon: 'home', link: '/console'},
            {names: 'Book', icon: '#', link: '/console/book'},
            {names: 'Show', icon: '#', link: '/console/book/show'}
        ];
    }

    componentDidMount() {
        jQuery.ajax({
            url: '/book/show',
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
                        <th>图书ID</th>
                        <th>图书名</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody className="middle-align">
                    {this.state.data.map((book) => {
                        return (
                            <tr>
                                <td>
                                    <input type="checkbox" className="cbr" value={book.bookId} />
                                </td>
                                <td>{book.bookId}</td>
                                <td>{book.bookName}</td>
                                <td>
                                    <SimpleButton type="button" class="info" ids={book.bookId} text="修改" onClick={this.doModify} />
                                    <SimpleButton type="button" class="danger" text="删除" ids={book.bookId} onClick={this.doDelete} />
                                </td>
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
            <div className="modal fade" id="bookModal" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form id="bookModify" role="form" method="post" className="form-horizontal">
                            <InputControl labelName="书籍名" type="text" names="bookName" icon="comment-o" placeholder="Please input the bookName" />
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
                title="借阅总览"
                description="借阅书籍信息总览"
                navs={this.navs}
                childComponent={this.renderTable()} />
        )
    }

    doModify(e) {
        BookValidator.validateModify(e.target.dataset.id)
    }

    doDelete(e) {
        jQuery.ajax({
            url: 'book/delete',
            method: 'POST',
            dataType: 'json',
            data: {
                bookId: e.target.dataset.id
            },
            success: (response) => {
                if (response) {
                    window.toastr.success("Success to delete the book");
                } else {
                    window.toastr.error("Something go wrong when deleting the book");
                }
            }
        });
    }
}

export default BookList;