import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Database, Server } from 'lucide-react';

const Hero = () => {
    const [lines, setLines] = useState([]);

    useEffect(() => {
        const sequence = [
            { text: "> ./init-session --user=guest", delay: 500 },
            { text: "Initializing connection...", delay: 1000, color: "text-muted" },
            { text: "Connection established.", delay: 1800, color: "accent-green" },
            { text: "> ./whoami", delay: 2500 },
            { text: "Ayush Verma", delay: 3000, color: "accent-blue", bold: true, size: "xl" },
            { text: "Senior Backend Engineer | Java & Spring Boot", delay: 3100 },
            { text: "> cat current_mission.json", delay: 4000 },
            {
                text: JSON.stringify({
                    goal: "Building scalable distributed systems",
                    stack: ["Java", "Spring Boot", "Kafka", "AWS"],
                    status: "Production Ready"
                }, null, 2),
                delay: 4500,
                isCode: true
            },
        ];

        let timeouts = [];

        sequence.forEach(({ text, delay, color, bold, size, isCode }) => {
            const timeout = setTimeout(() => {
                setLines(prev => [...prev, { text, color, bold, size, isCode }]);
            }, delay);
            timeouts.push(timeout);
        });

        return () => timeouts.forEach(clearTimeout);
    }, []);

    return (
        <section id="hero" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '0' }}>
            <div className="container">
                <motion.div
                    className="terminal-window"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ maxWidth: '800px', margin: '0 auto' }}
                >
                    <div className="terminal-header">
                        <div className="dot dot-red"></div>
                        <div className="dot dot-yellow"></div>
                        <div className="dot dot-green"></div>
                        <span style={{ marginLeft: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>ayush@server:~</span>
                    </div>
                    <div className="terminal-body" style={{ padding: '2rem', minHeight: '400px', fontFamily: 'var(--font-mono)' }}>
                        {lines.map((line, index) => (
                            <div key={index} style={{ marginBottom: '0.5rem' }}>
                                {line.isCode ? (
                                    <pre style={{ margin: 0, color: 'var(--accent-cyan)' }}>{line.text}</pre>
                                ) : (
                                    <span
                                        className={line.color ? '' : ''}
                                        style={{
                                            color: line.color === 'text-muted' ? 'var(--text-muted)' :
                                                line.color === 'accent-green' ? 'var(--accent-green)' :
                                                    line.color === 'accent-blue' ? 'var(--accent-blue)' : 'var(--text-primary)',
                                            fontWeight: line.bold ? '700' : '400',
                                            fontSize: line.size === 'xl' ? '2rem' : '1rem'
                                        }}
                                    >
                                        {line.text}
                                    </span>
                                )}
                            </div>
                        ))}
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            style={{ display: 'inline-block', width: '10px', height: '1.2rem', background: 'var(--accent-blue)', verticalAlign: 'middle' }}
                        />
                    </div>
                </motion.div>

                <div style={{ marginTop: '3rem', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                    {[
                        { icon: <Terminal size={24} />, label: "System Design" },
                        { icon: <Server size={24} />, label: "Microservices" },
                        { icon: <Database size={24} />, label: "Data Architecture" },
                        { icon: <Code size={24} />, label: "Clean Code" }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 5 + (idx * 0.2) }}
                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}
                        >
                            <div style={{ padding: '1rem', background: 'var(--bg-panel)', borderRadius: '8px', border: '1px solid var(--border-dim)' }}>
                                {item.icon}
                            </div>
                            <span style={{ fontSize: '0.9rem' }}>{item.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
