import NavBarItem from '../NavBarItem/NavBarItem.react';

class NavBar extends React.Component {
    constructor() {
        super();
        
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        $.ajax({
            url: "nav/load",
            method: 'POST',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, error) {
                console.error(status, error.toString());
            }.bind(this)
        });
    }

    componentWillUnmount() {}

    render() {
        return (
            <nav>
                <header>
                    <a href="#" target="_parent">
                        <img src="./dist/img/logo.png" alt="logo" />
                    </a>
                </header>

                <NavBarItem data={this.state.data} />
            </nav>
        );
    }
}

export default NavBar;