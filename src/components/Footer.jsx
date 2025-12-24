import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '2rem 0',
            borderTop: '1px solid var(--border-dim)',
            textAlign: 'center',
            marginTop: '4rem'
        }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                // Designed & Built by Ayush Verma
            </p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)', opacity: 0.6 }}>
                System.out.println("Thanks for visiting!");
            </p>
        </footer>
    );
};

export default Footer;
