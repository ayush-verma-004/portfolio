import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Shield } from 'lucide-react';

const AchievementCard = ({ title, desc, icon: Icon }) => (
    <div style={{
        background: 'var(--bg-panel)',
        border: '1px solid var(--border-dim)',
        borderRadius: '6px',
        padding: '1.5rem',
        display: 'flex',
        gap: '1rem',
        alignItems: 'flex-start'
    }}>
        <div style={{ color: 'var(--accent-yellow)' }}>
            <Icon size={24} />
        </div>
        <div>
            <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-primary)', fontSize: '1rem' }}>{title}</h4>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{desc}</p>
        </div>
    </div>
);

const Achievements = () => {
    return (
        <section id="achievements">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '3rem' }}
                >
                    <h2>Certified <span className="text-gradient">Modules</span></h2>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    <AchievementCard
                        icon={Star}
                        title="DSA & Competitive Coding"
                        desc="Solved 950+ problems. 2-Star Coder at CodeChef, 3-Star on HackerRank."
                    />
                    <AchievementCard
                        icon={Trophy}
                        title="Technocrats Hackathon Winner"
                        desc="Secured 1st place among 160+ teams. Led backend architecture and integration."
                    />
                    <AchievementCard
                        icon={Award}
                        title="ISRO Hackathon Recognition"
                        desc="Recognized for innovative idea submission at Bharatiya Antariksh Hackathon 2025."
                    />
                    <AchievementCard
                        icon={Shield}
                        title="Google Cloud Badge"
                        desc="Earned badge for Scalable Java Microservices and Cloud Infrastructure."
                    />
                </div>
            </div>
        </section>
    );
};

export default Achievements;
