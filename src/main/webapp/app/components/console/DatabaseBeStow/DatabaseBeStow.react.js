import DBListItem from '../DBListItem/DBListItem.react';

class DatabaseBeStow extends React.Component {
    constructor() {
        super();

        this.state = {
            data: []
        };

        this.navs = [
            {names: 'Home', icon: 'home', link: '/console'},
            {names: 'Database', icon: '#', link: '/console/db'},
            {names: 'BeStow', icon: '#', link: '/console/db/bestow'}
        ];
    }

    componentDidMount() {
        jQuery.ajax({
            url: '/selfDb/beStow',
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

    render() {
        return (
            <DBListItem
                title="试用数据库"
                description="数据库检索试用"
                navs={this.navs}
                table={this.state.data} />
        )
    }
}

export default DatabaseBeStow;