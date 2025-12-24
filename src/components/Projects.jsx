import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Globe, Cpu, ArrowRight, Github } from 'lucide-react';

const ArchitectureDiagram = ({ type }) => {
    if (type === 'microservice') {
        return (
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-mono mt-4 p-4 bg-black/20 rounded border border-white/5">
                <div className="flex flex-col items-center">
                    <Globe size={16} className="text-blue-400" />
                    <span className="text-xs mt-1">Client</span>
                </div>
                <ArrowRight size={16} className="text-gray-600" />
                <div className="flex flex-col items-center">
                    <Server size={16} className="text-green-400" />
                    <span className="text-xs mt-1">API Gatway</span>
                </div>
                <ArrowRight size={16} className="text-gray-600" />
                <div className="flex flex-col items-center">
                    <Cpu size={16} className="text-purple-400" />
                    <span className="text-xs mt-1">Service</span>
                </div>
                <ArrowRight size={16} className="text-gray-600" />
                <div className="flex flex-col items-center">
                    <Database size={16} className="text-yellow-400" />
                    <span className="text-xs mt-1">DB</span>
                </div>
            </div>
        );
    }
    return null;
};

const ProjectCard = ({ title, desc, tags, link, type = 'microservice', stats }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="terminal-window"
        style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
        <div className="terminal-header">
            <div className="dot dot-red"></div>
            <div className="dot dot-yellow"></div>
            <div className="dot dot-green"></div>
            <span style={{ marginLeft: 'auto', fontSize: '0.8rem', color: 'var(--text-muted)' }}>{type}.java</span>
        </div>
        <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{title}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>{desc}</p>

            {stats && (
                <div style={{ padding: '0.5rem', background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.2)', borderRadius: '4px', marginBottom: '1rem' }}>
                    <code style={{ fontSize: '0.8rem', color: 'var(--accent-green)' }}>{stats}</code>
                </div>
            )}

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {tags.map((tag, i) => (
                    <span key={i} style={{
                        fontSize: '0.75rem',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '4px',
                        background: 'var(--bg-panel)',
                        color: 'var(--accent-blue)',
                        border: '1px solid var(--border-dim)',
                        fontFamily: 'var(--font-mono)'
                    }}>
                        {tag}
                    </span>
                ))}
            </div>

            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    marginTop: 'auto'
                }}
            >
                <Github size={16} />
                <span style={{ borderBottom: '1px dashed var(--text-muted)' }}>View Source</span>
            </a>
        </div>
    </motion.div>
);

const Projects = () => {
    return (
        <section id="projects">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '3rem' }}
                >
                    <h2>System <span className="text-gradient">Case Studies</span></h2>
                    <p>Production-grade architectures and scalable solutions.</p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                    <ProjectCard
                        title="HelixCare"
                        desc="Microservices-based healthcare platform handling distributed data transactions. Implemented event-driven architecture for real-time updates."
                        tags={['Spring Boot', 'Kafka', 'Docker', 'PostgreSQL']}
                        type="microservice"
                        stats=">> Reduced latency by 25% via caching"
                        link="https://github.com/ayush-verma-004/HelixCare"
                    />

                    <ProjectCard
                        title="EosCarbon"
                        desc="Blue Carbon MRV platform processing satellite and drone data. Integrated AI/ML pipelines for biomass estimation with high accuracy."
                        tags={['Spring Boot', 'Python', 'REST APIs', 'MongoDB']}
                        type="data-pipeline"
                        stats=">> 90%+ Accuracy in biomass estimation"
                        link="https://github.com/ayush-verma-004/EosCarbon"
                    />

                    <ProjectCard
                        title="Auz Assistant"
                        desc="Local-first AI desktop assistant with voice control capabilities. Automates OS-level tasks using Python bridging."
                        tags={['Python', 'NLP', 'System Automation']}
                        type="script"
                        stats=">> Automates 50+ daily commands"
                        link="https://github.com/ayush-verma-004/Pyhton/tree/main/AI"
                    />
                </div>
            </div>
        </section>
    );
};

export default Projects;
