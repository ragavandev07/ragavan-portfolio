"use client";

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
                            transition={{ delay: 1.8, duration: 0.5 }}
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
                            transition={{ delay: 1.0, duration: 0.6 }}
                        >
                            {personalInfo.role}
                        </motion.h2>

                        {/* Tagline */}
                        <motion.p
                            className="hero-tagline"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.8, duration: 0.6 }}
                        >
                            Specializing in <span className="highlight-white">high-performance</span> full-stack development with React, React Native, and Node.js.
                        </motion.p>

                        {/* CTA */}
                        <motion.div
                            className="hero-cta"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.8, duration: 0.6 }}
                        >
                            <button className="cta-button primary" onClick={scrollToProjects}>
                                <span>View Projects</span>
                                <svg className="cta-arrow" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </motion.div>


                    </motion.div>



                </div>
            </div>
        </section>
    );
};

export default Hero;
