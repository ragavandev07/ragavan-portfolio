import { Button, Row, Col } from 'antd';
import { DownloadOutlined, RocketOutlined } from '@ant-design/icons';
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

    const handleDownloadResume = () => {
        // Replace with actual resume URL
        window.open('/resume.pdf', '_blank');
    };

    return (
        <section id="hero" className="hero-section">
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>

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
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="hero-badge"
                            >
                                <RocketOutlined /> {personalInfo.yearsOfExperience} Years of Experience
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
                                    icon={<RocketOutlined />}
                                    onClick={scrollToProjects}
                                    className="cta-button primary"
                                >
                                    View Projects
                                </Button>
                                <Button
                                    size="large"
                                    icon={<DownloadOutlined />}
                                    onClick={handleDownloadResume}
                                    className="cta-button secondary"
                                >
                                    Download Resume
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
