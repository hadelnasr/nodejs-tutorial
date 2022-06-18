function encrypt(data)
{
    return "encrypted";
}

module.exports.send = function send(url, data)
{
    const encryptedData = encrypt(data);
    console.log(`sending: ${encryptedData} to ${url}`);
}