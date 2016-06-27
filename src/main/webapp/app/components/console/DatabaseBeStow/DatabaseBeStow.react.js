import DBListItem from '../DBListItem/DBListItem.react';

class DatabaseBeStow extends React.Component {
    constructor() {
        super();

        this.navs = [
            {names: 'Home', icon: 'home', link: '/console'},
            {names: 'Database', icon: '#', link: '/console/db'},
            {names: 'BeStow', icon: '#', link: '/console/db/bestow'}
        ];
    }

    render() {
        return (
            <DBListItem
                title="试用数据库"
                description="数据库检索试用"
                navs={this.navs} />
        )
    }
}

export default DatabaseBeStow;