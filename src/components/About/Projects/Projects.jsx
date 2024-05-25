import { useState } from "react";

function Projects() {
    const [projectToggle1, setProjectToggle1] = useState(false);
    const [projectToggle2, setProjectToggle2] = useState(false);
    const [projectToggle3, setProjectToggle3] = useState(false);
    const [projectToggle4, setProjectToggle4] = useState(false);
    const [projectToggle5, setProjectToggle5] = useState(false);

    const projects = [
        {
            name: "ChatEasy",
            index: 1,
            content: `<p>This is a MERN stack chat application which enables user for login, signup and realtime messaging. <ul><li>I have mainly used Chakra-UI for the frontend.</li></p>`,
            github_link: "https://github.com/Giribabi/ChatEasy/",
            deployment_link: "https://giribabi-chateasy.vercel.app/",
        },
        {
            name: "Data Visualization",
            index: 2,
            content: `<p>This is a MERN stack project in which the data must be fetched from the database according to the filters query. The data must be visualized in the form of charts. <ul><li>I have used ChartJs for the purpose of data visualization.</li></p>`,
            github_link:
                "https://github.com/Giribabi/BlackcofferDataVisualization/",
            deployment_link:
                "https://blackcoffer-data-visualization.vercel.app/",
        },
        {
            name: "My Portfolio",
            index: 3,
            content: `<p>You are watching it now.<ul><li>It is built using ReactJs </li><li>This project showcases my frontend skills.</li><li>For easy maintainance of the CSS code, I have written the CSS selectors in ascending order.</li><li>I have also used 'dangerouslySetInnerHTML' property here.</li></ul></p>`,
            github_link: "https://github.com/Giribabi/ShopEasy",
            deployment_link: "#home-section",
            ppt_link:
                "https://www.canva.com/design/DAGBi8OQfQ4/6ATe9DJMpZPeiyTMfftGrA/view?utm_content=DAGBi8OQfQ4&utm_campaign=designshare&utm_medium=link&utm_source=editor",
        },
        {
            name: "ShopEasy",
            index: 4,
            content: `<p>This is an front-end project of an e-commerce platform and is completely designed in ReactJs.<ul> <li> The login username and password can be found in dummyjson docs. </li><li>I have already set the login credentials for direct login.</li><li>We must remember that accurate login credentials are necessary to enter into the home page. </li><li>After the login authentication, you will be redirected to the protected Home page. </li><li>Then you can search for the available products. </li><li>You can filter the products according to their price. </li><li>You can view the number of items added to cart at the top of the cart icon. </li><li>The total cost of the items in the cart is found below the cart icon. </li><li>You can view the cart by clicking on the cart icon. </li><li>You can also tap on any item card on the home page to view its complete description. </li><li>At last you can logout from the session by clicking the logout button. <li>I have collected and used all the data from <a href="https://dummyjson.com/docs" target="blank">here</a></li></ul></p>`,
            github_link: "https://github.com/Giribabi/ShopEasy",
            deployment_link: "https://shop-easy-updated.vercel.app/",
        },
        {
            name: "UserProfiles",
            index: 5,
            content: `<p>This is a frontend project to recieve and display data from an API. <ul><li>I was asked to fetch data(user profiles) from an API and show the details of a particular user when clicked.</li><li>I have implemented pagination for the first time through this project.</li><li>I have collected the data from <a href="https://602e7c2c4410730017c50b9d.mockapi.io/users" target="blank">here</a></li></p>`,
            github_link: "https://github.com/Giribabi/Figma-task-2-new",
            deployment_link: "https://figma-new-task2.vercel.app/",
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
                    <div
                        className="project"
                        key={`${project.name}-${project.index}`}
                    >
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
                                    {project.ppt_link && (
                                        <a
                                            className="link"
                                            href={project.ppt_link}
                                            target="blank"
                                        >
                                            View Presentation
                                        </a>
                                    )}
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
