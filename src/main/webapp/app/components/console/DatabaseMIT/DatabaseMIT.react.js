import DBListItem from '../DBListItem/DBListItem.react';

class DatabaseMIT extends React.Component {
    constructor() {
        super();

        this.state = {
            data: []
        };

        this.navs = [
            {names: 'Home', icon: 'home', link: '/console'},
            {names: 'Database', icon: '#', link: '/console/db'},
            {names: 'OpenSource', icon: '#', link: '/console/db/mit'}
        ];
    }

    componentDidMount() {
        jQuery.ajax({
            url: '/selfDb/mit',
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
            <DBListItem
                title="开源数据库"
                description="开源数据库检索"
                navs={this.navs}
                table={this.state.data} />
        )
    }
}

export default DatabaseMIT;