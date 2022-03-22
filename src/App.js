import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Stylesheet
import styles from "./App.module.css";

// Routes
import Home from "./components/home/Home";


function App() {

    return (
        <div className = {styles.App}>
             <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </div>
    );

}


export default App;