import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const NotFound4 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`not-found4-container1 thq-section-padding ${props.rootClassName} `}
      >
        <div className="not-found4-max-width thq-section-max-width">
          <div className="not-found4-container2">
            <div className="not-found4-container3">
              <h2 className="not-found4-text1 thq-heading-2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nb3z3r'),
                  }}
                ></span>
              </h2>
              <p className="not-found4-text2 thq-body-large">
                {props.content11 ?? (
                  <Fragment>
                    <span className="not-found4-text4">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_MS3yDz'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
              <Link href="/">
                <a className="not-found4-link thq-button-filled">
                  <span className="thq-body-small">
                    {props.action11 ?? (
                      <Fragment>
                        <span className="not-found4-text5">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_hK5pOF'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className="not-found4-container4">
            <h1 className="not-found4-text3 thq-heading-1">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_3CS6pd'),
                }}
              ></span>
            </h1>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .not-found4-container1 {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .not-found4-max-width {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .not-found4-container2 {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .not-found4-container3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .not-found4-text1 {
            text-align: center;
          }
          .not-found4-text2 {
            text-align: center;
          }
          .not-found4-link {
            text-decoration: none;
          }
          .not-found4-container4 {
            flex: 1;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .not-found4-text3 {
            fill: var(--dl-color-gray-900);
            color: var(--dl-color-gray-900);
            font-size: 480px;
          }
          .not-found4-text4 {
            display: inline-block;
          }
          .not-found4-text5 {
            display: inline-block;
          }
          .not-found4root-class-name {
            flex: 1;
            height: 100%;
          }
          @media (max-width: 767px) {
            .not-found4-container1 {
              padding-left: var(--dl-layout-space-threeunits);
              padding-right: var(--dl-layout-space-threeunits);
              flex-direction: column;
            }
            .not-found4-max-width {
              flex-direction: column;
            }
            .not-found4-container2 {
              width: 100%;
              align-items: center;
            }
            .not-found4-container3 {
              align-items: center;
            }
            .not-found4-text2 {
              text-align: center;
            }
            .not-found4-container4 {
              width: 100%;
              align-items: center;
            }
          }
          @media (max-width: 479px) {
            .not-found4-container1 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

NotFound4.defaultProps = {
  content11: undefined,
  action11: undefined,
  rootClassName: '',
}

NotFound4.propTypes = {
  content11: PropTypes.element,
  action11: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default NotFound4
