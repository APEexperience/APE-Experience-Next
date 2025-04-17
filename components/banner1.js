import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Banner1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`banner1-container1 thq-section-padding ${props.rootClassName} `}
      >
        <div className="banner1-max-width thq-section-max-width">
          <div className="banner1-container2">
            <h2 className="banner1-title thq-heading-2">
              {props.heading11 ?? (
                <Fragment>
                  <span className="banner1-text">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_iq_Rnh'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .banner1-container1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            position: relative;
            align-items: center;
          }
          .banner1-max-width {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner1-container2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner1-title {
            text-align: center;
          }
          .banner1-text {
            display: inline-block;
          }
          @media (max-width: 1440px) {
            .banner1-container1 {
              padding: 0px;
            }
            .banner1-max-width {
              width: auto;
              padding: var(--dl-layout-space-twounits);
              border-radius: var(--dl-layout-radius-radius2);
              background-color: #f18c0d;
            }
            .banner1-title {
              color: #ffffff;
              font-family: Source Sans Pro;
            }
          }
        `}
      </style>
    </>
  )
}

Banner1.defaultProps = {
  heading11: undefined,
  rootClassName: '',
}

Banner1.propTypes = {
  heading11: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Banner1
