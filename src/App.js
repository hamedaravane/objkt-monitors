import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Live from "./pages/Live"
import Objkt from "./components/Objkt";
import {useState, useEffect} from "react";

let available = false

function App() {
    const [content, setContent] = useState([])

    const versum = 'KT1LjmAdYQCLBjwv4S2oFkEzyHVkomAf5MrW'
    const tezotopia = 'KT1ViVwoVfGSCsDaxjwoovejm1aYSGz7s2TZ'

    const fetchData = async () => {
        available = false
        const response = await fetch("https://staging.api.tzkt.io/v1/tokens?sort.desc=lastLevel&transfersCount.gt=2&metadata.displayUri.ne=true&limit=24")
        const data = await response.json()
        setContent(data)
        available = true
        console.log('hello')
    }
    const timer = setInterval(() => available && fetchData(), 5000)

    useEffect(() => {

        return () => clearInterval(timer)
    }, [timer])

    useEffect(() => {
        fetchData()
        //console.log('hello')
    }, [])

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