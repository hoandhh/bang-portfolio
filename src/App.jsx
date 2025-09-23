import { useState, useEffect } from "react";
import Slideshow from "./Slideshow";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'gallery', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset cho navbar

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Chạy lần đầu để set active section

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Header */}
        <header className="header">
          <nav className="nav">
            <div className="logo">
              <a href="#home" className="logo-link">
                <img src="/dkr-logo.png" alt="BANG!" />
              </a>
            </div>
            <ul className="nav-links">
          <li>
            <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Trang chủ</a>
          </li>
          <li>
            <a href="#gallery" className={activeSection === 'gallery' ? 'active' : ''}>Giới thiệu</a>
          </li>
          <li>
            <a href="#about" className={activeSection === 'about' ? 'active' : ''}>Thành tựu</a>
          </li>
          <li>
            <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Liên hệ</a>
          </li>
            </ul>
          </nav>
        </header>

        {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            BANG! <span className="gradient-text"></span>
          </h1>
          <p className="hero-subtitle">
            Music Producer • DJ • From DINHKONGRADIO
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">2500+</span>
              <span className="stat-label">Followers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">300K+</span>
              <span className="stat-label">Plays</span>
            </div>
          </div>
          <div className="hero-actions">
            <a href="#gallery" className="cta-button">
              Khám phá
            </a>
            <a 
              href="https://soundcloud.com/bangdkr" 
              className="soundcloud-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/soundcloud-logo.png" alt="SoundCloud" className="soundcloud-icon" />
              <span>SoundCloud</span>
            </a>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="floating-orb orb-1"></div>
          <div className="floating-orb orb-2"></div>
          <div className="floating-orb orb-3"></div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <div className="container">
          <h2 className="section-title">
            <span className="gradient-text">Giới thiệu</span>
          </h2>
          <p className="section-subtitle">
            Những khoảnh khắc đáng nhớ từ các sự kiện và buổi biểu diễn của tôi
          </p>
          <Slideshow />
        </div>
      </section>

      {/* /* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">
                Thành tựu <span className="gradient-text">của tôi</span>
              </h2>
              <div className="story-intro">
                <p className="highlight-text">
                  Từ mảnh đất Thành Nam đến những sân khấu lớn tại Hà Nội
                </p>
              </div>
              <p>
                Hey guys, I'm BANG! right here... <br />
                Mình là Producer/DJ đến từ mảnh đất Thành Nam, mang trong mình niềm đam mê mãnh liệt với âm nhạc
                điện tử. Âm nhạc của mình gắn liền với những thể loại sở trường như <strong>Bass Music, Hardstyle, Future House,
                Progressive House và Openformat</strong> – nơi mình thỏa sức sáng tạo và truyền năng lượng đến mọi người.
              </p>
              
              <p>
                Với <strong>2500+ followers</strong> trên kênh SoundCloud với tổng
                <strong> 300.000+ lượt stream</strong>. Mình tự hào về những
                thành tựu âm nhạc và sự ủng hộ từ cộng đồng.
              </p>
              <div className="achievements-grid">
                <div className="achievement-card">
                  <h3>Hợp tác cùng các nghệ sĩ</h3>
                  <p>GAZTIK</p>
                  <p>JAWBREAKERS</p>
                  <p>KYDZ</p>
                  <p>KOZ, DOUBLE.H, KAS (DINHKONGRADIO)</p>
                </div>
                <div className="achievement-card">
                  <h3>Các sự kiện góp mặt tiêu biểu</h3>
                  <p>CHÀO TÂN SINH VIÊN HUS, NCE</p>
                  <p>EDMUNIVERSE 2: NOXX CITI (TOP 91 CLUB MAG)</p>
                  <p>RAVE PLANNET: THE LAVISH HANOI</p>
                  <p>COMPLEX FEST: CRAFT & PRINT UNION</p>
                  <p>REUNION PARTY - NHẠC XANH</p>
                  <p>HANOI MOOD:ON - TRENDY STREET</p>
                  <p><strong>DJ QUEN THUỘC TẠI CÁC GALA HOLA</strong></p>
                  <p><em>...AND MORE</em></p>
                </div>
                <div className="achievement-card">
                  <h3>Được support bởi các nghệ sĩ</h3>
                  <p>GAZTIK</p>
                  <p>SAO BOMB</p>
                  <p>LETHIMCOOK RADIO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">
            Liên hệ <span className="gradient-text">với tôi</span>
          </h2>
          <p className="section-subtitle">
            Booking sự kiện, hợp tác âm nhạc!
          </p>
          <div className="contact-links">
            <a
              href="https://soundcloud.com/bangdkr"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>SoundCloud</span>
            </a>
            <a
              href="https://www.facebook.com/hoandh28/"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Facebook</span>
            </a>
          </div>
          <div className="email-section">
            <a
              className="email-contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="email-label">Email</span>
              <span className="email-address">hoandoan288@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 BANG! Music. All rights reserved. Dev by BANG!</p>
        </div>
      </footer>

      {/* Floating decorative elements */}
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>
    </div>
  );
}

export default App;
