class InputControl extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="form-group">
                <label className="col-sm-1 control-label">{this.props.labelName}</label>
                <div className="col-margin-7 col-sm-10">
                    <div className="input-group">
                        <div className="input-group-addon">
                            <i className={"fa fa-" + this.props.icon} />
                        </div>
                        <input
                            type={this.props.type}
                            className="form-control"
                            placeholder={this.props.placeholder}
                            name={this.props.names} />
                    </div>
                </div>
            </div>
        )
    }
}

export default InputControl;