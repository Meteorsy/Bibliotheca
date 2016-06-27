import DBListItem from '../DBListItem/DBListItem.react';

class DatabaseEN extends React.Component {
    constructor() {
        super();

        this.navs = [
            {names: 'Home', icon: 'home', link: '/console'},
            {names: 'Database', icon: '#', link: '/console/db'},
            {names: 'EN', icon: '#', link: '/console/db/en'}
        ];
    }

    render() {
        return (
            <DBListItem
                title="外文数据库"
                description="外文数据库检索"
                navs={this.navs} />
        )
    }
}

export default DatabaseEN;