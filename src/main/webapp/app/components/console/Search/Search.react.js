class Search extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <li>
                <form>
                    <input type="text" className="form-control" placeholder="Type to search..." />
                    <button type="submit" className="btn btn-link">
                        <i className="fa fa-search" />
                    </button>
                </form>
            </li>
        );
    }
}

export default Search;