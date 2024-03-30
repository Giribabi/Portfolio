import "./Introduction.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import portfolio_icon from "../../assets/portfolio-intro.jpg";

function Introduction() {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/Home");
        }, 10000);
    });
    return (
        <div className="intro-page">
            <div className="intro-content">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .changeDelay(40)
                            .changeDeleteSpeed(0.5)
                            .typeString("He is a Full Stack Developer")
                            .pauseFor(500)
                            .deleteChars(20)
                            .typeString("Competitive Coder")
                            .pauseFor(500)
                            .deleteAll()
                            .typeString("Introducing Sammidi Giridhar")
                            .start();
                    }}
                />
            </div>
            <div className="portfolio-icon-container">
                <img
                    src={portfolio_icon}
                    alt="portfolio-icon"
                    className="portfolio-icon"
                />
            </div>
        </div>
    );
}
export default Introduction;
