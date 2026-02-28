import { useState } from 'react';
import { Tooltip } from 'antd';
import { ThunderboltOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { skills } from '../../data/portfolioData';
import './Skills.scss';

const Skills = () => {
    const [activeTab, setActiveTab] = useState('All');

    const categories = ['All', ...skills.map(s => s.category)];

    const iconMap: { [key: string]: string } = {
        'React.js': 'react',
        'React Native': 'react',
        'TypeScript': 'typescript',
        'JavaScript (ES6+)': 'javascript',
        'HTML5 & CSS3': 'html5',
        'Ant Design': 'antdesign',
        'Material UI': 'materialui',
        'Redux/Context API': 'redux',
        'Node.js': 'nodejs',
        'Express.js': 'express',
        'MongoDB': 'mongodb',
        'Realm DB': 'realm',
        'GraphQL': 'graphql',
        'Socket.io': 'socketio',
        'WebSockets': 'socketio',
        'AWS S3': 'amazonwebservices',
        'Firebase': 'firebase',
        'Git & GitHub': 'git',
        'Webpack/Vite': 'webpack',
        'Background Sync': 'sync',
        'Docker': 'docker',
        'Linux': 'linux',
        'Python': 'python',
        'Java': 'java',
        'C++': 'cplusplus',
        'Jenkins': 'jenkins',
        'Kubernetes': 'kubernetes',
        'Nginx': 'nginx',
        'PostgreSQL': 'postgresql',
        'Redis': 'redis',
        'Sass': 'sass',
        'Tailwind CSS': 'tailwindcss',
        'Vue.js': 'vuejs',
        'Angular': 'angular',
        'Next.js': 'nextjs',
        'RESTful APIs': 'restapi',
        'Push Notifications': 'push',
        'CI/CD': 'cicd',
        'Responsive Design': 'responsive',
    };

    const getIconUrl = (skillName: string) => {
        const slug = iconMap[skillName] || skillName.toLowerCase().replace(/[^a-z0-9]/g, '');
        return `/icons/${slug}.svg`;
    };

    const getFilteredSkills = () => {
        if (activeTab === 'All') {
            const allSkills = new Set<string>();
            skills.forEach(cat => cat.items.forEach(item => allSkills.add(item)));
            return Array.from(allSkills);
        }
        const category = skills.find(s => s.category === activeTab);
        return category ? category.items : [];
    };

    const displaySkills = getFilteredSkills();
    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-header">
                        <ThunderboltOutlined className="section-icon" />
                        <h2 className="section-title">Technical Skills</h2>
                        <p className="section-subtitle">
                            Continuous learning and mastery of modern technologies
                        </p>
                    </div>

                    <div className="skills-tabs">
                        {categories.map((tab) => (
                            <button
                                key={tab}
                                className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="skills-grid-container">
                        {displaySkills.map((skill, index) => (
                            <motion.div
                                key={`${skill}-${index}`}
                                className="skill-item"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                                <Tooltip title={skill} placement="bottom">
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                                        <div className="skill-circle">
                                            <img
                                                src={getIconUrl(skill)}
                                                alt={skill}
                                                className="skill-image"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.style.display = 'none';
                                                    const parent = target.parentElement;
                                                    if (parent) {
                                                        parent.classList.add('fallback');
                                                        parent.innerText = skill.charAt(0);
                                                    }
                                                }}
                                            />
                                        </div>
                                        <span className="skill-name">{skill}</span>
                                    </div>
                                </Tooltip>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
