import React from 'react';
function Footer() {
  const footerStyle = {
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '0.9rem',
    fontFamily: 'Segoe UI, sans-serif',
    borderTop: '4px solid #3498db',
    marginTop: '3rem',
    borderRadius: '0 0 12px 12px',
    boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.05)',
  };

    return (
        <footer>
            <p>© 2023 City Lovers</p>
        </footer>
    );
}

export default Footer;
