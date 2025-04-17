import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import newslettersubscriptionPageInitialPropsTqUyResource from '../../../resources/newslettersubscription-page-initial-props-tq_uy'
import newslettersubscriptionPageInitialPathsTqK9Resource from '../../../resources/newslettersubscription-page-initial-paths-tq_k9'

const Newslettersubscription1 = (props) => {
  return (
    <>
      <div className="newslettersubscription1-container1">
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
              <div className="newslettersubscription1-container2">
                <Repeater
                  items={params}
                  renderItem={(NewslettersubscriptionEntities) => (
                    <Fragment>
                      <div className="newslettersubscription1-container3">
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
          .newslettersubscription1-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .newslettersubscription1-container2 {
            display: flex;
            flex-direction: column;
          }
          .newslettersubscription1-container3 {
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

Newslettersubscription1.defaultProps = {
  newslettersubscriptionEntities: [],
}

Newslettersubscription1.propTypes = {
  newslettersubscriptionEntities: PropTypes.array,
}

export default Newslettersubscription1

export async function getStaticProps(context) {
  try {
    const messages = (await import('/locales/' + context.locale + '.json'))
      .default
    const response = await newslettersubscriptionPageInitialPropsTqUyResource({
      ...context?.params,
      ...(context?.locale && {
        locale: context.locale,
      }),
      skip: (context.params.page - 1) * 10,
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

export async function getStaticPaths() {
  try {
    const response = await newslettersubscriptionPageInitialPathsTqK9Resource({
      content_type: 'newsletterSubscription',
    })
    const totalCount = response?.meta?.pagination?.total
    const pagesCount = Math.ceil(totalCount / 10)
    return {
      paths: Array.from(
        {
          length: pagesCount,
        },
        (_, i) => ({
          params: {
            page: (i + 1).toString(),
          },
        })
      ),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}
