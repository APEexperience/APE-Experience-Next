import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const SectionNumeral = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="section-numeral-section-numeral">
        <div className="section-numeral-divide"></div>
        <p className="section-numeral-text1">
          {props.number1 ?? (
            <Fragment>
              <span className="section-numeral-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7McEyB'),
                  }}
                ></span>
              </span>
            </Fragment>
          )}
        </p>
      </div>
      <style jsx>
        {`
          .section-numeral-section-numeral {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .section-numeral-divide {
            width: 100px;
            height: 1px;
            display: flex;
            margin-top: 4px;
            align-items: center;
            flex-direction: row;
            background-color: var(--dl-color-gray-black);
          }
          .section-numeral-text2 {
            display: inline-block;
          }
          @media (max-width: 479px) {
            .section-numeral-divide {
              width: 20px;
            }
            .section-numeral-text1 {
              font-size: 16px;
              line-height: 24px;
            }
          }
        `}
      </style>
    </>
  )
}

SectionNumeral.defaultProps = {
  number1: undefined,
}

SectionNumeral.propTypes = {
  number1: PropTypes.element,
}

export default SectionNumeral
