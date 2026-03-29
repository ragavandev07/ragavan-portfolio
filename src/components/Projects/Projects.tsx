"use client";

import { useState, useEffect, useRef } from 'react';
import {
    RocketOutlined,
    ArrowRightOutlined,
    CloseOutlined,
    MessageOutlined,
    SafetyOutlined,
    TeamOutlined,
    HeartOutlined,
    CarOutlined,
    DesktopOutlined,
    BulbOutlined,
    CodeOutlined,
    WarningOutlined,
    CheckCircleOutlined,
    LinkOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/portfolioData';
import { Project } from '../../types';
import './Projects.scss';

// Per-project accent colours
const accentMap: Record<string, string> = {
    'chat-app': '#7c3aed',  // violet
    'insurance-app': '#0ea5e9',  // sky blue
    'employee-management': '#10b981',  // emerald
    'trust-organization': '#f59e0b',  // amber
    'car-booking': '#ef4444',  // red
    'responsive-websites': '#ec4899',  // pink
};

// Icon nodes – created per-render with inline colour via style
const makeIcon = (name: string | undefined, color: string) => {
    const style = { color, fontSize: '1.4rem' };
    switch (name) {
        case 'MessageOutlined': return <MessageOutlined style={style} />;
        case 'SafetyOutlined': return <SafetyOutlined style={style} />;
        case 'TeamOutlined': return <TeamOutlined style={style} />;
        case 'HeartOutlined': return <HeartOutlined style={style} />;
        case 'CarOutlined': return <CarOutlined style={style} />;
        case 'DesktopOutlined': return <DesktopOutlined style={style} />;
        default: return <RocketOutlined style={style} />;
    }
};

type Tab = 'overview' | 'responsibilities' | 'challenges' | 'techstack';

const TABS: { key: Tab; label: string; icon: React.ReactNode }[] = [
    { key: 'overview', label: 'Overview', icon: <BulbOutlined /> },
    { key: 'responsibilities', label: 'My Role', icon: <UserOutlined /> },
    { key: 'challenges', label: 'Challenges', icon: <WarningOutlined /> },
    { key: 'techstack', label: 'Tech Stack', icon: <CodeOutlined /> },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [activeTab, setActiveTab] = useState<Tab>('overview');
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
            setActiveTab('overview');
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [selectedProject]);

    useEffect(() => {
        if (contentRef.current) contentRef.current.scrollTop = 0;
    }, [activeTab]);

    const openModal = (p: Project) => setSelectedProject(p);
    const closeModal = () => setSelectedProject(null);

    const accent = selectedProject ? (accentMap[selectedProject.id] ?? '#7c3aed') : '#7c3aed';

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Header */}
                    <div className="section-header">
                        <RocketOutlined className="section-icon" />
                        <h2 className="section-title">Key Projects</h2>
                        <p className="section-subtitle">
                            A showcase of my recent work, featuring complex problem-solving and modern tech stacks.
                        </p>
                    </div>

                    {/* Cards grid */}
                    <div className="projects-grid-new">
                        {projects.map((project, idx) => {
                            const acc = accentMap[project.id] ?? '#7c3aed';
                            return (
                                <motion.div
                                    key={project.id}
                                    className="project-card-new"
                                    onClick={() => openModal(project)}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: idx * 0.07 }}

                                    style={{ '--card-accent': acc } as React.CSSProperties}
                                >
                                    <div className="card-glow" />

                                    <div className="card-header-row">
                                        {/* Coloured icon box */}
                                        <div
                                            className="card-icon-box"
                                            style={{
                                                background: `${acc}20`,
                                                border: `1px solid ${acc}55`,
                                                borderRadius: '6px',
                                            }}
                                        >
                                            {makeIcon(project.iconName, acc)}
                                        </div>
                                        <div className="card-arrow"><ArrowRightOutlined /></div>
                                    </div>

                                    <h3 className="card-title">{project.title}</h3>
                                    <p className="card-desc">{project.description}</p>

                                    {/* Bottom accent bar */}
                                    <div className="card-accent-bar" style={{ background: acc }} />
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>

            {/* ═══ Slide-in detail panel ═══ */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="panel-overlay">
                        <motion.div
                            className="panel-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                        />

                        <motion.aside
                            className="detail-panel"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 280 }}
                        >
                            {/* ── Header ── */}
                            <div className="panel-header" style={{ '--panel-accent': accent } as React.CSSProperties}>
                                <div
                                    className="panel-header-glow"
                                    style={{ background: `radial-gradient(ellipse at 30% 0%, ${accent}44, transparent 70%)` }}
                                />
                                <div className="panel-header-inner">
                                    <div
                                        className="panel-icon-box"
                                        style={{ background: `${accent}20`, border: `1px solid ${accent}66` }}
                                    >
                                        {/* Panel icon — larger */}
                                        {(() => {
                                            const s = { color: accent, fontSize: '1.6rem' };
                                            switch (selectedProject.iconName) {
                                                case 'MessageOutlined': return <MessageOutlined style={s} />;
                                                case 'SafetyOutlined': return <SafetyOutlined style={s} />;
                                                case 'TeamOutlined': return <TeamOutlined style={s} />;
                                                case 'HeartOutlined': return <HeartOutlined style={s} />;
                                                case 'CarOutlined': return <CarOutlined style={s} />;
                                                case 'DesktopOutlined': return <DesktopOutlined style={s} />;
                                                default: return <RocketOutlined style={s} />;
                                            }
                                        })()}
                                    </div>
                                    <div>
                                        <h2 className="panel-title">{selectedProject.title}</h2>
                                    </div>
                                </div>
                                <button className="panel-close" onClick={closeModal}>
                                    <CloseOutlined />
                                </button>
                            </div>

                            {/* ── Tabs ── */}
                            <div className="panel-tabs">
                                {TABS.map(tab => (
                                    <button
                                        key={tab.key}
                                        className={`panel-tab ${activeTab === tab.key ? 'active' : ''}`}
                                        style={activeTab === tab.key
                                            ? { color: accent, borderBottomColor: accent }
                                            : {}}
                                        onClick={() => setActiveTab(tab.key)}
                                    >
                                        {tab.icon} {tab.label}
                                    </button>
                                ))}
                            </div>

                            {/* ── Scrollable body ── */}
                            <div className="panel-content" ref={contentRef}>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.22 }}
                                    >
                                        {/* OVERVIEW */}
                                        {activeTab === 'overview' && (
                                            <div className="tab-pane">
                                                <p className="panel-description">{selectedProject.description}</p>

                                                {selectedProject.features && selectedProject.features.length > 0 && (
                                                    <div className="panel-section">
                                                        <h4 className="panel-section-label"><CodeOutlined /> Features</h4>
                                                        <ul className="feature-list">
                                                            {selectedProject.features.map((f, i) => (
                                                                <li key={i}>
                                                                    <span className="feature-dot" style={{ background: accent }} />
                                                                    {f}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}



                                                {selectedProject.link && (
                                                    <a
                                                        href={selectedProject.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="panel-link-btn"
                                                        style={{ color: accent }}
                                                    >
                                                        <LinkOutlined /> {selectedProject.linkLabel || 'View Live Site'}
                                                    </a>
                                                )}
                                            </div>
                                        )}

                                        {/* MY ROLE */}
                                        {activeTab === 'responsibilities' && (
                                            <div className="tab-pane">
                                                <div className="panel-section">
                                                    <h4 className="panel-section-label"><UserOutlined /> Key Responsibilities</h4>
                                                    <ol className="role-list">
                                                        {selectedProject.rolesAndResponsibilities?.map((r, i) => (
                                                            <li key={i}>
                                                                <span className="role-num" style={{ color: accent }}>
                                                                    {String(i + 1).padStart(2, '0')}
                                                                </span>
                                                                <span>{r}</span>
                                                            </li>
                                                        ))}
                                                    </ol>
                                                </div>
                                            </div>
                                        )}

                                        {/* TECH STACK */}
                                        {activeTab === 'techstack' && (
                                            <div className="tab-pane">
                                                <div className="panel-section">
                                                    <h4 className="panel-section-label"><CodeOutlined /> Technologies Used</h4>
                                                    <div className="tech-grid">
                                                        {selectedProject.technologies.map((t, i) => (
                                                            <span key={i} className="tech-pill" style={{ borderColor: `${accent}44` }}>{t}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* CHALLENGES */}
                                        {activeTab === 'challenges' && (
                                            <div className="tab-pane">
                                                {selectedProject.issuesAndSolutions && selectedProject.issuesAndSolutions.length > 0
                                                    ? selectedProject.issuesAndSolutions.map((item, i) => (
                                                        <div key={i} className="challenge-card">
                                                            <div className="challenge-issue">
                                                                <span className="challenge-label issue-label">
                                                                    <WarningOutlined /> Issue
                                                                </span>
                                                                <p>{item.issue}</p>
                                                            </div>
                                                            <div className="challenge-divider" style={{ background: `${accent}55` }} />
                                                            <div className="challenge-solution">
                                                                <span className="challenge-label solution-label">
                                                                    <CheckCircleOutlined /> Solution
                                                                </span>
                                                                <p>{item.solution}</p>
                                                            </div>
                                                        </div>
                                                    ))
                                                    : <p className="empty-state">No challenges documented for this project.</p>
                                                }
                                            </div>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </motion.aside>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
