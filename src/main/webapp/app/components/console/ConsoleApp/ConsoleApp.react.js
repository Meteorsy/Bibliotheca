import HeaderBar from '../HeaderBar/HeaderBar.react';
import NavBar from '../NavBar/NavBar.react';

class ConsoleApp extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        jQuery('#scrollBarContainer').perfectScrollbar();
        jQuery('table tbody').perfectScrollbar();
    }

    render() {
        return (
            <div id="consoleApp">
                <NavBar />
                <div id="scrollBarContainer">
                    <HeaderBar />
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default ConsoleApp;