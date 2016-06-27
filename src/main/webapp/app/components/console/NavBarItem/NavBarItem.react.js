import NavBarToggle from '../../../utils/NavBarToggle';

class NavBarItem extends React.Component {
    constructor() {
        super();
    }

    componentDidUpdate() {
        NavBarToggle.setNavBar();
    }

    render() {
        let items = this.props.data.map((stats) => {
            if (stats.pid == 0) {
                return (
                    <li>
                        <a href={"/#/console" + stats.href}>
                            <i className={"fa fa-" + stats.icon} />
                            <span className="title">{stats.names}</span>
                            <span> </span>
                        </a>

                        <ul>
                            {this.props.data.map((subStats) => {
                                if (subStats.pid == stats.id) {
                                    return (
                                        <li>
                                            <a href={"/#/console" + subStats.href}>
                                                <span className="title">{subStats.names}</span>
                                            </a>

                                            <ul>
                                                {this.props.data.map((subStat) => {
                                                    if (subStat.pid == subStats.id) {
                                                        return (
                                                            <li>
                                                                <a href={"/#/console" + subStat.href}>
                                                                    <span className="title">{subStat.names}</span>
                                                                </a>
                                                            </li>
                                                        )
                                                    }
                                                })}
                                            </ul>
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                    </li>
                );
            }
        });

        return (
            <ul>
                {items}
            </ul>
        )
    }
}

export default NavBarItem;