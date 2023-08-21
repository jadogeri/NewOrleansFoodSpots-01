import yelp from "../api/yelp"
import { useState, useEffect } from "react"

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: "new orleans"
                }
            }
            )
            setResults(response.data.businesses)
            setErrorMessage('')
        } catch (e) {
            console.log('something went wrong terminal')

            setErrorMessage('something went wrong\nerror message : ' + e.message)
        }

    }

    useEffect(() => {
        searchApi('chicken')
    }, [])


    return [searchApi, results, errorMessage];

};

