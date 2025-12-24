import React from 'react';
import { motion } from 'framer-motion';

const LogEntry = ({ date, time, type, role, org, details }) => (
    <div style={{
        display: 'flex',
        gap: '1rem',
        fontFamily: 'var(--font-mono)',
        borderLeft: '2px solid var(--border-dim)',
        paddingLeft: '1.5rem',
        position: 'relative',
        marginBottom: '2rem'
    }}>
        <div style={{
            position: 'absolute',
            left: '-6px',
            top: '0',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: type === 'WORK' ? 'var(--accent-blue)' : 'var(--accent-purple)'
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>[{date}]</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{time}</span>
                <span style={{
                    background: type === 'WORK' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(168, 85, 247, 0.1)',
                    color: type === 'WORK' ? 'var(--accent-blue)' : 'var(--accent-purple)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: 700
                }}>{type}</span>
            </div>

            <h3 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-primary)' }}>{role} @ {org}</h3>

            <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem' }}>
                {details.map((detail, i) => (
                    <li key={i} style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '0.25rem', display: 'flex', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--accent-green)' }}>$</span> {detail}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const Experience = () => {
    return (
        <section id="experience">
            <div className="container" style={{ maxWidth: '900px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '3rem' }}
                >
                    <h2>System <span className="text-gradient">Logs</span></h2>
                </motion.div>

                <div>
                    <LogEntry
                        date="2024-Present"
                        time="09:00:00"
                        type="WORK"
                        role="Java Backend Intern"
                        org="Beangate IT Solutions"
                        details={[
                            "Engineered 5+ microservices using Spring Boot & Java 21.",
                            "Optimized API response times by 20% using Redis caching.",
                            "Refactored legacy codebase reducing technical debt by 15%."
                        ]}
                    />

                    <LogEntry
                        date="2023-2027"
                        time="00:00:00"
                        type="EDUCATION"
                        role="B.Tech Artificial Intelligence"
                        org="RGPV University"
                        details={[
                            "Current CGPA: 8.25",
                            "Focus: Data Structures, Distributed Systems, Database Management."
                        ]}
                    />

                    <LogEntry
                        date="2021-2023"
                        time="00:00:00"
                        type="EDUCATION"
                        role="Higher Secondary (Science)"
                        org="Shining Public School"
                        details={[
                            "Completed with 89% aggregate.",
                            "Physics, Chemistry, Mathematics & Computer Science."
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

export default Experience;
