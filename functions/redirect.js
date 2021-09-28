exports.handler = async event => {
  // https://embroiderio.netlify.app/.netlify/functions/redirect
  
  const path = event.queryStringParameters || ''
  const referer = event.headers.referer || ''
  const userAgent = event.headers['user-agent'] || ''
  
  console.log('path: ', path);
  console.log('referer: ', referer);
  console.log('userAgent: ', userAgent);
  
  if (referer.includes('facebook')) {
    return {
      statusCode: 301,
      headers: {
        location: 'https://www.google.com/'
      }
    }
  } else {
    let pathName = location.pathname.split('/')[2].split('-')
    
    return {
      statusCode: 301,
      headers: {
        location: process.env.URL + pathName[0] + '/' + pathName[1]
      }
    }
  }
}
