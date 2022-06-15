import React, {useEffect, useState} from 'react';

let available = false

const Royality = (props) => {

    const [content, setContent] = useState([])
    const fetchData = async () => {
        available = false
        const response = await fetch("https://data.objkt.com/v2/graphql", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `query MyQuery {
                    token(where: {display_uri: {_eq: "${props}"}}) {
                        artifact_uri
                        average
                        decimals
                        description
                        display_uri
                        extra
                        flag
                        highest_offer
                        is_boolean_amount
                        last_listed
                        last_metadata_update
                        level
                        lowest_ask
                        metadata
                        mime
                        name
                        ophash
                        rights
                        supply
                        symbol
                        thumbnail_uri
                        timestamp
                        tzip16_key
                        royalties
                        {
                            amount
                            decimals
                            receiver_address
                        }
                    }
                }`,

                variables: {},
            }),
        })
        const data = await response.json()
        setContent(data)
        available = true
    }
    const timer = setInterval(() => available && fetchData(), 10000)

    useEffect(() => {

        return () => clearInterval(timer)
    }, [timer])

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>

        </div>
    );
};

export default Royality;