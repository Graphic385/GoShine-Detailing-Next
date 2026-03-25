import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container1">
        <footer className="footer-root">
          <div className="footer-container">
            <div className="footer-grid">
              <div className="footer-column footer-brand-col">
                <div className="footer-logo-wrapper">
                  <span className="footer-brand-name">GoShine</span>
                  <span className="footer-brand-tagline">Auto Detailing</span>
                </div>
                <p className="section-content footer-description">
                  Premium mobile car detailing serving Richmond Hill, Vaughan,
                  and Thornhill. We bring the showroom shine directly to your
                  doorstep with professional care and attention to detail.
                </p>
                <div className="footer-social-links">
                  <a href="#">
                    <div aria-label="Instagram" className="footer-social-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                            width="20"
                            height="20"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="Facebook" className="footer-social-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer-column footer-links-col">
                <h2 className="section-subtitle footer-col-title">
                  Quick Links
                </h2>
                <nav className="footer-nav">
                  <ul className="footer-link-list">
                    <li>
                      <a href="Homepage">
                        <div className="footer-link">
                          <span>Home</span>
                        </div>
                      </a>
                    </li>
                    <Link href="/booking">
                      <a>
                        <li>
                          <div className="footer-link">
                            <span>Booking</span>
                          </div>
                        </li>
                      </a>
                    </Link>
                    <li>
                      <a href="#services">
                        <div className="footer-link">
                          <span>Our Services</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#gallery">
                        <div className="footer-link">
                          <span>Recent Work</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#booking">
                        <div className="footer-link">
                          <span>Book Appointment</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#faq">
                        <div className="footer-link">
                          <span>Common Questions</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="footer-column footer-contact-col">
                <h2 className="section-subtitle footer-col-title">
                  Get In Touch
                </h2>
                <div className="footer-contact-info">
                  <div className="footer-contact-item">
                    <div className="footer-icon-box">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle r="3" cx="12" cy="10"></circle>
                        </g>
                      </svg>
                    </div>
                    <span className="section-content">
                      Richmond Hill / Vaughan / Thornhill
                    </span>
                  </div>
                  <div className="footer-contact-item">
                    <div className="footer-icon-box">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <a href="tel:1234567890">
                      <div className="footer-link">
                        <span>(123) 456-7890</span>
                      </div>
                    </a>
                  </div>
                  <div className="footer-contact-item">
                    <div className="footer-icon-box">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                          <rect
                            x="2"
                            y="4"
                            rx="2"
                            width="20"
                            height="16"
                          ></rect>
                        </g>
                      </svg>
                    </div>
                    <a href="mailto:info@goshineauto.ca?subject=">
                      <div className="footer-link">
                        <span>info@goshineauto.ca</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="footer-cta-wrapper">
                  <Link href="/booking">
                    <a>
                      <div className="footer-thq-btn-elm btn btn-sm btn-primary">
                        <span>Book Mobile Service</span>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-divider"></div>
              <div className="footer-legal">
                <p className="footer-copyright">
                  &amp;copy; 2024 GoShine Auto Detailing. All rights reserved.
                </p>
                <div className="footer-legal-links">
                  <a href="#">
                    <div className="footer-legal-link">
                      <span>Privacy Policy</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-legal-link">
                      <span>Terms of Service</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<script defer data-name="footer-interactivity">
(function(){
  // Minimal script for subtle entry animation if needed
  // Current animation level: MEDIUM
  const footerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const columns = entry.target.querySelectorAll(".footer-column")
          columns.forEach((col, index) => {
            col.style.opacity = "1"
            col.style.transform = "translateY(0)"
            col.style.transition = \`opacity 0.6s ease-out \${index * 0.15}s, transform 0.6s ease-out \${index * 0.15}s\`
          })
          footerObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  const footerGrid = document.querySelector(".footer-grid")
  if (footerGrid) {
    const columns = footerGrid.querySelectorAll(".footer-column")
    columns.forEach((col) => {
      col.style.opacity = "0"
      col.style.transform = "translateY(20px)"
    })
    footerObserver.observe(footerGrid)
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
        <nav className="footer-thq-navlinks-elm">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/booking">
            <a>Booking</a>
          </Link>
          <Link href="/exterior-services">
            <a>Exterior Services</a>
          </Link>
          <Link href="/interior-services">
            <a>Interior Services</a>
          </Link>
          <Link href="/full-detail">
            <a>Full Detail</a>
          </Link>
        </nav>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-thq-btn-elm {
            text-decoration: none;
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
          .footer-thq-navlinks-elm {
            gap: 16px;
            display: flex;
            align-items: center;
          }
        `}
      </style>
    </>
  )
}

export default Footer
