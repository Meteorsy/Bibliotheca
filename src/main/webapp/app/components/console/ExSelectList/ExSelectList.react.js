class ExSelectList extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        jQuery('.ExSelect').select2({
            placeholder: 'Select the book',
            allowClear: true
        }).on('select2-open', function() {
            jQuery(this).data('select2').results.addClass('overflow-hidden').perfectScrollbar();
        });
    }

    render() {
        return (
            <div className="form-group">
                <label className="col-sm-1 control-label">{this.props.labelName}</label>
                <div className="col-margin-7 col-sm-10">
                    <div className="input-group col-sm-12">
                        <select className="form-control ExSelect" name={this.props.names}>
                            <option> </option>
                            {this.props.data.map((book) => {
                                return (
                                    <option value={book.bookId}>{book.bookName}</option>
                                );
                            })}
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExSelectList;