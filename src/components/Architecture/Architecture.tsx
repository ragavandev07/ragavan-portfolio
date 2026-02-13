import { Card, Steps } from 'antd';
import { ApiOutlined, SyncOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { architectureData } from '../../data/portfolioData';
import './Architecture.scss';

const Architecture = () => {
    return (
        <section id="architecture" className="section architecture-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-header">
                        <ApiOutlined className="section-icon" />
                        <h2 className="section-title">Architecture & System Design</h2>
                        <p className="section-subtitle">
                            Deep understanding of real-time systems and scalable architecture
                        </p>
                    </div>

                    <div className="architecture-content">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <Card className="architecture-card" bordered={false}>
                                <h3 className="architecture-title">
                                    <SyncOutlined spin /> Message Lifecycle
                                </h3>
                                <p className="architecture-description">
                                    End-to-end message flow from sender to recipient with real-time status updates
                                </p>
                                <Steps
                                    direction="vertical"
                                    current={-1}
                                    items={architectureData.messageLifecycle.map((item) => ({
                                        title: item.title,
                                        description: item.description,
                                        status: 'finish',
                                    }))}
                                    className="lifecycle-steps"
                                />
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <Card className="architecture-card" bordered={false}>
                                <h3 className="architecture-title">
                                    <SyncOutlined /> Offline Sync Strategy
                                </h3>
                                <p className="architecture-description">
                                    Robust offline-first architecture ensuring data consistency and reliability
                                </p>
                                <ul className="sync-features">
                                    {architectureData.offlineSync.map((feature, index) => (
                                        <li key={index} className="sync-feature-item">
                                            <div className="sync-number">{index + 1}</div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <Card className="architecture-card tech-stack-card" bordered={false}>
                            <h3 className="architecture-title">Real-time Architecture Stack</h3>
                            <div className="tech-stack-grid">
                                <div className="tech-stack-item">
                                    <div className="tech-stack-label">Transport Layer</div>
                                    <div className="tech-stack-value">Socket.io / WebSockets</div>
                                </div>
                                <div className="tech-stack-item">
                                    <div className="tech-stack-label">State Management</div>
                                    <div className="tech-stack-value">Redux + Context API</div>
                                </div>
                                <div className="tech-stack-item">
                                    <div className="tech-stack-label">Offline Storage</div>
                                    <div className="tech-stack-value">Realm DB + IndexedDB</div>
                                </div>
                                <div className="tech-stack-item">
                                    <div className="tech-stack-label">Backend</div>
                                    <div className="tech-stack-value">Node.js + MongoDB</div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Architecture;
