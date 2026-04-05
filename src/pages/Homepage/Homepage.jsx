import React from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'
import profilePic from '../../assets/profilePicture.png'
import verifyIcon from '../../assets/verify-svgrepo-com.svg'

const Hero = () => {
    return (
        <div className="contents" id="home">
            <div className="firstColumn">
                <div className="firstRow">
                    <img src={profilePic} alt="Profile" />
                    <div className="profileSec">
                        <div className="name">
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
                            <button type="button">Contact Me</button>
                        </div>
                    </div>
                </div>

                <div className="secondRow">
                    <div className="whoAmI">
                        <p>Who am I?</p>
                    </div>
                    <div className="Descrips">
                        <p className>A passionate second year BSIT student and experienced freelance Graphic and 3D Designer. Combining a strong foundation in information technology with advanced design skills to deliver comprehensive creative solutions. Dedicated to continuous learning and leveraging the latest design software to produce high-quality work for diverse clients.</p>
                    </div>
                </div>
                <div className="thirdRow">
                    <div className="whyChooseMe">
                        <p>Why Choose Me?</p>
                    </div>
                    <div className="h1Choose">
                        <p>The Hybrid Advantage</p>
                    </div>
                    <div className="h1ChooseDes">
                        <p>
                            - I bridge creativity and technology  a BSIT student and freelance designer who delivers designs that are visually striking and technically sound.
                        </p>
                    </div>
                    <div className="h1Choose">
                        <p>Quality Without the Agency Price</p>
                    </div>
                    <div className="h1ChooseDes">
                        <p>
                            - Professional-grade graphic and 3D design work without the big agency markup.Every project gets my full attention and dedication.
                        </p>
                    </div>
                    <div className="h1Choose">
                        <p>Reliable & Communicative</p>
                    </div>
                    <div className="h1ChooseDes">
                        <p>
                            - Clear communication, deadlines I actually meet, and a collaborative approach to bring your vision to life.
                        </p>
                    </div>
                    <div className="h1Choose">
                        <p>One Less Thing to Worry About</p>
                    </div>
                    <div className="h1ChooseDes">
                        <p>
                            - From logo to 3D render, I handle the creative process from concept to delivery so you can focus on what you do best.
                        </p>
                    </div>
                </div>
                <div className="fourthRow">
                    <div className="portFolio">
                        <p>Portfolio</p>
                    </div>
                    <div className="categoryBut">
                        <div className="graphBut">
                            <button type="button">Graphic Design</button>
                        </div>
                        <div className="graphBut">
                            <button type="button">3D Design</button>
                        </div>
                        <div className="graphBut">
                            <button type="button">UI/UX (Figma)</button>
                        </div>
                    </div>
                </div>
                <div className="fifthRow">
                    <div className="portFolio">
                        <p>Products</p>
                    </div>
                    <div className="categoryBut">
                        <div className="graphBut">
                            <button type="button">Templates</button>
                        </div>
                        <div className="graphBut">
                            <button type="button">3D Models</button>
                        </div>
                        <div className="noneBut">
                            <button type="button">UI/UX (Figma)</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="secondColumn">
                <div className="firstRowSecond">
                    <div className="descriptionSec">
                        <p className="description">Experience</p>
                    </div>
                    <div className="freelanceGraphicD">
                        <div className="titleSec">
                            <p className="titleToo">
                                <p>Freelance Graphic Designer | 3D Graphic Designer | Web Developer</p>
                            </p>
                        </div>
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
                            <p className="titleToo">
                                <p>Customer Service Representative</p>
                            </p>
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
                            <p className="titleToo">
                                <p>Brand Marshall</p>
                            </p>
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
                <div className="secondRowSecond">
                    <div className="titleSec">
                        <p className="titleTooRow">
                            <p>Skills</p>
                        </p>
                        <div className="titleSec">
                            <p className="titleToo">
                                <p>Graphic Design</p>
                            </p>
                        </div>
                        <div className="titleDescription">
                            <p>- Logo design, brand identity, typography, layout design, social media graphics, print materials (flyers, brochures, business cards), packaging design, photo editing & retouching, color theory, composition</p>
                        </div>
                        <hr />
                        <div className="titleSec">
                            <p className="titleToo">
                                <p>3D Design</p>
                            </p>
                        </div>
                        <div className="titleDescription">
                            <p>- 3D modeling, texturing & shading, lighting setup, rendering (photorealistic/stylized), product visualization, character modeling, environment design, basic animation (rigging/movement), wireframing & clay renders</p>
                        </div>
                        <hr />
                        <div className="titleSec">
                            <p className="titleToo">
                                <p>UI/UX (Figma)</p>
                            </p>
                        </div>
                        <div className="titleDescription">
                            <p>- Wireframing, prototyping, user flow design, mobile/web interface design</p>
                        </div>
                        <hr />
                        <div className="titleSec">
                            <p className="titleToo">
                                <p>Web Developing</p>
                            </p>
                        </div>
                        <div className="titleDescription">
                            <p>- Frontend development uses HTML to structure content, CSS to handle styling and responsive layouts, JavaScript to add interactivity, and frameworks like React to build dynamic, reusable user interfaces.</p>
                        </div>
                    </div>
                </div>
                <div className="thirdRowSecond">
                    <p><Link to="/">Home</Link> · <Link to="/about">About</Link> · <Link to="/portfolio">Portfolio</Link> · <Link to="/">Contact</Link> · <Link to="/products">Products</Link></p>
                </div>
            </div>

        </div>
    )
}

export default Hero
