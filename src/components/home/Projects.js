// Images
import FileConversionSite from "../../images/pdftoolx_com.png";
import GithubRepoSearch from "../../images/github_repo_search_app.png";


// Stylesheet
import styles from "./Home.module.css";

// Components
import Header from "../reuseable-components/typography/Header";
import Paragraph from "../reuseable-components/typography/Paragraph";
import Button from "../reuseable-components/others/Button";


function Projects() {

    return (
        <section className = {styles.projects} >
            <div className = {styles.projects_content}>
                <Header 
                    content = "Projects I Have Built" 
                    style = {{ 
                        textAlign: "center",
                        borderBottom: "3px solid rgba(255, 255, 255, 0.125)",
                        paddingBottom: "10px",
                        marginBottom: "50px",
                        fontSize: "2rem", 
                        opacity: "0.8",
                    }} 
                />
                <div className = {styles.individual_project}>
                    <div className = {styles.project_description}>
                        <Header 
                            content = "1. Online File Conversion Site" 
                            style = {{
                                marginBottom: "20px"
                            }}
                        />
                        <Paragraph
                            content = {`This application is written in React & NodeJS from scratch and supports several 
                            file conversion types, such as MP4 to MP3, Powerpoint/Excel/Word to PDF and others. It uses a 
                            third party API to perform the conversion. To be able to use this API I had to poll the api 
                            request in regular intervals and as a result ended up writing a recursive function(function 
                            that calls itself until a certain condition is met).`}
                            style = {{
                                marginBottom: "40px",
                                lineHeight: "23px",
                                color: "rgba(255, 255, 255, 0.725)"
                            }}
                        />
                        <div className = {styles.project_tech_stack}>
                            <span>ReactJS</span>
                            <span>NodeJS</span>
                            <span>ExpressJS</span>
                            <span>File System</span>
                            <span>Recursion</span>
                        </div>
                        <a href = "https://pdftoolx.com" target="_blank" rel="noreferrer">View Live Site</a>
                    </div>
                    <div className = {styles.project_photo}>
                        <img src = {FileConversionSite} alt="Hello" />
                    </div>
                </div>
                <div className = {styles.individual_project}>
                    <div className = {styles.project_description}>
                        <Header 
                            content = "2. Github Repository Search Application" 
                            style = {{
                                marginBottom: "20px"
                            }}
                        />
                        <Paragraph
                            content = {`This application is written in ReactJS from scratch and performs github repository
                            search. It has infinite scrolling functionality - when user scrolls down to the bottom
                            of the page more repositories are loaded. It performs a complex calculation to show the
                            most active contributor of each resulting repository by looking into his/her weekly additions,
                            deletions and commits data, for that another api call is made for each found repository based
                            on user's typed query text.`}
                            style = {{
                                marginBottom: "40px",
                                lineHeight: "23px",
                                color: "rgba(255, 255, 255, 0.725)"
                            }}
                        />
                        <div className = {styles.project_tech_stack}>
                            <span>ReactJS</span>
                            <span>Custom Hook</span>
                            <span>Infinite Scrolling</span>
                            <span>Github Rest API</span>
                        </div>
                        <a href = "https://pdftoolx.com" target="_blank" rel="noreferrer">View Live Site</a>
                    </div>
                    <div className = {styles.project_photo}>
                        <img src = {GithubRepoSearch} alt="Hello" />
                    </div>
                </div>
            </div>
        </section>
    );

}


export default Projects;