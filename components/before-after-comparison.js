import React from 'react'

import Script from '@/components/html-script'
import PropTypes from 'prop-types'

const BeforeAfterComparison = (props) => {
  return (
    <>
      <div
        className={`before-after-comparison-container1 ${props.rootClassName} `}
      >
        <section className="before-after-comparison-before-after-comparison">
          <div className="before-after-comparison-container">
            <div className="before-after-comparison-header">
              <h2 className="section-title">Before &amp; After</h2>
              <div className="before-after-comparison-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                    <circle cx="4" cy="20" r="2"></circle>
                  </g>
                </svg>
              </div>
            </div>
            <div className="before-after-comparison-grid">
              <div className="before-after-comparison-item before-after-comparison-before">
                <div className="before-after-comparison-badge">
                  <span>BEFORE</span>
                </div>
                <div className="before-after-comparison-media">
                  <img
                    src="/images/before-wheel.png"
                    alt="Dirty car wheel before detailing"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="before-after-comparison-item before-after-comparison-after">
                <div className="before-after-comparison-badge before-after-comparison-badge-accent">
                  <span>AFTER</span>
                </div>
                <div className="before-after-comparison-media">
                  <img
                    src="/images/after-wheel.png"
                    alt="Shiny clean car wheel after detailing"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="before-after-comparison-container2">
          <div className="before-after-comparison-container3">
            <Script
              html={`<style>
@media (max-width: 479px) {
.before-after-comparison-header .section-title {
  font-size: var(--font-size-2xl);
}
.before-after-comparison-badge {
  top: var(--spacing-sm);
  left: var(--spacing-sm);
  font-size: 10px;
}
}
@media (prefers-reduced-motion: reduce) {
.before-after-comparison-item:hover {
  transform: none;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="before-after-comparison-container4">
          <div className="before-after-comparison-container5">
            <Script
              html={`<script defer data-name="before-after-reveal">
(function(){
  /**
   * Subtle entrance animation for the comparison items
   */
  const observerOptions = {
    threshold: 0.2,
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

  const items = document.querySelectorAll(".before-after-comparison-item")
  items.forEach((item, index) => {
    item.style.opacity = "0"
    item.style.transform = "translateY(20px)"
    item.style.transition = \`opacity 0.6s ease \${index * 0.2}s, transform 0.6s ease \${index * 0.2}s\`
    observer.observe(item)
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .before-after-comparison-container1 {
            display: contents;
          }
          .before-after-comparison-container2 {
            display: none;
          }
          .before-after-comparison-container3 {
            display: contents;
          }
          .before-after-comparison-container4 {
            display: none;
          }
          .before-after-comparison-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

BeforeAfterComparison.defaultProps = {
  rootClassName: '',
}

BeforeAfterComparison.propTypes = {
  rootClassName: PropTypes.string,
}

export default BeforeAfterComparison
