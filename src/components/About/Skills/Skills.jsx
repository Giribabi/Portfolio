import css_icon from "../../../assets/css_icon.png";
import html_icon from "../../../assets/html_icon.png";
import js_icon from "../../../assets/js_icon.png";
import nodejs_icon from "../../../assets/nodejs_icon.png";
import expressjs_icon from "../../../assets/expressjs_icon.png";
import mongodb_icon from "../../../assets/mongodb_icon.png";
import sass_icon from "../../../assets/sass_icon.png";
import wordpress_icon from "../../../assets/wordpress_icon.png";
import reactjs_icon from "../../../assets/reactjs_icon.png";
import typing_icon from "../../../assets/typing_icon.png";
import cplusplus_icon from "../../../assets/cplusplus.png";
import { useState, useRef, useEffect } from "react";

function Skills() {
    const skillsRef = useRef();
    const [skillsVisible, setSkillsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setSkillsVisible(entry.isIntersecting);
        });
        observer.observe(skillsRef.current);
    }, []);
    return (
        <div className="skills-card">
            <div className="content-heading">
                <div className="skills-card-heading">My skills</div>
            </div>
            <div className="skills-card-content">
                <div className="skills-grid">
                    <img
                        src={cplusplus_icon}
                        className="skill-icon"
                        alt="cplusplus_icon"
                    />
                    <img
                        src={html_icon}
                        className="skill-icon"
                        alt="html_icon"
                    />
                    <img src={css_icon} className="skill-icon" alt="css_icon" />
                    <img src={js_icon} className="skill-icon" alt="js_icon" />
                    <img
                        src={sass_icon}
                        className="skill-icon"
                        alt="sass_icon"
                    />
                    <img
                        src={reactjs_icon}
                        className="skill-icon"
                        alt="reactjs_icon"
                    />
                    <img
                        src={nodejs_icon}
                        className="skill-icon"
                        alt="nodejs_icon"
                    />
                    <img
                        src={expressjs_icon}
                        className="skill-icon"
                        alt="expressjs_icon"
                    />
                    <img
                        src={mongodb_icon}
                        className="skill-icon"
                        alt="mongodb_icon"
                    />
                    <img
                        src={wordpress_icon}
                        className="skill-icon"
                        alt="wordpress_icon"
                    />
                    <img
                        src={typing_icon}
                        className="skill-icon"
                        alt="typing_icon"
                    />
                </div>
            </div>
            <div className="text-skills-container">
                <div className="text-skills-heading-container">
                    <div className="text-skills-heading">Good in ?</div>
                </div>
                <ul
                    className="text-skills"
                    style={{
                        animation: skillsVisible
                            ? "move-right 2s ease 0.5s 0.8"
                            : "none",
                    }}
                >
                    <li>
                        I am good in problem solving, using data structures and
                        algorithms and customizing them.
                    </li>
                    <li>I am capable of building beautiful User Interfaces.</li>
                    <li ref={skillsRef}>
                        I have good experience in developing MERN apps with
                        proficiency in React.js
                    </li>
                    <li>
                        I am a consistently hardworking lad striving to improve
                        my performance in every way possible.
                    </li>
                    <li>
                        I love educating my fellow geeks with all the knowledge
                        I have.
                    </li>
                    <li>
                        I was selected as the competitive head for our college's
                        GeeksforGeeks Student Chapter.
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Skills;
