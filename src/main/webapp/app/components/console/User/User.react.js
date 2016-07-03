class User extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <li>
                <a href="/console">
                    <img src="./dist/img/user.jpg" alt="user-image" />
                    <span>
                        Lethe Eileen
                        <i className="fa fa-angle-down" />
                    </span>
                </a>

                <ul className="dropdown-menu">
                    <li>
                        <a href="#">
                            <i className="fa fa-edit" />
                            New Post
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-wrench" />
                            Settings
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-user" />
                            Profile
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-info" />
                            Help
                        </a>
                    </li>
                    <li>
                        <a href="/#/login">
                            <i className="fa fa-lock" />
                            Logout
                        </a>
                    </li>
                </ul>
            </li>
        );
    }
}

export default User;