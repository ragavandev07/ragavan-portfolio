import { Card, Timeline, Tag } from 'antd';
import { TrophyOutlined, CalendarOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { experiences } from '../../data/portfolioData';
import './Experience.scss';

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

                    <div className="experience-timeline">
                        <Timeline mode="left">
                            {experiences.map((exp, index) => (
                                <Timeline.Item
                                    key={index}
                                    label={
                                        <div className="timeline-label">
                                            <CalendarOutlined /> {exp.duration}
                                        </div>
                                    }
                                    color="blue"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2, duration: 0.5 }}
                                    >
                                        <Card className="experience-card" bordered={false}>
                                            <h3 className="experience-title">{exp.title}</h3>
                                            {exp.company && <div className="experience-company">{exp.company}</div>}

                                            <ul className="experience-description">
                                                {exp.description.map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>

                                            <div className="experience-tech">
                                                <strong>Technologies:</strong>
                                                <div className="tech-tags">
                                                    {exp.technologies.map((tech, idx) => (
                                                        <Tag key={idx} color="blue" className="tech-tag">
                                                            {tech}
                                                        </Tag>
                                                    ))}
                                                </div>
                                            </div>
                                        </Card>
                                    </motion.div>
                                </Timeline.Item>
                            ))}
                        </Timeline>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
