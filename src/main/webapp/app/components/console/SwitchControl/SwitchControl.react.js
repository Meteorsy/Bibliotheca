class SwitchControl extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        jQuery('.switch input').bootstrapSwitch();
    }

    render() {
        return (
            <div className="form-group">
                <label className="col-sm-1 control-label">{this.props.labelName}</label>
                <div className="col-margin-7 col-sm-10">
                    <div className="switch switch-small">
                        <input type="checkbox" data-on-color="success" data-off-color="danger" value={this.props.value} name={this.props.names} />
                    </div>
                </div>
            </div>
        )
    }
}

export default SwitchControl;