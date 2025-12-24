import React from 'react';
import { motion } from 'framer-motion';

const TechCategory = ({ title, items, color }) => (
    <div className="terminal-window" style={{ height: '100%', border: `1px solid ${color ? 'var(--' + color + ')' : 'var(--border-dim)'}` }}>
        <div className="terminal-header">
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{title.toLowerCase()}.config</span>
        </div>
        <div style={{ padding: '1rem', fontFamily: 'var(--font-mono)' }}>
            <div style={{ color: 'var(--accent-purple)', marginBottom: '0.5rem' }}>dependencies {'{'}</div>
            {items.map((item, i) => (
                <div key={i} style={{ paddingLeft: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--accent-blue)' }}>"{item}"</span>
                    <span style={{ color: 'var(--text-dim)' }}>:</span>
                    <span style={{ color: 'var(--accent-green)' }}>"latest"</span>
                    {i < items.length - 1 && <span style={{ color: 'var(--text-dim)' }}>,</span>}
                </div>
            ))}
            <div style={{ color: 'var(--accent-purple)' }}>{'}'}</div>
        </div>
    </div>
);

const Skills = () => {
    return (
        <section id="skills">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '3rem' }}
                >
                    <h2>Technical <span className="text-gradient">Arsenal</span></h2>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <TechCategory
                            title="Languages"
                            items={['Java Core', 'Java 21', 'Python', 'SQL', 'JavaScript']}
                        />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
                        <TechCategory
                            title="Frameworks"
                            items={['Spring Boot', 'Hibernate', 'Microservices', 'Spring Security', 'JUnit']}
                        />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
                        <TechCategory
                            title="Infrastructure"
                            items={['Docker', 'Kubernetes', 'AWS', 'Kafka', 'Redis', 'MongoDB']}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
