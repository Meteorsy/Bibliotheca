import DBListItem from '../DBListItem/DBListItem.react';

class DatabaseCN extends React.Component {
    constructor() {
        super();

        this.state = {
            data: []
        };

        this.navs = [
            {names: 'Home', icon: 'home', link: '/console'},
            {names: 'Database', icon: '#', link: '/console/db'},
            {names: 'CN', icon: '#', link: '/console/db/cn'}
        ];
    }

    componentDidMount() {
        jQuery.ajax({
            url: '/selfDb/cn',
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
                title="中文数据库"
                description="知网等中文数据库"
                navs={this.navs}
                table={this.state.data} />
        )
    }
}

export default DatabaseCN;