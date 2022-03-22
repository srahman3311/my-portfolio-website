// Stylesheet
import styles from "./Navbar.module.css";

// Components
import LinkComponent from "../others/LinkComponent";
import Icon from "../others/Icon";



function Navbar() {

    return (
        <nav className = {styles.navbar_container}>
            <div className = {styles.navbar}>
                <div className = {styles.navbar_brand}>
                    <LinkComponent href = "/" text = "Samsur Rahman Rafez" />
                </div>
                {/* For external links Link from react-router-dom doesn't work */}
                <div className = {styles.social_media}>
                    <a href = "https://github.com/srahman3311" target = "_blank" rel = "noreferrer">
                        <Icon 
                            iconClassName = "fab fa-github" 
                            style = {{
                                color: "white",
                                fontSize: "1.5rem"                    
                            }}
                        />
                    </a>
                    <a href = "https://www.linkedin.com/in/samsur-rahman-rafez-703251152/" target = "_blank" rel = "noreferrer">
                        <Icon 
                            iconClassName = "fab fa-linkedin" 
                            style = {{
                                color: "white",
                                fontSize: "1.5rem"                    
                            }}
                        />
                    </a>
                </div>
                <div className = {styles.navbar_routes}>
                    <LinkComponent href = "#" text = "About" />
                    <LinkComponent href = "#" text = "Projects" />
                    <LinkComponent href = "#" text = "Contact" />
                </div>
            </div>
        </nav>
    );

}



export default Navbar;