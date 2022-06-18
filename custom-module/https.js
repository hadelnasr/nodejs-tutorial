const {request, response} = require('./internals');

// const {send} = require('./request')
// const {read} = require('./response')

function requestMethod(url, data)
{
    request.send(url, data);
    return response.read();
}

const data = requestMethod('http://google.com', 'data to send');
console.log(data);
