import { Card, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';
import './About.scss';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-header">
                        <UserOutlined className="section-icon" />
                        <h2 className="section-title">About Me</h2>
                        <p className="section-subtitle">
                            Passionate about building exceptional digital experiences
                        </p>
                    </div>

                    <Row gutter={[32, 32]} justify="center">
                        <Col xs={24} lg={20}>
                            <Card className="about-card" bordered={false}>
                                <div className="about-content">
                                    <p className="about-text">{personalInfo.bio}</p>

                                    <div className="about-highlights">
                                        <Row gutter={[24, 24]}>
                                            <Col xs={24} sm={12} md={8}>
                                                <div className="highlight-item">
                                                    <div className="highlight-number">{personalInfo.yearsOfExperience}</div>
                                                    <div className="highlight-label">Years Experience</div>
                                                </div>
                                            </Col>
                                            <Col xs={24} sm={12} md={8}>
                                                <div className="highlight-item">
                                                    <div className="highlight-number">10+</div>
                                                    <div className="highlight-label">Web Applications</div>
                                                </div>
                                            </Col>
                                            <Col xs={24} sm={12} md={8}>
                                                <div className="highlight-item">
                                                    <div className="highlight-number">4+</div>
                                                    <div className="highlight-label">Mobile Applications</div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="about-focus">
                                        <h3 className="focus-title">Core Focus Areas</h3>
                                        <Row gutter={[16, 16]}>
                                            <Col xs={24} sm={12} md={8}>
                                                <div className="focus-item">
                                                    <div className="focus-dot"></div>
                                                    <span>Admin Dashboard Development</span>
                                                </div>
                                            </Col>
                                            <Col xs={24} sm={12} md={8}>
                                                <div className="focus-item">
                                                    <div className="focus-dot"></div>
                                                    <span>Real-time Chat Systems</span>
                                                </div>
                                            </Col>
                                            <Col xs={24} sm={12} md={8}>
                                                <div className="focus-item">
                                                    <div className="focus-dot"></div>
                                                    <span>Performance Optimization</span>
                                                </div>
                                            </Col>
                                            <Col xs={24} sm={12} md={8}>
                                                <div className="focus-item">
                                                    <div className="focus-dot"></div>
                                                    <span>Offline-First Architecture</span>
                                                </div>
                                            </Col>
                                            <Col xs={24} sm={12} md={8}>
                                                <div className="focus-item">
                                                    <div className="focus-dot"></div>
                                                    <span>Responsive UI/UX Design</span>
                                                </div>
                                            </Col>
                                            <Col xs={24} sm={12} md={8}>
                                                <div className="focus-item">
                                                    <div className="focus-dot"></div>
                                                    <span>API Integration & Backend Services</span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
