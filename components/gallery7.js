import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Gallery7 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="gallery7-gallery3 thq-section-padding">
        <div className="gallery7-max-width">
          <div className="gallery7-section-title">
            <h2 className="gallery7-text1 thq-heading-2">
              {props.heading11 ?? (
                <Fragment>
                  <span className="gallery7-text4">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Z4b5yA'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="gallery7-text2 thq-body-large">
              {props.content11 ?? (
                <Fragment>
                  <span className="gallery7-text3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_8A5V_g'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="gallery7-container1">
            <div className="gallery7-content">
              <div className="gallery7-container2">
                <img
                  alt={props.image1Alt}
                  src={props.image1Src}
                  className="gallery7-image1 thq-img-ratio-1-1"
                />
                <img
                  alt={props.image2Alt}
                  src={props.image2Src}
                  className="gallery7-image2 thq-img-ratio-1-1"
                />
              </div>
              <div className="gallery7-container3">
                <img
                  alt={props.image3Alt}
                  src={props.image3Src}
                  className="gallery7-image3 thq-img-ratio-4-3"
                />
                <img
                  alt={props.image4Alt}
                  src={props.image4Src}
                  className="gallery7-image4 thq-img-ratio-1-1"
                />
                <img
                  alt={props.image5Alt}
                  src={props.image5Src}
                  className="gallery7-image5 thq-img-ratio-4-3"
                />
              </div>
              <div className="gallery7-container4">
                <img
                  alt={props.image6Alt}
                  src={props.image6Src}
                  className="gallery7-image6 thq-img-ratio-1-1"
                />
                <img
                  alt={props.image7Alt}
                  src={props.image7Src}
                  className="gallery7-image7 thq-img-ratio-1-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .gallery7-gallery3 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery7-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .gallery7-section-title {
            gap: 24px;
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery7-text1 {
            text-align: center;
          }
          .gallery7-text2 {
            text-align: center;
          }
          .gallery7-container1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .gallery7-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .gallery7-container2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery7-image1 {
            width: 100%;
            height: 440px;
            object-fit: cover;
          }
          .gallery7-image2 {
            width: 100%;
            height: 440px;
            object-fit: cover;
          }
          .gallery7-container3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery7-image3 {
            width: 100%;
            height: 240px;
            object-fit: cover;
          }
          .gallery7-image4 {
            width: 100%;
            height: 440px;
            object-fit: cover;
          }
          .gallery7-image5 {
            width: 100%;
            height: 240px;
            object-fit: cover;
          }
          .gallery7-container4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery7-image6 {
            width: 100%;
            height: 440px;
            object-fit: cover;
          }
          .gallery7-image7 {
            width: 100%;
            height: 440px;
            object-fit: cover;
          }
          .gallery7-text3 {
            display: inline-block;
          }
          .gallery7-text4 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .gallery7-content {
              align-items: center;
              flex-direction: column;
            }
            .gallery7-container2 {
              width: 100%;
            }
            .gallery7-image1 {
              flex: 0 0 auto;
              width: 100%;
            }
            .gallery7-container3 {
              width: 100%;
            }
            .gallery7-container4 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .gallery7-section-title {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Gallery7.defaultProps = {
  image3Alt: 'image',
  image6Alt: 'image',
  image7Src:
    'https://images.unsplash.com/photo-1564089957880-517edea1afc5?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDc0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA5Mjg2MTV8MA&ixlib=rb-4.0.3&w=1500',
  image4Alt: 'image',
  content11: undefined,
  image1Alt: 'PlaceholderImage1302',
  heading11: undefined,
  image4Src:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image3Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image6Src:
    'https://images.unsplash.com/photo-1617140237060-d09a58ba8edd?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDgzfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA5Mjg2MTV8MA&ixlib=rb-4.0.3&w=1500',
  image1Src:
    'https://images.unsplash.com/photo-1561212044-bac5ef688a07?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image2Src:
    'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFic3RyYWN0fGVufDB8fHx8MTcxMjc0NTExMHww&ixlib=rb-4.0.3&w=1500',
  image5Src:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMjc0NTExMHww&ixlib=rb-4.0.3&w=1500',
  image5Alt: 'image5',
  image7Alt: 'image',
  image2Alt: 'image6',
}

Gallery7.propTypes = {
  image3Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image4Alt: PropTypes.string,
  content11: PropTypes.element,
  image1Alt: PropTypes.string,
  heading11: PropTypes.element,
  image4Src: PropTypes.string,
  image3Src: PropTypes.string,
  image6Src: PropTypes.string,
  image1Src: PropTypes.string,
  image2Src: PropTypes.string,
  image5Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image7Alt: PropTypes.string,
  image2Alt: PropTypes.string,
}

export default Gallery7
