import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Terminal } from 'lucide-react';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('idle');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
        const SERVICE_ID = "service_ld9woqm";
        const TEMPLATE_ID = "template_m0dc2pg";
        const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

        // Dummy simulation since keys might not be real
        setTimeout(() => {
            setStatus('success');
            e.target.reset();
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    return (
        <section id="contact">
            <div className="container" style={{ maxWidth: '800px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="terminal-window"
                >
                    <div className="terminal-header">
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>mail --interactive</span>
                    </div>
                    <div style={{ padding: '2rem' }}>
                        <p style={{ fontFamily: 'var(--font-mono)', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                            <span style={{ color: 'var(--accent-green)' }}>guest@portfolio:~$</span> ./contact-me.sh
                        </p>

                        <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--accent-blue)' }}>&gt; Enter Name:</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        borderBottom: '1px solid var(--border-dim)',
                                        color: 'var(--text-primary)',
                                        padding: '0.5rem 0',
                                        fontSize: '1rem',
                                        fontFamily: 'var(--font-mono)',
                                        outline: 'none'
                                    }}
                                    placeholder="_"
                                />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--accent-blue)' }}>&gt; Enter Email:</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        borderBottom: '1px solid var(--border-dim)',
                                        color: 'var(--text-primary)',
                                        padding: '0.5rem 0',
                                        fontSize: '1rem',
                                        fontFamily: 'var(--font-mono)',
                                        outline: 'none'
                                    }}
                                    placeholder="_"
                                />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--accent-blue)' }}>&gt; Message Body:</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    required
                                    style={{
                                        background: 'var(--bg-panel)',
                                        border: '1px solid var(--border-dim)',
                                        color: 'var(--text-primary)',
                                        padding: '1rem',
                                        fontSize: '1rem',
                                        fontFamily: 'var(--font-mono)',
                                        outline: 'none',
                                        borderRadius: '4px'
                                    }}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                style={{
                                    marginTop: '1rem',
                                    background: 'var(--accent-blue)',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '0.8rem 1.5rem',
                                    fontFamily: 'var(--font-mono)',
                                    fontWeight: 'bold',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    width: 'fit-content'
                                }}
                            >
                                {status === 'sending' ? 'Sending...' : <><Terminal size={16} /> Execute Send</>}
                            </button>

                            {status === 'success' && (
                                <div style={{ marginTop: '1rem', color: 'var(--accent-green)', fontFamily: 'var(--font-mono)' }}>
                                    &gt; Email sent successfully.
                                </div>
                            )}
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
