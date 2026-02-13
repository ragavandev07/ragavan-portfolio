import { Card, Tag, Badge } from 'antd';
import { RocketOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { projects } from '../../data/portfolioData';
import './Projects.scss';

const Projects = () => {
    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-header">
                        <RocketOutlined className="section-icon" />
                        <h2 className="section-title">Featured Projects</h2>
                        <p className="section-subtitle">
                            Production-grade applications showcasing technical expertise and problem-solving
                        </p>
                    </div>

                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                className="project-item"
                            >
                                <Card className="project-card" bordered={false}>
                                    <div className="project-header">
                                        <h3 className="project-title">{project.title}</h3>
                                        {project.highlights && project.highlights.length > 0 && (
                                            <Badge count="Featured" className="featured-badge" />
                                        )}
                                    </div>

                                    <p className="project-description">{project.description}</p>

                                    <div className="project-section">
                                        <h4 className="project-section-title">Key Features</h4>
                                        <ul className="project-features">
                                            {project.features.slice(0, 6).map((feature, idx) => (
                                                <li key={idx}>
                                                    <CheckCircleOutlined className="feature-icon" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {project.highlights && project.highlights.length > 0 && (
                                        <div className="project-section">
                                            <h4 className="project-section-title">Highlights</h4>
                                            <div className="project-highlights">
                                                {project.highlights.map((highlight, idx) => (
                                                    <Tag key={idx} color="green" className="highlight-tag">
                                                        {highlight}
                                                    </Tag>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
