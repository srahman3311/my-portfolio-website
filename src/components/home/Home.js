// Stylesheet
import styles from "./Home.module.css";

// Components
import Navbar from "../reuseable-components/navbar/Navbar";
import Welcome from "./Welcome";
import Projects from "./Projects";


function Home() {

    return (
        <div className= {styles.homepage}>
            <Navbar />
            <main>
                <Welcome />
                <Projects />
            </main>
        </div>
    );

}

export default Home;