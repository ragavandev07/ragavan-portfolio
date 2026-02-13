import { Card, Row, Col } from 'antd';
import {
    MailOutlined,
    GithubOutlined,
    LinkedinOutlined,
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import { contactInfo } from '../../data/portfolioData';
import './Contact.scss';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-header">
                        <MailOutlined className="section-icon" />
                        <h2 className="section-title">Get In Touch</h2>
                        <p className="section-subtitle">
                            Let's discuss how I can contribute to your team's success
                        </p>
                    </div>

                    <Row gutter={[48, 48]} justify="center">
                        <Col xs={24} lg={16}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                <Card className="contact-info-card" bordered={false}>
                                    <h3 className="contact-info-title">Contact Information</h3>
                                    <p className="contact-info-text">
                                        I'm always open to discussing new opportunities, interesting projects, or
                                        potential collaborations.
                                    </p>

                                    <div className="contact-links">
                                        <a
                                            href={`mailto:${contactInfo.email}`}
                                            className="contact-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <div className="contact-link-icon">
                                                <MailOutlined />
                                            </div>
                                            <div className="contact-link-content">
                                                <div className="contact-link-label">Email</div>
                                                <div className="contact-link-value">{contactInfo.email}</div>
                                            </div>
                                        </a>

                                        <a
                                            href={contactInfo.linkedin}
                                            className="contact-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <div className="contact-link-icon">
                                                <LinkedinOutlined />
                                            </div>
                                            <div className="contact-link-content">
                                                <div className="contact-link-label">LinkedIn</div>
                                                <div className="contact-link-value">Connect with me</div>
                                            </div>
                                        </a>

                                        <a
                                            href={contactInfo.github}
                                            className="contact-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <div className="contact-link-icon">
                                                <GithubOutlined />
                                            </div>
                                            <div className="contact-link-content">
                                                <div className="contact-link-label">GitHub</div>
                                                <div className="contact-link-value">View my code</div>
                                            </div>
                                        </a>
                                    </div>
                                </Card>
                            </motion.div>
                        </Col>
                    </Row>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
