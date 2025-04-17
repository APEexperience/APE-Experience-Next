import { normalize } from '@teleporthq/cms-mappers/contentful'

export default async function (params = {}) {
  let urlParams = {
    ...(params['content_type'] && {
      content_type: params['content_type'],
    }),
    limit: 1,
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
      ...(params['content_type'] && {
        content_type: params['content_type'],
      }),
      limit: 1,
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
