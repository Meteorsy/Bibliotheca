class SelectList extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        jQuery('.simple-select').selectBoxIt();
        jQuery('.selectboxit-list').perfectScrollbar();
    }


    render() {
        return (
            <div className="form-group">
                <label className="col-sm-1 control-label">{this.props.labelName}</label>
                <div className="col-margin-7 col-sm-10">
                    <div className="input-group col-sm-12">
                        <select className="form-control simple-select" name={this.props.names}>
                            {this.props.options.map((opt) => {
                                return (
                                    <option value={opt.key}>{opt.value}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default SelectList;
