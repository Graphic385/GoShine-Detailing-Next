import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import AddOns from '../components/add-ons'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>
            GoShine Detailing: Mobile Car Detailing in Richmond Hill
          </title>
          <meta
            name="description"
            content="Professional mobile interior and exterior car detailing services in the Richmond Hill area. Detailing for all vehicles. Book your service today."
          />
          <meta
            property="og:title"
            content="GoShine Detailing: Mobile Car Detailing in Richmond Hill"
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
            href="https://merry-concrete-chinchilla-8tjyge.teleporthq.site/"
          />
          <meta
            property="og:url"
            content="https://merry-concrete-chinchilla-8tjyge.teleporthq.site/"
          />
        </Head>
        <Navigation></Navigation>
        <section className="hero-section">
          <div className="hero-bg-media">
            <video
              src="https://videos.pexels.com/video-files/6872083/6872083-hd_1280_720_25fps.mp4"
              loop="true"
              muted="true"
              poster="https://images.pexels.com/videos/6872083/pictures/preview-0.jpg"
              autoPlay="true"
              playsInline="true"
            ></video>
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-container">
            <div className="hero-card">
              <div className="hero-badge">
                <div className="flex-row">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
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
                  <span>Richmond Hill • Vaughan • Thornhill</span>
                </div>
              </div>
              <h1 className="hero-title home-hero-title">
                Experience the Ultimate Shine, Right at Your Doorstep.
              </h1>
              <p className="home-hero-subtitle hero-subtitle">
                Premium mobile auto detailing designed for luxury vehicles. We
                bring the showroom quality to you with professional precision
                and care.
              </p>
              <div className="hero-actions">
                <Link href="/booking">
                  <a>
                    <div>
                      <div className="btn-lg btn btn-primary">
                        <span>Book Your Detailing Now</span>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="services-section">
          <div className="services-container">
            <div className="services-header">
              <h2 className="section-title">Signature Services</h2>
              <p className="section-content">
                Tailored detailing packages to restore and protect your vehicle.
              </p>
            </div>
            <div className="services-grid">
              <div data-service="express-exterior" className="service-card">
                <div className="service-image">
                  <img
                    alt="Express Exterior Car Wash"
                    src="https://images.pexels.com/photos/4870702/pexels-photo-4870702.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="service-card-content">
                  <h3 className="service-name">Express Exterior Wash</h3>
                  <p className="service-description">
                    Quick but thorough exterior cleaning for a brilliant shine.
                  </p>
                  <div className="service-card-footer">
                    <span className="starting-price">Starting at $40</span>
                    <Link href="/exterior-services">
                      <a className="home-link11 view-details">View Details →</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div data-service="premium-exterior" className="service-card">
                <div className="service-image">
                  <img
                    alt="Premium Exterior Car Wash"
                    src="https://images.pexels.com/photos/6872582/pexels-photo-6872582.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="service-card-content">
                  <h3 className="service-name">Premium Exterior Wash</h3>
                  <p className="service-description">
                    Deep clean with SiO2 protection for lasting results.
                  </p>
                  <div className="service-card-footer">
                    <span className="starting-price">Starting at $70</span>
                    <Link href="/exterior-services">
                      <a className="home-link12 view-details">View Details →</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div data-service="express-interior" className="service-card">
                <div className="service-image">
                  <img
                    alt="Express Interior Cleaning"
                    src="https://images.pexels.com/photos/5233264/pexels-photo-5233264.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="service-card-content">
                  <h3 className="service-name">Express Interior Clean</h3>
                  <p className="service-description">
                    Complete vacuum and surface refresh for your cabin.
                  </p>
                  <div className="service-card-footer">
                    <span className="starting-price">Starting at $60</span>
                    <Link href="/interior-services">
                      <a className="home-link13 view-details">View Details →</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div data-service="premium-interior" className="service-card">
                <div className="service-image">
                  <img
                    alt="Premium Interior Cleaning"
                    src="https://images.pexels.com/photos/5233285/pexels-photo-5233285.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="service-card-content">
                  <h3 className="service-name">Premium Interior Clean</h3>
                  <p className="service-description">
                    Deep shampoo and protective finish for like-new interior.
                  </p>
                  <div className="service-card-footer">
                    <span className="starting-price">Starting at $100</span>
                    <Link href="/interior-services">
                      <a className="home-link14 view-details">View Details →</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                data-service="full-detail"
                className="home-thq-service-card-elm5 service-card"
              >
                <div className="home-thq-popular-badge-elm">
                  <span>Most Popular</span>
                </div>
                <div className="service-image">
                  <img
                    alt="Full Interior and Exterior Detail"
                    src="https://images.pexels.com/photos/6873174/pexels-photo-6873174.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="service-card-content">
                  <h3 className="service-name">
                    Premium Interior &amp; Exterior Detail
                  </h3>
                  <p className="service-description">
                    The complete package. Inside and out like new.
                  </p>
                  <div className="service-card-footer">
                    <span className="starting-price">Starting at $140</span>
                    <Link href="/full-detail">
                      <a className="home-link15 view-details">View Details →</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="modal-express-exterior" className="service-modal">
            <div
              onclick="closeServiceModal('express-exterior')"
              className="service-modal-overlay"
            ></div>
            <div className="service-modal-content">
              <button
                onclick="closeServiceModal('express-exterior')"
                aria-label="Close modal"
                className="button service-modal-close"
              >
                <svg
                  fill="none"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </button>
              <div className="service-modal-header">
                <h3>Express Exterior Wash</h3>
                <p className="modal-subtitle">
                  Quick but thorough exterior cleaning
                </p>
              </div>
              <div className="service-modal-body">
                <ul className="service-features list">
                  <li className="list-item">
                    <span>Safe Pressure Wash &amp; Foam Bath</span>
                  </li>
                  <li className="list-item">
                    <span>Hand Wash &amp; Towel Dry</span>
                  </li>
                  <li className="list-item">
                    <span>Wheel &amp; Tire Clean</span>
                  </li>
                  <li className="list-item">
                    <span>Tire Dressing</span>
                  </li>
                  <li className="list-item">
                    <span>Door Jamb Wipe-Down</span>
                  </li>
                </ul>
                <div className="service-pricing">
                  <h4>Pricing</h4>
                  <div className="pricing-row">
                    <span className="vehicle-type">Sedan</span>
                    <span className="price">$40</span>
                  </div>
                  <div className="pricing-row">
                    <span className="vehicle-type">SUV</span>
                    <span className="price">$50</span>
                  </div>
                </div>
              </div>
              <div className="service-modal-footer">
                <Link href="/booking">
                  <a>
                    <div className="btn-lg btn btn-primary">
                      <span>Book This Service</span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div id="modal-premium-exterior" className="service-modal">
            <div
              onclick="closeServiceModal('premium-exterior')"
              className="service-modal-overlay"
            ></div>
            <div className="service-modal-content">
              <button
                onclick="closeServiceModal('premium-exterior')"
                aria-label="Close modal"
                className="button service-modal-close"
              >
                <svg
                  fill="none"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </button>
              <div className="service-modal-header">
                <h3>Premium Exterior Wash</h3>
                <p className="modal-subtitle">
                  Deep clean with lasting protection
                </p>
              </div>
              <div className="service-modal-body">
                <ul className="service-features list">
                  <li className="list-item">
                    <span>Safe Hand Wash &amp; De-Bug</span>
                  </li>
                  <li className="list-item">
                    <span>Deep Wheel &amp; Well Clean</span>
                  </li>
                  <li className="list-item">
                    <span>Precision Brush Detail</span>
                  </li>
                  <li className="list-item">
                    <span>6-Month SiO2 Protection</span>
                  </li>
                  <li className="list-item">
                    <span>Trim &amp; Tire Restoration</span>
                  </li>
                  <li className="list-item">
                    <span>Door &amp; Trunk Jambs</span>
                  </li>
                </ul>
                <div className="service-pricing">
                  <h4>Pricing</h4>
                  <div className="pricing-row">
                    <span className="vehicle-type">Sedan</span>
                    <span className="price">$70</span>
                  </div>
                  <div className="pricing-row">
                    <span className="vehicle-type">SUV</span>
                    <span className="price">$80</span>
                  </div>
                </div>
              </div>
              <div className="service-modal-footer">
                <Link href="/booking">
                  <a>
                    <div className="btn-lg btn btn-primary">
                      <span>Book This Service</span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div id="modal-express-interior" className="service-modal">
            <div
              onclick="closeServiceModal('express-interior')"
              className="service-modal-overlay"
            ></div>
            <div className="service-modal-content">
              <button
                onclick="closeServiceModal('express-interior')"
                aria-label="Close modal"
                className="button service-modal-close"
              >
                <svg
                  fill="none"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </button>
              <div className="service-modal-header">
                <h3>Express Interior Clean</h3>
                <p className="modal-subtitle">Complete cabin refresh</p>
              </div>
              <div className="service-modal-body">
                <ul className="service-features list">
                  <li className="list-item">
                    <span>Complete Interior Vacuum</span>
                  </li>
                  <li className="list-item">
                    <span>Surface Wipe-Down</span>
                  </li>
                  <li className="list-item">
                    <span>Door Jamb Refresh</span>
                  </li>
                  <li className="list-item">
                    <span>Rubber Mat Wash</span>
                  </li>
                  <li className="list-item">
                    <span>Light Spot Cleaning</span>
                  </li>
                  <li className="list-item">
                    <span>Streak-Free Glass</span>
                  </li>
                </ul>
                <div className="service-pricing">
                  <h4>Pricing</h4>
                  <div className="pricing-row">
                    <span className="vehicle-type">Sedan</span>
                    <span className="price">$60</span>
                  </div>
                  <div className="pricing-row">
                    <span className="vehicle-type">SUV</span>
                    <span className="price">$70</span>
                  </div>
                  <div className="pricing-row">
                    <span className="vehicle-type">
                      Truck/Large SUV/Minivan
                    </span>
                    <span className="price">$80</span>
                  </div>
                </div>
              </div>
              <div className="service-modal-footer">
                <Link href="/booking">
                  <a>
                    <div className="btn-lg btn btn-primary">
                      <span>Book This Service</span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div id="modal-premium-interior" className="service-modal">
            <div
              onclick="closeServiceModal('premium-interior')"
              className="service-modal-overlay"
            ></div>
            <div className="service-modal-content">
              <button
                onclick="closeServiceModal('premium-interior')"
                aria-label="Close modal"
                className="button service-modal-close"
              >
                <svg
                  fill="none"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </button>
              <div className="service-modal-header">
                <h3>Premium Interior Clean</h3>
                <p className="modal-subtitle">
                  Deep clean with protective finish
                </p>
              </div>
              <div className="service-modal-body">
                <ul className="service-features list">
                  <li className="list-item">
                    <span>Deep Carpet &amp; Mat Shampoo</span>
                  </li>
                  <li className="list-item">
                    <span>Precision Surface Cleaning</span>
                  </li>
                  <li className="list-item">
                    <span>Door &amp; Trunk Jambs</span>
                  </li>
                  <li className="list-item">
                    <span>3-Month Protective Finish</span>
                  </li>
                  <li className="list-item">
                    <span>Crystal Clear Glass</span>
                  </li>
                </ul>
                <div className="service-pricing">
                  <h4>Pricing</h4>
                  <div className="pricing-row">
                    <span className="vehicle-type">Sedan</span>
                    <span className="price">$100</span>
                  </div>
                  <div className="pricing-row">
                    <span className="vehicle-type">SUV</span>
                    <span className="price">$120</span>
                  </div>
                  <div className="pricing-row">
                    <span className="vehicle-type">
                      Truck/Large SUV/Minivan
                    </span>
                    <span className="price">$130</span>
                  </div>
                </div>
              </div>
              <div className="service-modal-footer">
                <Link href="/booking">
                  <a>
                    <div className="btn-lg btn btn-primary">
                      <span>Book This Service</span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div id="modal-full-detail" className="service-modal">
            <div
              onclick="closeServiceModal('full-detail')"
              className="service-modal-overlay"
            ></div>
            <div className="service-modal-content">
              <button
                onclick="closeServiceModal('full-detail')"
                aria-label="Close modal"
                className="button service-modal-close"
              >
                <svg
                  fill="none"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </button>
              <div className="service-modal-header">
                <div className="home-thq-modal-badge-elm">
                  <span>Most Popular</span>
                </div>
                <h3>Premium Interior &amp; Exterior Detail</h3>
                <p className="modal-subtitle">
                  The complete detailing experience
                </p>
              </div>
              <div className="service-modal-body">
                <ul className="service-features list">
                  <li className="list-item">
                    <span>Deep Hand Wash &amp; De-Bug</span>
                  </li>
                  <li className="list-item">
                    <span>Total Wheel &amp; Well Care</span>
                  </li>
                  <li className="list-item">
                    <span>Precision Brush Detail</span>
                  </li>
                  <li className="list-item">
                    <span>Deep Shampoo &amp; Extraction</span>
                  </li>
                  <li className="list-item">
                    <span>6-Month SiO2 Protection</span>
                  </li>
                  <li className="list-item">
                    <span>Advanced Surface Restoration</span>
                  </li>
                  <li className="list-item">
                    <span>Complete Jamb Cleaning</span>
                  </li>
                  <li className="list-item">
                    <span>Crystal Clear Glass</span>
                  </li>
                </ul>
                <div className="service-pricing">
                  <h4>Pricing</h4>
                  <div className="pricing-row">
                    <span className="vehicle-type">Sedan</span>
                    <span className="price">$140</span>
                  </div>
                  <div className="pricing-row">
                    <span className="vehicle-type">SUV</span>
                    <span className="price">$170</span>
                  </div>
                  <div className="pricing-row">
                    <span className="vehicle-type">
                      Truck/Large SUV/Minivan
                    </span>
                    <span className="price">$180</span>
                  </div>
                </div>
              </div>
              <div className="service-modal-footer">
                <Link href="/booking">
                  <a>
                    <div className="btn-lg btn btn-primary">
                      <span>Book This Service</span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="home-container3">
            <div className="home-container4">
              <Script
                html={`<script>
(function(){
      function openServiceModal(serviceId) {
        const modal = document.getElementById("modal-" + serviceId)
        if (modal) {
          modal.classList.add("is-active")
          document.body.style.overflow = "hidden"
        }
      }

      function closeServiceModal(serviceId) {
        const modal = document.getElementById("modal-" + serviceId)
        if (modal) {
          modal.classList.remove("is-active")
          document.body.style.overflow = ""
        }
      }

      // Close modal on Escape key
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          const activeModal = document.querySelector(".service-modal.is-active")
          if (activeModal) {
            activeModal.classList.remove("is-active")
            document.body.style.overflow = ""
          }
        }
      })
    })()
</script>`}
              ></Script>
            </div>
          </div>
        </section>
        <AddOns></AddOns>
        <section className="gallery-section">
          <div className="gallery-wrapper">
            <div className="gallery-header">
              <h2 className="section-title">The Transformation</h2>
              <p className="section-content">
                Real results from our mobile detailing units.
              </p>
            </div>
            <div id="galleryCarousel" className="gallery-carousel">
              <div className="gallery-item">
                <div className="comparison-container">
                  <div className="comparison-image">
                    <div className="comparison-label">
                      <span>Paint Restoration</span>
                    </div>
                    <img
                      alt="Before and After Detailing"
                      src="https://images.pexels.com/photos/6872150/pexels-photo-6872150.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    />
                  </div>
                </div>
              </div>
              <div className="gallery-item">
                <div className="comparison-container">
                  <div className="comparison-image">
                    <img
                      alt="Interior Detail Result"
                      src="https://images.pexels.com/photos/6873100/pexels-photo-6873100.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    />
                    <div className="comparison-label">
                      <span>Interior Revive</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gallery-item">
                <div className="comparison-container">
                  <div className="comparison-image">
                    <img
                      alt="Ceramic Coating Shine"
                      src="https://images.pexels.com/photos/6872164/pexels-photo-6872164.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    />
                    <div className="comparison-label">
                      <span>Ceramic Shine</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery-nav">
              <button
                aria-label="Slide 1"
                data-index="0"
                className="active gallery-dot"
              ></button>
              <button
                aria-label="Slide 2"
                data-index="1"
                className="gallery-dot"
              ></button>
              <button
                aria-label="Slide 3"
                data-index="2"
                className="gallery-dot"
              ></button>
            </div>
          </div>
        </section>
        <section className="testimonials-section">
          <div className="testimonials-container">
            <div className="testimonials-header">
              <h2 className="section-title">What Your Neighbors Say</h2>
            </div>
            <div className="testimonials-rail">
              <div className="testimonial-card">
                <div className="rating">
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="var(--color-secondary)"
                      stroke="var(--color-secondary)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="var(--color-secondary)"
                      stroke="var(--color-secondary)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="var(--color-secondary)"
                      stroke="var(--color-secondary)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="var(--color-secondary)"
                      stroke="var(--color-secondary)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="var(--color-secondary)"
                      stroke="var(--color-secondary)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <p className="testimonial-text">
                  &quot;GoShine did an incredible job on my SUV. They arrived on
                  time in Richmond Hill and the interior looks brand new. Truly
                  premium service.&quot;
                </p>
                <div className="testimonial-author">
                  <span className="author-name">Michael R.</span>
                  <span className="author-location">Richmond Hill</span>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="rating">
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="var(--color-secondary)"
                      stroke="var(--color-secondary)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="var(--color-secondary)"
                      stroke="var(--color-secondary)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="var(--color-secondary)"
                      stroke="var(--color-secondary)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="var(--color-secondary)"
                      stroke="var(--color-secondary)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="var(--color-secondary)"
                      stroke="var(--color-secondary)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <p className="testimonial-text">
                  &quot;Best ceramic coating service in Vaughan. The water beads
                  off effortlessly and the paint depth is unreal. Highly
                  recommend GoShine.&quot;
                </p>
                <div className="testimonial-author">
                  <span className="author-name">Sarah L.</span>
                  <span className="author-location">Vaughan</span>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="rating">
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="var(--color-secondary)"
                      stroke="var(--color-secondary)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="var(--color-secondary)"
                      stroke="var(--color-secondary)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="var(--color-secondary)"
                      stroke="var(--color-secondary)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="var(--color-secondary)"
                      stroke="var(--color-secondary)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="var(--color-secondary)"
                      stroke="var(--color-secondary)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <p className="testimonial-text">
                  &quot;Professional, courteous, and detailed. They transformed
                  my neglected work car into something I&apos;m proud to drive
                  again. Thornhill&apos;s best.&quot;
                </p>
                <div className="testimonial-author">
                  <span className="author-name">David K.</span>
                  <span className="author-location">Thornhill</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-section">
          <div className="cta-alert-wrapper">
            <div className="cta-content">
              <div className="cta-text-group">
                <h2 className="cta-title">Ready for a Flawless Finish?</h2>
                <p className="cta-subtitle">
                  Serving Richmond Hill, Vaughan, and Thornhill.
                </p>
              </div>
              <div className="cta-actions">
                <Link href="/booking">
                  <a>
                    <div>
                      <div className="btn-lg btn btn-secondary">
                        <span>Book Mobile Detailing</span>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="home-container6">
          <div className="home-container7">
            <Script
              html={`<style>
section {
  position: relative;
  overflow: hidden;
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="home-container8">
          <div className="home-container9">
            <Script
              html={`<script>
        ;(function () {
          // Gallery Carousel Logic
          const carousel = document.getElementById("galleryCarousel")
          const dots = document.querySelectorAll(".gallery-dot")
          if (carousel && dots.length > 0) {
            carousel.addEventListener("scroll", () => {
              const scrollPos = carousel.scrollLeft
              const width = carousel.offsetWidth
              const index = Math.round(scrollPos / width)
              dots.forEach((dot, i) => {
                if (i === index) {
                  dot.classList.add("active")
                } else {
                  dot.classList.remove("active")
                }
              })
            })
            dots.forEach((dot) => {
              dot.addEventListener("click", () => {
                const index = parseInt(dot.getAttribute("data-index"))
                const width = carousel.offsetWidth
                carousel.scrollTo({
                  left: index * width,
                  behavior: "smooth",
                })
              })
            })
          }

          // Simple Scroll Reveal Effect
          const revealElements = document.querySelectorAll(".feature-card, .service-card, .testimonial-card")
          const revealOnScroll = () => {
            revealElements.forEach((el) => {
              const rect = el.getBoundingClientRect()
              const isVisible = rect.top < window.innerHeight - 50
              if (isVisible) {
                el.style.opacity = "1"
                el.style.transform = "translateY(0)"
              }
            })
          }
          // Initial Styles for Reveal
          revealElements.forEach((el) => {
            el.style.opacity = "0"
            el.style.transform = "translateY(20px)"
            el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
          })
          window.addEventListener("scroll", revealOnScroll)
          revealOnScroll() // Run once on load
        })()
      </script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .home-link11 {
            text-decoration: none;
          }
          .home-link12 {
            text-decoration: none;
          }
          .home-link13 {
            text-decoration: none;
          }
          .home-link14 {
            text-decoration: none;
          }
          .home-thq-service-card-elm5 {
            border: 2px solid var(--color-secondary);
            position: relative;
          }
          .home-thq-popular-badge-elm {
            top: -1px;
            color: var(--color-on-secondary);
            right: var(--spacing-xl);
            padding: var(--spacing-xs) var(--spacing-md);
            z-index: 2;
            position: absolute;
            font-size: var(--font-size-xs);
            background: var(--color-secondary);
            font-weight: var(--font-weight-medium);
            border-radius: 0 0 var(--border-radius-sm) var(--border-radius-sm);
            letter-spacing: 0.05em;
            text-transform: uppercase;
          }
          .home-link15 {
            text-decoration: none;
          }
          .home-thq-modal-badge-elm {
            color: var(--color-on-secondary);
            display: inline-block;
            padding: var(--spacing-xs) var(--spacing-md);
            font-size: var(--font-size-xs);
            background: var(--color-secondary);
            font-weight: var(--font-weight-medium);
            border-radius: var(--border-radius-sm);
            margin-bottom: var(--spacing-sm);
            letter-spacing: 0.05em;
            text-transform: uppercase;
          }
          .home-container3 {
            display: none;
          }
          .home-container4 {
            display: contents;
          }
          .home-container6 {
            display: none;
          }
          .home-container7 {
            display: contents;
          }
          .home-container8 {
            display: none;
          }
          .home-container9 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Home
