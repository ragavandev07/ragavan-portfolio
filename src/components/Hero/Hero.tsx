import { Button } from 'antd';
import { motion } from 'framer-motion';

import { personalInfo } from '../../data/portfolioData';
import './Hero.scss';

const codeLines = [
    { indent: 0, text: 'const Ragavan = {', color: 'var(--primary-color)' },
    { indent: 1, text: 'role: "Software Engineer",', color: 'var(--text-secondary)' },
    { indent: 1, text: 'exp: "3+ Years",', color: 'var(--text-secondary)' },
    { indent: 1, text: 'stack: ["React", "React Native",', color: 'var(--text-secondary)' },
    { indent: 2, text: '"Node.js", "TypeScript"],', color: 'var(--text-secondary)' },
    { indent: 1, text: 'passion: "Building scalable,', color: '#10b981' },
    { indent: 2, text: 'high-perf apps",', color: '#10b981' },
    { indent: 1, text: 'available: true,', color: '#f59e0b' },
    { indent: 0, text: '};', color: 'var(--primary-color)' },
];

const Hero = () => {
    const scrollToProjects = () => {
        const element = document.getElementById('projects');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="hero-section">
            <div className="container">
                <div className="hero-grid">

                    {/* ── LEFT: Text Content ── */}
                    <motion.div
                        className="hero-left"
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        {/* Experience badge */}
                        <motion.div
                            className="exp-badge"
                            initial={{ opacity: 0, y: -16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <span className="exp-num">{personalInfo.yearsOfExperience}</span>
                            <div className="exp-divider" />
                            <span className="exp-label">Years of<br />Experience</span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            className="hero-title"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            {personalInfo.name}
                        </motion.h1>

                        {/* Role */}
                        <motion.h2
                            className="hero-role"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            {personalInfo.role}
                        </motion.h2>

                        {/* Tagline */}
                        <motion.p
                            className="hero-tagline"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            {personalInfo.tagline}
                        </motion.p>

                        {/* CTA buttons — desktop only */}
                        <motion.div
                            className="hero-cta"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.65, duration: 0.6 }}
                        >
                            <Button
                                type="primary"
                                size="large"
                                onClick={scrollToProjects}
                                className="cta-button primary"
                            >
                                View Projects
                            </Button>
                            <Button
                                size="large"
                                href="https://portfolio-ragavan.s3.eu-north-1.amazonaws.com/Ragavan.Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-button secondary"
                            >
                                Resume
                            </Button>
                        </motion.div>


                    </motion.div>

                    {/* ── RIGHT: Animated Code Block ── */}
                    <motion.div
                        className="hero-right"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                    >
                        {/* Floating orbs behind the card */}
                        <div className="code-orb code-orb-1" />
                        <div className="code-orb code-orb-2" />

                        <div className="code-card">
                            {/* Window chrome */}
                            <div className="code-header">
                                <span className="code-dot red" />
                                <span className="code-dot yellow" />
                                <span className="code-dot green" />
                                <span className="code-filename">ragavan.ts</span>
                            </div>

                            {/* Code lines */}
                            <div className="code-body">
                                {codeLines.map((line, i) => (
                                    <motion.div
                                        key={i}
                                        className="code-line"
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 + i * 0.1, duration: 0.35 }}
                                        style={{ paddingLeft: `${line.indent * 20}px` }}
                                    >
                                        <span className="line-num">{i + 1}</span>
                                        <span style={{ color: line.color }}>{line.text}</span>
                                    </motion.div>
                                ))}

                                {/* Cursor blink */}
                                <motion.div
                                    className="code-cursor"
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{ repeat: Infinity, duration: 1.1 }}
                                />
                            </div>

                            {/* Status bar */}
                            <div className="code-footer">
                                <span className="status-dot" />
                                <span>Available for opportunities</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
