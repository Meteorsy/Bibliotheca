class NavHeader extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="nav-header">
                <div className="title-env">
                    <h1 className="nav-title">{this.props.title}</h1>
                    <p className="nav-description">{this.props.description}</p>
                </div>
                <div className="breadcrumb-env">
                    <ol className="breadcrumb">
                        {this.props.nav.map((navs) => {
                            return (
                                <li>
                                    <a href={"/#" + navs.link} target="_parent">
                                        {navs.icon != '#' ? <i className={"fa fa-" + navs.icon} /> : ''}
                                        {navs.names}
                                    </a>
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default NavHeader;