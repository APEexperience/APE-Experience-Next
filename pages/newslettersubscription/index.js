import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import newslettersubscriptionPageInitialPropsTqBRResource from '../../resources/newslettersubscription-page-initial-props-tq_b-r'

const Newslettersubscription = (props) => {
  return (
    <>
      <div className="newslettersubscription-container1">
        <Head>
          <title>Newslettersubscription - APE Experience</title>
          <meta
            property="og:title"
            content="Newslettersubscription - APE Experience"
          />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <Fragment>
              <div className="newslettersubscription-container2">
                <Repeater
                  items={params}
                  renderItem={(NewslettersubscriptionEntities) => (
                    <Fragment>
                      <div className="newslettersubscription-container3">
                        <h1>{NewslettersubscriptionEntities?.name}</h1>
                        <span>{NewslettersubscriptionEntities?.name}</span>
                        <span>{NewslettersubscriptionEntities?.email}</span>
                      </div>
                    </Fragment>
                  )}
                />
              </div>
            </Fragment>
          )}
          initialData={props.newslettersubscriptionEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .newslettersubscription-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .newslettersubscription-container2 {
            display: flex;
            flex-direction: column;
          }
          .newslettersubscription-container3 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Newslettersubscription.defaultProps = {
  newslettersubscriptionEntities: [],
}

Newslettersubscription.propTypes = {
  newslettersubscriptionEntities: PropTypes.array,
}

export default Newslettersubscription

export async function getStaticProps(context) {
  try {
    const messages = (await import('/locales/' + context.locale + '.json'))
      .default
    const response = await newslettersubscriptionPageInitialPropsTqBRResource({
      ...context?.params,
      ...(context?.locale && {
        locale: context.locale,
      }),
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        messages,
        newslettersubscriptionEntities: response,
        ...response?.meta,
      },
      revalidate: 60,
    }
  } catch (error) {
    console.log(error)
    return {
      notFound: true,
    }
  }
}
