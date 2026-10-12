import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919205155506"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="xb-whatsapp"
      style={{
        position: 'fixed',
        right: 24,
        bottom: 24,
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: '#25D366',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
        zIndex: 999,
        transition: 'transform 0.2s ease',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
    >
      <FaWhatsapp size={30} />
    </a>
  );
}
