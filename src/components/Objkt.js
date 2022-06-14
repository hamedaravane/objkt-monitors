//import React, {useEffect, useState} from 'react';
import '../styles/Objkt.css'

const Objkt = (props) => {

    // const [content, setContent] = useState([])
    //
    // const fetchData = async (id) => {
    //     const response = await fetch("https://data.objkt.com/v2/graphql", {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             query: `query MyQuery {
    //                       event_by_pk(id: "${id}") {
    //                         id
    //                         amount
    //                         creator_address
    //                         currency_id
    //                         event_type
    //                         fa_contract
    //                         price
    //                         recipient_address
    //                         timestamp
    //                         marketplace {
    //                           name
    //                         }
    //                         creator {
    //                           address
    //                           alias
    //                           twitter
    //                         }
    //                         marketplace_event_type
    //                       }
    //                     }`,
    //             variables: {},
    //         }),
    //     })
    //     const data = await response.json()
    //     setContent(data)
    // }
    //
    //
    // useEffect(() => {
    //     fetchData(props.data.id)
    // })

    //console.log(content)

    const ipfs = props.data.metadata.displayUri;
    const imageUri = ipfs.replace("ipfs://", "https://ipfs.io/ipfs/")
    //console.log(imageUri)

    let marketplace = ''
    switch (props.data.contract.alias) {
        case 'hic et nunc NFTs':
            marketplace = "hic et nunc";
            break;
        case undefined:
            marketplace = "OBJKT.com";
            break;
        case 'akaSwap NFTs':
            marketplace = "akaSwap";
            break;
        case 'FXHASH GENTK v2':
            marketplace = "fxhash";
            break;
        case 'Versum Items':
            marketplace = "Versum";
            break;
        default:
            marketplace = props.data.contract.alias;
    }

    let creatorText = ''
    if (props.data.metadata.creators) {
        creatorText = props.data.metadata.creators[0]
    } else {
        creatorText = 'undefined'
    }

    if (creatorText !== null && creatorText.length > 20) {
        creatorText = creatorText.substr(0, 4) + '...' + creatorText.substr(-3, 4);
    } else if (creatorText == null) {
        creatorText = 'generative'
    }

    const marketUrl = "https://objkt.com/asset/" + props.data.contract.address + "/" + props.data.tokenId;

    const marketArtistUrl = "https://nftbiker.xyz/artist?wallet=" + props.data.metadata.creators;

    let royalityShares = 0
    if (props.data.metadata.royalties) {
        const royality = props.data.metadata.royalties.shares;
        for (let i in royality) {
            royalityShares += royality[i]
        }
    }

    let price = 0;
    if (props.data.balancesCount) {
        price = props.data.balancesCount;
    }

    return (
        <div className='objkt'>
            <a href={marketUrl} target="_blank" rel="noopener noreferrer">
                <img className="image" src={imageUri}/>
            </a>
            <div className='creator_and_edition'>
                <a href={marketArtistUrl} target="_blank" rel="noopener noreferrer">
                    <p>{creatorText}</p>
                </a>
                <p>{props.data.totalMinted} ed.</p>
            </div>
            <div className='marketplace_and_royality'>
                <p>{marketplace}</p>
                <p>Royality: {royalityShares / 10}%</p>
            </div>
            <span className='separate_line'></span>
            <div className='collectors'>
                <p>Collectors</p>
                <div className='percentage'>
                    <div className='percentage_container'>
                        <div className='percentage_bar'></div>
                    </div>
                    <p>34%</p>
                </div>
            </div>
            <div className='sale_chance'>
                <p>Sale Chance</p>
                <div className='percentage'>
                    <div className='percentage_container'>
                        <div className='percentage_bar'></div>
                    </div>
                    <p>34%</p>
                </div>
            </div>
            <button className='buy_button'>{price}tz</button>
        </div>
    );
};

export default Objkt;