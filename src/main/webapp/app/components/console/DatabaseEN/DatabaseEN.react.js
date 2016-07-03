import DBListItem from '../DBListItem/DBListItem.react';

class DatabaseEN extends React.Component {
    constructor() {
        super();

        this.state = {
            data: []
        };

        this.navs = [
            {names: 'Home', icon: 'home', link: '/console'},
            {names: 'Database', icon: '#', link: '/console/db'},
            {names: 'EN', icon: '#', link: '/console/db/en'}
        ];
    }

    componentDidMount() {
        jQuery.ajax({
            url: '/selfDb/en',
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
                title="外文数据库"
                description="外文数据库检索"
                navs={this.navs}
                table={this.state.data} />
        )
    }
}

export default DatabaseEN;