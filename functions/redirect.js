exports.handler = async (event, context) => {
  console.log(event, context);
  console.log(event.headers);
  // https://embroiderio.netlify.app/.netlify/functions/redirect
  
  if (event.headers.referer.includes('facebook')) {
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
