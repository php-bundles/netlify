exports.handler = async event => {
  const path = event.path || ''
  const referer = event.headers.referer || ''
  const userAgent = (event.headers['user-agent'] || '').toLowerCase()

  console.log('path: ', path, '; referer: ', referer, '; userAgent: ', userAgent);

  // https://embroiderio.netlify.app/category/korysno/
  
  if (userAgent.includes('facebookexternalhit')) {
  
  } else if (referer.includes('facebook') && userAgent.includes('android')) {
    return {
      statusCode: 301,
      headers: {
        location: 'https://embroiderio.com' + path
      }
    }
  } else {
    return {
      statusCode: 301,
      headers: {
        location: 'https://embroiderio.com' + path
      }
    }
  }
}
