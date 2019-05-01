import React from 'react';
import ListingsIndexItem from './listings_index_item';

class ListingsIndex extends React.Component {

    componentDidMount() {
        this.props.fetchListings();
    }

    render() {
        const listingitems = this.props.listings.map(listing => <ListingsIndexItem key={listing.id} listing={listing}/>);
        return (
            <div>
                <div className="listing-item-container">
                    {listingitems}
                </div>
            </div>
        )
    }
}

export default ListingsIndex;