import React, { Fragment } from 'react'

import Script from '@/components/html-script'
import PropTypes from 'prop-types'

const Gallery9 = (props) => {
  return (
    <>
      <div className="gallery9-thq-gallery3-elm thq-section-padding">
        <div className="gallery9-thq-max-width-elm thq-section-max-width">
          <div className="gallery9-thq-section-title-elm">
            <h2 className="gallery9-thq-text-elm1 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="gallery9-text2">Gallery</span>
                </Fragment>
              )}
            </h2>
            <span className="gallery9-thq-text-elm2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="gallery9-text1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="gallery9-container1">
            <div className="gallery9-thq-content-elm">
              <div
                data-thq="slider"
                data-navigation="true"
                data-pagination="true"
                className="gallery9-thq-slider-elm swiper"
              >
                <div
                  data-thq="slider-wrapper"
                  className="gallery9-thq-slider-wrapper-elm swiper-wrapper"
                >
                  <div
                    data-thq="slider-slide"
                    className="gallery9-thq-slider-slide-elm1 swiper-slide"
                  >
                    <div className="gallery9-container2">
                      <img
                        sizes="(min-width: 768px) 800px, 480px"
                        src="/img_6211-600w.webp"
                        alt="Auto detailing showcase"
                        srcSet="/img_6211-600w.webp 800w, /img_6211-mobile.webp 480w"
                        className="gallery9-image"
                      />
                      <div>
                        <div className="gallery9-container4">
                          <Script
                            html={`<style>
@media (max-width: 479px) {
.thq-slider-elm {
  height: 440px;
}
}
</style>`}
                          ></Script>
                        </div>
                      </div>
                    </div>
                    <div className="gallery9-container5"></div>
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="gallery9-thq-slider-slide-elm2 swiper-slide"
                  >
                    <div className="gallery9-container6">
                      <img
                        alt={props.image3Alt}
                        src={props.image3Src}
                        className="gallery9-thq-image3-elm thq-img-ratio-4-3"
                      />
                    </div>
                    <div className="gallery9-container7">
                      <img
                        alt={props.image4Alt}
                        src={props.image4Src}
                        className="gallery9-thq-image4-elm thq-img-ratio-4-3"
                      />
                    </div>
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="gallery9-thq-slider-slide-elm3 swiper-slide"
                  >
                    <div className="gallery9-container8">
                      <img
                        alt={props.image5Alt}
                        src={props.image5Src}
                        className="gallery9-thq-image5-elm thq-img-ratio-4-3"
                      />
                    </div>
                    <div className="gallery9-container9">
                      <img
                        alt={props.image6Alt}
                        src={props.image6Src}
                        className="gallery9-thq-image6-elm thq-img-ratio-4-3"
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-thq="slider-button-prev"
                  className="swiper-button-prev"
                ></div>
                <div
                  data-thq="slider-button-next"
                  className="swiper-button-next"
                ></div>
                <div
                  data-thq="slider-pagination"
                  className="gallery9-thq-slider-pagination-elm swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
                >
                  <div
                    data-thq="slider-pagination-bullet"
                    className="swiper-pagination-bullet swiper-pagination-bullet-active"
                  ></div>
                  <div
                    data-thq="slider-pagination-bullet"
                    className="swiper-pagination-bullet"
                  ></div>
                  <div
                    data-thq="slider-pagination-bullet"
                    className="swiper-pagination-bullet"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .gallery9-thq-gallery3-elm {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .gallery9-thq-max-width-elm {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .gallery9-thq-section-title-elm {
            gap: 24px;
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery9-thq-text-elm1 {
            text-align: center;
          }
          .gallery9-thq-text-elm2 {
            text-align: center;
          }
          .gallery9-container1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .gallery9-thq-content-elm {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .gallery9-thq-slider-elm {
            width: 100%;
            height: 600px;
            display: inline-block;
          }
          .gallery9-thq-slider-wrapper-elm {
            width: 100%;
          }
          .gallery9-thq-slider-slide-elm1 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: calc(100% - 20px);
            display: flex;
          }
          .gallery9-container2 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery9-container4 {
            display: contents;
          }
          .gallery9-container5 {
            flex: 1;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery9-thq-slider-slide-elm2 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: calc(100% - 20px);
            display: flex;
          }
          .gallery9-container6 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery9-thq-image3-elm {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery9-container7 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery9-thq-image4-elm {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery9-thq-slider-slide-elm3 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: calc(100% - 20px);
            display: flex;
          }
          .gallery9-container8 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery9-thq-image5-elm {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery9-container9 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery9-thq-image6-elm {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery9-thq-slider-pagination-elm {
            display: block;
          }
          .gallery9-text1 {
            display: inline-block;
          }
          .gallery9-text2 {
            display: inline-block;
          }
          @media (max-width: 1200px) {
            .gallery9-image {
              width: 517px;
              height: 600px;
            }
          }
          @media (max-width: 991px) {
            .gallery9-thq-content-elm {
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .gallery9-thq-section-title-elm {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .gallery9-thq-slider-slide-elm1 {
              flex-direction: column;
            }
            .gallery9-container2 {
              height: calc(50% - 8px);
            }
            .gallery9-container5 {
              height: calc(50% - 8px);
            }
            .gallery9-thq-slider-slide-elm2 {
              flex-direction: column;
            }
            .gallery9-container6 {
              height: calc(50% - 8px);
            }
            .gallery9-container7 {
              height: calc(50% - 8px);
            }
            .gallery9-thq-slider-slide-elm3 {
              flex-direction: column;
            }
            .gallery9-container8 {
              height: calc(50% - 8px);
            }
            .gallery9-container9 {
              height: calc(50% - 8px);
            }
          }
          @media (max-width: 479px) {
            .gallery9-thq-slider-elm {
              height: 440px;
            }
          }
        `}
      </style>
    </>
  )
}

Gallery9.defaultProps = {
  image3Alt: 'Ceramic Shield Sealant',
  image6Alt: 'Mobile Car Detailing',
  image5Src:
    'https://images.unsplash.com/photo-1770775776141-6b3ac7ef9dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3NjE4MTMxM3w&ixlib=rb-4.1.0&q=80&w=1080',
  content1: undefined,
  image5Alt: 'Premium Detailing Services',
  image4Src:
    'https://images.unsplash.com/photo-1771371600769-051e03e354d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3NjE4MTMxM3w&ixlib=rb-4.1.0&q=80&w=1080',
  image6Src:
    'https://images.unsplash.com/photo-1763846403160-8fc2719f7985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3NjE4MTMxM3w&ixlib=rb-4.1.0&q=80&w=1080',
  image3Src:
    'https://images.unsplash.com/photo-1718681057614-f7a8e149026f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3NjE4MTMxNHw&ixlib=rb-4.1.0&q=80&w=1080',
  heading1: undefined,
  image4Alt: 'Pet Hair Removal',
}

Gallery9.propTypes = {
  image3Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  image5Src: PropTypes.string,
  content1: PropTypes.element,
  image5Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image6Src: PropTypes.string,
  image3Src: PropTypes.string,
  heading1: PropTypes.element,
  image4Alt: PropTypes.string,
}

export default Gallery9
