import { Component } from 'react';


class About extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">About Me</h1>
            <div className="hr_line line2"><div className="inner2"></div></div>
            <h2 className="abouthead">Mohan Kumar <mark className="mark2">Paluru</mark></h2>
            <p>Python Developer</p>
            <br></br>
            <p className="p10">Experienced Program Analyst at Cognizant with a demonstrated history of working in Computer Vision, NLP, RESTFUL Services and Artificial Intelligence. Skilled in Python, Linux, NLP, Dialogflow, Numpystack, Docker,Flask , Fast API, Django REST Services and Custom Vision Intelligence. A strong business development professional with a Bachelor of Technology focused in Electronics and Communications Engineering from SRM University, KTR.
            </p>
            <div className="Edu">
                <div class="back1 back2"><i class="fa fa-book i1 i3"></i></div>
            </div>
            <h3>Education</h3>
            <div className="vr_line">
                <div className="vr_inner inn1"></div>
                <div className="vr_inner inn2"></div>
            </div>
            <h4>B.Tech in ECE</h4>
            <p className="p1">SRMIST, KTR, Chennai</p>
            <p className="p1"><i class="fa fa-calendar i2"></i>June 2015 - May 2019</p>
            <h4>High School</h4>
            <p className="p1">Narayana Junior College</p>
            <p className="p1"><i class="fa fa-calendar i2"></i>May 2015</p>

            <h3 class="sk_head">Skills</h3>
            <div class="sk">Python</div>
            <div class="sk s2">REST API</div>
            <div class="sk s3">OpenCV</div>
            <div class="sk s4">NLP</div>
            <div class="sk s5">Docker</div>
            <div class="sk s6">SQL, ES</div>
            </div>
            )
        }
    }
    
export default About
    
