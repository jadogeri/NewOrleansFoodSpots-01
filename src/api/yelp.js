import axios from "axios";

const app = axios.create({

  baseURL: `https://api.yelp.com/v3/businesses`,
  headers: {

    //'Access-Control-Allow-Origin': '*',
    
    // 'Content-Type': 'application/json', 
    Authorization: "Bearer yT8rvGixLKUs09F3M5JjD6hL2Va5CItaCJ2tOOKRtPKlLQbVh_SQS55BumNjaRkY3DFE4K0GsnI5OqYACwpCaG2VfHS32Kr7JGxLIRAwpEwvJio1P1QyaVXJoaTdZHYx"

  },

});


export default app;
/**
// Example POST method implementation:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData("https://example.com/answer", { answer: 42 }).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});
 */