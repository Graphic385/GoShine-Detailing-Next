import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const ExteriorServices = (props) => {
  return (
    <>
      <div className="exterior-services-container1">
        <Head>
          <title>
            Exterior-Services - GoShine Detailing: Mobile Car Detailing in
            Richmond Hill
          </title>
          <meta
            name="description"
            content="Professional mobile interior and exterior car detailing services in the Richmond Hill area. Detailing for all vehicles. Book your service today."
          />
          <meta
            property="og:title"
            content="Exterior-Services - GoShine Detailing: Mobile Car Detailing in Richmond Hill"
          />
          <meta
            property="og:description"
            content="Professional mobile interior and exterior car detailing services in the Richmond Hill area. Detailing for all vehicles. Book your service today."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/47fea3ae-00a5-467c-adc6-4e360d4fc31c/9500b003-5b5c-4bd1-be26-4af716f42c86?org_if_sml=1&amp;force_format=original"
          />
          <link
            rel="canonical"
            href="https://merry-concrete-chinchilla-8tjyge.teleporthq.site/exterior-services"
          />
          <meta
            property="og:url"
            content="https://merry-concrete-chinchilla-8tjyge.teleporthq.site/exterior-services"
          />
        </Head>
        <Navigation></Navigation>
        <section className="exterior-services-hero-section">
          <div className="hero-media-wrapper">
            <img
              alt="Luxury car receiving premium foam wash"
              src="https://images.pexels.com/photos/6873191/pexels-photo-6873191.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="hero-bg-image"
            />
            <div className="exterior-services-hero-overlay"></div>
          </div>
          <div className="hero-content">
            <h1 className="exterior-services-hero-title hero-title">
              Exterior Services
            </h1>
            <p className="hero-subtitle exterior-services-hero-subtitle">
              Premium mobile detailing that restores and protects your
              vehicle&apos;s finish. From meticulous hand washes to advanced
              SiO2 ceramic protection, we bring the showroom shine directly to
              your driveway in Richmond Hill, Vaughan, and Thornhill.
            </p>
          </div>
        </section>
        <section className="service-packages">
          <div className="packages-container">
            <div className="package-card">
              <div className="package-header">
                <h2 className="section-title">Express Exterior Wash</h2>
                <div className="package-price">
                  <span>Starting at $40</span>
                </div>
              </div>
              <div className="package-body">
                <ul className="feature-list">
                  <li className="feature-item">
                    <div className="icon-wrapper">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div className="feature-text">
                      <strong>Safe Pressure Wash &amp; Foam Bath:</strong>
                      <span>
                        Pre-wash to remove loose grit before hand-contact
                      </span>
                    </div>
                  </li>
                  <li className="feature-item">
                    <div className="icon-wrapper">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div className="feature-text">
                      <strong>Hand Wash &amp; Towel Dry:</strong>
                      <span>
                        Safe contact wash followed by a plush microfiber dry
                      </span>
                    </div>
                  </li>
                  <li className="feature-item">
                    <div className="icon-wrapper">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div className="feature-text">
                      <strong>Wheel &amp; Tire Clean:</strong>
                      <span>Removal of brake dust and road grime</span>
                    </div>
                  </li>
                  <li className="feature-item">
                    <div className="icon-wrapper">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div className="feature-text">
                      <strong>Tire Dressing:</strong>
                      <span>Finished with a clean, non-greasy shine</span>
                    </div>
                  </li>
                  <li className="feature-item">
                    <div className="icon-wrapper">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div className="feature-text">
                      <strong>Door Jamb Wipe-Down:</strong>
                      <span>Quick cleaning of all jambs</span>
                    </div>
                  </li>
                </ul>
                <div className="pricing-grid">
                  <div className="pricing-item">
                    <span className="pricing-label">Sedan</span>
                    <span className="pricing-value">$40</span>
                  </div>
                  <div className="pricing-item">
                    <span className="pricing-label">SUV</span>
                    <span className="pricing-value">$50</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="featured package-card">
              <div className="featured-badge">
                <span>Most Popular</span>
              </div>
              <div className="package-header">
                <h2 className="section-title">Premium Exterior Wash</h2>
                <div className="package-price">
                  <span>Starting at $70</span>
                </div>
              </div>
              <div className="package-body">
                <ul className="feature-list">
                  <li className="feature-item">
                    <div className="icon-wrapper">
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
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                          <path d="m9 12l2 2l4-4"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="feature-text">
                      <strong>Safe Hand Wash &amp; Pre-wash:</strong>
                      <span>Multi-stage foam soak and pressure rinse</span>
                    </div>
                  </li>
                  <li className="feature-item">
                    <div className="icon-wrapper">
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
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                          <path d="m9 12l2 2l4-4"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="feature-text">
                      <strong>Deep Wheel &amp; Well Clean:</strong>
                      <span>
                        Intensive cleaning of wheels, tires, and inner wheel
                        wells
                      </span>
                    </div>
                  </li>
                  <li className="feature-item">
                    <div className="icon-wrapper">
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
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                          <path d="m9 12l2 2l4-4"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="feature-text">
                      <strong>Precision Brush Detail:</strong>
                      <span>
                        Detailed cleaning of grille, badges, window seals, trim
                      </span>
                    </div>
                  </li>
                  <li className="highlight feature-item">
                    <div className="icon-wrapper">
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
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                          <path d="m9 12l2 2l4-4"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="feature-text">
                      <strong>6-Month SiO2 Protection:</strong>
                      <span>High-gloss CarPro HydrO2 sealant applied</span>
                    </div>
                  </li>
                  <li className="feature-item">
                    <div className="icon-wrapper">
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
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                          <path d="m9 12l2 2l4-4"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="feature-text">
                      <strong>Trim &amp; Tire Restoration:</strong>
                      <span>
                        CarPro PERL UV protection for plastics and tires
                      </span>
                    </div>
                  </li>
                  <li className="feature-item">
                    <div className="icon-wrapper">
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
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                          <path d="m9 12l2 2l4-4"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="feature-text">
                      <strong>Door &amp; Trunk Jambs:</strong>
                      <span>Complete cleaning</span>
                    </div>
                  </li>
                </ul>
                <div className="pricing-grid">
                  <div className="pricing-item">
                    <span className="pricing-label">Sedan</span>
                    <span className="pricing-value">$70</span>
                  </div>
                  <div className="pricing-item">
                    <span className="pricing-label">SUV</span>
                    <span className="pricing-value">$80</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="exterior-services-booking-cta">
          <div className="exterior-services-cta-content">
            <h2 className="section-title">Ready for a Showroom Shine?</h2>
            <p className="section-content">
              Experience the GoShine difference. We bring professional-grade
              detailing directly to your location.
            </p>
            <Link href="/booking">
              <a>
                <div className="btn exterior-services-btn-xl btn-xl btn-accent">
                  <span>Book Exterior Service</span>
                </div>
              </a>
            </Link>
          </div>
          <div className="cta-visual-element"></div>
        </section>
        <div className="exterior-services-container2">
          <div className="exterior-services-container3">
            <Script
              html={`<script defer data-name="service-animations">
(function(){
  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  const cards = document.querySelectorAll(".package-card")
  cards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
    observer.observe(card)
  })

  const heroTitle = document.querySelector(".hero-title")
  if (heroTitle) {
    heroTitle.style.opacity = "0"
    heroTitle.style.transform = "translateY(-20px)"
    heroTitle.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out"
    setTimeout(() => {
      heroTitle.style.opacity = "1"
      heroTitle.style.transform = "translateY(0)"
    }, 100)
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .exterior-services-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .exterior-services-container2 {
            display: none;
          }
          .exterior-services-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default ExteriorServices
