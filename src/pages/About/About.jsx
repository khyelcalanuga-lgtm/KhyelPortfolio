import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './About.css'
import verifyIcon from '../../assets/verify-svgrepo-com.svg'
import Instagram from '../../assets/SocialIcons/instagram.svg'
import Facbook from '../../assets/SocialIcons/facebook.svg'
import LinkedIn from '../../assets/SocialIcons/linkedin.svg'
import GitHub from '../../assets/SocialIcons/github.svg'

const About = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "About | Khyel Calanuga";
    }, []);

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };

    return (
        <div className="contents2">
            <div className="firstRowColumn2">
                <div className="firstRowFixer">
                    <div className="firstRow2">
                        <div className="profileSec">
                            <div className="name2">
                                <p className="profileName">Khyel M. Calanuga</p>
                                <img className="verifyIcon" src={verifyIcon} alt="Verified" />
                            </div>
                            <div className="title">
                                <p>Freelance Graphic Designer | 3D Graphic Designer | Web Developer</p>
                            </div>
                            <div className="location">
                                <p>Marikina, National Capital Region, Philippines</p>
                            </div>
                            <div className="contactButton">
                                <button type="button" onClick={() => navigate('/contact')}>Contact Me</button>
                            </div>
                        </div>
                    </div>
                    <div className="firstRow2">
                        <div className="profileSec">
                            <div className="SocialsTitle">
                                <p className="profileName">Socials:</p>
                                <div className="logos">
                                    <img onClick={() => openInNewTab("https://www.instagram.com/kahyelll/")} src={Instagram} alt="Instagram" className='INSTA' />
                                    <img onClick={() => openInNewTab("https://www.facebook.com/kiell.lly")} src={Facbook} alt="Facebook" className='FACEBOOK' />
                                    <img onClick={() => openInNewTab("https://www.linkedin.com/in/khyel-calanuga-928167371/")} src={LinkedIn} alt="LinkedIn" className='LINKEDIN' />
                                    <img onClick={() => openInNewTab("https://github.com/khyelcalanuga-lgtm")} src={GitHub} alt="GitHub" className='GITHUB' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixer">
                <div className="secondRow2">
                    <div className="aboutMeTitle">
                        <p>About Me</p>
                    </div>
                    <div className="aboutMeDes">
                        <p>A passionate second year BSIT student and experienced freelance Graphic Designer, 3D Designer, and Web Developer, bridging technical expertise and creative vision to deliver comprehensive design solutions. Combines a strong foundation in information technology with self taught skills in 2D, 3D, and web development to create visually striking, technically sound, and optimized work from branding and 3D models to responsive websites and web applications. Committed to continuous learning and mastering the latest design software, rendering engines, frontend frameworks, and modern web workflows to exceed client expectations.</p>
                        <div className="contactButton">
                            <button type="button">Download CV</button>
                        </div>
                    </div>
                </div>
                <div className="secondcol2div">
                    <div className="firstcol">
                        <div className="descriptionSec">
                            <p className="description">Experience</p>
                        </div>
                        <div className="freelanceGraphicD">
                            <div className="titleSec">
                                <div className="titleToo">
                                    <p>Freelance Graphic Designer</p>
                                </div>                            </div>
                            <div className="companyname">
                                <p>Yorik Production · Freelance</p>
                            </div>
                            <div className="date">
                                <p>May 2022 - Present ∙ 3 yrs 11 mos</p>
                            </div>
                            <div className="location">
                                <p>The Hague, South Solland, Netherlands ∙ Remote</p>
                            </div>
                        </div>
                        <hr />
                        <div className="customerService">
                            <div className="titleSec">
                                <div className="titleToo">
                                    <p>Customer Service Representative</p>
                                </div>
                            </div>
                            <div className="companyname">
                                <p>Alorica ∙ Fulltime</p>
                            </div>
                            <div className="date">
                                <p>Mar 2025 - May 2025 ∙ 3 mos</p>
                            </div>
                            <div className="location">
                                <p>Marikina , National Capital Region, Philippines ∙ On-site</p>
                            </div>
                        </div>
                        <hr />
                        <div className="brandMarshall">
                            <div className="titleSec">
                                <div className="titleToo">
                                    <p>Brand Marshall</p>
                                </div>
                            </div>
                            <div className="companyname">
                                <p>Sm Supermalls ∙ Fulltime</p>
                            </div>
                            <div className="date">
                                <p>Oct 2024 - Nov 2024 ∙ 2 mos</p>
                            </div>
                            <div className="location">
                                <p>San Mateo, Rizal, Philippines ∙ On-site</p>
                            </div>
                        </div>
                    </div>
                    <div className="secondcol">
                        <div className="keySkillsTitle">
                            <p>Key Skills</p>
                        </div>
                        <div className="skillsThis">
                            <p>• Graphic Design</p>
                            <p>• 3D Modeling</p>
                            <p>• Typography</p>
                            <p>• Texturing and Rendering</p>
                            <p>• Front-End Web Development</p>
                            <p>• Adobe Creative Suite</p>
                            <p>• Photo Editing</p>
                            <p>• Video Editing</p>
                            <p>• Client Collaboration</p>
                            <p>• Project Management</p>
                            <p>• Motion Graphics</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
