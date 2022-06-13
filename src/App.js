import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Live from "./pages/Live"
import Objkt from "./components/Objkt";
import {useState, useEffect} from "react";

function App() {
    const [content, setContent] = useState([])

    const fetchData = async () => {
        const response = await fetch("https://staging.api.tzkt.io/v1/tokens?sort.desc=lastLevel&transfersCount.gt=2&contract.ni=KT1U6EHmNxJTkvaWJ4ThczG4FSDaHC21ssvi,KT1ViVwoVfGSCsDaxjwoovejm1aYSGz7s2TZ&metadata.displayUri.ne=true&limit=24")
        const data = await response.json()
        setContent(data)
    }


    useEffect(() => {
        fetchData()
    })

    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' exact element={<Live/>}/>
                </Routes>
            </Router>

            <div className='layout'>
                {content.map(x => <Objkt data={x} key={x.id}/>)}
            </div>

        </div>
    );
}

export default App;