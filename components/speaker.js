import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Speaker = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className={`speaker-speaker ${props.rootClassName} `}>
        <img alt="image" src={props.image} className="speaker-image" />
        <div className="speaker-deails">
          <h3 className="speaker-name">
            {props.name1 ?? (
              <Fragment>
                <span className="speaker-text2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_X_7gJU'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h3>
          <div className="speaker-position">
            <div className="speaker-point"></div>
            <span className="speaker-caption">
              {props.detail1 ?? (
                <Fragment>
                  <span className="speaker-text1">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_6ELdve'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .speaker-speaker {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
          }
          .speaker-image {
            width: 100%;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .speaker-deails {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .speaker-name {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
          }
          .speaker-position {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .speaker-point {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-layout-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: var(--dl-color-gray-black);
          }
          .speaker-caption {
            font-size: 18px;
          }
          .speaker-text1 {
            display: inline-block;
          }
          .speaker-text2 {
            display: inline-block;
          }

          .speakerroot-class-name8 {
            max-width: 320px;
          }

          @media (max-width: 991px) {
            .speaker-name {
              font-size: 20px;
            }
            .speaker-point {
              margin-top: 4px;
            }
            .speaker-caption {
              font-size: 10px;
            }
          }
          @media (max-width: 767px) {
            .speaker-speaker {
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .speaker-name {
              font-size: 14px;
            }
            .speaker-point {
              max-width: 20px;
              margin-top: 0px;
            }
            .speaker-caption {
              font-size: 10px;
            }
          }
          @media (max-width: 479px) {
            .speaker-point {
              width: 100%;
              max-width: 20px;
            }
          }
        `}
      </style>
    </>
  )
}

Speaker.defaultProps = {
  detail1: undefined,
  name1: undefined,
  image: '/speakers-1-1500w.png',
  rootClassName: '',
}

Speaker.propTypes = {
  detail1: PropTypes.element,
  name1: PropTypes.element,
  image: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Speaker
