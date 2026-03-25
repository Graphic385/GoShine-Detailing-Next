import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Booking = (props) => {
  return (
    <>
      <div className="booking-container1">
        <Head>
          <title>
            Booking - GoShine Detailing: Mobile Car Detailing in Richmond Hill
          </title>
          <meta
            name="description"
            content="Professional mobile interior and exterior car detailing services in the Richmond Hill area. Detailing for all vehicles. Book your service today."
          />
          <meta
            property="og:title"
            content="Booking - GoShine Detailing: Mobile Car Detailing in Richmond Hill"
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
            href="https://merry-concrete-chinchilla-8tjyge.teleporthq.site/booking"
          />
          <meta
            property="og:url"
            content="https://merry-concrete-chinchilla-8tjyge.teleporthq.site/booking"
          />
        </Head>
        <Navigation></Navigation>
        <header className="header-minimal">
          <div className="header-container">
            <div className="header-logo">
              <div className="logo-icon-wrapper">
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
              <span className="logo-text">GoShine Auto Detailing</span>
            </div>
          </div>
        </header>
        <section className="booking-section">
          <div className="booking-container">
            <div className="booking-header">
              <h2 className="section-title">Book Your Service</h2>
              <p className="section-subtitle">
                Premium mobile detailing at your doorstep in Richmond Hill,
                Vaughan, and Thornhill.
              </p>
            </div>
            <div className="booking-form-wrapper">
              <iframe
                id="tally-iframe"
                src="https://tally.so/embed/EkLKq2?alignLeft=1&amp;hideTitle=1&amp;transparentBackground=1&amp;dynamicHeight=1"
                title="GoShine Auto Detailing Booking Form"
                width="100%"
                height="800"
                loading="lazy"
                frameborder="0"
                marginwidth="0"
                marginheight="0"
              ></iframe>
            </div>
          </div>
        </section>
        <div className="booking-container2">
          <div className="booking-container3">
            <Script
              html={`<style>
        @keyframes fadeInForm {from {opacity: 0;
transform: translateY(20px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="booking-container4">
          <div className="booking-container5">
            <Script
              html={`<script defer data-name="booking-form-handler">
(function(){
const tallyIframe = document.getElementById('tally-iframe');

window.addEventListener('message', (e) => {
  if (e.data && typeof e.data === 'string' && e.data.includes('tally-close')) {
    // Handle form completion or closure if needed
  }
  
  if (e.data && e.data.type === 'tally-resize') {
    const height = e.data.height;
    if (tallyIframe) {
      tallyIframe.style.height = height + 'px';
    }
  }
});
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .booking-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .booking-container2 {
            display: none;
          }
          .booking-container3 {
            display: contents;
          }
          .booking-container4 {
            display: none;
          }
          .booking-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Booking
