import React from 'react';
import '../styles/Objkt.css'
import photo from '../assets/nft.png'

const Objkt = (props) => {

    const ipfs = props.data.metadata.displayUri;
    const imageUri = ipfs.replace("ipfs://", "https://ipfs.io/ipfs/")

    let marketplace = ''
    switch (props.data.contract.alias) {
        case 'hic et nunc NFTs':
            marketplace = "hic et nunc";
            break;
        case null:
            marketplace = "OBJKT.com";
            break;
        case 'akaSwap NFTs':
            marketplace = "akaSwap";
            break;
        case 'FXHASH GENTK v2':
            marketplace = "fxhash";
            break;
        case 'Tezotopia NFT Registry':
            marketplace = "Tezotopia";
            break;
        case 'Versum Items':
            marketplace = "Versum";
            break;
        default:
            marketplace = "unknown";
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

    return (
        <div className='objkt'>
            <img src={imageUri}/>

            <div className='creator_and_edition'>
                <p>{creatorText}</p>
                <p>12/35 ed.</p>
            </div>
            <div className='marketplace_and_royality'>
                <p>{marketplace}</p>
                <p>Royality: {}%</p>
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
            <button className='buy_button'>2tz</button>
        </div>
    );
};

export default Objkt;