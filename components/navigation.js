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
                      alt="image"
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
                    <span>Services</span>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="navigation-link">
                    <span>Gallery</span>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="navigation-link">
                    <span>Pricing</span>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="navigation-link">
                    <span>About</span>
                  </div>
                </a>
              </Link>
              <Link href="/booking">
                <a>
                  <div className="btn btn-sm btn-primary">
                    <span>Book Now</span>
                  </div>
                </a>
              </Link>
              <div data-thq="thq-dropdown" className="navigation-thq-dropdown1">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="navigation-thq-dropdown-toggle1"
                >
                  <span>More</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="navigation-thq-dropdown-arrow1"
                  >
                    <svg viewBox="0 0 1024 1024" className="navigation-icon10">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="navigation-thq-dropdown-list1"
                >
                  <Link href="/exterior-services">
                    <a>
                      <div className="navigation-link">
                        <span>Exterior Services</span>
                      </div>
                    </a>
                  </Link>
                  <Link href="/interior-services">
                    <a>
                      <div className="navigation-link">
                        <span>Interior Services</span>
                      </div>
                    </a>
                  </Link>
                  <Link href="/full-detail">
                    <a>
                      <div className="navigation-link">
                        <span>Full Detail</span>
                      </div>
                    </a>
                  </Link>
                </ul>
              </div>
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
                        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                        <circle r="2" cx="7" cy="17"></circle>
                        <path d="M9 17h6"></path>
                        <circle r="2" cx="17" cy="17"></circle>
                      </g>
                    </svg>
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
                    <span>Services</span>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="navigation-mobile-link">
                    <span>Gallery</span>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="navigation-mobile-link">
                    <span>Pricing</span>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="navigation-mobile-link">
                    <span>About</span>
                  </div>
                </a>
              </Link>
              <Link href="/booking">
                <a>
                  <div className="navigation-mobile-link">
                    <span>Booking</span>
                  </div>
                </a>
              </Link>
              <div data-thq="thq-dropdown" className="navigation-thq-dropdown2">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="navigation-thq-dropdown-toggle2"
                >
                  <span>More</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="navigation-thq-dropdown-arrow2"
                  >
                    <svg viewBox="0 0 1024 1024" className="navigation-icon21">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="navigation-thq-dropdown-list2"
                >
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
              html={`<script defer data-name="navigation-logic">
(function(){
  const mobileToggle = document.getElementById("navigationMobileToggle")
  const mobileOverlay = document.getElementById("navigationMobileOverlay")
  const mobileClose = document.getElementById("navigationMobileClose")
  const mobileLinks = document.querySelectorAll(".navigation-mobile-link")

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
            align-items: center;
            justify-content: center;
          }
          .navigation-image {
            width: 200px;
            object-fit: cover;
          }
          .navigation-thq-dropdown1 {
            cursor: pointer;
            display: inline-block;
            padding: 4px 8px;
            position: relative;
            border-color: rgba(0, 0, 0, 0.45);
            border-style: solid;
            border-width: 1px;
            border-radius: 4px;
          }
          .navigation-thq-dropdown-toggle1 {
            gap: 4px;
            display: inline-flex;
            align-items: center;
          }
          .navigation-thq-dropdown-arrow1 {
            transition: 0.3s;
          }
          .navigation-icon10 {
            width: 18px;
            height: 18px;
          }
          .navigation-thq-dropdown-list1 {
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            flex-direction: column;
            list-style-type: none;
          }
          .navigation-thq-dropdown2 {
            cursor: pointer;
            display: inline-block;
            padding: 4px 8px;
            position: relative;
            border-color: rgba(0, 0, 0, 0.45);
            border-style: solid;
            border-width: 1px;
            border-radius: 4px;
          }
          .navigation-thq-dropdown-toggle2 {
            gap: 4px;
            display: inline-flex;
            align-items: center;
          }
          .navigation-thq-dropdown-arrow2 {
            transition: 0.3s;
          }
          .navigation-icon21 {
            width: 18px;
            height: 18px;
          }
          .navigation-thq-dropdown-list2 {
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            flex-direction: column;
            list-style-type: none;
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
              align-self: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Navigation
