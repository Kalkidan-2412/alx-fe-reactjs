import react from 'react';

function MainContent() {
   const mainStyle = {
    padding: '2rem',
    backgroundColor: '#f0f8ff',
    color: '#2c3e50',
    fontFamily: 'Segoe UI, sans-serif',
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    margin: '2rem auto',
    maxWidth: '700px',
    textAlign: 'center',
    transition: 'all 0.3s ease-in-out',
  };

  return (
    <main>
      <p>I love to visit New York, Paris, and Tokyo.</p>
    </main>
  );
}

export default MainContent;
