import React from 'react'

import Script from '@/components/html-script'

const AddOns = (props) => {
  return (
    <>
      <div className="add-ons-container1">
        <section aria-labelledby="add-ons-title" className="add-ons-section">
          <div className="add-ons-container">
            <header className="add-ons-header">
              <div className="add-ons-badge">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    d="M15.98 1.804a1 1 0 0 0-1.96 0l-.24 1.192a1 1 0 0 1-.784.785l-1.192.238a1 1 0 0 0 0 1.962l1.192.238a1 1 0 0 1 .785.785l.238 1.192a1 1 0 0 0 1.962 0l.238-1.192a1 1 0 0 1 .785-.785l1.192-.238a1 1 0 0 0 0-1.962l-1.192-.238a1 1 0 0 1-.785-.785zm-9.031 3.88a1 1 0 0 0-1.898 0l-.683 2.051a1 1 0 0 1-.633.633l-2.051.683a1 1 0 0 0 0 1.898l2.051.684a1 1 0 0 1 .633.632l.683 2.051a1 1 0 0 0 1.898 0l.683-2.051a1 1 0 0 1 .633-.633l2.051-.683a1 1 0 0 0 0-1.898l-2.051-.683a1 1 0 0 1-.633-.633zm7 8a1 1 0 0 0-1.898 0l-.184.551a1 1 0 0 1-.632.633l-.551.183a1 1 0 0 0 0 1.898l.551.183a1 1 0 0 1 .633.633l.183.551a1 1 0 0 0 1.898 0l.184-.551a1 1 0 0 1 .632-.633l.551-.183a1 1 0 0 0 0-1.898l-.551-.184a1 1 0 0 1-.633-.632z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>Premium Upgrades</span>
              </div>
              <h2 id="add-ons-title" className="section-title">
                Service Add-Ons
              </h2>
              <p className="section-subtitle">
                Tailor your detailing experience with these specialized
                enhancements.
              </p>
            </header>
            <div className="add-ons-grid">
              <div className="add-ons-card add-ons-thq-add-ons-card-elm1">
                <div className="add-ons-card-content">
                  <span className="add-ons-name">
                    Ceramic Shield Sealant (3 months)
                  </span>
                  <span className="add-ons-price">$30</span>
                </div>
                <p className="add-ons-note add-ons-thq-add-ons-note-elm1">
                  Adds a protective layer that enhances shine and repels water,
                  dirt, and contaminants for up to 3 months.
                </p>
              </div>
              <div className="add-ons-card">
                <div className="add-ons-card-content">
                  <span className="add-ons-name">Pet hair removal</span>
                  <span className="add-ons-price">$20-40</span>
                </div>
                <p className="add-ons-note">
                  Thoroughly removes embedded pet hair from seats, carpets, and
                  upholstery.
                </p>
              </div>
              <div className="add-ons-card">
                <div className="add-ons-card-content">
                  <span className="add-ons-name">
                    Stain extraction (per seat)
                  </span>
                  <span className="add-ons-price">$15</span>
                </div>
                <p className="add-ons-note">
                  Deep cleans and lifts stains from fabric or leather seats.
                </p>
              </div>
              <div className="add-ons-card">
                <div className="add-ons-card-content">
                  <span className="add-ons-name">Floor mat shampoo</span>
                  <span className="add-ons-price">$10</span>
                </div>
                <p className="add-ons-note">
                  Scrubs and extracts dirt from floor mats, leaving them fresh
                  and clean.
                </p>
              </div>
              <div className="add-ons-card">
                <div className="add-ons-card-content">
                  <span className="add-ons-name">Full Decontamination</span>
                  <span className="add-ons-price">$70</span>
                </div>
                <p className="add-ons-note">
                  Removes embedded iron particles and contaminants from your
                  vehicle&apos;s paint.
                </p>
              </div>
              <div className="add-ons-card">
                <div className="add-ons-card-content">
                  <span className="add-ons-name">SiO2 Interior protection</span>
                  <span className="add-ons-price">$20</span>
                </div>
                <p className="add-ons-note">
                  Applies a protective coating to interior surfaces to guard
                  against UV damage and wear.
                </p>
              </div>
              <div className="add-ons-card">
                <div className="add-ons-card-content">
                  <span className="add-ons-name">Bug removal</span>
                  <span className="add-ons-price">$10</span>
                </div>
                <p className="add-ons-note">
                  Safely removes bug splatter and residue from exterior
                  surfaces.
                </p>
              </div>
              <div className="add-ons-card">
                <div className="add-ons-card-content">
                  <span className="add-ons-name">Rain repellent</span>
                  <span className="add-ons-price">$20</span>
                </div>
                <p className="add-ons-note">
                  Improves visibility by helping water bead and slide off glass
                  surfaces.
                </p>
              </div>
              <div className="add-ons-card">
                <div className="add-ons-card-content">
                  <span className="add-ons-name">Salt stain removal</span>
                  <span className="add-ons-price">$20</span>
                </div>
                <p className="add-ons-note">
                  Eliminates salt stains and residue from carpets and
                  upholstery.
                </p>
              </div>
            </div>
            <footer className="add-ons-footer">
              <p className="add-ons-disclaimer">
                Prices are subject to vehicle size and condition. Combine
                add-ons for the ultimate finish.
              </p>
            </footer>
          </div>
        </section>
        <div className="add-ons-container2">
          <div className="add-ons-container3">
            <Script
              html={`<script defer data-name="add-ons-interactions">
(function(){
  const addOnsCards = document.querySelectorAll(".add-ons-card")

  const revealOnScroll = () => {
    addOnsCards.forEach((card, index) => {
      const cardTop = card.getBoundingClientRect().top
      const triggerBottom = window.innerHeight * 0.9

      if (cardTop < triggerBottom) {
        card.style.opacity = "1"
        card.style.transform = "translateY(0)"
        card.style.transitionDelay = \`\${index * 50}ms\`
      }
    })
  }

  // Set initial state for cards
  addOnsCards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out"
  })

  window.addEventListener("scroll", revealOnScroll)
  revealOnScroll() // Run once on load
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .add-ons-container1 {
            display: contents;
          }
          .add-ons-container2 {
            display: none;
          }
          .add-ons-container3 {
            display: contents;
          }
          @media (max-width: 1600px) {
            .add-ons-thq-add-ons-note-elm1 {
              width: 346px;
            }
          }
          @media (max-width: 390px) {
            .add-ons-thq-add-ons-card-elm1 {
              width: 359px;
              margin-right: 0px;
            }
            .add-ons-thq-add-ons-note-elm1 {
              margin-right: 12px;
            }
          }
        `}
      </style>
    </>
  )
}

export default AddOns
