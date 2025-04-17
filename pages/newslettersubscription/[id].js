import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import newslettersubscriptionPageInitialPropsTq68Resource from '../../resources/newslettersubscription-page-initial-props-tq_68'
import newslettersubscriptionPageInitialPathsTqSResource from '../../resources/newslettersubscription-page-initial-paths-tq_s_'

const Newslettersubscription11 = (props) => {
  return (
    <>
      <div className="newslettersubscription11-container1">
        <Head>
          <title>Newslettersubscription1 - APE Experience</title>
          <meta
            property="og:title"
            content="Newslettersubscription1 - APE Experience"
          />
        </Head>
        <DataProvider
          renderSuccess={(NewslettersubscriptionEntity) => (
            <Fragment>
              <div className="newslettersubscription11-container2">
                <h1>{NewslettersubscriptionEntity?.name}</h1>
                <span>{NewslettersubscriptionEntity?.email}</span>
                <span>{NewslettersubscriptionEntity?.id}</span>
              </div>
            </Fragment>
          )}
          initialData={props.newslettersubscriptionEntity}
          persistDataDuringLoading={true}
          key={props?.newslettersubscriptionEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .newslettersubscription11-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .newslettersubscription11-container2 {
            gap: 12px;
            width: 100%;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Newslettersubscription11.defaultProps = {
  newslettersubscriptionEntity: [],
}

Newslettersubscription11.propTypes = {
  newslettersubscriptionEntity: PropTypes.array,
}

export default Newslettersubscription11

export async function getStaticProps(context) {
  try {
    const messages = (await import('/locales/' + context.locale + '.json'))
      .default
    const response = await newslettersubscriptionPageInitialPropsTq68Resource({
      ...context?.params,
      ...(context?.locale && {
        locale: context.locale,
      }),
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        messages,
        newslettersubscriptionEntity: response?.data?.[0],
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
    const response = await newslettersubscriptionPageInitialPathsTqSResource({
      content_type: 'newsletterSubscription',
      select: 'sys.id',
    })
    return {
      paths: (response?.data || []).map((item) => {
        return {
          params: {
            id: (item?.sys?.id).toString(),
          },
        }
      }),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}
