exports.handler = async event => {
  const path = event.queryStringParameters.url || ''
  const referer = event.headers.referer || ''
  const userAgent = (event.headers['user-agent'] || '').toLowerCase()
  
  console.log('path: ', path, '; referer: ', referer, '; userAgent: ', userAgent);

  if (referer.includes('facebook') && userAgent.includes('android')) {
    return {
      statusCode: 301,
      headers: {
        location: process.env.URL + path
      }
    }
  } else {
    return {
      statusCode: 301,
      headers: {
        location: process.env.URL + path
      }
    }
  }
}
