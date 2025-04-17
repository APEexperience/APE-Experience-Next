import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ContactForm4 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`contact-form4-contact9 thq-section-padding ${props.rootClassName} `}
      >
        <div className="thq-flex-row thq-section-max-width contact-form4-max-width">
          <div className="contact-form4-content1 thq-flex-column">
            <div className="contact-form4-section-title thq-card">
              <div className="contact-form4-content2">
                <h2 className="thq-heading-2">
                  {props.heading11 ?? (
                    <Fragment>
                      <span className="contact-form4-text8">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_8N7MYw'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.content11 ?? (
                    <Fragment>
                      <span className="contact-form4-text7">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_B3W0nL'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <form className="thq-card">
              <div className="contact-form4-input1">
                <label htmlFor="contact-form-4-name" className="thq-body-small">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_g7Jf_2'),
                    }}
                  ></span>
                </label>
                <input
                  type="text"
                  id="contact-form-4-name"
                  placeholder="Nombre"
                  className="contact-form4-text-input1 thq-input"
                />
              </div>
              <div className="contact-form4-input2">
                <label
                  htmlFor="contact-form-4-email"
                  className="thq-body-small"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_H_UUjy'),
                    }}
                  ></span>
                </label>
                <input
                  type="email"
                  id="contact-form-4-email"
                  required="true"
                  placeholder="Correo"
                  className="contact-form4-text-input2 thq-input"
                />
              </div>
              <div className="contact-form4-container">
                <label
                  htmlFor="contact-form-4-message"
                  className="thq-body-small"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_e3eY1M'),
                    }}
                  ></span>
                </label>
                <textarea
                  id="contact-form-4-message"
                  rows="3"
                  placeholder="Escribe tu mensaje"
                  className="contact-form4-textarea thq-input"
                ></textarea>
              </div>
              <div className="contact-form4-checkbox1">
                <input
                  type="checkbox"
                  id="contact-form-4-check"
                  checked="true"
                  required="true"
                  className="thq-checkbox"
                />
                <label
                  htmlFor="contact-form-4-check"
                  className="contact-form4-text6 thq-body-small"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Ch208E'),
                    }}
                  ></span>
                </label>
              </div>
              <button
                type="submit"
                className="contact-form4-button thq-button-filled"
              >
                <span className="thq-body-small">
                  {props.action1 ?? (
                    <Fragment>
                      <span className="contact-form4-text9">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Un56Vc'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact-form4-contact9 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .contact-form4-content1 {
            gap: 0;
            flex: 1;
            align-items: stretch;
          }
          .contact-form4-section-title {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form4-content2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form4-input1 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            flex-direction: column;
          }
          .contact-form4-text-input1 {
            border-color: var(--dl-color-gray-700);
            border-width: 1px;
            border-radius: 0px;
            background-color: transparent;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 2px;
          }
          .contact-form4-input2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            flex-direction: column;
          }
          .contact-form4-text-input2 {
            border-color: var(--dl-color-gray-700);
            border-width: 1px;
            border-radius: 0px;
            background-color: transparent;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 2px;
          }
          .contact-form4-container {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .contact-form4-textarea {
            border-color: var(--dl-color-gray-700);
            border-width: 1px;
            border-radius: 0px;
            background-color: transparent;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 2px;
          }
          .contact-form4-checkbox1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
          }
          .contact-form4-text6 {
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .contact-form4-button {
            align-self: flex-start;
          }
          .contact-form4-text7 {
            display: inline-block;
          }
          .contact-form4-text8 {
            display: inline-block;
          }
          .contact-form4-text9 {
            display: inline-block;
          }
          .contact-form4root-class-name {
            background-color: #f5f5f5;
          }
          @media (max-width: 991px) {
            .contact-form4-max-width {
              flex-direction: column;
            }
            .contact-form4-content1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

ContactForm4.defaultProps = {
  content11: undefined,
  rootClassName: '',
  heading11: undefined,
  action1: undefined,
}

ContactForm4.propTypes = {
  content11: PropTypes.element,
  rootClassName: PropTypes.string,
  heading11: PropTypes.element,
  action1: PropTypes.element,
}

export default ContactForm4
