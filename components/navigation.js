import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container1">
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-mobile-overlay.is-active {
  animation: none;
}
.navigation-wrapper, .navigation-link, .navigation-mobile-link {
  transition: none;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <nav className="navigation-wrapper">
          <div className="navigation-container">
            <Link href="/">
              <a>
                <div
                  aria-label="GoShine Auto Detailing Home"
                  className="navigation-logo-link"
                >
                  <div className="navigation-thq-navigation-logo-icon-elm1 navigation-logo-icon">
                    <img
                      alt="GoShine Auto Detailing Logo"
                      src="/company-logo-transparent-200h.webp"
                      className="navigation-image"
                    />
                  </div>
                </div>
              </a>
            </Link>
            <div className="navigation-desktop-links">
              <Link href="/">
                <a>
                  <div className="navigation-link">
                    <span>Gallery</span>
                  </div>
                </a>
              </Link>
              <div className="navigation-dropdown">
                <button
                  aria-label="Services menu"
                  aria-expanded="false"
                  aria-haspopup="true"
                  className="button navigation-dropdown-trigger navigation-link"
                >
                  <span>Services</span>
                  <svg
                    fill="none"
                    width="12"
                    height="12"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="navigation-thq-navigation-dropdown-icon-elm"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </button>
                <div role="menu" className="navigation-dropdown-menu">
                  <Link href="/exterior-services">
                    <a>
                      <div role="menuitem" className="navigation-dropdown-item">
                        <span>Exterior Services</span>
                      </div>
                    </a>
                  </Link>
                  <Link href="/interior-services">
                    <a>
                      <div role="menuitem" className="navigation-dropdown-item">
                        <span>Interior Services</span>
                      </div>
                    </a>
                  </Link>
                  <Link href="/full-detail">
                    <a>
                      <div role="menuitem" className="navigation-dropdown-item">
                        <span>Full Detail</span>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <a href="#services">
                <div className="navigation-thq-navigation-link-elm3 navigation-link">
                  <span>Pricing</span>
                </div>
              </a>
              <Link href="/booking">
                <a>
                  <div className="btn btn-sm btn-primary">
                    <span>Book Now</span>
                  </div>
                </a>
              </Link>
            </div>
            <button
              id="navigationMobileToggle"
              aria-label="Toggle Navigation Menu"
              aria-controls="navigationMobileOverlay"
              aria-expanded="false"
              className="navigation-mobile-toggle"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                className="navigation-icon-open"
              >
                <path
                  d="M4 8h16M4 16h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
        <div id="navigationMobileOverlay" className="navigation-mobile-overlay">
          <div className="navigation-overlay-header">
            <Link href="/">
              <a>
                <div className="navigation-logo-link">
                  <div className="navigation-logo-icon">
                    <img
                      alt="GoShine Auto Detailing Logo"
                      src="/company-logo-transparent-200h.webp"
                      className="navigation-thq-image-elm"
                    />
                  </div>
                </div>
              </a>
            </Link>
            <button
              id="navigationMobileClose"
              aria-label="Close Navigation Menu"
              className="navigation-mobile-close"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-5.5-3.5l-5 5m0-5l5 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="navigation-overlay-content">
            <div className="navigation-mobile-nav">
              <Link href="/">
                <a>
                  <div className="navigation-mobile-link">
                    <span>Gallery</span>
                  </div>
                </a>
              </Link>
              <a href="#services">
                <div className="navigation-thq-navigation-mobile-link-elm2 navigation-mobile-link">
                  <span>Pricing</span>
                </div>
              </a>
              <Link href="/booking">
                <a>
                  <div className="navigation-mobile-link">
                    <span>Booking</span>
                  </div>
                </a>
              </Link>
              <div data-thq="thq-dropdown" className="thq-dropdown">
                <div
                  data-thq="thq-dropdown-toggle"
                  aria-expanded="false"
                  className="thq-dropdown-toggle"
                >
                  <span>Services</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="navigation-thq-dropdown-arrow"
                  >
                    <svg viewBox="0 0 1024 1024" className="navigation-icon5">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul data-thq="thq-dropdown-list" className="thq-dropdown-list">
                  <Link href="/exterior-services">
                    <a>
                      <div className="navigation-mobile-link">
                        <span>Exterior Services</span>
                      </div>
                    </a>
                  </Link>
                  <Link href="/interior-services">
                    <a>
                      <div className="navigation-mobile-link">
                        <span>Interior Services</span>
                      </div>
                    </a>
                  </Link>
                  <Link href="/full-detail">
                    <a>
                      <div className="navigation-mobile-link">
                        <span>Full Detail</span>
                      </div>
                    </a>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="navigation-mobile-footer">
              <p className="navigation-mobile-location">
                Richmond Hill • Vaughan • Thornhill
              </p>
              <Link href="/booking">
                <a>
                  <div className="btn-lg btn btn-primary navigation-mobile-cta">
                    <span>Book Premium Detailing</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="navigation-container4">
          <div className="navigation-container5">
            <Script
              html={`<style>
        @keyframes navigationFadeIn {from {opacity: 0;
transform: translateY(-10px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="navigation-container6">
          <div className="navigation-container7">
            <Script
              html={`<script>
        ;(function () {
          const mobileToggle = document.getElementById("navigationMobileToggle")
          const mobileOverlay = document.getElementById("navigationMobileOverlay")
          const mobileClose = document.getElementById("navigationMobileClose")
          const mobileLinks = document.querySelectorAll(".navigation-mobile-link")
          const dropdownToggle = document.querySelector('[data-thq="thq-dropdown-toggle"]')
          const dropdown = document.querySelector('[data-thq="thq-dropdown"]')
          const dropdownArrow = document.querySelector('[data-thq="thq-dropdown-arrow"]')

          function openMenu() {
            mobileOverlay.classList.add("is-active")
            mobileToggle.setAttribute("aria-expanded", "true")
            document.body.style.overflow = "hidden"
          }
          function closeMenu() {
            mobileOverlay.classList.remove("is-active")
            mobileToggle.setAttribute("aria-expanded", "false")
            document.body.style.overflow = ""
          }

          // Dropdown toggle functionality
          if (dropdownToggle && dropdown) {
            dropdownToggle.addEventListener("click", (e) => {
              e.preventDefault()
              const isOpen = dropdown.getAttribute("data-thq-state") === "open"
              if (isOpen) {
                dropdown.setAttribute("data-thq-state", "closed")
                if (dropdownArrow) dropdownArrow.style.transform = "rotate(0deg)"
              } else {
                dropdown.setAttribute("data-thq-state", "open")
                if (dropdownArrow) dropdownArrow.style.transform = "rotate(90deg)"
              }
            })
          }

          mobileToggle.addEventListener("click", openMenu)
          mobileClose.addEventListener("click", closeMenu)
          mobileLinks.forEach((link) => {
            link.addEventListener("click", closeMenu)
          })
          // Close on escape key
          document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && mobileOverlay.classList.contains("is-active")) {
              closeMenu()
            }
          })
        })()
      </script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
          .navigation-thq-navigation-logo-icon-elm1 {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navigation-image {
            width: auto;
            height: auto;
            display: block;
            max-width: 220px;
            max-height: 200px;
            object-fit: contain;
            image-rendering: auto;
          }
          .navigation-thq-navigation-dropdown-icon-elm {
            transition: transform 0.2s ease;
          }
          .navigation-thq-navigation-link-elm3 {
            text-decoration: none;
          }
          .navigation-thq-image-elm {
            width: auto;
            height: auto;
            display: block;
            max-width: 220px;
            max-height: 200px;
            object-fit: contain;
            image-rendering: auto;
          }
          .navigation-thq-navigation-mobile-link-elm2 {
            text-decoration: none;
          }
          .navigation-thq-dropdown-arrow {
            transition: 0.3s;
          }
          .navigation-icon5 {
            fill: currentColor;
            width: 24px;
            height: 24px;
          }
          .navigation-container4 {
            display: none;
          }
          .navigation-container5 {
            display: contents;
          }
          .navigation-container6 {
            display: none;
          }
          .navigation-container7 {
            display: contents;
          }
          @media (max-width: 1600px) {
            .navigation-image {
              max-width: 200px;
              max-height: 200px;
            }
            .navigation-thq-image-elm {
              max-width: 200px;
              max-height: 200px;
            }
          }
          @media (max-width: 1200px) {
            .navigation-image {
              max-width: 175px;
              max-height: 200px;
            }
            .navigation-thq-image-elm {
              max-width: 175px;
              max-height: 200px;
            }
          }
          @media (max-width: 991px) {
            .navigation-image {
              max-width: 175px;
              max-height: 200px;
            }
            .navigation-thq-image-elm {
              max-width: 175px;
              max-height: 200px;
            }
          }
          @media (max-width: 767px) {
            .navigation-image {
              max-width: 175px;
              max-height: 200px;
            }
            .navigation-thq-image-elm {
              max-width: 175px;
              max-height: 200px;
            }
          }
          @media (max-width: 479px) {
            .navigation-image {
              width: 301px;
              height: 344px;
              max-width: 175px;
              align-self: center;
              max-height: 200px;
            }
            .navigation-thq-image-elm {
              width: 301px;
              height: 344px;
              max-width: 175px;
              align-self: center;
              max-height: 200px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Navigation
