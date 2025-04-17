import { normalize } from '@teleporthq/cms-mappers/contentful'

export default async function (params = {}) {
  let urlParams = {
    content_type: 'newsletterSubscription',
    ...(params['locale'] && {
      locale: params['locale'],
    }),
    limit: 10,
    ...(params['skip'] && {
      skip: params['skip'],
    }),
  }
  let data = await fetch(
    `${process.env.CMS_URL}/entries?${new URLSearchParams(urlParams)}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.CMS_ACCESS_TOKEN}`,
      },
    }
  )
  if (data.status !== 200) {
    urlParams = {
      content_type: 'newsletterSubscription',
      limit: 10,
      ...(params['skip'] && {
        skip: params['skip'],
      }),
    }
    data = await fetch(
      `${process.env.CMS_URL}/entries?${new URLSearchParams(urlParams)}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.CMS_ACCESS_TOKEN}`,
        },
      }
    )
  }
  const response = await data.json()
  return normalize(response)
}
