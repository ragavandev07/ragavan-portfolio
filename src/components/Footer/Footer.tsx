import { GithubOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { contactInfo } from '../../data/portfolioData';
import './Footer.scss';

const Footer = () => {

    return (
        <footer className="footer" id="contact">
            <div className="container">
                {/* Top Section */}
                <div className="footer-top">
                    <div className="footer-cta">
                        <h3 className="footer-heading">Let's Build Something Great</h3>
                        <p className="footer-subtext">
                            Passionate about building exceptional digital experiences.
                            Feel free to reach out!
                        </p>
                    </div>

                    <div className="footer-links-grid">
                        {/* Contact Info */}
                        <div className="footer-column">
                            <h4 className="footer-column-title">Get In Touch</h4>
                            <div className="footer-contact-list">
                                <a href={`mailto:${contactInfo.email}`} className="footer-contact-link">
                                    <MailOutlined />
                                    <span>{contactInfo.email}</span>
                                </a>
                                {contactInfo.phone && (
                                    <a href={`tel:${contactInfo.phone}`} className="footer-contact-link">
                                        <PhoneOutlined />
                                        <span>{contactInfo.phone}</span>
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="footer-column">
                            <h4 className="footer-column-title">Follow Me</h4>
                            <div className="footer-social-icons">
                                <a
                                    href={contactInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon-btn"
                                    aria-label="GitHub"
                                >
                                    <GithubOutlined />
                                </a>
                                <a
                                    href={contactInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon-btn"
                                    aria-label="LinkedIn"
                                >
                                    <LinkedinOutlined />
                                </a>
                                <a
                                    href={`mailto:${contactInfo.email}`}
                                    className="social-icon-btn"
                                    aria-label="Email"
                                >
                                    <MailOutlined />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default Footer;
