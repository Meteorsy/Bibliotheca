class MessageItem extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <li className={this.props.class != undefined ? this.props.class : ''}>
                <a href={this.props.links}>
                    <span className="line">
                        <span>{this.props.username}</span>
                        <span>{this.props.datetime}</span>
                    </span>
                    <span className="line">{this.props.contents}</span>
                </a>
            </li>
        );
    }
}

export default MessageItem;