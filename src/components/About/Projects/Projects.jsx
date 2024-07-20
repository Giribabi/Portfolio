import { useState } from "react";

function Projects() {
    const [projectToggle1, setProjectToggle1] = useState(false);
    const [projectToggle2, setProjectToggle2] = useState(false);
    const [projectToggle3, setProjectToggle3] = useState(false);
    const [projectToggle4, setProjectToggle4] = useState(false);
    const [projectToggle5, setProjectToggle5] = useState(false);

    const projects = [
        {
            name: "VoteEasy",
            content: `<p>This is a web application through which people can easily vote in online mode from their home without compromising with data security.</p>`,
            github_link: "https://github.com/Giribabi/Vote-Easy/",
            deployment_link: "https://vote-easy.vercel.app/",
        },
        {
            name: "Twitter-twin",
            content: `<p>(In progress) This is a MERN stack project that aims to be similar to twitter (X).</p>`,
            github_link: "https://github.com/Giribabi/Twitter-twin/",
            deployment_link: "https://twitter-twin.vercel.app/",
        },
        {
            name: "ChatEasy",
            content: `<p>This is a MERN stack chat application which enables user for login, signup and realtime messaging. <ul><li>I have mainly used Chakra-UI for the frontend.</li></p>`,
            github_link: "https://github.com/Giribabi/ChatEasy/",
            deployment_link: "https://giribabi-chateasy-new.vercel.app/",
        },
        {
            name: "My Portfolio",
            content: `<p>You are watching it now.<ul><li>It is built using ReactJs </li><li>This project showcases my frontend skills.</li><li>For easy maintainance of the CSS code, I have written the CSS selectors in ascending order.</li><li>I have also used 'dangerouslySetInnerHTML' property here for the first time.</li></ul></p>`,
            github_link: "https://github.com/Giribabi/ShopEasy",
            deployment_link: "#home-section",
            ppt_link:
                "https://www.canva.com/design/DAGBi8OQfQ4/6ATe9DJMpZPeiyTMfftGrA/view?utm_content=DAGBi8OQfQ4&utm_campaign=designshare&utm_medium=link&utm_source=editor",
        },
    ];

    function setToggle(index) {
        var value = true;
        if (index > 4) value = false;
        index %= 5;
        if (index === 0) setProjectToggle1(value);
        else if (index === 1) setProjectToggle2(value);
        else if (index === 2) setProjectToggle3(value);
        else if (index === 3) setProjectToggle4(value);
        else setProjectToggle5(value);
    }
    return (
        <div className="projects-card">
            <div className="project-heading-container">
                <div className="project-card-heading">My Projects</div>
            </div>
            <div className="project-card-content">
                {projects.map((project, index) => (
                    <div className="project" key={`${project.name}-${index}`}>
                        <div className="project-name">{project.name}</div>
                        {(index === 0 && projectToggle1) ||
                        (index === 1 && projectToggle2) ||
                        (index === 2 && projectToggle3) ||
                        (index === 3 && projectToggle4) ||
                        (index === 4 && projectToggle5) ? (
                            <div className="project-content-toggle">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: project.content,
                                    }}
                                    className="project-content"
                                ></div>
                                <div className="links">
                                    <a
                                        className="link"
                                        href={project.github_link}
                                        target="blank"
                                    >
                                        Watch the code on github
                                    </a>
                                    <a
                                        className="link"
                                        href={project.deployment_link}
                                        target="blank"
                                    >
                                        Watch how it looks when deployed
                                    </a>
                                    {/* {project.ppt_link && (
                                        <a
                                            className="link"
                                            href={project.ppt_link}
                                            target="blank"
                                        >
                                            View Presentation
                                        </a>
                                    )} */}
                                </div>
                                <div className="toggle-button-container">
                                    <div
                                        className="content-toggle-button"
                                        style={{ textAlign: "center" }}
                                        onClick={() => setToggle(5 + index)}
                                    >
                                        Collapse
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div
                                className="content-toggle-button"
                                onClick={() => setToggle(index)}
                            >
                                Know more
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Projects;
