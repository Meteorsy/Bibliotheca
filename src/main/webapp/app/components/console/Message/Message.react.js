import MessageItem from '../MessageItem/MessageItem.react';

class Message extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <li>
                <a href="/console">
                    <i className="fa fa-envelope-o" />
                    <span className="badge badge-green">15</span>
                </a>

                <ul className="dropdown-menu">
                    <li>
                        <ul>
                            <MessageItem
                                class="current"
                                links="#"
                                username="Luc Charter"
                                datetime="- yesterday"
                                contents="This are't our first item, it is the best of the rest." />
                            <MessageItem
                                class="current"
                                links="#"
                                username="Luc Charter"
                                datetime="- yesterday"
                                contents="This are't our first item, it is the best of the rest." />
                            <MessageItem
                                class="current"
                                links="#"
                                username="Luc Charter"
                                datetime="- yesterday"
                                contents="This are't our first item, it is the best of the rest." />
                            <MessageItem
                                class="current"
                                links="#"
                                username="Luc Charter"
                                datetime="- yesterday"
                                contents="This are't our first item, it is the best of the rest." />
                            <MessageItem
                                class="current"
                                links="#"
                                username="Luc Charter"
                                datetime="- yesterday"
                                contents="This are't our first item, it is the best of the rest." />
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <span>All Messages</span>
                            <i className="fa fa-link-ext" />
                        </a>
                    </li>
                </ul>
            </li>
        );
    }
}

export default Message;