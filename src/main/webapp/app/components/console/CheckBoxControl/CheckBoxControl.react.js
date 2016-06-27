class CheckBoxControl extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="form-group">
                <label className="col-sm-1 control-label">{this.props.labelName}</label>
                <div className="col-margin-7 col-sm-10">
                    {this.props.checkboxes.map((checkbox) => {
                        return (
                            <label className="checkbox-inline">
                                <input type="checkbox" value={checkbox.value} name={checkbox.names} />
                                {checkbox.text}
                            </label>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default CheckBoxControl;