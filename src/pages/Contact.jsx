import React, { useState, useEffect } from 'react'
import './Contact.css'

const Contact = () => {
    const [result, setResult] = useState("");

    useEffect(() => {
        document.title = "Contact | Khyel Calanuga";
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending");
        const formData = new FormData(event.target);


        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Submitted Successfully");
                event.target.reset();
            } else {
                console.log("Error", data);
                setResult(data.message || "Error");
            }
        } catch (error) {
            console.log("Fetch Error", error);
            setResult("An error occurred. Please try again.");
        }
    };

    return (
        <div className='ContactForm'>
            <div className="contact-firstRowColumn2">
                <div className="contact-firstRowFixer">
                    <div className="contact-firstRow2">
                        <div className="contact-profileSec">
                            <div className="contact-name2">
                                <p className="contact-profileName">Get in Touch </p>
                            </div>
                            <div className="contact-title">
                                <p>Phone Number:</p>
                            </div>
                            <div className="contact-title2">
                                <p>+63 991 017 8662</p>
                            </div>
                            <div className="contact-title">
                                <p>Email:</p>
                            </div>
                            <div className="contact-title2">
                                <p>khyelcalanuga@gmail.com</p>
                            </div>
                            <div className="contact-title">
                                <p>Location:</p>
                            </div>
                            <div className="contact-title2">
                                <p>Marikina, National Capital Region, Philippines</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-fixer">
                <div className="contact-secondRow2">
                    <div className="contact-formContainer">
                        <form onSubmit={onSubmit} className="contact-topRow">
                            <input type="hidden" name="access_key" value="bba8751c-10f1-4049-aadb-44363411769b" />
                            <div className="contact-firstColumn">
                                <input type="text" placeholder='First Name' name="first_name" required />
                                <input type="text" placeholder='Last Name' name="last_name" required />
                            </div>
                            <div className="contact-secondColumn">
                                <input type="tel" placeholder='Mobile Number' name="phone" />
                                <input type="email" placeholder='Email' name="email" required />
                            </div>
                            <textarea placeholder="Message" rows="5" name="message" required></textarea>
                            <div className="contact-contactButton">
                                <button type="submit">Send Message</button>
                            </div>
                            <span className="contact-result">{result}</span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
