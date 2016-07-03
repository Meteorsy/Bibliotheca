class SimpleButton extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <button
                data-toggle={this.props.toggles != undefined ? this.props.toggles : ''}
                data-target={this.props.target != undefined ? this.props.target : ''}
                data-value={this.props.text}
                data-Id={this.props.ids != undefined ? this.props.ids : ''}
                type={this.props.type}
                onClick={this.props.onClick != undefined ? this.props.onClick : ''}
                className={"btn btn-" + this.props.class} >
                {this.props.text}
            </button>
        )
    }
}

export default SimpleButton;