class User extends React.Component {
    constructor() {
        super();

        this.state = {
            data: []
        };
    }

    componentDidMount() {
        jQuery.ajax({
            url: '/user/show',
            method: 'POST',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, error) {
                console.error(status, error.toString());
            }.bind(this)
        })
    }

    render() {
        return (
            <li>
                <a href="/console">
                    <img src="./dist/img/user.jpg" alt="user-image" />
                    <span>
                        {this.state.data.username}
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