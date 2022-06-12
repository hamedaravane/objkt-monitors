import React from 'react';
import '../styles/Objkt.css'

const Objkt = () => {
    return (
        <div className='objkt'>
            <img/>
            <div className='creator_and_edition'>
                <p>Tezfolks</p>
                <p>12/35 ed.</p>
            </div>
            <div className='marketplace_and_royality'>
                <p>TEIA</p>
                <p>Royality: 10%</p>
            </div>
            <span className='separate_line'></span>
            <div className='collectors'>
                <p>Collectors</p>
                <div className='percentage'>
                    <div className='percentage_container'><div className='percentage_bar'></div></div>
                    <p>34%</p>
                </div>
            </div>
            <div className='sale_chance'>
                <p>Sale Chance</p>
                <div className='percentage'>
                    <div className='percentage_container'><div className='percentage_bar'></div></div>
                    <p>34%</p>
                </div>
            </div>
            <button className='buy_button'>2tz</button>
        </div>
    );
};

export default Objkt;