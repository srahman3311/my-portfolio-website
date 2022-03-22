// Stylesheet
import styles from "./Home.module.css";

// Components
import Navbar from "../reuseable-components/navbar/Navbar";
import Header from "../reuseable-components/typography/Header";
import Paragraph from "../reuseable-components/typography/Paragraph";
import Button from "../reuseable-components/others/Button";


function Home() {

    return (
        <div className= {styles.homepage}>
            <Navbar />
            <main>
                <section className = {styles.welcome_text} >
                    <div className = {styles.welcome_text_content}>
                        <Header 
                            content = "Hey There," 
                            style = {{ fontSize: "1.4rem", opacity: "0.8"}} 
                        />
                        <Header 
                            content = "I'm Samsur Rahman Rafez" 
                            style = {{ fontSize: "4rem"}} 
                        />
                        <Paragraph 
                            content = {`Building database driven web applications I take businesses to a new height. 
                            If you want to grow your business, you should definitely contact me.`} 
                            style = {{
                                fontSize: "1.4rem",
                                opacity: "0.8",
                                marginBottom: "20px"
                            }}
                        />
                        <Button 
                            text = "Contact Me" 
                            style = {{
                                backgroundColor: "#FF6B6B",
                                color: "white",

                            }}
                        />
                    </div>
                </section>
            </main>
        </div>
    );

}

export default Home;