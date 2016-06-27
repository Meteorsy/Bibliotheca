import DBListItem from '../DBListItem/DBListItem.react';

class DatabaseSelf extends React.Component {
    constructor() {
        super();

        this.navs = [
            {names: 'Home', icon: 'home', link: '/console'},
            {names: 'Database', icon: '#', link: '/console/db'},
            {names: 'SelfBuild', icon: '#', link: '/console/db/self'}
        ];
    }

    render() {
        return (
            <DBListItem
                title="自建数据库"
                description="自建数据库检索"
                navs={this.navs} />
        )
    }
}

export default DatabaseSelf;