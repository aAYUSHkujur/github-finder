const Footer = () => {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
      <div>
        <p>Copyright © {footerYear} - All right reserved by Aayush Kujur</p>
      </div>
    </footer>
  );
};

export default Footer;
