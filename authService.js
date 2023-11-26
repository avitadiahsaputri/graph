// authService.js
const cca = require('./msalConfig.js');

async function getAuthToken(code) {
    const tokenRequest = {
        code: code,
        scopes: ["User.Read"],
        redirectUri: "https://login.microsoftonline.com/common/",
    };
    // console.log(tokenRequest);



    try {
        const response = await cca.acquireTokenByCode(tokenRequest);
        console.log("masuk di file authService.js")
        // console.log(response)

        return response.accessToken;
    } catch (error) {
        console.error('Error getting token:', error);
        throw error;
    }
}
console.log("masuk di fle authService.js");

module.exports = { getAuthToken };
