import React from 'react'
import Link from 'next/link'

import Script from '@/components/html-script'
import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <div className={`footer-container1 ${props.rootClassName} `}>
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
                  <a href="https://www.instagram.com/goshineautos/">
                    <div
                      aria-label="Instagram"
                      className="footer-thq-footer-social-icon-elm footer-social-icon"
                    >
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
                </div>
              </div>
              <div className="footer-column footer-links-col">
                <h2 className="section-subtitle footer-col-title">
                  Quick Links
                </h2>
                <nav className="footer-nav">
                  <ul className="footer-link-list">
                    <li>
                      <Link href="/">

                        <div className="footer-thq-footer-link-elm1 footer-link">
                          <span>Home</span>
                        </div>

                      </Link>
                    </li>
                    <Link href="/booking">

                      <li>
                        <div className="footer-link">
                          <span>Booking</span>
                        </div>
                      </li>

                    </Link>
                    <Link href="/gallery">

                      <li>
                        <div className="footer-link">
                          <span>Gallery</span>
                        </div>
                      </li>

                    </Link>
                    <li>
                      <Link href="/#services">
                        <div className="footer-link">
                          <span>Our Services</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/gallery">
                        <div className="footer-link">
                          <span>Recent Work</span>
                        </div>
                      </Link>
                    </li>
                    <li></li>
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
                    <a href="tel:6473814226">
                      <div className="footer-link">
                        <span>647-381-4226</span>
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
                    <a href="mailto:goshineautocanada@gmail.com?subject=">
                      <div className="footer-link">
                        <span>goshineautocanada@gmail.com</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="footer-cta-wrapper">
                  <Link href="/booking">

                    <div className="footer-thq-btn-elm btn btn-sm btn-primary">
                      <span>Book Mobile Service</span>
                    </div>

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
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-thq-footer-social-icon-elm {
            text-decoration: none;
          }
          .footer-thq-footer-link-elm1 {
            text-decoration: none;
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

          @media (max-width: 1600px) {
            .footer-container2 {
              display: flex;
            }
          }
        `}
      </style>
    </>
  );
}

Footer.defaultProps = {
  rootClassName: '',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
}

export default Footer
