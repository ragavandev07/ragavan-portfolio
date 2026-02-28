import { Button, Row, Col } from 'antd';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';
import './Hero.scss';

const Hero = () => {
    const scrollToProjects = () => {
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };



    return (
        <section id="hero" className="hero-section">

            <div className="container">
                <Row justify="center" align="middle" className="hero-content">
                    <Col xs={24} lg={20} xl={18}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="hero-text-container"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="hero-badge-modern"
                            >
                                <div className="badge-ring">
                                    <span className="badge-num">{personalInfo.yearsOfExperience}</span>
                                </div>
                                <span className="badge-label">Years of Experience</span>
                                <div className="badge-halo"></div>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="hero-title"
                            >
                                {personalInfo.name}
                            </motion.h1>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="hero-role"
                            >
                                {personalInfo.role}
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="hero-tagline"
                            >
                                {personalInfo.tagline}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="hero-cta"
                            >
                                <Button
                                    type="primary"
                                    size="large"
                                    onClick={scrollToProjects}
                                    className="cta-button primary"
                                >
                                    Projects
                                </Button>
                                <Button
                                    size="large"
                                    href="http://portfolio-ragavan.s3-website.eu-north-1.amazonaws.com/Ragavan_MERN%20&%20React%20Native.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cta-button secondary"
                                >
                                    Resume
                                </Button>
                            </motion.div>
                        </motion.div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Hero;
