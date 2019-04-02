mport React from 'react'

// this compoonent writes out the details of the
// post for the show page
function AuctionDetails(props) {
    return (
        <div className="AuctionDetails">
            <h2>
                {props.title}
            </h2>
            <p>{props.description}</p>
            <p>
                <small>Created {props.created_at}</small>
            </p>
        </div>
    )
}

AuctionDetails.propTypes = {}

export default AuctionDetails

