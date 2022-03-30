// Stylesheet
import styles from "./Home.module.css";

// Components
import Navbar from "../reuseable-components/navbar/Navbar";
import Welcome from "./Welcome";


function Home() {

    return (
        <div className= {styles.homepage}>
            <Navbar />
            <main>
                <Welcome />
            </main>
        </div>
    );

}

export default Home;