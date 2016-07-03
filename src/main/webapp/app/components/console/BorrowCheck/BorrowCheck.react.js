import Panel from '../Panel/Panel.react';
import SimpleButton from '../SimpleButton/SimpleButton.react';

class BorrowCheck extends React.Component {
    constructor() {
        super();

        this.state = {
            data: []
        };

        this.navs = [
            {names: 'Home', icon: 'home', link: '/console'},
            {names: 'Book', icon: '#', link: '/console/book'},
            {names: 'Check', icon: '#', link: '/console/book/check'}
        ];
    }

    componentDidMount() {
        jQuery.ajax({
            url: '/book/check',
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
                            <th>借阅时间</th>
                            <th>借阅者ID</th>
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
                                    <td>{book.borrowTime}</td>
                                    <td>{book.ownerId}</td>
                                    <td>
                                        <SimpleButton type="button" class="info" ids={book.bookId} text="出借" onClick={this.doModify} />
                                        <SimpleButton type="button" class="success" text="已归还" ids={book.bookId} onClick={this.doModify} />
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
                title="借阅审核"
                description="借阅书籍审核列表"
                navs={this.navs}
                childComponent={this.renderTable()} />
        )
    }

    doModify(e) {
        jQuery.ajax({
            url: 'book/modify',
            method: 'POST',
            dataType: 'json',
            data: {
                bookId: e.target.dataset.id,
                state: e.target.dataset.value
            },
            success: (response) => {
                if (response > 0) {
                    window.toastr.success("Success to change the book state");
                    window.location.href = '/#/console';
                } else {
                    window.toastr.error("Something go wrong when changing the book state");
                }
            }
        });
    }
}

export default BorrowCheck;