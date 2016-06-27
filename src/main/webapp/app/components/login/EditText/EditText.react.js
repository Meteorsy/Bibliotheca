import LoginAction from '../../../actions/LoginAction';

class EditText extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <section className={this.props.focusStatus ? "form-group is-focused" : "form-group"}>
                <label className="control-label">{this.props.labelName}</label>
                <input
                    className="form-control"
                    id={this.props.id}
                    name={this.props.name}
                    type={this.props.type}
                    onFocus={EditText.handleFocus}
                    onBlur={EditText.handleBlur} />
            </section>
        )
    }

    static handleFocus(e) {
        LoginAction.addFocusClass(e);
    }

    static handleBlur(e) {
        LoginAction.removeFocusClass(e);
    }
}

export default EditText;