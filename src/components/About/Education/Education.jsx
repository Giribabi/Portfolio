import { useState, useEffect, useRef } from 'react'

function Education(){
    const educationRef = useRef()
    const dusterRef = useRef()
    const [isEduVisible, setIsEduVisible] = useState()
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            setIsEduVisible(entry.isIntersecting)
            //console.log(entry)
        })
        observer.observe(educationRef.current)
    },[])
    return(
        <div className="education-card">
                <div ref={dusterRef} className="duster" style={{animation : isEduVisible?"topdown 1s ease 0.5s 4 both, moveObject 5s ease 0.5s 1, duster-color-change 8.5s ease 0.5s 1": "none"}} ></div>
                <div className="content-heading"><div className="education-card-heading">My Education</div></div>
                <div className="education-content-container">
                    <div className="education-card-content">
                        <div className="education" style={{animation: isEduVisible? "zoom-slate 10s ease 0.5s 1" : "none"}}>
                            <span style={{color: "yellow"}}>Graduation:</span> 8.4 CGPA from Vignan's Institute of Information Technology,
                            Duvvada, Andhra Pradesh, 2021 - 2025.
                        </div> 
                        <div className="education" style={{animation: isEduVisible? "zoom-slate 11s ease 1s 1" : "none"}}>
                        <span style={{color: "yellow"}}>Intermediate:</span> 97% from KENDRIYA VIDYALAYA No.1 (CBSE BOARD),
                            Visakhapatnam, Andhra Pradesh, 2019 - 2021.
                        </div> 
                        <div className="education" style={{animation: isEduVisible? "zoom-slate 12s ease 1s 1" : "none"}}>
                        <span style={{color: "yellow"}}>Matriculation:</span> 94% from Mrs.Mariadas School (ICSE BOARD),
                            Visakhapatnam, Andhra Pradesh, 2019.
                        </div>
                        <div ref={educationRef} className="check-for-view"> </div>
                    </div>
                </div>
            </div>
    )
}
export default Education