import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Live from "./pages/Live"
import Objkt from "./components/Objkt";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' exact element={<Live/>}/>
                </Routes>
            </Router>
            <Objkt/>
        </div>
    );
}

export default App;