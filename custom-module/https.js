const request = require('./request')
const response = require('./response')

function requestMethod(url, data)
{
    request.send(url, data);
    return response.read();
}

const data = requestMethod('http://google.com', 'data to send');
console.log(data);