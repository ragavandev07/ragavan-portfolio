import { useState } from 'react';
import { Card, Tag } from 'antd';
import { RocketOutlined, CheckCircleOutlined, UserSwitchOutlined, DownOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/portfolioData';
import './Projects.scss';

const Projects = () => {
    // First project expanded by default
    const [expandedId, setExpandedId] = useState<string | null>(projects[0]?.id || null);

    const handleToggle = (projectId: string) => {
        // If clicking the already-open project, close it; otherwise open the clicked one (closing any other)
        setExpandedId((prev) => (prev === projectId ? null : projectId));
    };

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
                        <h2 className="section-title">Key Projects</h2>
                        <p className="section-subtitle">
                            Production-grade applications showcasing technical expertise and problem-solving
                        </p>
                    </div>

                    <div className="projects-grid">
                        {projects.map((project, index) => {
                            const isExpanded = expandedId === project.id;

                            return (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15, duration: 0.5 }}
                                    className="project-item"
                                >
                                    <Card className={`project-card ${isExpanded ? 'expanded' : ''}`} bordered={false}>
                                        {/* ── Title & Badge ── */}
                                        <div className="project-header">
                                            <span className="project-number">{index + 1}.</span>
                                            <h3 className="project-title">{project.title}</h3>
                                        </div>

                                        {/* ── Description ── */}
                                        <p className="project-description">{project.description}</p>

                                        {/* ── Technologies Used ── */}
                                        {project.technologies && project.technologies.length > 0 && (
                                            <div className="project-section">
                                                <h4 className="project-section-title">Technologies Used</h4>
                                                <div className="project-tech">
                                                    {project.technologies.map((tech, idx) => (
                                                        <span key={idx} className="tech-tag">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* ── Expandable Roles & Responsibilities ── */}
                                        <AnimatePresence initial={true}>
                                            {isExpanded && project.rolesAndResponsibilities && project.rolesAndResponsibilities.length > 0 && (
                                                <motion.div
                                                    key="roles"
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                                                    className="project-expandable"
                                                >
                                                    <div className="project-section project-roles-section">
                                                        <h4 className="project-section-title">
                                                            <UserSwitchOutlined /> Roles & Responsibilities
                                                        </h4>
                                                        <ul className="project-features">
                                                            {project.rolesAndResponsibilities.map((role, idx) => (
                                                                <li key={idx}>
                                                                    <CheckCircleOutlined className="feature-icon" />
                                                                    {role}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* ── Highlights ── */}
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
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* ── Toggle Arrow Button ── */}
                                        {project.rolesAndResponsibilities && project.rolesAndResponsibilities.length > 0 && (
                                            <div className="project-toggle-row">
                                                <button
                                                    className={`project-toggle-btn ${isExpanded ? 'is-expanded' : ''}`}
                                                    onClick={() => handleToggle(project.id)}
                                                    aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
                                                >
                                                    <DownOutlined className="toggle-arrow-icon" />
                                                </button>
                                            </div>
                                        )}
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
