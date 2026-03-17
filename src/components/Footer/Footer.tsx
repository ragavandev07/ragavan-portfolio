"use client";

import { GithubOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { contactInfo } from '../../data/portfolioData';
import './Footer.scss';

const Footer = () => {

    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-links-grid">
                        {/* Social Links as Text (NOW FIRST) */}
                        <div className="footer-column">
                            <h4 className="footer-column-title">Follow Me</h4>
                            <div className="footer-social-text-links">
                                <a
                                    href={contactInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-social-text-link"
                                >
                                    GitHub
                                </a>
                                <a
                                    href={contactInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-social-text-link"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href={`mailto:${contactInfo.email}`}
                                    className="footer-social-text-link"
                                >
                                    Email
                                </a>
                            </div>
                        </div>

                        {/* Contact Info (NOW SECOND) */}
                        <div className="footer-column">
                            <h4 className="footer-column-title">Get In Touch</h4>
                            <div className="footer-contact-list">
                                <a href={`mailto:${contactInfo.email}`} className="footer-contact-link">
                                    <span>{contactInfo.email}</span>
                                </a>
                                {contactInfo.phone && (
                                    <a href={`tel:${contactInfo.phone}`} className="footer-contact-link">
                                        <span>{contactInfo.phone}</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="footer-cta">
                        <h3 className="footer-heading">Let's Build Something Great</h3>
                        <p className="footer-subtext">
                            Passionate about building exceptional digital experiences.
                            Feel free to reach out!
                        </p>
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default Footer;
