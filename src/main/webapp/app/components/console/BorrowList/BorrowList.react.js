import Panel from '../Panel/Panel.react';

class BorrowList extends React.Component {
    constructor() {
        super();

        this.state = {
            data: []
        };

        this.navs = [
            {names: 'Home', icon: 'home', link: '/console'},
            {names: 'Book', icon: '#', link: '/console/book'},
            {names: 'List', icon: '#', link: '/console/book/list'}
        ];
    }

    componentDidMount() {
        jQuery.ajax({
            url: '/book/borrow',
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
                            <th>状态</th>
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
                                    <td>{book.states}</td>
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
                title="借阅总览"
                description="借阅书籍信息总览"
                navs={this.navs}
                childComponent={this.renderTable()} />
        )
    }
}

export default BorrowList;