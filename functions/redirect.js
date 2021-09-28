const fetch = require('node-fetch')

exports.handler = async event => {
  const path = event.path || ''
  const referer = event.headers.referer || ''
  const userAgent = (event.headers['user-agent'] || '').toLowerCase()
  const endpoint = 'https://embroiderio.com' + path

  console.log('path: ', path, '; referer: ', referer, '; userAgent: ', userAgent);
  
  if (referer.includes('facebook')) { // && userAgent.includes('android')
    return {
      statusCode: 301,
      headers: {
        location: endpoint
      }
    }
  }
  
  // userAgent.includes('facebookexternalhit')
  const response = await fetch(endpoint);
  const body = await response.text();
  
  return {
    statusCode: 200,
    body: body
  }
}
