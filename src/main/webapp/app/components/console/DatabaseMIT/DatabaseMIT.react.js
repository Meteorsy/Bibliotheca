import DBListItem from '../DBListItem/DBListItem.react';

class DatabaseMIT extends React.Component {
    constructor() {
        super();

        this.navs = [
            {names: 'Home', icon: 'home', link: '/console'},
            {names: 'Database', icon: '#', link: '/console/db'},
            {names: 'OpenSource', icon: '#', link: '/console/db/mit'}
        ];
    }

    render() {
        return (
            <DBListItem
                title="开源数据库"
                description="开源数据库检索"
                navs={this.navs} />
        )
    }
}

export default DatabaseMIT;