import NotificationItem from '../NotificationItem/NotificationItem.react';

class Notifications extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <li>
                <a href="/console">
                    <i className="fa fa-bell-o" />
                    <span className="badge badge-purple">7</span>
                </a>

                <ul className="dropdown-menu">
                    <li>
                        <p>
                            <a href="#">Mark all Read</a>
                            You have <span>3</span> new notifications.
                        </p>
                    </li>
                    <li>
                        <ul>
                            <NotificationItem
                                links="#"
                                current={true}
                                class="user"
                                info="New user registered"
                                datetime="30 seconds age" />
                            <NotificationItem
                                links="#"
                                class="user"
                                info="New user registered"
                                datetime="30 seconds age" />
                            <NotificationItem
                                links="#"
                                current={true}
                                class="user"
                                info="New user registered"
                                datetime="30 seconds age" />
                            <NotificationItem
                                links="#"
                                class="user"
                                info="New user registered"
                                datetime="30 seconds age" />
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <span>View all notifications</span>
                            <i className="fa fa-link-ext" />
                        </a>
                    </li>
                </ul>
            </li>
        );
    }
}

export default Notifications;