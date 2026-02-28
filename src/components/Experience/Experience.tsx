import { TrophyOutlined, LaptopOutlined, BulbOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { experiences } from '../../data/portfolioData';
import './Experience.scss';

const expIcons = [<LaptopOutlined />, <BulbOutlined />];

const Experience = () => {
    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-header">
                        <TrophyOutlined className="section-icon" />
                        <h2 className="section-title">Professional Experience</h2>
                        <p className="section-subtitle">
                            Building production-grade applications with real-world impact
                        </p>
                    </div>

                    <div className="exp-list">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                className="exp-card"
                            >
                                <div className="exp-left">
                                    <span className="exp-icon-circle">{expIcons[index] || <LaptopOutlined />}</span>
                                    <div className="exp-line"></div>
                                </div>

                                <div className="exp-content">
                                    <div className="exp-meta">
                                        <span className="exp-duration">{exp.duration}</span>
                                    </div>
                                    <h3 className="exp-title">{exp.title}</h3>
                                    {exp.company && <p className="exp-company">{exp.company}</p>}

                                    <ul className="exp-points">
                                        {exp.description.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
