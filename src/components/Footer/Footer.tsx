import { Layout, Row, Col } from 'antd';
import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import { contactInfo } from '../../data/portfolioData';
import './Footer.scss';

const { Footer: AntFooter } = Layout;

const Footer = () => {

    return (
        <AntFooter className="footer">
            <div className="container">
                <Row gutter={[32, 32]} justify="space-between" align="middle">
                    <Col xs={24} md={12}>
                        <div className="footer-brand">
                            <h3 className="footer-title">Let's Build Something Great</h3>
                            <p className="footer-text">
                                Passionate about building exceptional digital experiences
                            </p>
                        </div>
                    </Col>

                    <Col xs={24} md={12}>
                        <div className="footer-social">
                            <a
                                href={contactInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="GitHub"
                            >
                                <GithubOutlined />
                            </a>
                            <a
                                href={contactInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="LinkedIn"
                            >
                                <LinkedinOutlined />
                            </a>
                            <a
                                href={`mailto:${contactInfo.email}`}
                                className="social-link"
                                aria-label="Email"
                            >
                                <MailOutlined />
                            </a>
                        </div>
                    </Col>
                </Row>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        Thank you for visiting my portfolio!
                    </p>
                </div>
            </div>
        </AntFooter>
    );
};

export default Footer;
