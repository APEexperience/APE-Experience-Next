import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import NotFound4 from '../components/not-found4'

const NotFound = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="not-found-container">
        <Head>
          <title>Not-Found - APE Experience</title>
          <meta property="og:title" content="Not-Found - APE Experience" />
        </Head>
        <NotFound4
          action11={
            <Fragment>
              <span className="not-found-text1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4lsb1O'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content11={
            <Fragment>
              <span className="not-found-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_YaMJWJ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="not-found4root-class-name"
        ></NotFound4>
      </div>
      <style jsx>
        {`
          .not-found-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .not-found-text1 {
            display: inline-block;
          }
          .not-found-text2 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default NotFound

export async function getStaticProps(context) {
  const messages = (await import('/locales/' + context.locale + '.json'))
    .default
  return {
    props: {
      messages,
      ...context,
    },
  }
}
