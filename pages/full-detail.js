import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const FullDetail = (props) => {
  return (
    <>
      <div className="full-detail-container1">
        <Head>
          <title>
            Full-Detail - GoShine Detailing: Mobile Car Detailing in Richmond
            Hill
          </title>
          <meta
            name="description"
            content="Professional mobile interior and exterior car detailing services in the Richmond Hill area. Detailing for all vehicles. Book your service today."
          />
          <meta
            property="og:title"
            content="Full-Detail - GoShine Detailing: Mobile Car Detailing in Richmond Hill"
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
            href="https://merry-concrete-chinchilla-8tjyge.teleporthq.site/full-detail"
          />
          <meta
            property="og:url"
            content="https://merry-concrete-chinchilla-8tjyge.teleporthq.site/full-detail"
          />
        </Head>
        <Navigation></Navigation>
        <section className="full-detail-hero-section">
          <div className="hero-section__bg">
            <img
              alt="Luxury car in a premium detailing studio"
              src="https://images.pexels.com/photos/6872595/pexels-photo-6872595.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="hero-section__image"
            />
            <div className="hero-section__overlay"></div>
          </div>
          <div className="hero-section__container">
            <div className="hero-section__badge-wrapper">
              <span className="hero-section__badge">
                <svg
                  fill="none"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                </svg>
                <span>
                  {' '}
                  Most Popular
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <h1 className="hero-title hero-section__title full-detail-hero-title">
              Premium Interior &amp; Exterior Detail
            </h1>
            <p className="hero-section__description hero-subtitle">
              Experience the ultimate transformation for your vehicle. Our most
              comprehensive mobile detailing package combines meticulous
              interior restoration with high-end exterior protection, delivered
              right to your doorstep in Richmond Hill, Vaughan, and Thornhill.
            </p>
          </div>
        </section>
        <section id="details" className="service-details">
          <div className="service-details__container">
            <div className="service-details__header">
              <h2 className="section-title service-details__title">
                Premium Interior &amp; Exterior Detail — Starting at $140
              </h2>
              <div className="service-details__value-tag">
                <svg
                  fill="none"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                    <circle r="2" cx="4" cy="20"></circle>
                  </g>
                </svg>
                <span>
                  {' '}
                  Best Value
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="service-details__grid">
              <div className="service-details__item">
                <div className="service-details__icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </div>
                <div className="service-details__content">
                  <h3 className="service-details__item-title">
                    Deep Hand Wash &amp; De-Bug
                  </h3>
                  <p className="section-content">
                    Multi-stage foam soak and pressure rinse to safely remove
                    road grime and stubborn organic contaminants without
                    scratching.
                  </p>
                </div>
              </div>
              <div className="service-details__item">
                <div className="service-details__icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </div>
                <div className="service-details__content">
                  <h3 className="service-details__item-title">
                    Total Wheel &amp; Well Care
                  </h3>
                  <p className="section-content">
                    Intensive cleaning of wheels, tires, and inner wheel arches.
                    We remove brake dust buildup and restore a factory-clean
                    look to your undercarriage edges.
                  </p>
                </div>
              </div>
              <div className="service-details__item">
                <div className="service-details__icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </div>
                <div className="service-details__content">
                  <h3 className="service-details__item-title">
                    Precision Brush Detail
                  </h3>
                  <p className="section-content">
                    Meticulous cleaning of grille, badges, vents, cup holders,
                    and trim using specialized soft-bristle brushes for zero-gap
                    perfection.
                  </p>
                </div>
              </div>
              <div className="service-details__item">
                <div className="service-details__icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </div>
                <div className="service-details__content">
                  <h3 className="service-details__item-title">
                    Deep Shampoo &amp; Extraction
                  </h3>
                  <p className="section-content">
                    Full stain removal and deep hot-water extraction of carpets
                    and mats to eliminate odors and embedded dirt from the
                    fibers.
                  </p>
                </div>
              </div>
              <div className="service-details__item">
                <div className="service-details__icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </div>
                <div className="service-details__content">
                  <h3 className="service-details__item-title">
                    6-Month SiO2 Protection
                  </h3>
                  <p className="section-content">
                    High-gloss CarPro HydrO2 sealant applied to paint, windows,
                    and wheels for incredible water beading and UV resistance.
                  </p>
                </div>
              </div>
              <div className="service-details__item">
                <div className="service-details__icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </div>
                <div className="service-details__content">
                  <h3 className="service-details__item-title">
                    Advanced Surface Restoration
                  </h3>
                  <p className="section-content">
                    Premium CarPro PERL UV-shielding dressing for leather,
                    plastic, and rubber, leaving a rich, non-greasy satin
                    finish.
                  </p>
                </div>
              </div>
              <div className="service-details__item">
                <div className="service-details__icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </div>
                <div className="service-details__content">
                  <h3 className="service-details__item-title">
                    Complete Jamb Cleaning
                  </h3>
                  <p className="section-content">
                    Full degreasing and hand-wiping of all door and trunk jambs.
                    No hidden dirt is left behind when you open your doors.
                  </p>
                </div>
              </div>
              <div className="service-details__item">
                <div className="service-details__icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </div>
                <div className="service-details__content">
                  <h3 className="service-details__item-title">
                    Crystal Clear Glass
                  </h3>
                  <p className="section-content">
                    Streak-free polishing of all interior and exterior windows
                    for maximum visibility and a brilliant shine.
                  </p>
                </div>
              </div>
            </div>
            <div className="service-details__pricing-card">
              <div className="service-details__pricing-header">
                <span className="service-details__pricing-label">
                  Vehicle Pricing Guide
                </span>
              </div>
              <ul className="service-details__pricing-list">
                <li className="service-details__pricing-item">
                  <span className="service-details__vehicle">Sedans</span>
                  <span className="service-details__price">$140</span>
                </li>
                <li className="service-details__pricing-item">
                  <span className="service-details__vehicle">SUVs</span>
                  <span className="service-details__price">$170</span>
                </li>
                <li className="service-details__pricing-item">
                  <span className="service-details__vehicle">
                    Trucks / Large SUVs / Minivans
                  </span>
                  <span className="service-details__price">$180</span>
                </li>
              </ul>
              <p className="service-details__comparison">
                <svg
                  fill="none"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12l2 2l4-4"></path>
                </svg>
                <span>
                  {' '}
                  Compared to individual interior and exterior services, the
                  Full Detail package offers over 20% in savings and the most
                  comprehensive protection for your investment.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
            </div>
          </div>
        </section>
        <section className="full-detail-booking-cta">
          <div className="booking-cta__container">
            <div className="full-detail-booking-cta__card">
              <div className="booking-cta__content">
                <h2 className="section-title booking-cta__title">
                  Ready for the GoShine Glow?
                </h2>
                <p className="booking-cta__text section-content">
                  Join hundreds of satisfied clients in the Vaughan area who
                  trust us with their luxury vehicles. We bring the showroom
                  shine to your driveway.
                </p>
              </div>
              <div className="booking-cta__action">
                <Link href="/booking">
                  <a>
                    <div className="btn btn-xl booking-cta__btn btn-accent">
                      <span>Book Full Detail</span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="full-detail-container2">
          <div className="full-detail-container3">
            <Script
              html={`<script defer data-name="full-detail-interactions">
(function(){
  const detailItems = document.querySelectorAll(".service-details__item")

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }, index * 100)
        revealObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  detailItems.forEach((item) => {
    item.style.opacity = "0"
    item.style.transform = "translateY(20px)"
    item.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
    revealObserver.observe(item)
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .full-detail-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .full-detail-container2 {
            display: none;
          }
          .full-detail-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default FullDetail
