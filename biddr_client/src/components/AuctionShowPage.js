AuctionShowPage.js(Singular)

import React, { Component } from 'react'
import { Auction } from './requests';
import AuctionDetails from './AuctionDetails';

export class AuctionShowPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            auction: null,
            isLoading: true,
        };
    }

    componentDidMount() {

        Auction.one(this.props.match.params.id).then((auction) => {
            this.setState({
                auction: post,
                isLoading: false,
            });
        });
    }

    render() {

        //deconstruct the post from the state
        const { post } = this.state;

        if (!this.state.isLoading && this.state.post) {

            return (
                <main>
                    {/* This will use a component and copied object post from state as prop to display */}
 

                    <button onClick={() => this.props.history.push(`/auction/${auction.id}/edit`)}>
                        Update auction
       </button>

                </main>
            )
        }
        if (this.state.isLoading) {
            return <div>Loading ..</div>
        }
    }

    
}
export default PostShowPage