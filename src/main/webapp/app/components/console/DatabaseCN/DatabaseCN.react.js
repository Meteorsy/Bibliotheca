import DBListItem from '../DBListItem/DBListItem.react';

class DatabaseCN extends React.Component {
    constructor() {
        super();

        this.navs = [
            {names: 'Home', icon: 'home', link: '/console'},
            {names: 'Database', icon: '#', link: '/console/db'},
            {names: 'CN', icon: '#', link: '/console/db/cn'}
        ];
    }

    render() {
        return (
            <DBListItem
                title="中文数据库"
                description="知网等中文数据库"
                navs={this.navs} />
        )
    }
}

export default DatabaseCN;