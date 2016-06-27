class LoginButton extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <a
                href="#"
                className={this.props.className}
                target="_parent">
                <i className={"fa fa-" + this.props.className} />
                {this.props.text}
            </a>
        );
    }
}

export default LoginButton;