import React from 'react';
import './footer.css';
import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="footer-section">
            <h1 className="top-text">
                sign up to our newsletter to get latest information
            </h1>
            <form className="mt-2">
                <input
                    type="email"
                    placeholder="Enter your Email"
                    className="input-text"
                />
                <button className="submit-btn">
                    Sign Up
                </button>
            </form>
            <section className="columns-section">
                <nav>
                    <ul className="first-column">
                        <img src="" alt="Easy africana logo" className="co-img" />
                        <h3>Life's easy</h3>
                        <p className="intro">Easy Africana is a tech innovative company that proffers solution through technology and business strategies.</p>

                        <div className="contact-sect">
                            <h5>Contact Us</h5>
                            <p>Phone: +234 916 249 4388</p>
                            <div className="icon-container">
                                <i><SiGmail /></i>
                                <i><FaLinkedin /></i>
                                <i><FaTwitter /></i>
                            </div>
                        </div>
                    </ul>

                    {/* <span>Copyright @ 2022 Easy Africana. All Rights Reserved</span> */}
                </nav>

                <nav>
                    <ul className="column">
                        <h1 className="column-heading">Home</h1>
                        <li>What we do</li>
                        <li>Why should we choose you</li>
                        <li>Reviews</li>
                        <li>Newletters</li>
                    </ul>
                </nav>

                <nav>
                    <ul className="column">
                        <h1 className="column-heading">About us</h1>
                        <li>Mission and vision</li>
                        <li>Our story</li>
                        <li>Focus sectors</li>
                        <li>Meet our team</li>
                        <li>Our values</li>
                    </ul>
                </nav>

                <nav>
                    <ul className="column">
                        <h1 className="column-heading">Services</h1>
                        <li>Digital Transformation</li>
                        <li>Legal advise</li>
                        <li>Business Management</li>
                        <li>Innovative Technology</li>
                    </ul>
                </nav>

                <nav>
                    <ul className="column">
                        <h1 className="column-heading">Projects</h1>
                        {/* <li>Terms of service</li>
            <li>Privacy policy</li> */}
                    </ul>
                </nav>
            </section>
        </footer>
    )
}

export default Footer