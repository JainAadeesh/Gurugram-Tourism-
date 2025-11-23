import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Gurugram', href: '/about' },
    { name: 'Attractions', href: '/attractions' },
  ];

  const infoLinks = [
    { name: 'Travel Tips', href: '/travel-tips' },
    { name: 'Transport', href: '/transport' },
    { name: 'Tours & Guides', href: '/tours' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Gurugram Tourism</h3>
            <p>Discover the vibrant city of Gurugram - where tradition meets modernity. Explore attractions, culture, food, and unforgettable experiences.</p>
            
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Information</h4>
            <ul>
              {infoLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

        
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Gurugram Tourism. All rights reserved.</p>
          <p>By Aadeesh jain</p>
          <div className="footer-legal">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


