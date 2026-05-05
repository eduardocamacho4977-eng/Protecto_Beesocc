import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Beesocc ⚽ - Eventos deportivos</p>
      <p>Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;