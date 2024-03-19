import './About.css'
import Education from './Education/Education'
import Profiles from './Profiles/Profiles'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'

function About(){
    return (
        <div className="about-page">
            <Education/>
            <Profiles/>
            <Skills/>
            <Projects/>
        </div>
    )
}
export default About