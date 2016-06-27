import Message from '../Message/Message.react';
import Notifications from '../Notifications/Notifications.react';
import Search from '../Search/Search.react';
import User from '../User/User.react';
import ConsoleStore from '../../../stores/ConsoleStore';

class HeaderBar extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        ConsoleStore.toggleDisplay();
    }

    render() {
        return (
            <header>
                <ul id="quick-btn">
                    <Message />
                    <Notifications />
                </ul>

                <ul id="profile-btn">
                    <Search />
                    <User />
                    <li>
                        <a href="#">
                            <i className="fa fa-comments-o" />
                        </a>
                    </li>
                </ul>
            </header>
        );
    }
}

export default HeaderBar;