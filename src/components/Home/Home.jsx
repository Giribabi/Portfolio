import "./Home.css";
import profile from "../../assets/profile.jpg";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Logo from "../Logo/Logo";
import styled from "styled-components";

const StyledLink = styled.a`
    display: inline;
    text-align: center;
    background-color: rgb(0, 212, 212);
    padding: 0.7em 0.85em;
    border-radius: 1.5em;
    color: white;
    white-space: nowrap;
    font-weight: 900;
    cursor: pointer;
    width: 100%;
    border: 4px solid transparent;
    margin: 2%;
    margin-bottom: 0%;
    &:hover {
        background-color: transparent;
        color: rgb(0, 212, 212);
        border: 4px solid rgb(0, 212, 212);
    }
`;
function Home() {
    return (
        <div className="home-section">
            <div className="header">
                <div className="heading">
                    <Logo />
                    Hello Everyone👋
                </div>
                <div className="home-header">
                    <StyledLink href="#home-section">Home</StyledLink>
                    <StyledLink href="#about-section">About</StyledLink>
                    <StyledLink href="#contact-section">Contact me</StyledLink>
                </div>
            </div>
            <div className="content">
                <div className="description" id="home-section">
                    <div className="profile-image-container">
                        <img
                            src={profile}
                            alt="Sammidi-Giridhar"
                            className="profile-image"
                        />
                    </div>
                    <div className="about-heading">About me</div>
                    <div className="introduction-content">
                        "I'm <span className="my-name">Sammidi Giridhar</span>,
                        an affable lad, a MERN stack developer and a competitive
                        coder with loads of interest and familiarity with
                        developing beautiful and elegant websites. I love
                        solving problems and implementing the same in real-time
                        projects as well."
                        <br></br>
                        <br></br>I am a quick learner and continously strive
                        towards the prosperity of the organization I work for.
                    </div>
                </div>
            </div>
            <div className="codechef-caption">
                I earned three stars on codechef by just coding in my mobile
                during my earlier days of programming✌️
            </div>
            <div id="about-section">
                <About />
            </div>
            <div id="contact-section">
                <Contact />
            </div>
        </div>
    );
}
export default Home;
