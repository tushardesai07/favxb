import React from 'react'
import './Homescreen.css'

// Import the generated background image
import heroBg from '../assets/hero_background.png'

const Homescreen: React.FC = () => {
  return (
    <div className="homescreen-container">
      {/* 1. Glassmorphic Navigation Header */}
      <header className="navbar-capsule">
        <div className="navbar-logo">
          <div className="logo-pill">
            <span className="logo-fab">fab</span>
            <span className="logo-xp">xp</span>
          </div>
          <span className="logo-tagline">experience is everything</span>
        </div>
        <nav className="navbar-links">
          <a href="#tours" className="nav-link">Tours</a>
          <a href="#destinations" className="nav-link">Destinations</a>
          <a href="#blogs" className="nav-link">Blogs</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </header>

      {/* 2. Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-overlay"></div>
        
        {/* Floating 3D Image Cards with Subtle Bobbing Animation */}
        <div className="floating-card top-left">
          <img 
            src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80" 
            alt="Coastal Cliffs Adventure" 
            className="floating-img"
          />
        </div>

        <div className="floating-card top-right">
          <img 
            src="https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=800&q=80" 
            alt="Mount Fuji Japan" 
            className="floating-img"
          />
        </div>

        <div className="floating-card bottom-left">
          <img 
            src="https://images.unsplash.com/photo-1546412414-8035e1776c9a?auto=format&fit=crop&w=800&q=80" 
            alt="Burj Al Arab Dubai" 
            className="floating-img"
          />
        </div>

        <div className="floating-card bottom-right">
          <img 
            src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80" 
            alt="Taj Mahal India" 
            className="floating-img"
          />
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in">
            Experience the World,<br />
            <span className="italic-serif">Not Just the Map</span>
          </h1>
          <p className="hero-subtitle">
            Curated journeys designed to be felt, not rushed.
          </p>
          
          <button className="book-btn">
            Book a trip <span className="arrow">↗</span>
          </button>

          {/* Social Proof & Stats Bar */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-icon star">★</span>
              <span className="stat-text"><strong>4.9 stars</strong> (541k Reviews)</span>
            </div>
            <span className="stat-divider">|</span>
            <div className="stat-item">
              <span className="stat-icon">👥</span>
              <span className="stat-text"><strong>50k</strong> travellers</span>
            </div>
            <span className="stat-divider">|</span>
            <div className="stat-item">
              <span className="stat-icon">📸</span>
              <span className="stat-text"><strong>1+ million</strong> followers</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Us Section (Exactly as in the new screenshot) */}
      <section id="about" className="about-section">
        <div className="about-grid">
          <div className="about-left-col">
            <div className="about-badge">✦ ABOUT US</div>
            <h2 className="about-title">
              Meaningful travel<br />
              experiences,<br />
              thoughtfully crafted
            </h2>
          </div>
          <div className="about-right-col">
            <p className="about-description">
              We are passionate travel experts creating unforgettable journeys beyond sightseeing. Every itinerary combines comfort, discovery, and meaningful experiences.
            </p>
            <button className="know-more-btn">
              Know More <span className="btn-arrow">↗</span>
            </button>
          </div>
        </div>

        {/* Side-by-Side Immersive Images Row (35/65 split) */}
        <div className="about-images-row">
          <div className="about-img-left">
            <img 
              src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80" 
              alt="Denim traveler looking at coastal cliffs" 
              className="about-img"
            />
          </div>
          <div className="about-img-right">
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" 
              alt="Winding turquoise river through lush green canyon" 
              className="about-img"
            />
          </div>
        </div>
      </section>

      {/* 4. Explore By Experience Section (Exactly as in the second screenshot) */}
      <section className="experience-section">
        <div className="section-header-left">
          <div className="about-badge">✦ EXPLORE BY EXPERIENCE</div>
          <h2 className="section-title-large">
            Experience diverse worlds on one<br />
            planet
          </h2>
        </div>

        <div className="experience-grid">
          {/* Card 1 - Travel to the Future */}
          <div className="experience-card">
            <img 
              src="https://images.unsplash.com/photo-1546412414-8035e1776c9a?auto=format&fit=crop&w=800&q=80" 
              alt="Dubai Burj Al Arab Future" 
              className="exp-card-img"
            />
            <div className="exp-card-overlay"></div>
            <div className="exp-card-content">
              <h3>Travel to the Future</h3>
              <p>A city of luxury and innovation, where tomorrow comes alive.</p>
            </div>
          </div>

          {/* Card 2 - Travel Into Nature */}
          <div className="experience-card">
            <img 
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80" 
              alt="Green canyon winding river Iceland" 
              className="exp-card-img"
            />
            <div className="exp-card-overlay"></div>
            <div className="exp-card-content">
              <h3>Travel Into Nature</h3>
              <p>Stunning landscapes and pure alpine beauty of nature.</p>
            </div>
          </div>

          {/* Card 3 - Travel Through Culture */}
          <div className="experience-card">
            <img 
              src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80" 
              alt="Taj Mahal India Culture" 
              className="exp-card-img"
            />
            <div className="exp-card-overlay"></div>
            <div className="exp-card-content">
              <h3>Travel Through Culture</h3>
              <p>A blend of traditions, colors, heritage and spices.</p>
            </div>
          </div>

          {/* Card 4 - Travel Back in Time */}
          <div className="experience-card">
            <img 
              src="https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=80" 
              alt="Egypt Pyramids Time" 
              className="exp-card-img"
            />
            <div className="exp-card-overlay"></div>
            <div className="exp-card-content">
              <h3>Travel Back in Time</h3>
              <p>Explore ancient wonders, monuments & stories in stone.</p>
            </div>
          </div>
        </div>

        {/* Explore More Row */}
        <div className="experience-footer-row">
          <p className="exp-footer-text">Explore more journeys waiting for you</p>
          <button className="view-packages-btn">
            View Packages
          </button>
        </div>
      </section>

      {/* 5. Most Loved Destinations Section (Exactly as in screenshot) */}
      <section id="destinations" className="destinations-section">
        <div className="section-header-center">
          <div className="about-badge">✦ MOST LOVED DESTINATIONS</div>
          <h2 className="section-title-center">Explore the world's most popular destinations</h2>
        </div>

        <div className="destinations-grid-4">
          {/* Card 1 - Japan */}
          <div className="dest-card-overlay-style">
            <img 
              src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80" 
              alt="Japan pagoda" 
              className="dest-card-img-style"
            />
            <div className="dest-card-overlay-shadow"></div>
            <div className="dest-card-content-style">
              <h3>Japan</h3>
              <p>Discover more</p>
            </div>
          </div>

          {/* Card 2 - Switzerland */}
          <div className="dest-card-overlay-style">
            <img 
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80" 
              alt="Switzerland mountains" 
              className="dest-card-img-style"
            />
            <div className="dest-card-overlay-shadow"></div>
            <div className="dest-card-content-style">
              <h3>Switzerland</h3>
              <p>Discover more</p>
            </div>
          </div>

          {/* Card 3 - Paris */}
          <div className="dest-card-overlay-style">
            <img 
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80" 
              alt="Paris Eiffel Tower" 
              className="dest-card-img-style"
            />
            <div className="dest-card-overlay-shadow"></div>
            <div className="dest-card-content-style">
              <h3>Paris</h3>
              <p>Discover more</p>
            </div>
          </div>

          {/* Card 4 - New York */}
          <div className="dest-card-overlay-style">
            <img 
              src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80" 
              alt="New York Skyline" 
              className="dest-card-img-style"
            />
            <div className="dest-card-overlay-shadow"></div>
            <div className="dest-card-content-style">
              <h3>New York</h3>
              <p>Discover more</p>
            </div>
          </div>
        </div>

        {/* Horizontal Editorial Scrolling Marquee Ticker */}
        <div className="marquee-container">
          <div className="marquee-content">
            <span>Japan ✦</span>
            <span>Switzerland ✦</span>
            <span>Paris ✦</span>
            <span>New York ✦</span>
            {/* Duplicate for infinite loop */}
            <span>Japan ✦</span>
            <span>Switzerland ✦</span>
            <span>Paris ✦</span>
            <span>New York ✦</span>
          </div>
        </div>
      </section>

      {/* 6. Handcrafted Tour Packages Section (Exactly as in screenshot) */}
      <section id="packages" className="packages-section">
        <div className="section-header-left">
          <div className="about-badge">✦ HANDCRAFTED TOUR PACKAGES</div>
          <h2 className="section-title-large">
            Journeys designed for every travel<br />
            style
          </h2>
        </div>

        <div className="packages-grid-4">
          {/* Package 1 - Morocco */}
          <div className="package-card">
            <div className="package-img-container">
              <img 
                src="https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=800&q=80" 
                alt="Morocco Desert Journey" 
                className="package-img"
              />
            </div>
            <div className="package-info">
              <span className="package-duration">8 DAYS | 7 NIGHTS</span>
              <h3 className="package-title">Morocco Desert Journey</h3>
              <div className="package-price-row">
                <span className="package-price-from">From <strong className="price-num">$1,800</strong></span>
                <span className="package-price-unit">/ Person</span>
              </div>
            </div>
          </div>

          {/* Package 2 - Italy */}
          <div className="package-card">
            <div className="package-img-container">
              <img 
                src="https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=800&q=80" 
                alt="Italy Classic" 
                className="package-img"
              />
            </div>
            <div className="package-info">
              <span className="package-duration">7 DAYS | 6 NIGHTS</span>
              <h3 className="package-title">Italy Classic</h3>
              <div className="package-price-row">
                <span className="package-price-from">From <strong className="price-num">$1,400</strong></span>
                <span className="package-price-unit">/ Person</span>
              </div>
            </div>
          </div>

          {/* Package 3 - Africa */}
          <div className="package-card">
            <div className="package-img-container">
              <img 
                src="https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=800&q=80" 
                alt="Africa Experience" 
                className="package-img"
              />
            </div>
            <div className="package-info">
              <span className="package-duration">8 DAYS | 7 NIGHTS</span>
              <h3 className="package-title">Africa Experience</h3>
              <div className="package-price-row">
                <span className="package-price-from">From <strong className="price-num">$2,200</strong></span>
                <span className="package-price-unit">/ Person</span>
              </div>
            </div>
          </div>

          {/* Package 4 - Japan Spring */}
          <div className="package-card">
            <div className="package-img-container">
              <img 
                src="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=800&q=80" 
                alt="Japan Spring" 
                className="package-img"
              />
            </div>
            <div className="package-info">
              <span className="package-duration">7 DAYS | 6 NIGHTS</span>
              <h3 className="package-title">Japan Spring</h3>
              <div className="package-price-row">
                <span className="package-price-from">From <strong className="price-num">$1,200</strong></span>
                <span className="package-price-unit">/ Person</span>
              </div>
            </div>
          </div>
        </div>

        {/* Package Footer Row */}
        <div className="experience-footer-row">
          <p className="exp-footer-text">Explore more journeys waiting for you</p>
          <button className="view-packages-btn">
            View Packages <span className="btn-arrow">↗</span>
          </button>
        </div>
      </section>

      {/* 7. Why Travel With Us — heading + 4 icon feature cards */}
      <section className="why-section">
        <div className="why-inner">
          <div className="why-heading-block">
            <div className="about-badge">✦ WHY TRAVEL WITH US</div>
            <h2 className="why-heading">Book with confidence, travel with peace of mind</h2>
          </div>
          <div className="why-cards-grid">
            <div className="why-card">
              <div className="why-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="why-card-title">Authentic Experiences</h3>
              <p className="why-card-desc">Trips tailored to your style and budget.</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
                </svg>
              </div>
              <h3 className="why-card-title">Culinary Adventures</h3>
              <p className="why-card-desc">Savor local cuisines with guided food tours.</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="why-card-title">Trusted Partnerships</h3>
              <p className="why-card-desc">Handpicked hotels, guides, and local experiences.</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h3 className="why-card-title">Cultural Immersion</h3>
              <p className="why-card-desc">Engage with local traditions and communities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials — "Words from those who traveled with us" */}
      <section className="testimonials-section">
        <div className="section-header-left">
          <div className="about-badge">✦ TESTIMONIALS</div>
          <h2 className="section-title-large">Words from those who traveled with us</h2>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">
              "Truly unforgettable. Every detail of our Morocco journey was crafted to perfection — from the golden dunes to the riad stays. FabXP turned our dream into reality."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">S</div>
              <div>
                <div className="author-name">Sarah M.</div>
                <div className="author-trip">Morocco Desert Journey</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">
              "Japan in cherry blossom season was everything we hoped for and more. The local guides added depth and stories no guidebook could ever provide. Absolutely magical."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">R</div>
              <div>
                <div className="author-name">Rohan & Priya K.</div>
                <div className="author-trip">Japan Spring Tour</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">
              "From the Swiss Alps to the Italian coast — our two-week trip was seamlessly organized. Zero stress, maximum wonder. Already planning our next adventure with FabXP."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">L</div>
              <div>
                <div className="author-name">Lena W.</div>
                <div className="author-trip">Italy Classic & Swiss Alps</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Blog / Inspiration */}
      <section className="blog-section">
        <div className="section-header-left">
          <div className="about-badge">✦ TRAVEL JOURNAL</div>
          <h2 className="section-title-large">Inspiration and tips for your next travel journey</h2>
        </div>
        <div className="blog-grid">
          <article className="blog-card blog-card-large">
            <div className="blog-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80"
                alt="Discovering Alps last-minute"
                className="blog-img"
              />
              <span className="blog-category-tag">DESTINATION GUIDE</span>
            </div>
            <div className="blog-content">
              <h3 className="blog-title">Discovering the Alps at the last moment — a guide to spontaneous travel</h3>
              <p className="blog-excerpt">Sometimes the best journeys are the ones you never planned. Here's how to embrace the unexpected and still make every moment count.</p>
              <div className="blog-meta">
                <span className="blog-date">June 18, 2026</span>
                <a href="#blog" className="blog-read-more">Read More ↗</a>
              </div>
            </div>
          </article>
          <article className="blog-card blog-card-large">
            <div className="blog-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80"
                alt="Kenya Far from civilisation"
                className="blog-img"
              />
              <span className="blog-category-tag">TRAVEL TIPS</span>
            </div>
            <div className="blog-content">
              <h3 className="blog-title">Experiencing Kenya far from civilisation — into the heart of the wild</h3>
              <p className="blog-excerpt">Beyond the safari buses and tourist lodges lies a raw, profound Africa that few ever witness. Here's how to get there responsibly.</p>
              <div className="blog-meta">
                <span className="blog-date">June 10, 2026</span>
                <a href="#blog" className="blog-read-more">Read More ↗</a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* 10. FAQ Accordion */}
      <section className="faq-section">
        <div className="faq-inner">
          <div className="faq-left">
            <div className="about-badge">✦ FAQ</div>
            <h2 className="section-title-large">Everything you need to know before you travel</h2>
          </div>
          <div className="faq-right">
            {[
              {
                q: "How do you customise my travel itinerary?",
                a: "Our travel specialists work one-on-one with you to understand your preferences, pace, budget and dream experiences. Every itinerary is hand-crafted — nothing is off-the-shelf."
              },
              {
                q: "Are your tour packages all-inclusive?",
                a: "Most packages include accommodation, guided experiences, transfers and select meals. We clearly outline what's included for each package, and can customize further on request."
              },
              {
                q: "What's your cancellation and refund policy?",
                a: "We offer flexible cancellation terms up to 30 days before departure for a full refund. Within 30 days, a partial refund is provided. Full details are shared at booking."
              },
              {
                q: "Do you cater to solo travelers and groups?",
                a: "Absolutely. We specialize in both solo journeys and group experiences — from intimate couples' getaways to large corporate retreats and family adventures."
              },
              {
                q: "How far in advance should I book?",
                a: "For popular seasons (cherry blossom, Northern Lights, etc.) we recommend booking 3–6 months in advance. However, our team can often curate last-minute experiences too."
              }
            ].map((item, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-question">
                  <span>{item.q}</span>
                  <span className="faq-icon">+</span>
                </summary>
                <p className="faq-answer">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Vibe With Us — Instagram-style horizontal photo strip */}
      <section className="vibe-section">
        <div className="vibe-header">
          <div className="about-badge">✦ VIBE WITH US</div>
          <h2 className="section-title-center">Real travel stories from around the world</h2>
        </div>

        <div className="vibe-strip">
          {[
            { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80", alt: "Sunset silhouette traveler" },
            { src: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=600&q=80", alt: "Woman in green hills" },
            { src: "https://images.unsplash.com/photo-1516815231560-8f41ec531527?auto=format&fit=crop&w=600&q=80", alt: "Beach relaxing couple" },
            { src: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=600&q=80", alt: "Desert hiker with backpack" },
            { src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80", alt: "Hikers on rocky coast" },
            { src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80", alt: "Man in cap portrait outdoors" },
            { src: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=600&q=80", alt: "Tropical beach path" },
          ].map((photo, i) => (
            <div key={i} className="vibe-photo">
              <img src={photo.src} alt={photo.alt} className="vibe-img" />
            </div>
          ))}
        </div>

        <p className="vibe-cta">Tag <strong>#VibeWithFabxp</strong> to get featured.</p>
      </section>

      {/* 12. Footer — exact 4-column layout from screenshot */}
      <footer id="contact" className="footer-section">
        <div className="footer-top-new">
          {/* Brand column */}
          <div className="footer-brand-new">
            <div className="footer-logo-new">
              <span className="logo-fab">fab</span><span className="logo-xp">xp</span>
            </div>
            <p className="footer-tagline">
              Discover unique travel experiences around the world. Your next adventure starts here.
            </p>
          </div>

          {/* Company column */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Company</h4>
            <a href="#about" className="footer-col-link">About</a>
            <a href="#careers" className="footer-col-link">Careers</a>
            <a href="#press" className="footer-col-link">Press</a>
            <a href="#blog" className="footer-col-link">Blog</a>
          </div>

          {/* Services column */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Services</h4>
            <a href="#flights" className="footer-col-link">Flights</a>
            <a href="#hotels" className="footer-col-link">Hotels</a>
            <a href="#experiences" className="footer-col-link">Experiences</a>
            <a href="#packages" className="footer-col-link">Packages</a>
          </div>

          {/* Support column */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Support</h4>
            <a href="#help" className="footer-col-link">Help Center</a>
            <a href="#contact" className="footer-col-link">Contact</a>
            <a href="#privacy" className="footer-col-link">Privacy</a>
            <a href="#terms" className="footer-col-link">Terms</a>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom-new">
          <p className="copyright">© 2026 Fabxp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Homescreen
