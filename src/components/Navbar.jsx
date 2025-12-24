import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    const toggleMenu = () => setIsOpen(!isOpen);

    const navItems = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];

    return (
        <nav>
            <div className="container">
                <a href="#" className="logo">
                    <span style={{ color: 'var(--accent-blue)' }}>~</span>/portfolio
                </a>

                {/* Desktop Nav */}
                <ul className="nav-links">
                    {navItems.map((item) => (
                        <li key={item}>
                            <a href={`#${item}`} onClick={() => setActiveSection(item)}>
                                <span className="nav-link-prefix">./</span>
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    className="mobile-nav-toggle"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                    style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Nav Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                            style={{
                                position: 'fixed',
                                top: 'var(--nav-height)',
                                right: 0,
                                width: '100%',
                                maxWidth: '300px',
                                height: 'calc(100vh - var(--nav-height))',
                                background: 'var(--bg-panel)',
                                borderLeft: '1px solid var(--border-dim)',
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem',
                                zIndex: 999
                            }}
                        >
                            {navItems.map((item, i) => (
                                <motion.a
                                    key={item}
                                    href={`#${item}`}
                                    onClick={() => {
                                        setIsOpen(false);
                                        setActiveSection(item);
                                    }}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    style={{
                                        fontSize: '1.2rem',
                                        color: activeSection === item ? 'var(--accent-blue)' : 'var(--text-primary)',
                                        fontWeight: activeSection === item ? 'bold' : 'normal',
                                        display: 'block',
                                        textDecoration: 'none'
                                    }}
                                >
                                    <span style={{ color: 'var(--text-muted)', marginRight: '8px' }}>./</span>
                                    {item}
                                </motion.a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
