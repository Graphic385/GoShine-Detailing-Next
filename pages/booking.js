import React from 'react'
import Head from 'next/head'

import Script from '@/components/html-script'

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
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/47fea3ae-00a5-467c-adc6-4e360d4fc31c/04848f42-fbeb-46ce-a38a-34dc739a299a?org_if_sml=1&amp;force_format=original"
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
        <section className="booking-section">
          <div className="booking-container">
            <div className="booking-header">
              <h2 className="section-title">Book Your Service</h2>
              <p className="section-subtitle">
                Premium mobile detailing at your doorstep in Richmond Hill,
                Vaughan, and Thornhill.
              </p>
            </div>
            <div className="booking-thq-booking-contact-block-elm">
              <p className="booking-thq-booking-contact-heading-elm">
                Prefer to message?
              </p>
              <div className="booking-thq-booking-contact-options-elm">
                <a href="tel:6473814226" className="booking-link1">
                  <div className="booking-contact-link">
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
                    <span>647-381-4226</span>
                  </div>
                </a>
                <a
                  href="mailto:goshineautocanada@gmail.com?subject="
                  className="booking-link2"
                >
                  <div className="booking-contact-link">
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
                        <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      </g>
                    </svg>
                    <span>goshineautocanada@gmail.com</span>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/goshineautos/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="booking-link3"
                >
                  <div
                    rel="noopener noreferrer"
                    target="_blank"
                    className="booking-contact-link"
                  >
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
                        <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"></path>
                        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m7.5-4.5v.01"></path>
                      </g>
                    </svg>
                    <span>@goshineautos</span>
                  </div>
                </a>
              </div>
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
          .booking-thq-booking-contact-block-elm {
            gap: var(--spacing-sm);
            border: 1px solid var(--color-border);
            margin: 0 auto;
            display: flex;
            padding: var(--spacing-md) var(--spacing-lg);
            max-width: 800px;
            align-items: center;
            border-radius: var(--border-radius-lg);
            flex-direction: column;
            background-color: var(--color-surface-elevated);
          }
          .booking-thq-booking-contact-heading-elm {
            color: var(--color-on-surface-secondary);
            margin: 0;
            font-size: var(--font-size-sm);
            font-weight: var(--font-weight-medium);
            letter-spacing: var(--letter-spacing-heading);
            text-transform: uppercase;
          }
          .booking-thq-booking-contact-options-elm {
            gap: var(--spacing-md) var(--spacing-xl);
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
          .booking-link1 {
            display: contents;
          }
          .booking-link2 {
            display: contents;
          }
          .booking-link3 {
            display: contents;
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
          @media (max-width: 767px) {
            .booking-thq-booking-contact-block-elm {
              padding: var(--spacing-sm) var(--spacing-md);
            }
            .booking-thq-booking-contact-options-elm {
              gap: var(--spacing-sm);
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Booking
