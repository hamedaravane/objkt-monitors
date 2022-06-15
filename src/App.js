import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Live from "./pages/Live"
import Objkt from "./components/Objkt";
import {useState, useEffect} from "react";
import {Helmet} from "react-helmet";
const signalR = require("@microsoft/signalr");

function App() {

    const [objkt, setObjkt] = useState('');

    const connection = new signalR.HubConnectionBuilder()
        .withUrl("https://api.tzkt.io/v1/events")
        .build();

    async function init() {
        // open connection
        await connection.start();
        // subscribe to head
        await connection.invoke("SubscribeToTokenTransfers");
        // subscribe to account transactions
        await connection.invoke("transfers", {
        });
    };

    // auto-reconnect
    connection.onclose(init);

    connection.on("head", (msg) => {
        console.log(msg);
    });

    connection.on("operations", (msg) => {
        console.log(msg);
    });

    init();


    return (
        <div className="App">
            <Helmet>
                <title>Tezos NFT Analytic</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="check latest sale ive"/>
            </Helmet>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' exact element={<Live/>}/>
                </Routes>
            </Router>

            <div className='layout'>
                {/*{content.map(x => <Objkt data={x} key={x.id}/>)}*/}
            </div>

        </div>
    );
}

export default App;