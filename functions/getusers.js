const axios = require('axios');

exports.handler = function(event, context, callback) {
  // const { name } = JSON.parse(event.body)

  // callback(null, {
  //   statusCode: 200,
  //   body: JSON.stringify({ msg: 'Hello ' + name} )
  // })

  // ?client_id=fc68dbe7761df8c256e6&client_secret=4fa334ab816f7d44fc19e9af27d3d02ca2457740
  const { API_URL, API_CLIENT_ID, API_CLIENT_SECRET } = process.env;
  // const API_URL = 'https://api.github.com/users';
  // const API_CLIENT_ID = 'fc68dbe7761df8c256e6';
  // const API_CLIENT_SECRET = '4fa334ab816f7d44fc19e9af27d3d02ca2457740';

  const URL = `${API_URL}?client_id=${API_CLIENT_ID}&client_secret=${API_CLIENT_SECRET}`;

  // Sent user response
  const send = body => {
    callback(null, {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 
          'Origin, X-Requested-With, COntent-type, Accept'
      },
      body: JSON.stringify(body)
    })
  }

  // Perform API call
  const getUsers = () => {
    axios.get(URL)
      .then(res => send(res.data))
      .catch(err => send(err))
  }

  // Make sure method is GET
  if(event.httpMethod === 'GET') {
    getUsers();
  }
}