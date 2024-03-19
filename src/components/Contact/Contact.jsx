import gmail from './../../assets/gmail.webp'
import linkedIn from './../../assets/linkedin.jpg'
import location from './../../assets/location.png'

import './Contact.css'

function Contact(){
    return (
        <div className="contact-page">
            <div className="contact-page-heading">Contact me☎️</div>
            <div className="links-container">
                <a href='mailto:giridharsammidi@gmail.com' target='blank'>
                    <img src={gmail} className='contact-icon' alt='gmail' height='25px' width='27px'></img>
                </a>
                <a href='https://www.linkedin.com/in/sammidi-giridhar-9b54aa25a/' target='blank'>
                    <img src={linkedIn} className='contact-icon' alt='linkedIn' height='26px' width='27px'></img>
                </a>
                <a href='https://www.google.co.in/maps/place/64-22-36B,+Sriram+Nagar,+Visakhapatnam,+Andhra+Pradesh+530011/@17.6921716,83.2372281,49m/data=!3m1!1e3!4m15!1m8!3m7!1s0x3a3969cedefedd8d:0x228a3ff6bb963985!2sSriharipuram,+Visakhapatnam,+Andhra+Pradesh!3b1!8m2!3d17.6874226!4d83.235879!16s%2Fm%2F0113qgl1!3m5!1s0x3a3969cd0182f67f:0x704d1c1892851d0e!8m2!3d17.6922251!4d83.2373952!16s%2Fg%2F11gh5py5rz?entry=ttu' target='blank'>
                    <img src={location} alt='location' className='contact-icon' height='25px' width='27px'></img>
                </a>
            </div>
        </div>
    )
}
export default Contact