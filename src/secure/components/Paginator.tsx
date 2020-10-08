import React, {Component} from 'react';

class Paginator extends Component<{ lastPage: number, handlePageChange: any }> {
    page = 1;

    prev = () => {
        if (this.page === 1) return;

        this.page--;

        this.props.handlePageChange(this.page);
    }

    next = () => {
        if (this.page === this.props.lastPage) return;

        this.page++;

        this.props.handlePageChange(this.page);
    }

    render() {
        return (
            <nav>
                <ul className="pagination">
                    <li className="page-item">
                        <a href="#" className="page-link" onClick={this.prev}>Previous</a>
                    </li>
                    <li className="page-item">
                        <a href="#" className="page-link" onClick={this.next}>Next</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Paginator;