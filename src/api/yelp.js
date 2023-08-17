import axios from "../../node_modules/axios/lib/axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: "Bearer yT8rvGixLKUs09F3M5JjD6hL2Va5CItaCJ2tOOKRtPKlLQbVh_SQS55BumNjaRkY3DFE4K0GsnI5OqYACwpCaG2VfHS32Kr7JGxLIRAwpEwvJio1P1QyaVXJoaTdZHYx"

    },
});
