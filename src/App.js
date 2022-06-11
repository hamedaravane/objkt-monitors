import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Live from "./pages/Live"

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' exact element={<Live/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;