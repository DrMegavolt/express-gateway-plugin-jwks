const jwksRsa = require('jwks-rsa');
const jwt = require('express-jwt');

module.exports = pluginSettings => {
  return policyParams => {
    const settings = Object.assign({}, pluginSettings, policyParams);
    settings.secret = jwksRsa.expressJwtSecret(settings.jwksRsa);
    return jwt(settings)
  };
};