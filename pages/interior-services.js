import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from '@/components/html-script'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const InteriorServices = (props) => {
  return (
    <>
      <div className="interior-services-container1">
        <Head>
          <title>
            Interior-Services - GoShine Detailing: Mobile Car Detailing in
            Richmond Hill
          </title>
          <meta
            name="description"
            content="Professional mobile interior and exterior car detailing services in the Richmond Hill area. Detailing for all vehicles. Book your service today."
          />
          <meta
            property="og:title"
            content="Interior-Services - GoShine Detailing: Mobile Car Detailing in Richmond Hill"
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
            href="https://merry-concrete-chinchilla-8tjyge.teleporthq.site/interior-services"
          />
          <meta
            property="og:url"
            content="https://merry-concrete-chinchilla-8tjyge.teleporthq.site/interior-services"
          />
        </Head>
        <Navigation></Navigation>
        <section className="interior-hero">
          <div className="interior-hero__bg">
            <img
              alt="Luxury car interior with white leather"
              src="https://images.pexels.com/photos/5213023/pexels-photo-5213023.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="interior-hero__image"
            />
            <div className="interior-hero__overlay"></div>
          </div>
          <div className="interior-hero__content">
            <h1 className="hero-title">Interior Services</h1>
            <p className="hero-subtitle">
              Professional mobile interior detailing that restores your
              vehicle&apos;s cabin to a showroom finish. We bring premium care
              directly to your location in Richmond Hill, Vaughan, and
              Thornhill.
            </p>
          </div>
        </section>
        <section className="interior-packages">
          <div className="interior-packages__container">
            <div className="interior-packages__grid">
              <article className="service-card--express interior-services-service-card">
                <div className="service-card__header">
                  <div className="service-card__icon-box">
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
                  <h2 className="section-title">
                    Express Interior Clean — Starting at $60
                  </h2>
                </div>
                <div className="service-card__body">
                  <ul className="service-card__list">
                    <li className="service-card__item">
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
                      <span className="section-content">
                        Complete Interior Vacuum: Floors, seats, and rear cargo
                        area
                      </span>
                    </li>
                    <li className="service-card__item">
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
                      <span className="section-content">
                        Surface Wipe-Down: Dashboard, center console, door
                        panels
                      </span>
                    </li>
                    <li className="service-card__item">
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
                      <span className="section-content">
                        Door Jamb Refresh: Quick wipe-down
                      </span>
                    </li>
                    <li className="service-card__item">
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
                      <span className="section-content">
                        Rubber Mat Wash: Rinsing and cleaning of all-weather
                        mats
                      </span>
                    </li>
                    <li className="service-card__item">
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
                      <span className="section-content">
                        Light Spot Cleaning: Surface-level scuffs 
                      </span>
                    </li>
                    <li className="service-card__item">
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
                      <span className="section-content">
                        Streak-Free Glass: Interior windows and mirrors
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="service-card__footer">
                  <p className="service-card__pricing">
                    Pricing: Sedans $60, SUVs $70, Trucks/Large SUVs/Minivans
                    $80
                  </p>
                </div>
              </article>
              <article className="service-card--premium interior-services-service-card">
                <div className="service-card__header">
                  <div className="service-card__icon-box--gold service-card__icon-box">
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
                        <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                        <circle r="2" cx="4" cy="20"></circle>
                      </g>
                    </svg>
                  </div>
                  <h2 className="section-title">
                    Premium Interior Clean — Starting at $100
                  </h2>
                </div>
                <div className="service-card__body">
                  <ul className="service-card__list">
                    <li className="service-card__item">
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
                      <span className="section-content">
                        <span>
                          Deep Carpet &amp; Mat Scrub: Intensive scrub to lift
                          and remove deep-seated dirt for a refreshed finish.
                        </span>
                        <br></br>
                      </span>
                    </li>
                    <li className="service-card__item">
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
                      <span className="section-content">
                        Precision Surface Cleaning: Detailed hand-cleaning of
                        dash, console, vents, cup holders
                      </span>
                    </li>
                    <li className="service-card__item">
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
                      <span className="section-content">
                        Door &amp; Trunk Jambs: Degreasing and hand-wiping
                      </span>
                    </li>
                    <li className="service-card__item">
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
                      <span className="section-content">
                        3-Month Protective Finish: Premium UV-shielding dressing
                        with anti-microbial properties
                      </span>
                    </li>
                    <li className="service-card__item">
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
                      <span className="section-content">
                        Crystal Clear Glass: Streak-free finish on all interior
                        and exterior windows
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="service-card__footer">
                  <p className="service-card__pricing">
                    Pricing: Sedans $100, SUVs $120, Trucks/Large SUVs/Minivans
                    $130
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="booking-cta">
          <div className="booking-cta__container">
            <div className="booking-cta__card">
              <h2 className="section-title">Ready for a Showroom Interior?</h2>
              <p className="section-content">
                Experience the GoShine difference. We bring luxury detailing to
                your driveway.
              </p>
              <div className="booking-cta__actions">
                <Link href="/booking">

                  <div className="btn btn-xl btn-secondary">
                    <span>Book Interior Service</span>
                  </div>

                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="interior-services-container2">
          <div className="interior-services-container3">
            <Script
              html={`<script defer data-name="interior-animations">
(function(){
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        revealObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  const animateElements = () => {
    const cards = document.querySelectorAll(".service-card")
    cards.forEach((card, index) => {
      card.style.opacity = "0"
      card.style.transform = "translateY(30px)"
      card.style.transition = \`all 0.6s ease-out \${index * 0.15}s\`
      revealObserver.observe(card)
    })

    const ctaCard = document.querySelector(".booking-cta__card")
    if (ctaCard) {
      ctaCard.style.opacity = "0"
      ctaCard.style.transform = "scale(0.95)"
      ctaCard.style.transition = "all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)"

      const ctaObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            ctaCard.style.opacity = "1"
            ctaCard.style.transform = "scale(1)"
          }
        },
        { threshold: 0.2 }
      )

      ctaObserver.observe(ctaCard)
    }
  }

  animateElements()
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .interior-services-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .interior-services-container2 {
            display: none;
          }
          .interior-services-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  );
}

export default InteriorServices
