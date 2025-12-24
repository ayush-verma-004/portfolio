import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="terminal-window"
                >
                    <div className="terminal-header">
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>README.md</span>
                    </div>
                    <div style={{ padding: '2rem', fontFamily: 'var(--font-mono)' }}>
                        <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid var(--border-dim)', paddingBottom: '0.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                            <span style={{ color: 'var(--accent-blue)' }}>#</span> About Me
                        </h2>

                        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            I am a driven <strong style={{ color: 'var(--accent-green)' }}>Java & Spring Boot developer</strong> with a passion for building robust backend systems.
                            I view software engineering as a craft, focusing on clean architecture, scalability, and performance optimization.
                        </p>

                        <h3 style={{ fontSize: '1.2rem', margin: '1.5rem 0 1rem 0', color: 'var(--text-primary)' }}>
                            <span style={{ color: 'var(--accent-blue)' }}>##</span> Core Competencies
                        </h3>

                        <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                            {[
                                { key: "Architecture", val: "Microservices, Monolith-to-Microservices migration, RESTful APIs" },
                                { key: "Database", val: "SQL optimization, Schema design, NoSQL data modeling" },
                                { key: "Leadership", val: "Team lead for Hackathons, Mentoring junior developers" }
                            ].map((item, idx) => (
                                <li key={idx} style={{ marginBottom: '0.5rem' }}>
                                    <span style={{ color: 'var(--accent-purple)' }}>-</span> <strong style={{ color: 'var(--text-primary)' }}>{item.key}:</strong> {item.val}
                                </li>
                            ))}
                        </ul>

                        <div style={{ marginTop: '2rem', padding: '1rem', background: 'var(--bg-panel)', borderRadius: '4px', borderLeft: '3px solid var(--accent-amber)' }}>
                            <span style={{ color: 'var(--accent-amber)', fontWeight: 'bold' }}>&gt; Note:</span> Always learning new patterns and technologies to stay ahead of the curve.
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
