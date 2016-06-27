import NavHeader from '../NavHeader/NavHeader.react';

class Panel extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="main-content">
                <NavHeader title={this.props.title} description={this.props.description} nav={this.props.navs} />
                <div className="row">
                    <div className="col-sm-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">{this.props.title}</h3>
                            </div>
                            {this.props.childComponent}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Panel;
