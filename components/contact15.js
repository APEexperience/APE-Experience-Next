import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Contact15 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`contact15-contact20 thq-section-padding ${props.rootClassName} `}
      >
        <div className="contact15-max-width thq-section-max-width">
          <div className="contact15-section-title">
            <div className="contact15-content1">
              <h2 className="thq-heading-2">
                {props.heading11 ?? (
                  <Fragment>
                    <span className="contact15-text29">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_4vn3U1'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="contact15-text11 thq-body-large">
                {props.content21 ?? (
                  <Fragment>
                    <span className="contact15-text22">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_JsKImX'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="contact15-row">
            <div className="contact15-content2">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <div className="contact15-contact-info1">
                <div className="contact15-content3">
                  <h3 className="contact15-text12 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_mGbWyq'),
                      }}
                    ></span>
                  </h3>
                  <p className="contact15-text13 thq-body-large">
                    {props.content31 ?? (
                      <Fragment>
                        <span className="contact15-text21">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_k-RVrG'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
                <a
                  href="mailto:info@ape-experience.com?subject=Detalles sobre un servicio"
                  className="contact15-email1 thq-body-small"
                >
                  {props.email11 ?? (
                    <Fragment>
                      <span className="contact15-text27">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_6NeElc'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </a>
              </div>
            </div>
            <div className="contact15-content4">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M768 342v-86h-512v86h512zM768 470v-86h-512v86h512zM768 598v-86h-512v86h512zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"></path>
              </svg>
              <div className="contact15-contact-info2">
                <div className="contact15-content5">
                  <h3 className="contact15-text14 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_7GTPlM'),
                      }}
                    ></span>
                  </h3>
                  <p className="contact15-text15 thq-body-large">
                    {props.content41 ?? (
                      <Fragment>
                        <span className="contact15-text24">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_XZXPwm'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
                <span className="contact15-email2 thq-body-small">
                  {props.link11 ?? (
                    <Fragment>
                      <span className="contact15-text23">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_YXynZ3'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="contact15-content6">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="contact15-icon5 thq-icon-medium"
              >
                <path d="M562.857 556.571c9.714 0 102.857 48.571 106.857 55.429 1.143 2.857 1.143 6.286 1.143 8.571 0 14.286-4.571 30.286-9.714 43.429-13.143 32-66.286 52.571-98.857 52.571-27.429 0-84-24-108.571-35.429-81.714-37.143-132.571-100.571-181.714-173.143-21.714-32-41.143-71.429-40.571-110.857v-4.571c1.143-37.714 14.857-64.571 42.286-90.286 8.571-8 17.714-12.571 29.714-12.571 6.857 0 13.714 1.714 21.143 1.714 15.429 0 18.286 4.571 24 19.429 4 9.714 33.143 87.429 33.143 93.143 0 21.714-39.429 46.286-39.429 59.429 0 2.857 1.143 5.714 2.857 8.571 12.571 26.857 36.571 57.714 58.286 78.286 26.286 25.143 54.286 41.714 86.286 57.714 4 2.286 8 4 12.571 4 17.143 0 45.714-55.429 60.571-55.429zM446.857 859.429c197.714 0 358.857-161.143 358.857-358.857s-161.143-358.857-358.857-358.857-358.857 161.143-358.857 358.857c0 75.429 24 149.143 68.571 210.286l-45.143 133.143 138.286-44c58.286 38.286 127.429 59.429 197.143 59.429zM446.857 69.714c237.714 0 430.857 193.143 430.857 430.857s-193.143 430.857-430.857 430.857c-72.571 0-144.571-18.286-208.571-53.714l-238.286 76.571 77.714-231.429c-40.571-66.857-61.714-144-61.714-222.286 0-237.714 193.143-430.857 430.857-430.857z"></path>
              </svg>
              <div className="contact15-contact-info3">
                <div className="contact15-content7">
                  <h3 className="contact15-text16 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_vwOpdF'),
                      }}
                    ></span>
                  </h3>
                  <p className="contact15-text17 thq-body-large">
                    {props.content51 ?? (
                      <Fragment>
                        <span className="contact15-text28">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_lL63DV'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
                <a
                  href="https://wa.me/c/584126930629"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact15-phone thq-body-small"
                >
                  {props.phone11 ?? (
                    <Fragment>
                      <span className="contact15-text26">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_97ece7'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </a>
              </div>
            </div>
            <div className="contact15-content8">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <div className="contact15-contact-info4">
                <div className="contact15-content9">
                  <h3 className="contact15-text18 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_vgt3Xr'),
                      }}
                    ></span>
                  </h3>
                  <p className="contact15-text19 thq-body-large">
                    {props.content61 ?? (
                      <Fragment>
                        <span className="contact15-text25">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_cLMxOh'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
                <span className="contact15-address thq-body-small">
                  {props.address11 ?? (
                    <Fragment>
                      <span className="contact15-text20">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_fTViGv'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact15-contact20 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .contact15-max-width {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact15-section-title {
            gap: var(--dl-layout-space-unit);
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact15-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact15-text11 {
            text-align: center;
          }
          .contact15-row {
            gap: 48px;
            flex: 1;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .contact15-content2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            flex-grow: 1;
            align-self: stretch;
            transition: 2s;
            align-items: center;
            flex-shrink: 0;
            border-radius: var(--dl-layout-radius-radius8);
            flex-direction: column;
            background-color: #f5f5f5;
          }
          .contact15-content2:hover {
            box-shadow: 0px 5px 10px 0px rgba(212, 212, 212, 0.5);
            background-color: #ffffff;
          }
          .contact15-contact-info1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact15-content3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact15-text12 {
            align-self: stretch;
            text-align: center;
          }
          .contact15-text13 {
            text-align: center;
          }
          .contact15-email1 {
            text-align: center;
            text-decoration: none;
          }
          .contact15-content4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            flex-grow: 1;
            align-self: stretch;
            transition: 2s;
            align-items: center;
            flex-shrink: 0;
            border-radius: var(--dl-layout-radius-radius8);
            flex-direction: column;
            background-color: #f5f5f5;
          }
          .contact15-content4:hover {
            box-shadow: 0px 5px 10px 0px rgba(212, 212, 212, 0.5);
            background-color: #ffffff;
          }
          .contact15-contact-info2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact15-content5 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact15-text14 {
            align-self: stretch;
            text-align: center;
          }
          .contact15-text15 {
            text-align: center;
          }
          .contact15-email2 {
            text-align: center;
          }
          .contact15-content6 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-self: stretch;
            transition: 2s;
            align-items: center;
            flex-shrink: 0;
            border-radius: var(--dl-layout-radius-radius8);
            flex-direction: column;
            background-color: #f5f5f5;
          }
          .contact15-content6:hover {
            box-shadow: 0px 5px 10px 0px rgba(212, 212, 212, 0.5);
            background-color: #ffffff;
          }
          .contact15-icon5 {
            width: 43px;
            height: 50px;
          }
          .contact15-contact-info3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact15-content7 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact15-text16 {
            align-self: stretch;
            text-align: center;
          }
          .contact15-text17 {
            text-align: center;
          }
          .contact15-phone {
            text-align: center;
            text-decoration: none;
          }
          .contact15-content8 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-self: stretch;
            transition: 2s;
            align-items: center;
            flex-shrink: 0;
            border-radius: var(--dl-layout-radius-radius8);
            flex-direction: column;
            background-color: #f5f5f5;
          }
          .contact15-content8:hover {
            box-shadow: 0px 5px 10px 0px rgba(212, 212, 212, 0.5);
            background-color: #ffffff;
          }
          .contact15-contact-info4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact15-content9 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact15-text18 {
            align-self: stretch;
            text-align: center;
          }
          .contact15-text19 {
            text-align: center;
          }
          .contact15-address {
            text-align: center;
          }
          .contact15-text20 {
            display: inline-block;
          }
          .contact15-text21 {
            display: inline-block;
          }
          .contact15-text22 {
            display: inline-block;
          }
          .contact15-text23 {
            display: inline-block;
          }
          .contact15-text24 {
            display: inline-block;
          }
          .contact15-text25 {
            display: inline-block;
          }
          .contact15-text26 {
            display: inline-block;
          }
          .contact15-text27 {
            display: inline-block;
          }
          .contact15-text28 {
            display: inline-block;
          }
          .contact15-text29 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .contact15root-class-name {
              align-self: stretch;
            }
          }
          @media (max-width: 767px) {
            .contact15-row {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Contact15.defaultProps = {
  rootClassName: '',
  address11: undefined,
  content31: undefined,
  content21: undefined,
  link11: undefined,
  content41: undefined,
  content61: undefined,
  phone11: undefined,
  email11: undefined,
  content51: undefined,
  heading11: undefined,
}

Contact15.propTypes = {
  rootClassName: PropTypes.string,
  address11: PropTypes.element,
  content31: PropTypes.element,
  content21: PropTypes.element,
  link11: PropTypes.element,
  content41: PropTypes.element,
  content61: PropTypes.element,
  phone11: PropTypes.element,
  email11: PropTypes.element,
  content51: PropTypes.element,
  heading11: PropTypes.element,
}

export default Contact15
