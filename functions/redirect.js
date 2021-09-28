function httpGet(url) {
  return new Promise((resolve, reject) => {
    const client = require('https');

    client.get(url, (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        resolve(data);
      });
    });
  });
}

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
  
  const response = await httpGet(endpoint)
  
  return {
    statusCode: 200,
    body: response
  }
}
