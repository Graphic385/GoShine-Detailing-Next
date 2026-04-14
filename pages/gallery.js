import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import BeforeAfterComparison from '../components/before-after-comparison'
import Footer from '../components/footer'

const Gallery = (props) => {
  return (
    <>
      <div className="gallery-container1">
        <Head>
          <title>
            Gallery - GoShine Detailing: Mobile Car Detailing in Richmond Hill
          </title>
          <meta
            name="description"
            content="Professional mobile interior and exterior car detailing services in the Richmond Hill area. Detailing for all vehicles. Book your service today."
          />
          <meta
            property="og:title"
            content="Gallery - GoShine Detailing: Mobile Car Detailing in Richmond Hill"
          />
          <meta
            property="og:description"
            content="Professional mobile interior and exterior car detailing services in the Richmond Hill area. Detailing for all vehicles. Book your service today."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/47fea3ae-00a5-467c-adc6-4e360d4fc31c/04848f42-fbeb-46ce-a38a-34dc739a299a?org_if_sml=1&amp;force_format=original"
          />
          <link
            rel="canonical"
            href="https://merry-concrete-chinchilla-8tjyge.teleporthq.site/gallery"
          />
          <meta
            property="og:url"
            content="https://merry-concrete-chinchilla-8tjyge.teleporthq.site/gallery"
          />
        </Head>
        <Navigation></Navigation>
        <div className="gallery-container2">
          <div className="gallery-container3">
            <Script
              html={`<style>
@media (max-width: 479px) {
.comparison-img {
  height: 300px;
}
.cta-card {
  padding: var(--spacing-xl);
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <section className="gallery-hero">
          <div className="gallery-hero-overlay"></div>
          <div className="gallery-hero-container">
            <h1 className="hero-title">Gallery</h1>
            <p className="hero-subtitle">
              Visual proof of our commitment to automotive excellence in
              Richmond Hill, Vaughan, and Thornhill.
            </p>
          </div>
        </section>
        <BeforeAfterComparison rootClassName="before-after-comparisonroot-class-name"></BeforeAfterComparison>
        <section className="instagram-cta">
          <div className="cta-card">
            <div className="cta-icon-wrapper">
              <svg
                width="48"
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 0 24 24"
                className="cta-svg"
              >
                <path
                  d="M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm-4 5a4 4 0 0 0-3.995 3.8L8 12a4 4 0 1 0 4-4m4.5-1.5a1 1 0 0 0-.993.883l-.007.127a1 1 0 0 0 1.993.117L17.5 7.5a1 1 0 0 0-1-1"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="section-title">
              Want to see more amazing transformations?
            </h2>
            <p className="section-content">
              Follow us on Instagram for daily updates!
            </p>
            <div className="gallery-cta-actions">
              <a
                href="https://www.instagram.com/goshineautos"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="btn-lg btn btn-accent">
                  <span>Follow GoShine</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <div className="gallery-container4">
          <div className="gallery-container5">
            <Script
              html={`<style>
        @keyframes revealUp {to {opacity: 1;
transform: translateY(0);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="gallery-container6">
          <div className="gallery-container7">
            <Script
              html={`<script>
        ;(function () {
          const observerOptions = {
            threshold: 0.2,
          }
          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible")
                observer.unobserve(entry.target)
              }
            })
          }, observerOptions)
          document.querySelectorAll(".comparison-item").forEach((item) => {
            observer.observe(item)
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
          .gallery-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .gallery-container2 {
            display: none;
          }
          .gallery-container3 {
            display: contents;
          }
          .gallery-container4 {
            display: none;
          }
          .gallery-container5 {
            display: contents;
          }
          .gallery-container6 {
            display: none;
          }
          .gallery-container7 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Gallery
