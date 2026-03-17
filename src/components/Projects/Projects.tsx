"use client";

import { useState, useEffect } from 'react';
import { Card, Tag, Row, Col, Modal } from 'antd';
import {
    RocketOutlined,
    ArrowRightOutlined,
    CloseOutlined,
    MessageOutlined,
    SafetyOutlined,
    TeamOutlined,
    HeartOutlined,
    CarOutlined,
    DesktopOutlined
} from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/portfolioData';
import { Project } from '../../types';
import './Projects.scss';

const iconMap: { [key: string]: React.ReactNode } = {
    MessageOutlined: <MessageOutlined />,
    SafetyOutlined: <SafetyOutlined />,
    TeamOutlined: <TeamOutlined />,
    HeartOutlined: <HeartOutlined />,
    CarOutlined: <CarOutlined />,
    DesktopOutlined: <DesktopOutlined />
};

// Highlight specific tokens (e.g. "4+") inside a description string
const renderDescription = (text: string) => {
    const parts = text.split(/(\d+\+)/g);
    return parts.map((part, i) =>
        /^\d+\+$/.test(part)
            ? <span key={i} className="desc-highlight">{part}</span>
            : part
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // Body scroll lock
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedProject]);

    const openModal = (project: Project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
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
                            A showcase of my recent work, featuring complex problem-solving and modern tech stacks.
                        </p>
                    </div>

                    <Row gutter={[24, 24]} className="projects-grid">
                        {projects.map((project) => (
                            <Col xs={24} md={12} lg={8} key={project.id}>
                                <motion.div
                                    transition={{ duration: 0.3 }}
                                >
                                    <Card
                                        className="project-card-v2"
                                        onClick={() => openModal(project)}
                                        variant="borderless"
                                    >
                                        <div className="card-inner-border">
                                            <div className="card-content-inside">
                                                <div className="card-icon-wrapper">
                                                    <div className="card-project-icon">
                                                        {project.iconName ? iconMap[project.iconName] : <RocketOutlined />}
                                                    </div>
                                                </div>

                                                <div className="card-bottom">
                                                    <h3 className="project-title">{project.title}</h3>
                                                    <div className="tech-footer">
                                                        <div className="tech-stack-mini">
                                                            {project.technologies.slice(0, 3).map((tech, i) => (
                                                                <span key={i} className="mini-tag">{tech}</span>
                                                            ))}
                                                            {project.technologies.length > 3 && <span className="mini-tag">+{project.technologies.length - 3}</span>}
                                                        </div>
                                                        <div className="view-details">
                                                            <ArrowRightOutlined />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </motion.div>
            </div>

            {/* ── Custom Project Detail Modal ── */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="custom-modal-overlay">
                        <motion.div
                            className="modal-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                        />
                        <motion.div
                            className="custom-modal-container"
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        >
                            <button className="custom-modal-close" onClick={closeModal}>
                                <CloseOutlined />
                            </button>

                            <div className="modal-triple-outer">
                                <div className="modal-content">

                                    <h2 className="modal-title">{selectedProject.title}</h2>
                                    <p className="modal-description">{renderDescription(selectedProject.description)}</p>

                                    <div className="modal-section">
                                        <h4 className="modal-section-title">Key Responsibilities</h4>
                                        <ul className="modal-list">
                                            {selectedProject.rolesAndResponsibilities?.map((role, i) => (
                                                <li key={i}>

                                                    <span>{role}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="modal-section">
                                        <h4 className="modal-section-title">Technologies</h4>
                                        <div className="modal-tags">
                                            {selectedProject.technologies.map((tech, i) => (
                                                <span key={i} className="tech-tag">{tech}</span>
                                            ))}
                                        </div>
                                    </div>

                                    {selectedProject.link && (
                                        <div className="modal-footer">
                                            <div className="link-wrapper">
                                                <span className="link-label">Live Website:</span>
                                                <a
                                                    href={selectedProject.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="live-link-btn"
                                                >
                                                    {selectedProject.linkLabel || 'View Website'} <ArrowRightOutlined />
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};



export default Projects;
