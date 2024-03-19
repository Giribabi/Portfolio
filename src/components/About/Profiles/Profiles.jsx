import leetcode from '../../../assets/leetcode.png'
import codechef from '../../../assets/codechef.png'
import gfg from '../../../assets/gfg.png'
import github from '../../../assets/github.png'
import { useEffect, useState, useRef } from 'react'

function Profiles(){
    const profilesRef = useRef()
    const [isProfilesVisible,setIsProfilesVisible] = useState()
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            setIsProfilesVisible(entry.isIntersecting)
        })
        observer.observe(profilesRef.current)
    },[])
    return(
        <div className="profiles-card-container">
            <div className="profiles-heading-container">
                <div className="profiles-heading">My Coding Profiles</div>
            </div>
            <div className="profiles">
                <div className="profile-link-image" style={{animation: isProfilesVisible ? "zoom 1s ease 0.5s 1": "none"}}>
                    <a href='https://www.codechef.com/users/giribabi' target='blank'><img src={codechef} alt='codechef-link' className='image-link'/></a>
                </div>
                <div className="profile-link-image" style={{animation: isProfilesVisible ? "zoom 1s ease 1s 1": "none"}}>
                    <a href='https://leetcode.com/giribabi' target='blank'><img src={leetcode} alt='leetcode-link' className='image-link'/></a>
                </div>
                <div className="profile-link-image" style={{animation: isProfilesVisible ? "zoom 1s ease 1.5s 1": "none"}}>
                    <a href='https://auth.geeksforgeeks.org/user/sammidivy9j' target='blank'><img src={gfg} alt='gfg-link' className='image-link'/></a>
                </div>
                <div className="profile-link-image" style={{animation: isProfilesVisible ? "zoom 1s ease 2s 1": "none"}}>
                    <a href='https://github.com/Giribabi' target='blank'><img src={github} alt='github-link' className='image-link'/></a>
                </div>
            </div>
            <div ref={profilesRef} className="check-for-view"> </div>
        </div>
    )
}
export default Profiles