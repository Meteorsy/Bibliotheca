class SimpleButton extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <button
                type={this.props.type}
                className={"btn btn-" + this.props.class} >
                {this.props.text}
            </button>
        )
    }
}

export default SimpleButton;