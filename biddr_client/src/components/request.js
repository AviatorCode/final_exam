
const BASE_URL = `http://localhost:3000/`;

// Create a module of Auction related fetch request methods
const Auction = {
    // fetch all auctions from server
    all() {
        return fetch(`${BASE_URL}auctions.json`).then(
            res => res.json()
        );
    },
    // fetch a single auction
    one(id) {
        return fetch(`${BASE_URL}auctions/${id}.json`).then(res => res.json());
    },
    // creating a auction
    create(params) {
        // `params` is an object that represents a auction
        // { body: 'qBody', title: 'qTitle' }
        return fetch(`${BASE_URL}posts`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    },
    // updating a auction
   
};

// This is a helper module with methods associated with creating
// (and maybe later, destroying) a user session
const Session = {
    create(params) {
        // `params` is an object that represents a user
        // { email: 'some@email.com', password: 'some-password' }
        return fetch(`http://localhost:3000/sessions`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    },
    destroy() {
        return fetch(`${BASE_URL}sessions`, {
            method: "DELETE",
            credentials: "include"
        }).then(res => res.json());
    }
};

const User = {
    current() {
        return fetch(`${BASE_URL}users/current`, {
            method: "GET",
            credentials: "include"
        }).then(res => res.json());
    }
};

export { Auction, Session, User };