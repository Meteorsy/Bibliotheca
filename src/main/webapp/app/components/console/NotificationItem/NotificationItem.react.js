class NotificationItem extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <li className={this.props.current != undefined ? 'current' : ''}>
                <a href={this.props.links}>
                    <i className={"fa fa-" + this.props.class + " notification-" + this.props.class} />
                    <span>{this.props.info}</span>
                    <span>{this.props.datetime}</span>
                </a>
            </li>
        );
    }
}

export default NotificationItem;